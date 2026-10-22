/* Vlastní podkladová mapa (hranice, kraje, řeky, města) – funguje i bez dlaždic OpenStreetMap.
   BASEMAP.cz(map, root) / BASEMAP.world(map, root); root = cesta ke kořeni webu ("" nebo "../"). */
(function () {
  function panes(map) {
    if (!map.getPane("bm")) { map.createPane("bm").style.zIndex = 250; }
    if (!map.getPane("bmlbl")) { const p = map.createPane("bmlbl"); p.style.zIndex = 380; p.style.pointerEvents = "none"; }
  }
  function label(ll, text, cls) {
    return L.marker(ll, {pane: "bmlbl", interactive: false, keyboard: false,
      icon: L.divIcon({className: "bm-lbl " + cls, html: `<span>${text}</span>`, iconSize: null})});
  }
  function zoomClass(map) {
    const c = map.getContainer();
    const f = () => { c.className = c.className.replace(/\bbmz\d+\b/g, "").trim() + " bmz" + Math.round(map.getZoom()); };
    map.on("zoomend", f); f();
  }
  function control(map, vec, osmMax) {
    const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: osmMax || 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
    vec.addTo(map);
    map.getContainer().classList.add("bm-map");
    L.control.layers({"Přehledná mapa": vec, "Podrobná mapa (OpenStreetMap)": osm}, null, {position: "topright"}).addTo(map);
    map.on("baselayerchange", e => map.getContainer().classList.toggle("bm-osm", e.layer === osm));
  }
  function load(url) { return fetch(url).then(r => r.json()); }

  window.BASEMAP = {
    cz(map, root) {
      panes(map); zoomClass(map);
      const g = L.layerGroup();
      control(map, g, 17);
      g.addLayer(L.rectangle([[45, 5], [56, 26]], {pane: "bm", className: "bm-sea", interactive: false}));
      return load((root || "") + "assets/geo/cz.json").then(d => {
        const by = k => d.features.filter(f => f.properties.k === k);
        const add = (k, cls) => g.addLayer(L.geoJSON({type: "FeatureCollection", features: by(k)}, {pane: "bm", interactive: false, style: () => ({className: cls})}));
        add("nb", "bm-nb"); add("cz", "bm-cz"); add("kr", "bm-kr"); add("r", "bm-r");
        add("cz", "bm-czline");
        const NB = {"Německo": [50.6, 12.0], "Polsko": [51.0, 16.4], "Slovensko": [48.75, 18.6], "Rakousko": [48.25, 15.3], "Maďarsko": [47.8, 19.2]};
        Object.entries(NB).forEach(([n, ll]) => g.addLayer(label(ll, n, "nb")));
        by("c").forEach(f => {
          const [lon, lat] = f.geometry.coordinates;
          g.addLayer(L.circleMarker([lat, lon], {pane: "bm", radius: f.properties.r === 1 ? 4 : 3, className: "bm-city", interactive: false}));
          g.addLayer(label([lat, lon], f.properties.n, "c r" + f.properties.r));
        });
      }).catch(() => {});
    },
    world(map, root) {
      panes(map); zoomClass(map);
      const g = L.layerGroup();
      control(map, g, 12);
      g.addLayer(L.rectangle([[-85, -540], [85, 540]], {pane: "bm", className: "bm-sea", interactive: false}));
      return load((root || "") + "assets/geo/world.json").then(d => {
        g.addLayer(L.geoJSON(d, {pane: "bm", interactive: false, style: f => ({className: f.properties.n === "Česko" ? "bm-cz" : "bm-land"})}));
        d.features.forEach(f => { if (f.properties.n) g.addLayer(label([f.properties.lat, f.properties.lon], f.properties.n, "w")); });
      }).catch(() => {});
    }
  };
})();
