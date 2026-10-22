# Armada-CR

Statická stránka o Armádě České republiky (GitHub Pages, větev `main`, kořen repozitáře).
Před jakoukoli úpravou čísel nebo obsahu si přečti **AGENT.md** a dodržuj ho.

- `index.html` – hlavní stránka: týdenní přehled (značky WEEK_*), struktura, velení.
- `mise.html` + `assets/mise-data.js` – zahraniční mise; `prumysl.html` + `assets/prumysl-data.js` – zbrojní průmysl.
- `tyden/` – archiv týdenních přehledů; `assets/page.js` – společné funkce podstránek.
- Týdenní automatická aktualizace: postup v AGENT.md, sekce „Týdenní aktualizace“.
- `assets/data.js` – čísla, tabulky, technika, projekty a zdroje.
- `data/posadky.json` – kompletní seznam útvarů, zařízení a posádek pro mapu a seznam.
- `assets/app.js` – vykreslení, mapa (Leaflet + OSM), galerie. Měň jen při změně funkcí.
- `assets/style.css` – vzhled.
- `foto/queries.json` – ručně vybrané fotky z Wikimedia Commons (`files`); `foto/index.json` + obrázky
  generuje workflow `.github/workflows/fetch-photos.yml` (skript `scripts/fetch_photos.py`). Ručně je neupravuj.
