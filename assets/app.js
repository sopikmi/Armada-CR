/* Armáda ČR – vykreslení stránky z assets/data.js a foto/index.json */
(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  const nf = n => n.toLocaleString("cs-CZ").replace(/ /g, " ");
  const src = k => {
    const s = ACR.SOURCES[k];
    return s ? `<a href="${s[1]}" target="_blank" rel="noopener" title="${esc(s[0])}">zdroj ↗</a>` : "";
  };
  const g = q => "https://www.google.com/search?q=" + encodeURIComponent(q);
  const mapy = q => "https://mapy.com/cs/?q=" + encodeURIComponent(q);
  const wiki = q => "https://cs.wikipedia.org/wiki/" + encodeURIComponent(q.replace(/ /g, "_"));

  document.querySelectorAll("[data-updated]").forEach(e => (e.textContent = ACR.UPDATED));

  /* ---------- čísla ---------- */
  $("#kpi").innerHTML = ACR.KPI.map(k => {
    const bar = k.bar ? `<div class="bar" title="${nf(k.bar[0])} z ${nf(k.bar[1])}"><i style="width:${Math.min(100, k.bar[0] / k.bar[1] * 100).toFixed(1)}%"></i></div><span class="d">${Math.round(k.bar[0] / k.bar[1] * 100)} % cíle</span>` : "";
    return `<div class="stat"><span class="lbl">${esc(k.lbl)}</span><span class="v">${esc(k.v)}</span><span class="d">${esc(k.d)}</span>${bar}<span class="src">${esc(k.date)} · ${src(k.src)}</span></div>`;
  }).join("");

  /* graf vojáků z povolání */
  (function chart() {
    const d = ACR.VZP_TREND, W = 640, H = 240, L = 54, R = 16, T = 24, B = 30;
    const min = 24000, max = 31000;
    const x = i => L + (i + 0.5) * (W - L - R) / d.length, bw = (W - L - R) / d.length * 0.6;
    const y = v => T + (H - T - B) * (1 - (v - min) / (max - min));
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Vývoj počtu vojáků z povolání 2019–2025">`;
    [24000, 26000, 28000, 30000].forEach(v => {
      s += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)" stroke-width="1"/><text x="${L - 6}" y="${y(v) + 4}" text-anchor="end">${nf(v)}</text>`;
    });
    s += `<line x1="${L}" x2="${W - R}" y1="${y(30000)}" y2="${y(30000)}" stroke="var(--hostile)" stroke-dasharray="4 3" stroke-width="1.5"/><text x="${W - R}" y="${y(30000) - 6}" text-anchor="end" style="fill:var(--hostile)">cíl 2030: 30 000</text>`;
    d.forEach(([yr, v], i) => {
      s += `<rect x="${x(i) - bw / 2}" y="${y(v)}" width="${bw}" height="${y(min) - y(v)}" fill="var(--friendly)" opacity="${i === d.length - 1 ? 1 : .55}"/>`;
      s += `<text class="val" x="${x(i)}" y="${y(v) - 6}" text-anchor="middle">${nf(v)}</text><text x="${x(i)}" y="${H - 10}" text-anchor="middle">${yr}${i === d.length - 1 ? "*" : ""}</text>`;
    });
    $("#trend").innerHTML = s + "</svg>";
  })();

  const azTotal = ACR.AZ.reduce((a, r) => a + r[1], 0);
  $("#az").innerHTML = ACR.AZ.map(r => `<tr><td>${esc(r[0])}</td><td class="n">${nf(r[1])}</td><td class="n">${(r[1] / azTotal * 100).toFixed(1).replace(".", ",")} %</td></tr>`).join("") +
    `<tr><td><b>Celkem</b></td><td class="n"><b>${nf(azTotal)}</b></td><td class="n">100 %</td></tr>`;

  /* ---------- fotky (načtou se z foto/index.json) ---------- */
  let PHOTOS = [];
  const byKey = k => PHOTOS.filter(p => p.key === k);
  const credit = p => `${esc(p.author)} · <a href="${p.licenseUrl || p.source}" target="_blank" rel="noopener">${esc(p.license)}</a> · <a href="${p.source}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
  function lightbox(p) {
    const lb = document.createElement("div");
    lb.id = "lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", p.label);
    lb.innerHTML = `<button class="x" type="button">Zavřít ✕</button><figure><img src="foto/${p.file}" alt="${esc(p.label)}"><figcaption><b>${esc(p.label)}</b> – ${credit(p)}</figcaption></figure>`;
    const close = () => { lb.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = e => { if (e.key === "Escape") close(); };
    lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("x")) close(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(lb);
    lb.querySelector(".x").focus();
  }
  window.ACR_LB = (key, i) => { const p = byKey(key)[i || 0]; if (p) lightbox(p); };

  /* ---------- technika ---------- */
  const stLbl = {ok: "ve službě", ord: "objednáno / dodávky", old: "dosluhuje"};
  const cats = ["Vše", ...new Set(ACR.TECH.map(t => t[1]))];
  let curCat = "Vše";
  function renderTech() {
    $("#tbody").innerHTML = ACR.TECH.filter(t => curCat === "Vše" || t[1] === curCat).map(t => {
      const ph = t[7] ? byKey(t[7])[0] : null;
      const img = ph ? `<img class="thumb" src="foto/${ph.file}" alt="${esc(t[0])}" loading="lazy" onclick="ACR_LB('${t[7]}')">` :
        `<a href="https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(t[0] + " Czech")}&title=Special:MediaSearch&type=image" target="_blank" rel="noopener">hledat ↗</a>`;
      return `<tr><td>${img}</td><td><b>${esc(t[0])}</b></td><td>${esc(t[1])}</td><td class="n">${esc(t[2])}</td><td>${esc(t[3])}</td><td><span class="st ${t[4]}">${stLbl[t[4]]}</span></td><td>${esc(t[5])} ${src(t[6])}</td></tr>`;
    }).join("");
  }
  $("#tchips").innerHTML = cats.map((c, i) => `<button class="chip" type="button" id="tc${i}" aria-pressed="${i === 0}">${esc(c)}</button>`).join("");
  $("#tchips").querySelectorAll(".chip").forEach((b, i) => b.addEventListener("click", () => {
    curCat = cats[i];
    $("#tchips").querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b));
    renderTech();
  }));
  renderTech();

  /* ---------- modernizace ---------- */
  $("#proj").innerHTML = ACR.PROJ.map(p => `<div class="p"><div><div class="yr">${esc(p[0])}</div><h3 style="margin-top:4px">${esc(p[1])}</h3></div><p style="font-size:14px">${esc(p[2])} ${src(p[5])}</p><div class="money">${esc(p[3])} ${p[3] !== "—" ? '<span style="font-size:13px">Kč</span>' : ""}<small>${esc(p[4])}</small></div></div>`).join("");

  /* ---------- dokumenty ---------- */
  const doc = (y, t, d, h) => `<div class="doc"><span class="y">${esc(y)}</span><b>${esc(t)}</b><span style="font-size:14px">${esc(d)}</span><a href="${h}" target="_blank" rel="noopener" style="font-size:13px">Otevřít ↗</a></div>`;
  $("#laws").innerHTML = ACR.LAWS.map(l => doc(l[0], l[1], l[2], "https://www.zakonyprolidi.cz/cs/" + l[3])).join("");
  $("#strat").innerHTML = ACR.STRAT.map(s => doc(s[0], s[1], s[2], s[3].startsWith("q:") ? g(s[3].slice(2)) : s[3])).join("");

  /* ---------- kontroverze ---------- */
  $("#issues").innerHTML = ACR.ISSUES.map(i => `<div class="issue"><div class="sev ${i[0]}"></div><div><h3>${esc(i[1])}</h3><p class="prose" style="margin-top:4px;font-size:14px">${esc(i[2])} ${src(i[3])}</p></div></div>`).join("");

  /* ---------- média a zdroje ---------- */
  const groups = [...new Set(ACR.MEDIA.map(m => m[0]))];
  $("#media").innerHTML = groups.map(gr => `<div><span class="lbl">${esc(gr)}</span><ul>${ACR.MEDIA.filter(m => m[0] === gr).map(m => `<li><a href="${m[2]}" target="_blank" rel="noopener">${esc(m[1])} ↗</a>${m[3] ? `<small>${esc(m[3])}</small>` : ""}</li>`).join("")}</ul></div>`).join("");
  $("#sources").innerHTML = Object.values(ACR.SOURCES).map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a></li>`).join("");

  /* ---------- mapa (Leaflet + OpenStreetMap) ---------- */
  const SYM = {
    inf: '<path d="M-12 -8L12 8M12 -8L-12 8"/>',
    arm: '<path d="M-12 -8L12 8M12 -8L-12 8"/><ellipse rx="7" ry="4"/>',
    art: '<circle r="2.6" style="fill:var(--friendly);stroke:none"/>',
    ad: '<path d="M-8 6Q0 -6 8 6"/>',
    air: '<path d="M-8 0Q-4 -5 0 0Q4 5 8 0"/>',
    rec: '<path d="M-12 8L12 -8"/>',
    sof: '<path d="M-12 8L12 -8M-6 -2H6"/>',
    eng: '<path d="M-6 3V-3H6V3M0 -3V3"/>',
    cbrn: '<path d="M-6 5L0 -5L6 5Z"/>',
    ew: '<path d="M-7 -4L0 4L7 -4"/>',
    log: '<path d="M-12 4H12"/>',
    hq: '<path d="M-12 -2H12"/>',
    guard: '<path d="M-5 -4H5V4H-5Z"/>',
    mp: '<text text-anchor="middle" y="3">MP</text>'
  };
  const icon = (sym, tmp) => L.divIcon({
    className: "", iconSize: [28, 20], iconAnchor: [14, 10],
    html: `<svg class="nato${tmp ? " tmp" : ""}" width="28" height="20" viewBox="-14 -10 28 20"><rect x="-12" y="-8" width="24" height="16"/>${SYM[sym] || ""}</svg>`
  });
  let map, layers = {land: [], air: [], sup: [], area: []};
  function popupUnit(u) {
    const ph = u[8] ? byKey(u[8])[0] : null;
    const img = ph ? `<img src="foto/${ph.file}" alt="" style="width:100%;max-width:260px;display:block;margin:6px 0;cursor:zoom-in" onclick="ACR_LB('${u[8]}')">` : "";
    return `<b>${esc(u[1])}</b><br><span style="font-size:12px;color:#59625A">${esc(u[2])}</span>${img}<p style="margin:6px 0">${esc(u[7])}</p><a href="${mapy(u[2])}" target="_blank" rel="noopener">Mapy.com ↗</a> · <a href="${wiki(u[1])}" target="_blank" rel="noopener">Wikipedie ↗</a>`;
  }
  function initMap() {
    if (!window.L) { $("#lmap").innerHTML = '<p class="empty">Mapu se nepodařilo načíst (knihovna Leaflet).</p>'; return; }
    map = L.map("lmap", {scrollWheelZoom: false}).setView([49.8, 15.5], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    ACR.AREAS.forEach(a => {
      const c = L.circle([a[2], a[3]], {
        radius: Math.sqrt(a[4] / Math.PI) * 1000,
        color: a[6] ? "#A8382C" : "#5A6A36", weight: 1.5, dashArray: "4 3", fillOpacity: a[6] ? 0 : .18
      }).bindPopup(`<b>Vojenský újezd ${esc(a[0])}</b><br><span style="font-size:12px">${esc(a[1])} · ~${a[4]} km²</span><p style="margin:6px 0">${esc(a[5])}</p><a href="${mapy("Vojenský újezd " + a[0])}" target="_blank" rel="noopener">Hranice na Mapy.com ↗</a> · <a href="${wiki("Vojenský újezd " + a[0])}" target="_blank" rel="noopener">Wikipedie ↗</a>`).addTo(map);
      layers.area.push(c);
    });
    ACR.UNITS.forEach(u => {
      const m = L.marker([u[3], u[4]], {icon: icon(u[6], u[9]), title: u[1], keyboard: true}).bindPopup(popupUnit(u), {maxWidth: 300}).addTo(map);
      layers[u[5]].push(m);
    });
  }
  function filter(f) {
    Object.entries(layers).forEach(([k, arr]) => arr.forEach(l => {
      const show = f === "all" || f === k;
      if (show && !map.hasLayer(l)) l.addTo(map);
      if (!show && map.hasLayer(l)) map.removeLayer(l);
    }));
  }
  document.querySelectorAll("#mapchips .chip").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("#mapchips .chip").forEach(x => x.setAttribute("aria-pressed", x === b));
    if (map) filter(b.dataset.f);
  }));

  /* ---------- galerie ---------- */
  function renderGallery(meta) {
    if (!PHOTOS.length) {
      $("#gallery").innerHTML = '<p class="empty">Fotky se právě stahují do repozitáře (GitHub Actions → „Stáhnout fotky z Wikimedia Commons“). Za pár minut obnovte stránku.</p>';
      return;
    }
    const groups = [...new Set(PHOTOS.map(p => p.group))];
    $("#gallery").innerHTML = `<p class="note">${PHOTOS.length} fotek z Wikimedia Commons s volnou licencí, uloženo v repozitáři ${meta.generated ? "(" + esc(meta.generated) + ")" : ""}. Klikněte pro zvětšení.</p>` +
      groups.map(gr => `<div class="gal-group"><h3>${esc(gr)}</h3><div class="gal">${PHOTOS.filter(p => p.group === gr).map(p => {
        const i = byKey(p.key).indexOf(p);
        return `<figure><button type="button" onclick="ACR_LB('${p.key}',${i})" aria-label="Zvětšit: ${esc(p.label)}"><img src="foto/${p.file}" alt="${esc(p.label)}" loading="lazy"></button><figcaption><b>${esc(p.label)}</b>${credit(p)}</figcaption></figure>`;
      }).join("")}</div></div>`).join("");
  }

  fetch("foto/index.json", {cache: "no-cache"})
    .then(r => (r.ok ? r.json() : {photos: []}))
    .catch(() => ({photos: []}))
    .then(meta => {
      PHOTOS = meta.photos || [];
      renderGallery(meta);
      renderTech();
      initMap();
    });
})();
