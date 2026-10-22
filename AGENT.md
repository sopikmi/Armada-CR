# Pravidla pro úpravy stránky Armáda ČR

Tento soubor je závazný návod pro každou aktualizaci (ruční i automatickou) repozitáře
`sopikmi/Armada-CR`. Každý běh začíná bez paměti, proto je vše potřebné zde.

## Kde co je
| Co | Kde |
|---|---|
| Čísla v přehledu (KPI) | `assets/data.js` → `ACR.KPI` |
| Vývoj počtu vojáků | `ACR.VZP_TREND` |
| Aktivní záloha podle součástí | `ACR.AZ` |
| Útvary, zařízení a posádky (mapa + seznam) | `data/posadky.json` (name, short, type, parent, town, lat, lon, coord_precision, note, source, volitelně photo) |
| Vojenské újezdy | `ACR.AREAS` |
| Technika | `ACR.TECH` |
| Modernizace | `ACR.PROJ` |
| Zákony, strategie | `ACR.LAWS`, `ACR.STRAT` |
| Kontroverze | `ACR.ISSUES` |
| Videa, podcasty, weby | `ACR.MEDIA` |
| Zdroje | `ACR.SOURCES` (klíč → [popis s datem, URL]) |
| Datum aktualizace | `ACR.UPDATED`, `MISE.UPDATED`, `PRU.UPDATED` |
| Pěchotní výzbroj | `ACR.INF` |
| Taktika a doktrína | `ACR.TACTICS` |
| Smlouvy, členství, afilace | `ACR.TREATIES` |
| Týdenní přehled (úvod hlavní stránky) | `index.html` mezi `<!--WEEK_START-->` a `<!--WEEK_END-->`, popisek mezi `<!--WEEK_LABEL-->` |
| Archiv týdenních přehledů | `tyden/RRRR-Www.html` + seznam v `tyden/index.html` mezi `<!--ARCHIVE_START-->` a `<!--ARCHIVE_END-->` |
| Zahraniční mise (stránka `mise.html`) | `assets/mise-data.js` → `MISE.KPI`, `MISE.NOW`, `MISE.PAST`, `MISE.SOURCES` |
| Zbrojní průmysl (stránka `prumysl.html`) | `assets/prumysl-data.js` → `PRU.KPI`, `PRU.EXPORT`, `PRU.DEST`, `PRU.FIRMS`, `PRU.CAP`; shrnutí přímo v `prumysl.html` (sekce Shrnutí) |
| Fotky | `foto/queries.json` (co hledat); `foto/index.json` a soubory generuje workflow |

## Pravidla ověřování čísel (závazná)
- Každé číslo musí mít **zdroj** v `ACR.SOURCES` a **datum**, ke kterému platí. Popis zdroje obsahuje datum článku.
- Přednost mají **primární zdroje**: odpovědi MO na žádosti o informace (statnisluzba.mo.gov.cz),
  tiskové zprávy MO/AČR (acr.mo.gov.cz, mocr.mo.gov.cz), zákony, smlouvy v registru smluv,
  pak renomovaná média citující primární zdroj (ČTK, ČT24, Seznam Zprávy, E15, Ekonomický deník, CZ Defence).
- Při WebFetch si vyžádej **doslovnou citaci** věty s číslem a datem.
- Čísla nikdy nedomýšlej ani nepřebírej z paměti. Co nejde ověřit, označ `~` (přibližně) nebo `nezveřejněno`.
- **Kontrola konzistence:** počty techniky v `ACR.TECH`, `ACR.PROJ`, poznámkách v `data/posadky.json` a v `ACR.ISSUES` se musí shodovat
  (např. Leopard 2A4 = 42 všude). Součet `ACR.AZ` musí odpovídat KPI aktivní zálohy. Když zdroje nesouhlasí, uveď obě čísla a rozdíl vysvětli v poznámce.
- Rozlišuj **objednáno / dodáno / ve službě**, **celý rezort / jen armáda pod NGŠ**, **s DPH / bez DPH**.

## Posádky (data/posadky.json)
- Každá položka musí mít zdroj (`source`). Útvary nevymýšlej; zrušené nebo přejmenované útvary uprav podle aktuálního stavu a změnu uveď v `note`.
- `coord_precision`: `kasarna` jen když souřadnice odpovídají konkrétnímu objektu, jinak `obec`.
- `type` je jeden z: velitelstvi, pozemni, vzdusne, specialni, teritorialni, logistika, zdravotnictvi, vycvik, hradni, vp, ostatni, podnik, ujezd.

## Fotky
- Jen Wikimedia Commons s volnou licencí (CC BY, CC BY-SA, CC0, public domain); u každé fotky se zobrazuje autor a licence.
- Fotky se vybírají **ručně**: v `foto/queries.json` má každá položka `files` = přesné názvy souborů na Commons.
  Automatické hledání (`query`) používej jen výjimečně – vrací i nesouvisející nebo cizí fotky.
- Postup výběru: doplň hledání do `foto/candidates.json` a pushni → workflow uloží náhledy do `_kandidati/`.
  Prohlédni je (kontaktní arch), vyber, zapiš názvy do `files`, `_kandidati/` smaž a pushni.
- Kontroly: žádná fotka dvakrát, žádné téměř stejné záběry (skript navíc porovnává perceptuální hash),
  na fotce musí být to, co říká popisek. Cizí armáda jen tehdy, když česká fotka neexistuje, a pak to uveď v `note`
  (např. CAESAR dánské armády). Fotky s vojáky cizí armády v popředí nepoužívej.
- `key` musí odpovídat poslednímu poli v `ACR.TECH` nebo poli `photo` v `data/posadky.json`.
- Obrázky z cizích webů nevkládej (autorská práva); fotky z army.cz / mo.gov.cz jen odkazem.

## Týdenní aktualizace (každý čtvrtek, automaticky)
Běh je bez obsluhy: nikoho se neptej, nic nevymýšlej, co nejde ověřit, nech beze změny.
1. Datum zjisti nástrojem `current_time`. Týden = ISO týden (např. 2026-W44), období = posledních 7 dní.
2. **Zdroje za týden** (WebSearch, pak WebFetch s doslovnou citací): mocr.mo.gov.cz a acr.mo.gov.cz (zpravodajství), mise.mo.gov.cz,
   ČTK (ceskenoviny.cz), ČT24, Seznam Zprávy, iROZHLAS, Ekonomický deník, CZ Defence, Armádní noviny, Armádní zpravodaj, Hospodářské noviny.
   Hledej: rozpočet a koncepce, personál a nábor, akvizice a dodávky (CV90, Leopard 2A8, CAESAR, F-35, SPYDER, drony),
   nehody a kauzy, zahraniční mise a rotace, spojenci, zbrojní průmysl (export, CSG, Colt CZ, STV, Explosia, muniční iniciativa).
3. **Týdenní přehled:** nahraď obsah mezi `<!--WEEK_START-->` a `<!--WEEK_END-->` novým textem ve stejné struktuře:
   `<p class="intro-text"><b>Týden D.–D. M. RRRR.</b> 1–3 věty</p>`, pak `<h3>` sekce (Rozpočet a koncepce / Velení a personál /
   Výzbroj a průmysl / Mise a spojenci – vynech prázdné) se souvislými odstavci a na konci `<p class="small">Zdroje: …</p>` s odkazy.
   Uprav `<!--WEEK_LABEL-->` (např. „Týden 44/2026 · 22.–29. 10. 2026“). Když se za týden nic podstatného nestalo, napiš to jednou větou.
4. **Archiv:** ulož stejný text do `tyden/RRRR-Www.html` (kopie šablony `tyden/2026-W43.html`, uprav titulek, nadpis a datum)
   a přidej řádek nahoru mezi `<!--ARCHIVE_START-->` a `<!--ARCHIVE_END-->` v `tyden/index.html`.
5. **Data:** promítni ověřené novinky do `assets/data.js` (KPI, technika, modernizace, kontroverze, akce – prošlé akce se skryjí samy, nové přidej),
   `assets/mise-data.js` (rotace, jednotky, počty) a `assets/prumysl-data.js` (nové výsledky firem, export). U každé změny uprav zdroj a datum.
   Nové posádky nebo změny útvarů do `data/posadky.json`. Aktualizuj `ACR.UPDATED`, `MISE.UPDATED`, `PRU.UPDATED`.
6. **Fotky:** jen pokud přibyla důležitá nová technika – postup v sekci Fotky (kandidáti → ruční výběr). Žádná fotka dvakrát.
7. **Kontrola:** `node --check` na všechny skripty v `assets/`, načtení datových souborů v Node bez chyby, každý klíč zdroje existuje,
   značky v `index.html` a `tyden/index.html` jsou zachované, konzistence čísel napříč soubory.
8. Commit `Týden RRRR-Www: …` a push do `main`.
9. Závěrečná zpráva Michalovi česky: 3–5 vět o tom, co je nového, a seznam údajů, které se nepodařilo ověřit.
   Když běh selže (push, zdroje), napiš to hned na začátek zprávy.

## Postup aktualizace
1. Ověř změny podle pravidel výše.
2. Uprav `assets/data.js` (a `ACR.UPDATED`), případně statické texty v `index.html` (sekce Velení).
3. `node --check assets/app.js` a kontrola, že data.js se načte bez chyby.
4. Commit s popisem v češtině (`Data: …`, `Fotky: …`, `Vzhled: …`) a push do `main`; GitHub Pages se přegeneruje sám.
5. Michalovi pošli krátké shrnutí v češtině: co se změnilo a které údaje se nepodařilo ověřit.

## Styl
Čeština, věcný tón, souvislé věty. Žádné emoji. Rozvržení, barvy a písma neměň bez požádání.
