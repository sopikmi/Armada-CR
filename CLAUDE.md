# Armada-CR

Statická stránka o Armádě České republiky (GitHub Pages, větev `main`, kořen repozitáře).
Před jakoukoli úpravou čísel nebo obsahu si přečti **AGENT.md** a dodržuj ho.

- `index.html` – kostra stránky a statické texty (struktura, velení).
- `assets/data.js` – všechna čísla, tabulky, útvary, projekty a zdroje. Obsah se mění tady.
- `assets/app.js` – vykreslení, mapa (Leaflet + OSM), galerie. Měň jen při změně funkcí.
- `assets/style.css` – vzhled.
- `foto/queries.json` – seznam hledání na Wikimedia Commons; `foto/index.json` + obrázky
  generuje workflow `.github/workflows/fetch-photos.yml` (skript `scripts/fetch_photos.py`). Ručně je neupravuj.
