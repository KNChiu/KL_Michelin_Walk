/* ============================================================
   渲染邏輯 — 讀取 data.js 的 GUIDE 物件產生頁面
   一般維護不需要動這個檔案
   ============================================================ */
(function () {
  const D = window.GUIDE;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const gmaps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

  /* ---------- hero & marquee & nav ---------- */
  document.title = D.meta.title;
  document.querySelector(".kicker").innerHTML = `<span class="dot"></span>${esc(D.meta.kicker)}`;
  document.querySelector(".hero h1").innerHTML = D.meta.h1;
  document.querySelector(".hero .sub").textContent = D.meta.sub;
  document.getElementById("hero-stats").innerHTML = D.meta.stats
    .map(([b, t]) => `<span><b>${esc(b)}</b>&ensp;${esc(t)}</span>`).join("");
  document.getElementById("nav-links").innerHTML =
    `<a href="#zones">六大區域</a>` +
    D.zones.map((z) => `<a href="#${z.id}">${esc(z.num)} ${esc(z.zh.split("・")[0].replace("老城區", "老城區"))}</a>`).join("") +
    `<a href="#tips">實用攻略</a>`;

  const mq = document.getElementById("mq");
  const items = D.meta.marquee.map((t) => `<span>${esc(t)}</span>`).join("");
  mq.innerHTML = items + items; // duplicate for seamless loop

  /* ---------- zone index ---------- */
  const zonesIndex = `
  <section id="zones">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-num">N°1</div>
        <h2 class="sec-title">六大區域總覽<small>Six Zones, Six Maps</small></h2>
      </div>
      <div class="zones-grid">
        ${D.zones.map((z) => `
        <a class="zone-card reveal" href="#${z.id}">
          <div class="count">${z.stops.length + (z.legacy ? z.legacy.length : 0)}</div>
          <div class="zn">${esc(z.num)}</div>
          <h3>${esc(z.zh)}</h3>
          <div class="zen">${esc(z.en)}</div>
          <p>${esc(z.brief)}</p>
        </a>`).join("")}
      </div>
      <p class="zone-note">✺ 每區一張手繪示意圖（非按比例）；站點編號與下方卡片對應。地圖顏色：<b style="color:var(--chili)">紅點＝必比登推介</b>、<b style="color:var(--amber)">金圈＝老店情懷（曾入選）</b>、綠虛線＝地標。</p>
    </div>
  </section>`;

  /* ---------- map renderer ---------- */
  let gridSeq = 0;
  function renderMap(map) {
    const gid = "gridz" + (++gridSeq);
    const decor = map.decor.map((d) => {
      if (d.k === "road") {
        return `<path d="${d.d}" fill="none" stroke="rgba(232,221,198,.15)" stroke-width="16" stroke-linecap="round"/>` +
          (d.label ? `<text x="${d.lx}" y="${d.ly}" fill="rgba(207,195,168,.55)" font-size="11" letter-spacing="2">${esc(d.label)}</text>` : "");
      }
      if (d.k === "text") {
        return d.t ? `<text x="${d.x}" y="${d.y}" fill="rgba(207,195,168,.5)" font-size="11" letter-spacing="2">${esc(d.t)}</text>` : "";
      }
      if (d.k === "rect") {
        return `<rect x="${d.x}" y="${d.y}" width="${d.w}" height="${d.h}" rx="8" fill="none" stroke="#33684a" stroke-width="2.5" stroke-dasharray="5 4" transform="rotate(${d.rot || 0} ${d.x + d.w / 2} ${d.y + d.h / 2})"/>` +
          (d.label ? `<text x="${d.lx}" y="${d.ly}" fill="#8fc9a5" font-size="${d.label.length > 4 ? 11 : 12}" font-weight="700" text-anchor="middle">${esc(d.label)}</text>` : "") +
          (d.sub ? `<text x="${d.slx}" y="${d.sly}" fill="rgba(207,195,168,.5)" font-size="10" text-anchor="middle" letter-spacing="1">${esc(d.sub)}</text>` : "");
      }
      return "";
    }).join("");

    const nodes = map.nodes.map((n) => {
      const dot = n.t === "bib"
        ? `<circle cx="${n.x}" cy="${n.y}" r="15" fill="#c23a20"/><text x="${n.x}" y="${n.y + 5}" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">${esc(n.n)}</text>`
        : `<circle cx="${n.x}" cy="${n.y}" r="13" fill="none" stroke="#d8b36a" stroke-width="2.5" stroke-dasharray="3 3"/><text x="${n.x}" y="${n.y + 4.5}" fill="#d8b36a" font-size="12" font-weight="700" text-anchor="middle">${esc(n.n)}</text>`;
      const labY = n.d === "above" ? n.y - 30 : n.y + 35;
      const subY = n.d === "above" ? labY - 18 : labY + 18;
      const lab = `<text x="${n.x}" y="${labY}" fill="${n.t === "bib" ? "#efe6d2" : "#cfc3a8"}" font-size="12" font-weight="700" text-anchor="middle">${esc(n.l)}</text>`;
      const sub = n.s ? `<text x="${n.x}" y="${subY}" fill="#b9ab8d" font-size="10" text-anchor="middle" letter-spacing="1">${esc(n.s)}</text>` : "";
      return dot + lab + sub;
    }).join("");

    return `
    <div class="map-box reveal">
      <svg viewBox="${map.vb}" role="img" aria-label="區域示意圖">
        <defs><pattern id="${gid}" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="rgba(216,179,106,.12)" stroke-width="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#${gid})"/>
        ${decor}${nodes}
        <text x="870" y="${map.vb.split(" ")[3] - 15}" fill="rgba(207,195,168,.4)" font-size="10" text-anchor="end" letter-spacing="2">SCHEMATIC — NOT TO SCALE</text>
      </svg>
      <div class="map-legend">
        <span><i style="background:#c23a20"></i>必比登推介</span>
        <span><i style="background:none;border:2.5px dashed #d8b36a"></i>老店情懷（曾入選）</span>
        <span><i style="background:none;border:2.5px dashed #33684a"></i>地標／樞紐</span>
      </div>
    </div>`;
  }

  /* ---------- dishes ---------- */
  const dishesHtml = (dishes) => `<ul class="dishes">${
    dishes.map(([name, sub, price]) =>
      `<li><b>${esc(name)}</b>${sub ? `<small>${esc(sub)}</small>` : ""}<span class="price">${esc(price)}</span></li>`).join("")
  }</ul>`;

  /* ---------- full stop card ---------- */
  const fullStop = (st) => `
  <article class="stop reveal">
    <div class="left">
      <div class="idx">${esc(st.num)}</div>
      <div class="badge ${st.badge}">${st.badge === "bib" ? "必比登推介 BIB GOURMAND" : "老店情懷"}</div>
      <div class="zh">${esc(st.zh)}</div>
      <div class="en">${esc(st.en)}</div>
      <div class="meta">
        <b>位置</b> ${esc(st.addr)}<br>
        <b>時段</b> ${esc(st.hours)}<br>
        <b>價位</b> ${esc(st.price || "—")}
      </div>
      <a class="maplink" href="${gmaps(st.q)}" target="_blank" rel="noopener">◎ Google Maps ↗</a>
    </div>
    <div class="right">
      <div class="stamp">${st.badge === "bib" ? "米其林<br>必比登<br>推介" : "曾獲必比登<br>推介"}</div>
      ${dishesHtml(st.dishes)}
      <p>${esc(st.story)}</p>
      <div class="tip"><b>小提醒：</b>${esc(st.tip)}</div>
    </div>
  </article>`;

  /* ---------- mini card ---------- */
  const miniStop = (st) => `
  <article class="mini reveal${st.badge === "legacy" ? " legacy" : ""}">
    <div class="top"><span class="num">${esc(st.num)}</span><span class="zh">${esc(st.zh)}</span>
      <span class="badge ${st.badge}">${st.badge === "bib" ? "必比登" : "曾獲必比登"}</span></div>
    <div class="en">${esc(st.en)}</div>
    ${st.addr ? `<div class="addr">${esc(st.addr)}</div>` : ""}
    ${st.hours ? `<div class="hours">${esc(st.hours)}</div>` : ""}
    ${dishesHtml(st.dishes)}
    ${st.note ? `<p class="note">${esc(st.note)}</p>` : ""}
    <a class="maplink" href="${gmaps(st.q)}" target="_blank" rel="noopener">◎ Google Maps ↗</a>
  </article>`;

  /* ---------- zone section ---------- */
  const zoneSec = (z) => `
  <section class="zone-sec${z.alt ? " alt" : ""}" id="${z.id}">
    <div class="wrap">
      <div class="zone-head">
        <div class="sec-num">${esc(z.num)}</div>
        <h2>${esc(z.zh)}<small>${esc(z.en)}</small></h2>
        <div class="zone-chip">${esc(z.chip)}</div>
      </div>
      ${renderMap(z.map)}
      ${z.stops.map((s) => (s.s === "full" ? fullStop(s) : miniStop(s))).join("")}
      ${z.legacy ? `
        <div class="sec-head" style="margin-top:3rem">
          <div class="sec-num">${esc(z.num)}+</div>
          <h2 class="sec-title" style="font-size:clamp(1.2rem,2.4vw,1.6rem)">老店情懷<small>Old Guard — 曾入選必比登的老味道</small></h2>
        </div>
        <p style="color:var(--ink-soft);font-size:.85rem;max-width:52em;margin-bottom:1.4rem">${esc(z.legacyIntro)}</p>
        <div class="mini-grid">${z.legacy.map(miniStop).join("")}</div>` : ""}
    </div>
  </section>`;

  /* ---------- tips ---------- */
  const tipsSec = `
  <section class="tips" id="tips">
    <div class="wrap">
      <div class="sec-head">
        <div class="sec-num">N°2</div>
        <h2 class="sec-title">實用攻略<small>Field Notes</small></h2>
      </div>
      <div class="tips-grid">
        ${D.tips.map(([h, p]) => `
        <div class="tip-card reveal">
          <h3><span class="ico">✺</span>${esc(h)}</h3>
          <p>${esc(p)}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>`;

  /* ---------- mount ---------- */
  document.getElementById("app").innerHTML = zonesIndex + D.zones.map(zoneSec).join("") + tipsSec;
  document.getElementById("foot").innerHTML = `<div class="wrap">
    <div>${D.meta.footer.left}</div>
    <div style="text-align:right">${D.meta.footer.right}</div></div>`;

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });
})();
