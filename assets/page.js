/* Společné funkce pro podstránky (mise.html, prumysl.html, tyden/): fotky, prohlížeč, dlaždice s čísly. */
(function () {
  const P = (window.PAGE = {});
  P.$ = s => document.querySelector(s);
  P.esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  const esc = P.esc;
  P.root = document.documentElement.dataset.root || "";
  P.src = (S, k, txt) => {
    if (!k) return "";
    const s = S[k];
    return s ? `<a href="${s[1]}" target="_blank" rel="noopener" title="${esc(s[0])}">${txt || "zdroj"} ↗</a>` : "";
  };
  P.PHOTOS = [];
  P.byKey = k => P.PHOTOS.filter(p => p.key === k);
  const credit = p => `${esc(p.author)} · <a href="${p.licenseUrl || p.source}" target="_blank" rel="noopener">${esc(p.license)}</a> · <a href="${p.source}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
  P.credit = credit;
  P.lightbox = (key, start) => {
    const set = P.byKey(key);
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
        `<figure><img src="${P.root}foto/${p.file}" alt="${esc(p.label)}"><figcaption><b>${esc(p.label)}</b>${set.length > 1 ? ` · ${i + 1} / ${set.length}` : ""}${p.note ? " – " + esc(p.note) : ""}<br>${credit(p)}</figcaption></figure>`;
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
  };
  window.ACR_LB = (k, i) => P.lightbox(k, i);
  /* hlavní fotka jako náhled (jen tam, kde se fotka na webu jinde nezobrazuje) */
  P.photoCard = key => {
    const set = P.byKey(key);
    if (!set.length) return "";
    const p = set[0];
    return `<button type="button" class="card-img" onclick="ACR_LB('${key}',0)" aria-label="Fotky: ${esc(p.label)}"><img src="${P.root}foto/${p.file}" alt="${esc(p.label)}" loading="lazy"></button><div class="small">${set.length > 1 ? `${set.length} fotek · ` : ""}${credit(p)}</div>`;
  };
  P.photoLink = key => { const n = P.byKey(key).length; return n ? `<button type="button" class="plink" onclick="ACR_LB('${key}')">fotky (${n})</button>` : ""; };
  P.kpi = (el, list, S) => {
    el.innerHTML = list.map(k => `<div class="stat"><span class="lbl">${esc(k.lbl)}</span><span class="v">${esc(k.v)}</span><span class="d">${esc(k.d)}</span><span class="src">${esc(k.date)} · ${P.src(S, k.src)}</span></div>`).join("");
  };
  P.ready = fetch(P.root + "foto/index.json", {cache: "no-cache"})
    .then(r => (r.ok ? r.json() : {photos: []}))
    .catch(() => ({photos: []}))
    .then(m => { P.PHOTOS = m.photos || []; return P; });
  document.querySelectorAll("[data-updated]").forEach(e => (e.textContent = (window.MISE || window.PRU || {}).UPDATED || ""));
})();
