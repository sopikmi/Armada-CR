# Pravidla pro úpravy stránky Armáda ČR

Tento soubor je závazný návod pro každou aktualizaci (ruční i automatickou) repozitáře
`sopikmi/Armada-CR`. Každý běh začíná bez paměti, proto je vše potřebné zde.

## Kde co je
| Co | Kde |
|---|---|
| Čísla v přehledu (KPI) | `assets/data.js` → `ACR.KPI` |
| Vývoj počtu vojáků | `ACR.VZP_TREND` |
| Aktivní záloha podle součástí | `ACR.AZ` |
| Útvary na mapě | `ACR.UNITS` (lat, lon na úrovni posádky) |
| Vojenské újezdy | `ACR.AREAS` |
| Technika | `ACR.TECH` |
| Modernizace | `ACR.PROJ` |
| Zákony, strategie | `ACR.LAWS`, `ACR.STRAT` |
| Kontroverze | `ACR.ISSUES` |
| Videa, podcasty, weby | `ACR.MEDIA` |
| Zdroje | `ACR.SOURCES` (klíč → [popis s datem, URL]) |
| Datum aktualizace | `ACR.UPDATED` |
| Fotky | `foto/queries.json` (co hledat); `foto/index.json` a soubory generuje workflow |

## Pravidla ověřování čísel (závazná)
- Každé číslo musí mít **zdroj** v `ACR.SOURCES` a **datum**, ke kterému platí. Popis zdroje obsahuje datum článku.
- Přednost mají **primární zdroje**: odpovědi MO na žádosti o informace (statnisluzba.mo.gov.cz),
  tiskové zprávy MO/AČR (acr.mo.gov.cz, mocr.mo.gov.cz), zákony, smlouvy v registru smluv,
  pak renomovaná média citující primární zdroj (ČTK, ČT24, Seznam Zprávy, E15, Ekonomický deník, CZ Defence).
- Při WebFetch si vyžádej **doslovnou citaci** věty s číslem a datem.
- Čísla nikdy nedomýšlej ani nepřebírej z paměti. Co nejde ověřit, označ `~` (přibližně) nebo `nezveřejněno`.
- **Kontrola konzistence:** počty techniky v `ACR.TECH`, `ACR.PROJ`, popisech útvarů v `ACR.UNITS` a v `ACR.ISSUES` se musí shodovat
  (např. Leopard 2A4 = 42 všude). Součet `ACR.AZ` musí odpovídat KPI aktivní zálohy. Když zdroje nesouhlasí, uveď obě čísla a rozdíl vysvětli v poznámce.
- Rozlišuj **objednáno / dodáno / ve službě**, **celý rezort / jen armáda pod NGŠ**, **s DPH / bez DPH**.

## Fotky
- Jen Wikimedia Commons s volnou licencí (CC BY, CC BY-SA, CC0, public domain); u každé fotky se zobrazuje autor a licence.
- Nové fotky = přidat položku do `foto/queries.json` (key, group, label, query, limit) a pushnout;
  workflow „Stáhnout fotky z Wikimedia Commons“ je stáhne a commitne. Lze ho spustit i ručně (Actions → Run workflow).
- `key` musí odpovídat poslednímu poli v `ACR.TECH` nebo `ACR.UNITS`, aby se fotka zobrazila v tabulce a na mapě.
- Obrázky z cizích webů nevkládej (autorská práva); fotky z army.cz / mo.gov.cz jen odkazem.

## Postup aktualizace
1. Ověř změny podle pravidel výše.
2. Uprav `assets/data.js` (a `ACR.UPDATED`), případně statické texty v `index.html` (sekce Velení).
3. `node --check assets/app.js` a kontrola, že data.js se načte bez chyby.
4. Commit s popisem v češtině (`Data: …`, `Fotky: …`, `Vzhled: …`) a push do `main`; GitHub Pages se přegeneruje sám.
5. Michalovi pošli krátké shrnutí v češtině: co se změnilo a které údaje se nepodařilo ověřit.

## Styl
Čeština, věcný tón, souvislé věty. Žádné emoji. Rozvržení, barvy a písma neměň bez požádání.
