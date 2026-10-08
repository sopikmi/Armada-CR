#!/usr/bin/env python3
"""Stáhne fotky z Wikimedia Commons podle foto/queries.json do složky foto/
a zapíše databázi foto/index.json (autor, licence, zdroj).

Bere jen soubory s volnou licencí (CC BY, CC BY-SA, CC0, public domain).
Spouští se v GitHub Actions (.github/workflows/fetch-photos.yml) nebo lokálně:
    python3 scripts/fetch_photos.py
"""
import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FOTO = ROOT / "foto"
API = "https://commons.wikimedia.org/w/api.php"
UA = "Armada-CR-site/1.0 (https://github.com/sopikmi/Armada-CR; sopikmi@gmail.com)"
WIDTH = 1280
ALLOWED = re.compile(r"^(cc[- ]by|cc[- ]by[- ]sa|cc0|public domain|pd)", re.I)


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


def search(query, limit):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f"{query} filetype:bitmap", "gsrnamespace": 6,
        "gsrlimit": max(limit * 4, 10), "prop": "imageinfo",
        "iiprop": "url|extmetadata|size|mime", "iiurlwidth": WIDTH,
    }
    data = get(API + "?" + urllib.parse.urlencode(params))
    pages = sorted(data.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99))
    out = []
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        meta = ii.get("extmetadata", {})
        lic = clean(meta.get("LicenseShortName", {}).get("value", ""))
        if not ALLOWED.match(lic) or ii.get("mime") not in ("image/jpeg", "image/png"):
            continue
        if ii.get("width", 0) < 800:
            continue
        out.append({
            "title": p["title"].removeprefix("File:"),
            "thumb": ii.get("thumburl") or ii.get("url"),
            "source": ii.get("descriptionurl"),
            "author": clean(meta.get("Artist", {}).get("value", "")) or "neuveden",
            "license": lic,
            "licenseUrl": clean(meta.get("LicenseUrl", {}).get("value", "")),
            "description": clean(meta.get("ImageDescription", {}).get("value", ""))[:300],
            "date": clean(meta.get("DateTimeOriginal", {}).get("value", ""))[:40],
        })
        if len(out) >= limit:
            break
    return out


def main():
    cfg = json.loads((FOTO / "queries.json").read_text(encoding="utf-8"))
    db, keep = [], set()
    for item in cfg["items"]:
        print(f"[{item['key']}] {item['query']}")
        try:
            hits = search(item["query"], item.get("limit", 2))
        except Exception as e:  # noqa: BLE001
            print(f"  chyba hledání: {e}", file=sys.stderr)
            continue
        for i, h in enumerate(hits, 1):
            ext = ".png" if h["thumb"].lower().endswith(".png") else ".jpg"
            name = f"{item['key']}-{i}{ext}"
            path = FOTO / name
            try:
                path.write_bytes(get(h["thumb"], binary=True))
            except Exception as e:  # noqa: BLE001
                print(f"  chyba stahování {h['title']}: {e}", file=sys.stderr)
                continue
            keep.add(name)
            db.append({"key": item["key"], "group": item["group"], "label": item["label"], "file": name, **h})
            print(f"  ✓ {name}  ({h['license']}, {h['author'][:40]})")
            time.sleep(0.5)
    for f in FOTO.iterdir():
        if f.suffix in (".jpg", ".png") and f.name not in keep:
            f.unlink()
    (FOTO / "index.json").write_text(
        json.dumps({"generated": time.strftime("%Y-%m-%d"), "source": "Wikimedia Commons", "photos": db},
                   ensure_ascii=False, indent=1),
        encoding="utf-8")
    print(f"Hotovo: {len(db)} fotek")


if __name__ == "__main__":
    main()
