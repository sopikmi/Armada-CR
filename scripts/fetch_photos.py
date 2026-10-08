#!/usr/bin/env python3
"""Fotky z Wikimedia Commons pro stránku Armáda ČR.

Režim "foto" (výchozí): podle foto/queries.json stáhne fotky do foto/ a zapíše
databázi foto/index.json (autor, licence, zdroj). Položka může mít
  - "files": přesný seznam souborů na Commons (ručně vybrané, preferováno), nebo
  - "query" (+ "limit", "exclude"): automatické hledání.
Stejný soubor ani téměř stejný obrázek (perceptuální hash) se nepoužije dvakrát.

Režim "kandidati": podle foto/candidates.json stáhne malé náhledy do _kandidati/
a zapíše _kandidati/index.json – slouží jen k ručnímu výběru, na webu se nepoužívá.

Bere jen soubory s volnou licencí (CC BY, CC BY-SA, CC0, public domain).
    python3 scripts/fetch_photos.py            # foto
    python3 scripts/fetch_photos.py kandidati  # kandidáti
"""
import html
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FOTO = ROOT / "foto"
KAND = ROOT / "_kandidati"
API = "https://commons.wikimedia.org/w/api.php"
UA = "Armada-CR-site/1.1 (https://github.com/sopikmi/Armada-CR; sopikmi@gmail.com)"
ALLOWED = re.compile(r"^(cc[- ]by|cc[- ]by[- ]sa|cc0|public domain|pd)", re.I)

try:
    from PIL import Image
except ImportError:  # dedupe podle obsahu jen když je Pillow
    Image = None


def get(url, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
                return data if binary else json.loads(data)
        except Exception as e:  # noqa: BLE001
            if attempt == 3:
                raise
            time.sleep(3 * (attempt + 1))
            print(f"  opakuji ({e})", file=sys.stderr)


def clean(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return html.unescape(re.sub(r"\s+", " ", s)).strip()


def record(p):
    ii = (p.get("imageinfo") or [{}])[0]
    meta = ii.get("extmetadata", {})
    lic = clean(meta.get("LicenseShortName", {}).get("value", ""))
    return {
        "title": p["title"].removeprefix("File:"),
        "thumb": ii.get("thumburl") or ii.get("url"),
        "source": ii.get("descriptionurl"),
        "author": clean(meta.get("Artist", {}).get("value", "")) or "neuveden",
        "license": lic,
        "licenseUrl": clean(meta.get("LicenseUrl", {}).get("value", "")),
        "description": clean(meta.get("ImageDescription", {}).get("value", ""))[:300],
        "date": clean(meta.get("DateTimeOriginal", {}).get("value", ""))[:40],
        "_ok": bool(ALLOWED.match(lic)) and ii.get("mime") in ("image/jpeg", "image/png"),
        "_w": ii.get("width", 0),
    }


def query(params, width):
    base = {"action": "query", "format": "json", "prop": "imageinfo",
            "iiprop": "url|extmetadata|size|mime", "iiurlwidth": width}
    data = get(API + "?" + urllib.parse.urlencode({**base, **params}))
    return sorted(data.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99))


def search(q, n, width, min_w=800):
    pages = query({"generator": "search", "gsrsearch": f"{q} filetype:bitmap",
                   "gsrnamespace": 6, "gsrlimit": min(max(n * 3, 10), 50)}, width)
    return [r for r in map(record, pages) if r["_ok"] and r["_w"] >= min_w]


def by_titles(titles, width):
    out = []
    for i in range(0, len(titles), 20):
        chunk = titles[i:i + 20]
        pages = query({"titles": "|".join("File:" + t for t in chunk)}, width)
        found = {r["title"]: r for r in map(record, pages)}
        for t in chunk:
            r = found.get(t)
            if not r or not r["thumb"]:
                print(f"  ! soubor nenalezen: {t}", file=sys.stderr)
            elif not r["_ok"]:
                print(f"  ! nevhodná licence ({r['license']}): {t}", file=sys.stderr)
            else:
                out.append(r)
    return out


def ahash(data):
    if not Image:
        return None
    im = Image.open(io.BytesIO(data)).convert("L").resize((16, 16))
    px = list(im.getdata())
    avg = sum(px) / len(px)
    return int("".join("1" if v > avg else "0" for v in px), 2)


def similar(h, hashes, limit=30):
    return h is not None and any(bin(h ^ o).count("1") <= limit for o in hashes)


def clean_rec(r):
    return {k: v for k, v in r.items() if not k.startswith("_")}


def run_foto():
    cfg = json.loads((FOTO / "queries.json").read_text(encoding="utf-8"))
    db, keep, used, hashes = [], set(), set(), []
    for item in cfg["items"]:
        key = item["key"]
        try:
            if item.get("files"):
                print(f"[{key}] {len(item['files'])} vybraných souborů")
                cands = by_titles(item["files"], 1280)
                want = len(cands)
            else:
                print(f"[{key}] hledání: {item['query']}")
                ex = [x.lower() for x in item.get("exclude", [])]
                cands = [c for c in search(item["query"], item.get("limit", 2), 1280)
                         if not any(x in c["title"].lower() for x in ex)]
                want = item.get("limit", 2)
        except Exception as e:  # noqa: BLE001
            print(f"  chyba: {e}", file=sys.stderr)
            continue
        n = 0
        for c in cands:
            if n >= want:
                break
            if c["title"] in used:
                print(f"  – přeskočeno (už použito): {c['title']}")
                continue
            try:
                data = get(c["thumb"], binary=True)
            except Exception as e:  # noqa: BLE001
                print(f"  chyba stahování {c['title']}: {e}", file=sys.stderr)
                continue
            h = ahash(data)
            if similar(h, hashes):
                print(f"  – přeskočeno (téměř stejná fotka): {c['title']}")
                continue
            n += 1
            ext = ".png" if c["thumb"].lower().endswith(".png") else ".jpg"
            name = f"{key}-{n}{ext}"
            (FOTO / name).write_bytes(data)
            keep.add(name)
            used.add(c["title"])
            if h is not None:
                hashes.append(h)
            db.append({"key": key, "group": item["group"], "label": item["label"], "file": name,
                       **({"note": item["note"]} if item.get("note") else {}), **clean_rec(c)})
            print(f"  ✓ {name}  {c['title']} ({c['license']})")
            time.sleep(0.3)
    for f in FOTO.iterdir():
        if f.suffix in (".jpg", ".png") and f.name not in keep:
            f.unlink()
    (FOTO / "index.json").write_text(
        json.dumps({"generated": time.strftime("%Y-%m-%d"), "source": "Wikimedia Commons", "photos": db},
                   ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"Hotovo: {len(db)} fotek")


def run_kandidati():
    cfg = json.loads((FOTO / "candidates.json").read_text(encoding="utf-8"))
    KAND.mkdir(exist_ok=True)
    for f in KAND.iterdir():
        f.unlink()
    out, seen = [], set()
    for item in cfg["items"]:
        for q in item["queries"]:
            print(f"[{item['key']}] {q}")
            try:
                res = search(q, item.get("limit", 12), 400, min_w=1000)
            except Exception as e:  # noqa: BLE001
                print(f"  chyba: {e}", file=sys.stderr)
                continue
            for r in res[: item.get("limit", 12)]:
                if r["title"] in seen:
                    continue
                seen.add(r["title"])
                name = f"{item['key']}-{len([o for o in out if o['key'] == item['key']]) + 1:02d}.jpg"
                try:
                    (KAND / name).write_bytes(get(r["thumb"], binary=True))
                except Exception as e:  # noqa: BLE001
                    print(f"  chyba: {e}", file=sys.stderr)
                    continue
                out.append({"key": item["key"], "file": name, "title": r["title"], "license": r["license"],
                            "description": r["description"][:160]})
                time.sleep(0.2)
    (KAND / "index.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"Kandidátů: {len(out)}")


if __name__ == "__main__":
    run_kandidati() if (sys.argv[1:] or [""])[0] == "kandidati" else run_foto()
