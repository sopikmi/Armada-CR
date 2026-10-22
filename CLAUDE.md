# Armada-CR

Statická stránka o Armádě České republiky (GitHub Pages, větev `main`, kořen repozitáře).
Před jakoukoli úpravou čísel nebo obsahu si přečti **AGENT.md** a dodržuj ho.

- `index.html` – hlavní stránka: týdenní přehled (značky WEEK_*), struktura, velení.
- `mise.html` + `assets/mise-data.js` – zahraniční mise; `prumysl.html` + `assets/prumysl-data.js` – zbrojní průmysl;
  `muzea.html` + `assets/muzea-data.js` – muzea VHÚ a databáze.
- `tyden/` – archiv týdenních přehledů; `assets/page.js` – společné funkce podstránek.
- Týdenní automatická aktualizace: postup v AGENT.md, sekce „Týdenní aktualizace“.
- `assets/data.js` – čísla, tabulky, technika, projekty a zdroje.
- `data/posadky.json` – kompletní seznam útvarů, zařízení a posádek pro mapu a seznam.
- `assets/app.js` – vykreslení, mapa (Leaflet + OSM), galerie. Měň jen při změně funkcí.
- `assets/basemap.js` + `assets/geo/` – vlastní podkladová mapa. `data/specs.json` (parametry) generuje `fetch-specs.yml` ze `data/specs_list.json`.
- `assets/style.css` – vzhled.
- `foto/queries.json` – ručně vybrané fotky z Wikimedia Commons (`files`); `foto/index.json` + obrázky
  generuje workflow `.github/workflows/fetch-photos.yml` (skript `scripts/fetch_photos.py`). Ručně je neupravuj.
