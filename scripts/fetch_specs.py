#!/usr/bin/env python3
"""Technické parametry techniky a zbraní z Wikipedie (API) do data/specs.json.

Seznam položek: data/specs_list.json  {"items": [{"key": "...", "en": "Název článku EN", "label": "..."}]}
Z anglického článku čte infobox (Infobox weapon / military vehicle / aircraft) a šablonu
Aircraft specs, z jazykových odkazů doplní odkaz na českou Wikipedii.
Texty jsou z Wikipedie (CC BY-SA 4.0) – na webu se uvádí zdroj a odkaz.
    python3 scripts/fetch_specs.py
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

import mwparserfromhell as mw

ROOT = Path(__file__).resolve().parent.parent
API = "https://en.wikipedia.org/w/api.php"
UA = "Armada-CR-site/1.1 (https://github.com/sopikmi/Armada-CR; sopikmi@gmail.com)"

# parametr infoboxu -> český popisek (pořadí = pořadí zobrazení)
FIELDS = [
    ("type", "Typ"), ("origin", "Původ"), ("manufacturer", "Výrobce"), ("designer", "Konstruktér"),
    ("design_date", "Vývoj"), ("production_date", "Výroba"), ("introduced", "Zavedení"), ("introduction", "Zavedení"),
    ("first_flight", "První let"), ("number", "Vyrobeno"), ("number_built", "Vyrobeno"),
    ("crew", "Osádka"), ("passengers", "Výsadek"), ("capacity", "Kapacita"),
    ("weight", "Hmotnost"), ("length", "Délka"), ("part_length", "Délka hlavně"), ("barrel_length", "Délka hlavně"),
    ("width", "Šířka"), ("height", "Výška"),
    ("armour", "Pancéřování"), ("primary_armament", "Hlavní výzbroj"), ("secondary_armament", "Sekundární výzbroj"),
    ("engine", "Motor"), ("engine_power", "Výkon"), ("pw_ratio", "Měrný výkon"), ("suspension", "Podvozek"),
    ("speed", "Rychlost"), ("vehicle_range", "Dojezd"), ("range", "Dosah"),
    ("cartridge", "Náboj"), ("caliber", "Ráže"), ("calibre", "Ráže"), ("action", "Princip"), ("rate", "Kadence"),
    ("velocity", "Úsťová rychlost"), ("max_range", "Max. dostřel"), ("feed", "Zásobování"), ("sights", "Mířidla"),
    ("guidance", "Navádění"), ("warhead", "Hlavice"), ("propellant", "Pohon"), ("operational_range", "Dosah"),
    ("elevation", "Náměr"), ("traverse", "Odměr"),
]
AIR = [
    ("crew", "Osádka"), ("capacity", "Kapacita"), ("length m", "Délka (m)"), ("span m", "Rozpětí (m)"), ("height m", "Výška (m)"),
    ("empty weight kg", "Prázdná hmotnost (kg)"), ("max takeoff weight kg", "Max. vzletová hmotnost (kg)"),
    ("eng1 name", "Motor"), ("eng1 kn-ab", "Tah s přídavným spalováním (kN)"), ("eng1 kn", "Tah (kN)"), ("eng1 kw", "Výkon (kW)"),
    ("max speed kmh", "Max. rychlost (km/h)"), ("max speed mach", "Max. rychlost (Mach)"), ("cruise speed kmh", "Cestovní rychlost (km/h)"),
    ("range km", "Dolet (km)"), ("combat range km", "Bojový rádius (km)"), ("ferry range km", "Přeletový dolet (km)"),
    ("ceiling m", "Dostup (m)"), ("guns", "Kanóny"), ("hardpoints", "Závěsníky"), ("rockets", "Rakety"), ("missiles", "Řízené střely"),
]


def api(params):
    url = API + "?" + urllib.parse.urlencode({**params, "format": "json", "formatversion": 2})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read())
        except Exception as e:  # noqa: BLE001
            if attempt == 3:
                raise
            print(f"  opakuji ({e})", file=sys.stderr)
            time.sleep(3 * (attempt + 1))


def clean(node):
    txt = mw.parse(str(node))
    for t in txt.filter_templates(recursive=False):
        name = str(t.name).strip().lower()
        if name in ("convert", "cvt"):
            try:
                v = str(t.get(1).value).strip()
                u = str(t.get(2).value).strip()
                txt.replace(t, f"{v} {u}")
            except ValueError:
                txt.remove(t)
        elif name in ("ubl", "unbulleted list", "plainlist", "flatlist", "hlist"):
            items = [mw.parse(str(p.value)).strip_code().strip() for p in t.params if not p.showkey]
            txt.replace(t, "; ".join(i for i in items if i))
        elif name.startswith("efn") or name in ("sfn", "refn", "citation needed", "cn"):
            txt.remove(t)
    s = txt.strip_code(normalize=True, collapse=True)
    s = re.sub(r"<ref[^>]*?/>|<ref.*?</ref>", "", s, flags=re.S)
    s = re.sub(r"\[\d+\]", "", s)
    s = re.sub(r"\s*\n\s*\*?\s*", "; ", s)
    s = re.sub(r"\s{2,}", " ", s).strip(" ;,")
    return s[:240]


def extract(wikitext):
    code = mw.parse(wikitext)
    out, seen = [], set()
    for t in code.filter_templates():
        n = str(t.name).strip().lower()
        if n.startswith("infobox"):
            for key, label in FIELDS:
                if t.has(key) and label not in seen:
                    v = clean(t.get(key).value)
                    if v:
                        out.append([label, v])
                        seen.add(label)
            break
    for t in code.filter_templates():
        n = str(t.name).strip().lower()
        if n in ("aircraft specs", "aircraft specifications", "aerospecs"):
            for key, label in AIR:
                if t.has(key) and label not in seen:
                    v = clean(t.get(key).value)
                    if v:
                        out.append([label, v])
                        seen.add(label)
            break
    return out


def main():
    cfg = json.loads((ROOT / "data/specs_list.json").read_text(encoding="utf-8"))
    res = {}
    for it in cfg["items"]:
        title = it["en"]
        print(f"[{it['key']}] {title}")
        try:
            d = api({"action": "parse", "page": title, "prop": "wikitext", "redirects": 1})
            if "parse" not in d:
                hit = api({"action": "query", "list": "search", "srsearch": it.get("search", title), "srlimit": 1})["query"]["search"]
                if not hit:
                    raise RuntimeError("článek nenalezen")
                print(f"  → hledáním: {hit[0]['title']}")
                d = api({"action": "parse", "page": hit[0]["title"], "prop": "wikitext", "redirects": 1})
            wt = d["parse"]["wikitext"]
            real = d["parse"]["title"]
            ll = api({"action": "query", "titles": real, "prop": "langlinks", "lllang": "cs", "redirects": 1})
            pages = ll["query"]["pages"]
            cs = (pages[0].get("langlinks") or [{}])[0].get("title") if pages else None
        except Exception as e:  # noqa: BLE001
            print(f"  chyba: {e}", file=sys.stderr)
            continue
        fields = extract(wt)
        res[it["key"]] = {
            "label": it.get("label", real),
            "title": real,
            "url": "https://en.wikipedia.org/wiki/" + urllib.parse.quote(real.replace(" ", "_")),
            "cs_url": ("https://cs.wikipedia.org/wiki/" + urllib.parse.quote(cs.replace(" ", "_"))) if cs else None,
            "note": it.get("note"),
            "fields": fields,
        }
        print(f"  ✓ {len(fields)} parametrů{', cs: ' + cs if cs else ''}")
        time.sleep(0.5)
    (ROOT / "data/specs.json").write_text(
        json.dumps({"generated": time.strftime("%Y-%m-%d"), "source": "Wikipedie (CC BY-SA 4.0)", "items": res},
                   ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"Hotovo: {len(res)} položek")


if __name__ == "__main__":
    main()
