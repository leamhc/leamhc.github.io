// Home page: the chart filter sentence, the six-then-all grids and Pac-Man. Needs js/look.js first.
(() => {
  // Projects, posts and photos come from Jekyll (see _layouts/home.html).
  const { projects: PROJECTS, work: WORK, photos: PHOTOS } = window.HOME;
  const WORDS = {
    topic: [["all", "anything"], ["money", "money"], ["politics", "politics"], ["music", "music"], ["life", "everyday life"]],
    tool: [["all", "any tool"], ["R", "R"], ["D3.js", "D3.js"], ["Illustrator", "Illustrator"], ["Flourish", "Flourish"]],
  };
  const pick = { topic: "all", tool: "all" };
  const { still, watch } = window.LOOK;
  const $ = (s) => document.querySelector(s);

  // The fill-in sentence: tap a word, its choices open underneath.
  const choices = $("[data-choices]");
  let openKey = null;
  const closeWord = () => { openKey = null; choices.classList.remove("open"); document.querySelectorAll(".w").forEach((w) => w.classList.remove("open")); };
  document.querySelectorAll(".w").forEach((w) => w.addEventListener("click", () => {
    const key = w.dataset.key;
    if (openKey === key) return closeWord();
    closeWord(); openKey = key; w.classList.add("open");
    choices.innerHTML = WORDS[key].map(([v, label], i) => `<button type="button" style="--i:${i}" data-v="${v}" class="${pick[key] === v ? "on" : ""}">${label}</button>`).join("");
    requestAnimationFrame(() => choices.classList.add("open"));
  }));
  const setWord = (key, v) => {
    pick[key] = v;
    const span = $(`.w[data-key="${key}"] span`);
    span.textContent = WORDS[key].find(([k]) => k === v)[1];
    span.classList.remove("swap"); void span.offsetWidth; span.classList.add("swap");
  };
  choices.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    setWord(openKey, b.dataset.v); closeWord(); draw();
  });
  $("[data-reset]").addEventListener("click", () => { setWord("topic", "all"); setWord("tool", "all"); draw(); });

  // Every grid shows six until its "show all" word is pressed.
  const SHOWN = 6;
  const open = { work: false, charts: false, photos: false };
  const media = (img, alt) => img.endsWith(".mp4")
    ? `<video ${still.matches ? "" : "autoplay"} muted loop playsinline preload="metadata" aria-label="${alt}"><source src="${img}" type="video/mp4"></video>`
    : `<img src="${img}" alt="${alt}" loading="lazy" decoding="async">`;
  const card = (c, i, from) => `
    <li class="item reveal${i < from ? " seen" : ""}${c.photo ? " photo" : ""}" style="--d:${(i % 3) * 80}ms"><a href="${c.url}"${c.photo ? ` data-photo="${i}"` : ""}>
      <div class="pic">${media(c.img, c.t)}</div>
      <h3><span>${c.t}</span></h3>
      <p>${c.sub}</p>
    </a></li>`;
  const LISTS = {
    work: () => WORK.map((w) => ({ ...w, sub: w.date })),
    charts: () => PROJECTS
      .filter((p) => (pick.topic === "all" || p.topic === pick.topic) && (pick.tool === "all" || p.tools.includes(pick.tool)))
      .map((p) => ({ ...p, sub: `${p.kind}, made with ${p.tools.join(" and ")}` })),
    photos: () => PHOTOS.map((p) => ({ ...p, url: p.img, photo: true })),
  };
  // `from` is the first card that's new on screen, so only new ones ease in.
  function draw(key = "charts", from = 0) {
    const list = LISTS[key]();
    const shown = open[key] ? list : list.slice(0, SHOWN);
    const grid = $(`[data-grid="${key}"]`);
    grid.innerHTML = shown.map((c, i) => card(c, i, from)).join("");
    watch(grid);
    const t = $(`[data-toggle="${key}"]`);
    t.hidden = list.length <= SHOWN;
    t.innerHTML = `<button class="w${open[key] ? " open" : ""}" type="button"><span>${open[key] ? "Show fewer" : `Show all ${list.length}`}</span></button>`;
    if (key === "charts") {
      $("[data-count]").textContent = list.length === PROJECTS.length ? `All ${list.length}.` : `${list.length} of ${PROJECTS.length}.`;
      $("[data-empty]").hidden = list.length > 0;
    }
  }
  document.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", (e) => {
    if (!e.target.closest("button")) return;
    const key = t.dataset.toggle;
    open[key] = !open[key];
    draw(key, open[key] ? SHOWN : 0);
    if (!open[key]) document.getElementById(key).scrollIntoView({ behavior: still.matches ? "auto" : "smooth" });
  }));
  draw("work"); draw("charts"); draw("photos");

  // Photos open large over the page, with their full caption; arrows step through them.
  (() => {
    const box = document.createElement("div");
    box.className = "lightbox"; box.hidden = true;
    box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Photo");
    box.innerHTML = `
      <button class="circle lb-close" type="button" aria-label="Close">✕</button>
      <button class="circle lb-step lb-prev" type="button" aria-label="Previous photo">←</button>
      <figure><img alt=""><figcaption><b></b> <span></span></figcaption></figure>
      <button class="circle lb-step lb-next" type="button" aria-label="Next photo">→</button>`;
    document.body.append(box);
    const img = box.querySelector("img"), date = box.querySelector("b"), line = box.querySelector("figcaption span");
    let at = 0, back = null;
    const show = (i) => {
      at = (i + PHOTOS.length) % PHOTOS.length;
      const p = PHOTOS[at];
      img.src = p.img; img.alt = p.sub; date.textContent = p.t; line.textContent = p.sub;
      box.querySelector("figure").classList.remove("swap"); void box.offsetWidth; box.querySelector("figure").classList.add("swap");
    };
    const open = (i, from) => {
      back = from; show(i);
      box.hidden = false; box.classList.remove("leaving");
      document.documentElement.style.overflow = "hidden";
      box.querySelector(".lb-close").focus();
    };
    const shut = () => {
      const done = () => { box.hidden = true; box.classList.remove("leaving"); document.documentElement.style.overflow = ""; back?.focus(); };
      if (still.matches) return done();
      box.classList.add("leaving"); setTimeout(done, 200);
    };
    $('[data-grid="photos"]').addEventListener("click", (e) => {
      const a = e.target.closest("[data-photo]"); if (!a) return;
      e.preventDefault(); open(+a.dataset.photo, a);
    });
    box.querySelector(".lb-close").addEventListener("click", shut);
    box.querySelector(".lb-prev").addEventListener("click", () => show(at - 1));
    box.querySelector(".lb-next").addEventListener("click", () => show(at + 1));
    box.addEventListener("click", (e) => { if (e.target === box) shut(); });
    addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") shut(); else if (e.key === "ArrowLeft") show(at - 1); else if (e.key === "ArrowRight") show(at + 1);
    });
  })();

  // Pac-Man bounces around the space under the words.
  (() => {
    const pac = $("[data-pacman]"), hero = $("[data-hero]");
    const wide = matchMedia("(min-width: 900px)");
    let x = 0, y = 0, vx = 90, vy = 56, last = null, placed = false;
    // Hero coordinates: the space under the words, left of the photo.
    const text = $("[data-hero-text]");
    const box = () => {
      const s = pac.offsetWidth || 36, h = hero.clientHeight;
      const maxY = h - s - 8, minY = Math.min(text.offsetTop + text.offsetHeight + 16, maxY - 40);
      return { minX: 0, maxX: text.offsetWidth - s, minY, maxY };
    };
    const place = () => { pac.style.transform = `translate(${x}px, ${y}px) scaleX(${vx >= 0 ? 1 : -1})`; };
    const step = (ts) => {
      if (!wide.matches) { last = null; return requestAnimationFrame(step); }
      const b = box();
      if (!placed || x < b.minX || x > b.maxX || y < b.minY || y > b.maxY) {
        x = b.minX + (b.maxX - b.minX) * 0.3; y = b.minY + (b.maxY - b.minY) * 0.4; placed = true;
      }
      if (still.matches) { place(); return; }
      const dt = last === null ? 0 : Math.min((ts - last) / 1000, 0.05); last = ts;
      x += vx * dt; y += vy * dt;
      if (x <= b.minX) { x = b.minX; vx = Math.abs(vx); } else if (x >= b.maxX) { x = b.maxX; vx = -Math.abs(vx); }
      if (y <= b.minY) { y = b.minY; vy = Math.abs(vy); } else if (y >= b.maxY) { y = b.maxY; vy = -Math.abs(vy); }
      place();
      requestAnimationFrame(step);
    };
    addEventListener("resize", () => { placed = false; last = null; if (still.matches) requestAnimationFrame(step); });
    requestAnimationFrame(step);
  })();

})();
