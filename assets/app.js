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
  /* prohlížeč: všechny fotky jednoho tématu, šipkami dál */
  function lightbox(key, start) {
    const set = byKey(key);
    if (!set.length) return;
    let i = Math.max(0, Math.min(start || 0, set.length - 1));
    const lb = document.createElement("div");
    lb.id = "lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", set[0].label);
    const draw = () => {
      const p = set[i];
      lb.innerHTML = `<button class="x" type="button">Zavřít ✕</button>` +
        (set.length > 1 ? `<button class="nav prev" type="button" aria-label="Předchozí">‹</button><button class="nav next" type="button" aria-label="Další">›</button>` : "") +
        `<figure><img src="foto/${p.file}" alt="${esc(p.label)}"><figcaption><b>${esc(p.label)}</b>${set.length > 1 ? ` · ${i + 1} / ${set.length}` : ""}${p.note ? " – " + esc(p.note) : ""}<br>${credit(p)}</figcaption></figure>`;
      lb.querySelector(".x").focus();
    };
    const go = d => { i = (i + d + set.length) % set.length; draw(); };
    const close = () => { lb.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = ev => { if (ev.key === "Escape") close(); if (ev.key === "ArrowRight") go(1); if (ev.key === "ArrowLeft") go(-1); };
    lb.addEventListener("click", ev => {
      if (ev.target === lb || ev.target.classList.contains("x")) close();
      else if (ev.target.classList.contains("next")) go(1);
      else if (ev.target.classList.contains("prev")) go(-1);
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(lb);
    draw();
  }
  const photoLink = (key, text) => { const n = byKey(key).length; return n ? `<button type="button" class="plink" onclick="ACR_LB('${key}')">${text || "fotky"} (${n})</button>` : ""; };
  window.ACR_LB = (key, i) => lightbox(key, i);

  /* ---------- technika ---------- */
  const stLbl = {ok: "ve službě", ord: "objednáno / dodávky", old: "dosluhuje"};
  const cats = ["Vše", ...new Set(ACR.TECH.map(t => t[1]))];
  let curCat = "Vše";
  function renderTech() {
    $("#tbody").innerHTML = ACR.TECH.filter(t => curCat === "Vše" || t[1] === curCat).map(t => {
      const ph = t[7] ? byKey(t[7])[0] : null;
      const img = ph ? photoLink(t[7]) :
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

  /* ---------- akce a milníky ---------- */
  function renderEvents() {
    const today = new Date().toISOString().slice(0, 10);
    const kind = {akce: "akce", milnik: "milník", vyroci: "výročí"};
    const ev = ACR.EVENTS.filter(e => e[0] >= today).sort((a, b) => a[0].localeCompare(b[0]));
    const years = [...new Set(ev.map(e => e[0].slice(0, 4)))];
    $("#events").innerHTML = years.map(y => `<div class="ev-year"><h3>${y}</h3><div class="ev-list">${ev.filter(e => e[0].startsWith(y)).map(e => {
      const ph = e[8] ? byKey(e[8])[0] : null;
      const img = ph && ph.group === "Akce" ? `<button type="button" class="ev-img" onclick="ACR_LB('${e[8]}')" aria-label="Fotka: ${esc(e[2])}"><img src="foto/${ph.file}" alt="" loading="lazy"></button>` : "";
      return `<article class="ev">${img}<div class="ev-body"><div class="ev-date">${esc(e[1])} <span class="ev-k ${e[6]}">${kind[e[6]]}</span>${e[7] === "ocekavano" ? '<span class="ev-k exp">termín neověřen</span>' : ""}</div><h4>${esc(e[2])}</h4><div class="ev-place">${esc(e[3])}</div><p>${esc(e[4])} ${src(e[5])} ${ph && ph.group !== "Akce" ? photoLink(e[8]) : ""}</p></div></article>`;
    }).join("")}</div></div>`).join("") || '<p class="empty">Žádné nadcházející akce.</p>';
  }

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
    tank: '<ellipse rx="8" ry="4.5"/>',
    art: '<circle r="2.6" style="fill:var(--friendly);stroke:none"/>',
    ad: '<path d="M-8 6Q0 -6 8 6"/>',
    air: '<path d="M-8 0Q-4 -5 0 0Q4 5 8 0"/>',
    radar: '<path d="M-6 5Q0 -7 6 5M0 5V-2"/>',
    rec: '<path d="M-12 8L12 -8"/>',
    uav: '<path d="M-8 -3L0 3L8 -3"/><path d="M-12 8L12 -8"/>',
    sof: '<path d="M-12 8L12 -8M-6 -2H6"/>',
    eng: '<path d="M-6 3V-3H6V3M0 -3V3"/>',
    cbrn: '<path d="M-6 5L0 -5L6 5Z"/>',
    ew: '<path d="M-7 -4L0 4L7 -4"/>',
    log: '<path d="M-12 4H12"/>',
    hq: '<path d="M-12 -2H12"/>',
    med: '<path d="M0 -5V5M-5 0H5"/>',
    edu: '<path d="M-7 3L0 -4L7 3"/>',
    guard: '<path d="M-5 -4H5V4H-5Z"/>',
    mp: '<text text-anchor="middle" y="3">MP</text>',
    ter: '<text text-anchor="middle" y="3">T</text>',
    cyber: '<text text-anchor="middle" y="3">0101</text>',
    sp: '<text text-anchor="middle" y="3">s.p.</text>',
    misc: '<circle r="2" style="fill:var(--friendly);stroke:none"/>',
    uj: '<path d="M-12 8L-4 -8M-4 8L4 -8M4 8L12 -8"/>'
  };
  const TYPES = {
    velitelstvi: "Velitelství", pozemni: "Pozemní síly", vzdusne: "Vzdušné síly", specialni: "Speciální síly",
    teritorialni: "Teritoriální síly", logistika: "Logistika", zdravotnictvi: "Zdravotnictví", vycvik: "Výcvik a školství",
    hradni: "Hradní stráž", vp: "Vojenská policie", ostatni: "Ostatní složky", podnik: "Státní podniky", ujezd: "Újezdní úřady"
  };
  function symOf(u) {
    const n = u.name.toLowerCase();
    if (u.type === "hradni") return "guard";
    if (u.type === "vp") return "mp";
    if (u.type === "specialni") return "sof";
    if (u.type === "zdravotnictvi") return "med";
    if (u.type === "vycvik") return "edu";
    if (u.type === "podnik") return "sp";
    if (u.type === "ujezd") return "uj";
    if (u.type === "teritorialni") return n.includes("pluk") ? "log" : "ter";
    if (u.type === "logistika") return "log";
    if (/kybernet|informační/.test(n)) return "cyber";
    if (u.type === "velitelstvi") return "hq";
    if (/tankov/.test(n)) return "tank";
    if (/mechaniz|motoriz|brigáda rychlého/.test(n)) return n.includes("mechanizovaná brigáda") ? "arm" : "inf";
    if (/výsadk/.test(n)) return "inf";
    if (/protiletad/.test(n)) return "ad";
    if (/radiotech|řízení a uvědom|velení, řízení/.test(n)) return "radar";
    if (/dělostř/.test(n)) return "art";
    if (/ženij/.test(n)) return "eng";
    if (/rchbo|radiační|zbraní hromad/.test(n)) return "cbrn";
    if (/bezpilot/.test(n)) return "uav";
    if (/elektronick/.test(n)) return "ew";
    if (/průzkum/.test(n)) return "rec";
    if (/logist|zásob|oprav/.test(n)) return "log";
    if (u.type === "vzdusne") return "air";
    return "misc";
  }
  const icon = (sym, approx) => L.divIcon({
    className: "", iconSize: [28, 20], iconAnchor: [14, 10],
    html: `<svg class="nato${approx ? " approx" : ""}" width="28" height="20" viewBox="-14 -10 28 20"><rect x="-12" y="-8" width="24" height="16"/>${SYM[sym] || ""}</svg>`
  });
  let map, UNITS = [], markers = new Map(), areaLayers = [], curType = "all";
  function popupUnit(u) {
    const ph = u.photo ? byKey(u.photo)[0] : null;
    const img = ph ? `<div style="margin:6px 0">${photoLink(u.photo)}</div>` : "";
    const prec = u.coord_precision === "kasarna" ? "poloha objektu" : "poloha obce (orientačně)";
    return `<b>${esc(u.name)}</b><br><span style="font-size:12px;color:#59625A">${esc(u.short)} · ${esc(u.town)} · podřízen: ${esc(u.parent)}</span>${img}<p style="margin:6px 0">${esc(u.note)}</p><span style="font-size:11px;color:#59625A">${prec}</span><br><a href="${u.source}" target="_blank" rel="noopener">zdroj ↗</a> · <a href="https://mapy.com/cs/?q=${encodeURIComponent(u.name + " " + u.town)}" target="_blank" rel="noopener">Mapy.com ↗</a>`;
  }
  /* body se stejnou polohou rozprostřít do kruhu, aby se nepřekrývaly */
  function spread(units) {
    const groups = {};
    units.forEach(u => { const k = u.lat.toFixed(3) + "," + u.lon.toFixed(3); (groups[k] = groups[k] || []).push(u); });
    Object.values(groups).forEach(g => {
      if (g.length < 2) { g[0]._ll = [g[0].lat, g[0].lon]; return; }
      const r = 0.006 + g.length * 0.0012;
      g.forEach((u, i) => { const a = 2 * Math.PI * i / g.length; u._ll = [u.lat + r * Math.sin(a), u.lon + r * 1.55 * Math.cos(a)]; });
    });
  }
  function initMap() {
    if (!window.L) { $("#lmap").innerHTML = '<p class="empty">Mapu se nepodařilo načíst (knihovna Leaflet).</p>'; return; }
    map = L.map("lmap", {scrollWheelZoom: false}).setView([49.8, 15.5], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    ACR.AREAS.forEach(a => {
      areaLayers.push(L.circle([a[2], a[3]], {
        radius: Math.sqrt(a[4] / Math.PI) * 1000,
        color: a[6] ? "#A8382C" : "#5A6A36", weight: 1.5, dashArray: "4 3", fillOpacity: a[6] ? 0 : .18
      }).bindPopup(`<b>Vojenský újezd ${esc(a[0])}</b><br><span style="font-size:12px">${esc(a[1])} · ~${a[4]} km²</span><p style="margin:6px 0">${esc(a[5])}</p><a href="${mapy("Vojenský újezd " + a[0])}" target="_blank" rel="noopener">Hranice na Mapy.com ↗</a> · <a href="${wiki("Vojenský újezd " + a[0])}" target="_blank" rel="noopener">Wikipedie ↗</a>`).addTo(map));
    });
    spread(UNITS);
    UNITS.forEach(u => {
      const m = L.marker(u._ll, {icon: icon(symOf(u), u.coord_precision !== "kasarna"), title: `${u.short} – ${u.name} (${u.town})`, keyboard: true})
        .bindPopup(popupUnit(u), {maxWidth: 300}).addTo(map);
      markers.set(u, m);
    });
  }
  function applyFilter() {
    const q = ($("#usearch").value || "").trim().toLowerCase();
    const match = u => (curType === "all" || curType === u.type) &&
      (!q || (u.name + " " + u.short + " " + u.town + " " + u.parent + " " + u.note).toLowerCase().includes(q));
    if (map) {
      markers.forEach((m, u) => { const s = match(u); if (s && !map.hasLayer(m)) m.addTo(map); if (!s && map.hasLayer(m)) map.removeLayer(m); });
      areaLayers.forEach(l => { const s = (curType === "all" || curType === "ujezd") && !q; if (s && !map.hasLayer(l)) l.addTo(map); if (!s && map.hasLayer(l)) map.removeLayer(l); });
    }
    const rows = UNITS.filter(match).sort((a, b) => a.town.localeCompare(b.town, "cs") || a.name.localeCompare(b.name, "cs"));
    $("#ucount").textContent = `${rows.length} z ${UNITS.length}`;
    $("#ubody").innerHTML = rows.map(u => `<tr><td>${esc(u.town)}</td><td><b>${esc(u.short)}</b></td><td><a href="#mapa" data-uid="${UNITS.indexOf(u)}">${esc(u.name)}</a></td><td>${esc(TYPES[u.type] || u.type)}</td><td>${esc(u.parent)}</td><td>${esc(u.note)} <a href="${u.source}" target="_blank" rel="noopener">zdroj ↗</a></td></tr>`).join("");
  }
  function initUnits(data) {
    UNITS = data.items || [];
    const counts = {};
    UNITS.forEach(u => (counts[u.type] = (counts[u.type] || 0) + 1));
    const chips = [["all", `Vše (${UNITS.length})`], ...Object.keys(TYPES).filter(t => counts[t]).map(t => [t, `${TYPES[t]} (${counts[t]})`])];
    $("#mapchips").innerHTML = chips.map(([f, l], i) => `<button class="chip" type="button" id="mf-${f}" data-f="${f}" aria-pressed="${i === 0}">${esc(l)}</button>`).join("");
    $("#mapchips").querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      $("#mapchips").querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b));
      curType = b.dataset.f; applyFilter();
    }));
    $("#usearch").addEventListener("input", applyFilter);
    $("#ubody").addEventListener("click", e => {
      const a = e.target.closest("[data-uid]"); if (!a || !map) return;
      const u = UNITS[+a.dataset.uid], m = markers.get(u);
      if (!map.hasLayer(m)) m.addTo(map);
      map.setView(u._ll, 12); m.openPopup();
    });
    initMap();
    applyFilter();
  }

  /* ---------- galerie ---------- */
  function renderGallery(meta) {
    if (!PHOTOS.length) {
      $("#gallery").innerHTML = '<p class="empty">Fotky se právě stahují do repozitáře (GitHub Actions → „Stáhnout fotky z Wikimedia Commons“). Za pár minut obnovte stránku.</p>';
      return;
    }
    const GAL = PHOTOS.filter(p => p.group !== "Akce");
    const keys = [...new Set(GAL.map(p => p.key))];
    const groups = [...new Set(GAL.map(p => p.group))];
    $("#gallery").innerHTML = `<p class="note">${keys.length} témat, ${GAL.length} fotek z Wikimedia Commons s volnou licencí. Náhled ukazuje hlavní fotku, po kliknutí další.</p>` +
      groups.map(gr => `<div class="gal-group"><h3>${esc(gr)}</h3><div class="gal">${keys.filter(k => byKey(k)[0].group === gr).map(k => {
        const set = byKey(k), p = set[0];
        return `<figure><button type="button" onclick="ACR_LB('${k}',0)" aria-label="Otevřít fotky: ${esc(p.label)}"><img src="foto/${p.file}" alt="${esc(p.label)}" loading="lazy">${set.length > 1 ? `<span class="cnt">+${set.length - 1}</span>` : ""}</button><figcaption><b>${esc(p.label)}</b>${esc(p.note || "")}${p.note ? "<br>" : ""}${credit(p)}</figcaption></figure>`;
      }).join("")}</div></div>`).join("");
  }

  fetch("foto/index.json", {cache: "no-cache"})
    .then(r => (r.ok ? r.json() : {photos: []}))
    .catch(() => ({photos: []}))
    .then(meta => {
      PHOTOS = meta.photos || [];
      renderGallery(meta);
      renderTech();
      renderEvents();
      return fetch("data/posadky.json", {cache: "no-cache"}).then(r => r.json());
    })
    .then(initUnits)
    .catch(e => { console.error(e); $("#lmap").innerHTML = '<p class="empty">Seznam posádek se nepodařilo načíst.</p>'; });
})();
