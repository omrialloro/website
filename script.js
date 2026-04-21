const data = {
  sections: {
    "selected drawings": [
      { image: "selected drawings/1.png", title: "Selected Drawing 1" },
      { image: "selected drawings/2.png", title: "Selected Drawing 2" },
      { image: "selected drawings/3.png", title: "Selected Drawing 3" },
      { image: "selected drawings/4.png", title: "Selected Drawing 4" },
      { image: "selected drawings/5.png", title: "Selected Drawing 5" },
      { image: "selected drawings/6.png", title: "Selected Drawing 6" },
      { image: "selected drawings/7.png", title: "Selected Drawing 7" },
      { image: "selected drawings/8.png", title: "Selected Drawing 8" },
      { image: "selected drawings/9.png", title: "Selected Drawing 9" },
      { image: "selected drawings/10.png", title: "Selected Drawing 10" },
      { image: "selected drawings/11.png", title: "Selected Drawing 11" },
      { image: "selected drawings/12.png", title: "Selected Drawing 12" },
      { image: "selected drawings/13.png", title: "Selected Drawing 13" },
      { image: "selected drawings/14.png", title: "Selected Drawing 14" },
      { image: "selected drawings/15.png", title: "Selected Drawing 15" },
    ],
    "web projects": [
      {
        name: "dontLookBack",
        text: "DontLookBack is a software project, co-created with Alma Alloro. It is a web-based tool developed through artistic research, aiming to find new ways of creating digital visuals and moving image art that carries qualities of materiality.\n\nWith its inherent simplicity, derived from a small set of operations, it offers a way to explore creativity and expression under constraints, experiencing the potential that emerges from working with limitations.\n\nIt is an attempt to continue a line of ideas from movements such as Oulipo and Fluxus, and from the demoscene.\n\nAt the moment, the tool consists of two interfaces: one for creating clips, and another for playing and manipulating them live - either for VJ performance or for editing video clips. This makes the tool a self-contained environment, defined by its own distinct and cohesive aesthetic system.",
        images: ["dlb/1.png", "dlb/2.png"],
        videos: [
          {
            url: "https://www.youtube.com/watch?v=2GtdTi_y1PQ",
            text: "Overview of the dontLookBack interface and clip creation workflow.",
          },
          {
            url: "videos/pixel-vj-demo.mp4",
            text: "Live performance demo recorded at a VJ session.",
          },
        ],
        gifs: [
          "gifs/1.gif",
          "gifs/2.gif",
          "gifs/3.gif",
          "gifs/4.gif",
          "gifs/5.gif",
          "gifs/6.gif",
          "gifs/7.gif",
          "gifs/8.gif",
          "gifs/9.gif",
          "gifs/10.gif",
          "gifs/11.gif",
          "gifs/12.gif",
          "gifs/13.gif",
          "gifs/14.gif",
          "gifs/15.gif",
          "gifs/16.gif",
        ],
      },
      {
        name: "Time To Space",
        text: "A web-based tool for creating and performing pixel animations in real time.",
        images: ["images/pixel-vj/1.png", "images/pixel-vj/2.png"],
        videos: [
          {
            url: "https://www.youtube.com/watch?v=xxxx",
            text: "Walkthrough of the Time To Space animation editor.",
          },
          {
            url: "videos/pixel-vj-demo.mp4",
            text: "Real-time pixel animation performance clip.",
          },
        ],
      },
    ],
    exhibitions: [
      {
        name: "The RGB Of The Smoothie",
        date: "2025",
        place: "Petach Tikva Art Museum",
        text: "Group exhibition exploring data-driven artistic practices.",
        images: [
          "The RGB Of The Smoothie/1.jpg",
          "The RGB Of The Smoothie/2.jpeg",
        ],
        videos: [
          {
            url: "https://www.youtube.com/watch?v=9xuKhjcrX-Y",
            text: "Walkthrough of the RGB Of The Smoothie installation.",
          },
        ],
      },
      {
        name: "Acid Knobs",
        date: "2025",
        place: "Hamachbesa Gallery, Gesher Haziv",
        text: "Group exhibition exploring data-driven artistic practices.",
        images: ["Acid Knobs/1.png", "Acid Knobs/2.png", "Acid Knobs/3.png"],
        videos: [],
      },
      {
        name: "A Vibrating Armchair",
        date: "2024",
        place: "A Popup Exhibition, Minhal Handasa Building, Haifa",
        text: "Group exhibition exploring data-driven artistic practices.",
        images: [
          "vibrating armchair/1.jpg",
          "vibrating armchair/2.jpg",
          "vibrating armchair/3.jpg",
        ],
        videos: [
          {
            url: "vibrating armchair/DSC_0094.mov",
            text: "Documentation footage from the exhibition opening.",
          },
          {
            url: "https://www.youtube.com/watch?v=db4p8z4aEZE",
            text: "Full walkthrough of the Vibrating Armchair installation.",
          },
        ],
      },
      {
        name: "silk road",
        date: "2023",
        place: "Hagada Hasmalit, Tel Aviv",
        text: "Group exhibition exploring data-driven artistic practices.",
        images: [
          "silk road/1.jpg",
          "silk road/2.jpg",
          "silk road/3.jpg",
          "silk road/4.jpg",
          "silk road/5.jpg",
          "silk road/6.jpg",
          "silk road/7.jpg",
          "silk road/8.jpg",
          "silk road/9.jpg",
          "silk road/10.jpg",
          "silk road/11.jpg",
          "silk road/12.jpg",
          "silk road/13.jpg",
          "silk road/14.jpg",
        ],
        videos: [],
      },
    ],
    Music: [],
    Courses: [],
    bio: {
      text: "A multidisciplinary artist, algorithm designer, and web developer. My academic background is in mathematics, while my practice has always been rooted in art, including painting, writing, music, and, in recent years, digital art.\n\nIn recent years, I have begun integrating my work as an algorithm designer and web developer into code-based artistic projects. I also teach creative coding and robotics, working with students on the intersection of technology and artistic practice. I am currently engaged in research and development of creative interfaces that explore the material qualities of digital creation.\n\nAlthough I work across different fields, the underlying thread in my practice is a search for a free, intuitive, and spontaneous line, one that gives rise to the unexpected and continues to surprise me.",
    },
    social: {
      github: "https://github.com/omrialloro",
      instagram: "https://www.instagram.com/omrialloro/",
      linkedin: "https://www.linkedin.com/in/omri-alloro-b0184bb9/",
    },
  },
};

const app = document.getElementById("app");
const siteHeader = document.getElementById("site-header");

const isMobile = () => window.innerWidth <= 700;

// ─── URL / slug helpers ───────────────────────────────────────────────────────

function toSlug(str) {
  return str.toLowerCase().trim().replace(/\s+/g, "-");
}

function getURLState() {
  const params = new URLSearchParams(window.location.search);
  return {
    section: params.get("section") || null,
    item: params.get("item") || null,
    img: params.get("img") || null,
  };
}

function setURLState({ section, item, img } = {}, { replace = false } = {}) {
  const params = new URLSearchParams();
  if (section) params.set("section", toSlug(section));
  if (item) params.set("item", toSlug(item));
  if (img !== undefined && img !== null) params.set("img", img);

  const query = params.toString();
  const url = query ? `?${query}` : window.location.pathname;

  if (replace) {
    history.replaceState({ section, item, img }, "", url);
  } else {
    history.pushState({ section, item, img }, "", url);
  }
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

let lightboxEl = null;

function createLightbox() {
  if (lightboxEl) return;

  lightboxEl = document.createElement("div");
  lightboxEl.id = "lightbox";
  lightboxEl.innerHTML = `
    <div id="lightbox-backdrop"></div>
    <button id="lightbox-close">✕</button>
    <div id="lightbox-inner">
      <img id="lightbox-img" src="" alt="" />
    </div>
  `;

  document.body.appendChild(lightboxEl);

  lightboxEl.querySelector("#lightbox-backdrop").onclick = closeLightbox;
  lightboxEl.querySelector("#lightbox-close").onclick = closeLightbox;

  const style = document.createElement("style");
  style.textContent = `
    #lightbox {
      position: fixed;
      inset: 0;
      z-index: 9000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }
    #lightbox.open {
      opacity: 1;
      pointer-events: auto;
    }
    #lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      cursor: zoom-out;
    }
    #lightbox-inner {
      position: relative;
      z-index: 1;
      max-width: 92vw;
      max-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #lightbox-img {
      max-width: 92vw;
      max-height: 90vh;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.6);
      transform: scale(0.96);
      transition: transform 0.25s ease;
      display: block;
    }
    #lightbox.open #lightbox-img {
      transform: scale(1);
    }
    #lightbox-close {
      position: fixed;
      top: 16px;
      right: 20px;
      z-index: 2;
      background: none;
      border: none;
      color: rgba(255,255,255,0.85);
      font-size: 28px;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      transition: color 0.15s ease, transform 0.15s ease;
    }
    #lightbox-close:hover {
      color: #fff;
      transform: scale(1.15);
    }
  `;
  document.head.appendChild(style);
}

function openLightbox(src, { section, item, imgIndex }) {
  createLightbox();
  const imgEl = lightboxEl.querySelector("#lightbox-img");
  imgEl.src = src;

  requestAnimationFrame(() => {
    lightboxEl.classList.add("open");
  });

  setURLState({ section, item, img: imgIndex });
}

function closeLightbox() {
  if (!lightboxEl || !lightboxEl.classList.contains("open")) return;
  lightboxEl.classList.remove("open");

  const { section, item } = getURLState();
  setURLState({ section, item }, { replace: true });
}

function closeLightboxSilent() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("open");
}

// ─── DOM helpers ─────────────────────────────────────────────────────────────

function createEl(tag, className = "", text = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function renderParagraphs(text, container) {
  if (!text) return;
  text.split("\n\n").forEach((p) => {
    container.appendChild(createEl("p", "", p));
  });
}

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (parsed.pathname.startsWith("/embed/")) {
        const id = parsed.pathname.split("/embed/")[1];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {}
  return null;
}

function animateOpen(el) {
  el.classList.add("open");
  el.style.height = "var(--subsec-max-height)";
}

function animateClose(el) {
  el.style.height = "0px";
  requestAnimationFrame(() => el.classList.remove("open"));
}

function addSubsectionTitle(container, title) {
  removeSubsectionTitle(container);
  container.querySelector(".dlb-strip-wrap")?.remove();

  const heading = createEl("h2", "subsection-title", title);

  if (container.dataset.dlbGifs) {
    const gifs = JSON.parse(container.dataset.dlbGifs);
    const strip = renderDLBStrip(gifs);
    strip.classList.add("dlb-strip-wrap");
    container.prepend(heading);
    container.prepend(strip);
  } else {
    container.prepend(heading);
  }
}

function removeSubsectionTitle(container) {
  container.querySelector(".subsection-title")?.remove();
}

// ─── Section shell ────────────────────────────────────────────────────────────

function createSectionShell(title) {
  const section = createEl("section", "main-section");
  section.dataset.sectionSlug = toSlug(title);

  const header = createEl("button", "section-toggle");
  header.innerHTML = `<span>${title}</span>`;
  header.setAttribute("aria-expanded", "false");

  const body = createEl("div", "section-body");

  header.onclick = () => {
    const open = header.getAttribute("aria-expanded") === "true";
    const nowOpen = !open;
    header.setAttribute("aria-expanded", String(nowOpen));
    body.classList.toggle("open", nowOpen);

    if (nowOpen) {
      setURLState({ section: title });
    } else {
      closeAllItems({ silent: true });
      setURLState({});
    }
  };

  section.appendChild(header);
  section.appendChild(body);

  return { section, body, header };
}

// ─── Item toggle ──────────────────────────────────────────────────────────────

function createItemToggle(title, sectionTitle) {
  const wrapper = createEl("article", "item");
  wrapper.dataset.itemSlug = toSlug(title);

  const toggle = createEl("button", "item-toggle");
  toggle.innerHTML = `<span>${title}</span>`;
  toggle.setAttribute("aria-expanded", "false");

  const body = createEl("div", "item-body");
  body.style.height = "0px";

  toggle.onclick = () => {
    const open = toggle.getAttribute("aria-expanded") === "true";

    if (open) {
      closeItem(wrapper, body, toggle);
      setURLState({ section: sectionTitle });
      return;
    }

    closeAllItems({ silent: true });
    openItem(wrapper, body, toggle, title, sectionTitle);
    setURLState({ section: sectionTitle, item: title });
  };

  wrapper.appendChild(toggle);
  wrapper.appendChild(body);

  return { wrapper, body, toggle };
}

// ─── Animated app frame (for dontLookBack) ───────────────────────────────────

let appFrameCanvas = null;
let appFrameRaf = null;
let appFrameExpanded = false;
let appFrameExpandStart = null;

const FRAME_GREEN_R = 0,
  FRAME_GREEN_G = 255,
  FRAME_GREEN_B = 60;
const FRAME_RED_R = 255,
  FRAME_RED_G = 40,
  FRAME_RED_B = 90;
const FRAME_DELTA = 40;
const FRAME_EXPAND_DURATION = 700;

function flickerColor(r, g, b) {
  const d = FRAME_DELTA;
  return [
    Math.round(Math.max(0, Math.min(255, r + (Math.random() * 2 - 1) * d))),
    Math.round(Math.max(0, Math.min(255, g + (Math.random() * 2 - 1) * d))),
    Math.round(Math.max(0, Math.min(255, b + (Math.random() * 2 - 1) * d))),
  ];
}

function drawAppFrame(ts) {
  if (!appFrameCanvas) return;

  const rect = app.getBoundingClientRect();
  const W = Math.round(rect.width);
  const H = Math.round(rect.height);

  appFrameCanvas.style.left = rect.left + "px";
  appFrameCanvas.style.top = rect.top + "px";
  appFrameCanvas.style.width = W + "px";
  appFrameCanvas.style.height = H + "px";

  if (appFrameCanvas.width !== W || appFrameCanvas.height !== H) {
    appFrameCanvas.width = W;
    appFrameCanvas.height = H;
  }

  if (!appFrameExpanded) {
    if (!appFrameExpandStart) appFrameExpandStart = ts;
    const t = Math.min(1, (ts - appFrameExpandStart) / FRAME_EXPAND_DURATION);
    const eased = 1 - Math.pow(1 - t, 3);
    if (t >= 1) appFrameExpanded = true;
    drawFrameLines(appFrameCanvas, W, H, eased);
  } else {
    drawFrameLines(appFrameCanvas, W, H, 1);
  }

  appFrameRaf = requestAnimationFrame(drawAppFrame);
}

function drawFrameLines(canvas, W, H, progress) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, W, H);

  const perimeter = 2 * (W + H);
  const drawLen = perimeter * progress;

  const [r1, g1, b1] = flickerColor(
    FRAME_GREEN_R,
    FRAME_GREEN_G,
    FRAME_GREEN_B,
  );
  drawPerimeterLine(ctx, W, H, 1, drawLen, [], r1, g1, b1, 6);

  const [r2, g2, b2] = flickerColor(FRAME_RED_R, FRAME_RED_G, FRAME_RED_B);
  drawPerimeterLine(ctx, W, H, 5, drawLen, [6, 5], r2, g2, b2, 4);
}

function drawPerimeterLine(ctx, W, H, inset, maxLen, dash, r, g, b, blur) {
  const i = inset;
  const corners = [
    [i, i],
    [W - i, i],
    [W - i, H - i],
    [i, H - i],
    [i, i],
  ];

  const segments = [];
  for (let s = 0; s < corners.length - 1; s++) {
    const [x0, y0] = corners[s];
    const [x1, y1] = corners[s + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    segments.push({ x0, y0, x1, y1, len });
  }

  ctx.save();
  ctx.beginPath();
  ctx.setLineDash(dash);
  ctx.lineWidth = 1;
  ctx.strokeStyle = `rgb(${r},${g},${b})`;
  ctx.shadowColor = `rgb(${r},${g},${b})`;
  ctx.shadowBlur = blur;

  let remaining = maxLen;
  let started = false;

  for (const seg of segments) {
    if (remaining <= 0) break;
    const drawSeg = Math.min(seg.len, remaining);
    const t = drawSeg / seg.len;
    const ex = seg.x0 + (seg.x1 - seg.x0) * t;
    const ey = seg.y0 + (seg.y1 - seg.y0) * t;

    if (!started) {
      ctx.moveTo(seg.x0, seg.y0);
      started = true;
    }
    ctx.lineTo(ex, ey);
    remaining -= drawSeg;
  }

  ctx.stroke();
  ctx.setLineDash([]);
  ctx.shadowBlur = 0;
  ctx.restore();
}

function startAppFrame() {
  if (appFrameCanvas) return;

  const overlay = document.createElement("div");
  overlay.id = "dlb-overlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: #000;
    opacity: 0;
    z-index: 99;
    pointer-events: none;
    transition: opacity 0.8s ease;
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.opacity = "0.88";
  });

  appFrameCanvas = document.createElement("canvas");
  appFrameCanvas.style.cssText =
    "position:fixed;pointer-events:none;z-index:101;";
  document.body.appendChild(appFrameCanvas);

  app.style.border = "none";

  document.getElementById("site-header").style.transition =
    "background 0.5s ease";
  document.getElementById("site-header").style.background = "rgba(0,0,0,0.95)";

  appFrameExpanded = false;
  appFrameExpandStart = null;
  appFrameRaf = requestAnimationFrame(drawAppFrame);
}

function stopAppFrame() {
  if (!appFrameCanvas) return;
  cancelAnimationFrame(appFrameRaf);
  appFrameCanvas.remove();
  appFrameCanvas = null;
  appFrameRaf = null;
  app.style.border = "";

  const hdr = document.getElementById("site-header");
  hdr.style.transition = "background 0.5s ease";
  hdr.style.background = "";

  const overlay = document.getElementById("dlb-overlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 800);
  }
}

// ─── Drawings full-screen expand ─────────────────────────────────────────────

function startDrawingsExpand() {
  app.classList.add("drawings-fullscreen");
  if (!document.getElementById("drawings-fs-style")) {
    const style = document.createElement("style");
    style.id = "drawings-fs-style";
    style.textContent = `
      #app.drawings-fullscreen {
        left: 0 !important;
        top: var(--header-height) !important;
        width: 100vw !important;
        height: calc(100vh - var(--header-height)) !important;
        border: none !important;
        border-radius: 0 !important;
        background: rgba(10, 20, 20, 0.9) !important;
        transition:
          left 0.5s ease,
          top 0.5s ease,
          width 0.5s ease,
          height 0.5s ease,
          opacity 0.8s ease !important;
      }
      #app.drawings-fullscreen .item-body.open {
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        height: calc(100vh - var(--header-height) - 60px) !important;
      }
    `;
    document.head.appendChild(style);
  }
}

function stopDrawingsExpand() {
  app.classList.remove("drawings-fullscreen");
}

// ─── Open / close primitives ──────────────────────────────────────────────────

function openItem(wrapper, body, toggle, title, sectionTitle = "") {
  toggle.setAttribute("aria-expanded", "true");
  wrapper.classList.add("active-item");
  addSubsectionTitle(body, title);
  animateOpen(body);
  app.classList.add("subsection-open");
  document.body.classList.add("subsection-open");
  if (title === "dontLookBack") startAppFrame();
  if (sectionTitle === "selected drawings") startDrawingsExpand();
  if (sectionTitle === "exhibitions") {
    app.classList.add("exhibitions-open");
    const ov = document.createElement("div");
    ov.id = "exhibitions-overlay";
    ov.style.cssText =
      "position:fixed;inset:0;background:#fff;opacity:0;z-index:99;pointer-events:none;transition:opacity 0.8s ease;";
    document.body.appendChild(ov);
    requestAnimationFrame(() => {
      ov.style.opacity = "0.25";
    });
  }
  requestAnimationFrame(updateAppWidthState);
}

function closeItem(wrapper, body, toggle) {
  toggle.setAttribute("aria-expanded", "false");
  animateClose(body);
  wrapper.classList.remove("active-item");
  removeSubsectionTitle(body);
  app.classList.remove("subsection-open");
  document.body.classList.remove("subsection-open");
  stopAppFrame();
  stopDrawingsExpand();
  app.classList.remove("exhibitions-open");
  const exOv = document.getElementById("exhibitions-overlay");
  if (exOv) {
    exOv.style.opacity = "0";
    setTimeout(() => exOv.remove(), 800);
  }
  requestAnimationFrame(updateAppWidthState);
}

function closeAllItems({ silent = false } = {}) {
  document.querySelectorAll(".item.active-item").forEach((item) => {
    item.classList.remove("active-item");
  });
  document
    .querySelectorAll(".item-toggle[aria-expanded='true']")
    .forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });
  document.querySelectorAll(".item-body.open").forEach((openBody) => {
    animateClose(openBody);
    removeSubsectionTitle(openBody);
  });
  if (!silent) {
    app.classList.remove("subsection-open");
    document.body.classList.remove("subsection-open");
    stopAppFrame();
    stopDrawingsExpand();
    app.classList.remove("exhibitions-open");
    const exOv2 = document.getElementById("exhibitions-overlay");
    if (exOv2) {
      exOv2.style.opacity = "0";
      setTimeout(() => exOv2.remove(), 800);
    }
    requestAnimationFrame(updateAppWidthState);
  }
}

function closeAllSections() {
  document
    .querySelectorAll(".section-toggle[aria-expanded='true']")
    .forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });
  document.querySelectorAll(".section-body.open").forEach((body) => {
    body.classList.remove("open");
  });
}

// ─── Restore state from URL ───────────────────────────────────────────────────

function applyURLState({ section, item, img }) {
  closeLightboxSilent();

  if (img !== null && img !== undefined) {
    const index = parseInt(img, 10);
    if (!isNaN(index) && imageRegistry[index]) {
      createLightbox();
      const imgEl = lightboxEl.querySelector("#lightbox-img");
      imgEl.src = imageRegistry[index];
      requestAnimationFrame(() => lightboxEl.classList.add("open"));
    }
    return;
  }

  closeAllItems({ silent: true });
  closeAllSections();
  app.classList.remove("subsection-open");
  document.body.classList.remove("subsection-open");

  if (!section) {
    updateAppWidthState();
    return;
  }

  const sectionEl = document.querySelector(
    `[data-section-slug="${toSlug(section)}"]`,
  );
  if (!sectionEl) {
    updateAppWidthState();
    return;
  }

  const sectionToggle = sectionEl.querySelector(".section-toggle");
  const sectionBody = sectionEl.querySelector(".section-body");
  sectionToggle.setAttribute("aria-expanded", "true");
  sectionBody.classList.add("open");

  if (!item) {
    updateAppWidthState();
    return;
  }

  const itemEl = sectionEl.querySelector(`[data-item-slug="${toSlug(item)}"]`);
  if (!itemEl) {
    updateAppWidthState();
    return;
  }

  const itemToggle = itemEl.querySelector(".item-toggle");
  const itemBody = itemEl.querySelector(".item-body");
  openItem(itemEl, itemBody, itemToggle, item, section);
}

// ─── popstate (back / forward) ────────────────────────────────────────────────

window.addEventListener("popstate", () => {
  const { section, item, img } = getURLState();
  applyURLState({ section, item, img });
});

// ─── Media rendering ──────────────────────────────────────────────────────────

const imageRegistry = [];

function makeClickableImage(src, sectionTitle, itemTitle) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.style.cursor = "zoom-in";

  const index = imageRegistry.length;
  imageRegistry.push(src);

  img.onclick = () => {
    openLightbox(src, {
      section: sectionTitle,
      item: itemTitle,
      imgIndex: index,
    });
  };

  return img;
}

// ─── Canvas divider ───────────────────────────────────────────────────────────

function createCanvasDivider(sectionTitle = "") {
  const isExhibitions = sectionTitle === "exhibitions";
  const RADIUS = 10;
  const SPACING = RADIUS * 3;
  const canvasH = isExhibitions ? RADIUS + 6 : 24;

  const wrapper = document.createElement("div");
  wrapper.style.cssText = "width:100%;margin:20px 0;";

  const canvas = document.createElement("canvas");
  canvas.height = canvasH;
  canvas.style.cssText = `width:100%;height:${canvasH}px;display:block;`;
  wrapper.appendChild(canvas);

  function resize() {
    const w = canvas.offsetWidth || 600;
    if (canvas.width !== w) canvas.width = w;
  }

  const BASE_R = 0,
    BASE_G = 255,
    BASE_B = 60;
  const BASE_R2 = 255,
    BASE_G2 = 40,
    BASE_B2 = 90;
  const EX_R = 250,
    EX_G = 90,
    EX_B = 160;
  const DELTA = 40;
  const EXPAND_DURATION = 600;

  const FILL_R = 240,
    FILL_G = 70,
    FILL_B = 23;
  const FILL_DELTA = 35;
  const GAP = 2;

  let raf = null;
  let progress = 0;
  let expandStart = null;
  let expanded = false;

  function drawSemicircles(ctx, W, endX) {
    const cy = canvasH;
    const count = Math.floor(endX / SPACING);

    for (let i = 0; i < count; i++) {
      const cx = i * SPACING + SPACING / 2;
      if (cx - RADIUS < 0 || cx + RADIUS > endX) continue;

      const pr = Math.round(
        Math.max(0, Math.min(255, EX_R + (Math.random() * 2 - 1) * DELTA)),
      );
      const pg = Math.round(
        Math.max(0, Math.min(255, EX_G + (Math.random() * 2 - 1) * DELTA)),
      );
      const pb = Math.round(
        Math.max(0, Math.min(255, EX_B + (Math.random() * 2 - 1) * DELTA)),
      );

      ctx.beginPath();
      ctx.arc(cx, cy, RADIUS, Math.PI, 0, false);
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgb(${pr},${pg},${pb})`;
      ctx.shadowColor = `rgb(${pr},${pg},${pb})`;
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const fr = Math.round(
        Math.max(
          0,
          Math.min(255, FILL_R + (Math.random() * 2 - 1) * FILL_DELTA),
        ),
      );
      const fg = Math.round(
        Math.max(
          0,
          Math.min(255, FILL_G + (Math.random() * 2 - 1) * FILL_DELTA),
        ),
      );
      const fb = Math.round(
        Math.max(
          0,
          Math.min(255, FILL_B + (Math.random() * 2 - 1) * FILL_DELTA),
        ),
      );

      ctx.beginPath();
      ctx.arc(cx, cy, RADIUS - GAP - 1, Math.PI, 0, false);
      ctx.lineTo(cx + RADIUS - GAP - 1, cy);
      ctx.lineTo(cx - RADIUS + GAP + 1, cy);
      ctx.closePath();
      ctx.fillStyle = `rgb(${fr},${fg},${fb})`;
      ctx.shadowColor = `rgb(${fr},${fg},${fb})`;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawLines(ctx, W, endX) {
    if (isExhibitions) {
      ctx.clearRect(0, 0, W, canvasH);
      drawSemicircles(ctx, W, endX);
      return;
    }

    const r1 = Math.round(
      Math.max(0, Math.min(255, BASE_R + (Math.random() * 2 - 1) * DELTA)),
    );
    const g1 = Math.round(
      Math.max(0, Math.min(255, BASE_G + (Math.random() * 2 - 1) * DELTA)),
    );
    const b1 = Math.round(
      Math.max(0, Math.min(255, BASE_B + (Math.random() * 2 - 1) * DELTA)),
    );

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(0, 5);
    ctx.lineTo(endX, 5);
    ctx.lineWidth = 1;
    ctx.strokeStyle = `rgb(${r1},${g1},${b1})`;
    ctx.shadowColor = `rgb(${r1},${g1},${b1})`;
    ctx.shadowBlur = 6;
    ctx.stroke();

    const r2 = Math.round(
      Math.max(0, Math.min(255, BASE_R2 + (Math.random() * 2 - 1) * DELTA)),
    );
    const g2 = Math.round(
      Math.max(0, Math.min(255, BASE_G2 + (Math.random() * 2 - 1) * DELTA)),
    );
    const b2 = Math.round(
      Math.max(0, Math.min(255, BASE_B2 + (Math.random() * 2 - 1) * DELTA)),
    );

    ctx.beginPath();
    ctx.setLineDash([6, 5]);
    ctx.moveTo(0, 13);
    ctx.lineTo(endX, 13);
    ctx.lineWidth = 1;
    ctx.strokeStyle = `rgb(${r2},${g2},${b2})`;
    ctx.shadowColor = `rgb(${r2},${g2},${b2})`;
    ctx.shadowBlur = 5;
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
  }

  function draw(ts) {
    resize();
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    if (!expanded) {
      if (!expandStart) expandStart = ts;
      const elapsed = ts - expandStart;
      progress = Math.min(1, elapsed / EXPAND_DURATION);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (progress >= 1) expanded = true;

      ctx.clearRect(0, 0, W, H);
      drawLines(ctx, W, W * eased);
      raf = requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, W, H);
    drawLines(ctx, W, W);
    raf = requestAnimationFrame(draw);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (!raf) {
            expanded = false;
            expandStart = null;
            progress = 0;
            raf = requestAnimationFrame(draw);
          }
        } else {
          if (raf) {
            cancelAnimationFrame(raf);
            raf = null;
          }
        }
      });
    },
    { threshold: 0 },
  );

  observer.observe(canvas);

  return wrapper;
}

function renderMedia(
  images = [],
  videos = [],
  gifs = [],
  sectionTitle = "",
  itemTitle = "",
) {
  const wrap = createEl("div");
  const blocks = [];

  if (gifs.length) {
    const gifGrid = createEl("div", "gif-grid");
    gifs.forEach((src) => {
      const img = makeClickableImage(src, sectionTitle, itemTitle);
      gifGrid.appendChild(img);
    });
    blocks.push(gifGrid);
  }

  if (images.length) {
    const grid = createEl("div", "media-grid");
    images.forEach((src) => {
      const img = makeClickableImage(src, sectionTitle, itemTitle);
      grid.appendChild(img);
    });
    blocks.push(grid);
  }

  if (videos.length) {
    const videosWrap = createEl("div");
    videos.forEach(({ url, text }) => {
      const videoWrap = createEl("div", "video-item");
      if (text) videoWrap.appendChild(createEl("p", "video-caption", text));

      const yt = getYouTubeEmbedUrl(url);
      if (yt) {
        const iframe = document.createElement("iframe");
        iframe.src = yt;
        iframe.width = "100%";
        iframe.height = "315";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoWrap.appendChild(iframe);
      } else {
        const video = document.createElement("video");
        video.src = url;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.controls = false;
        videoWrap.appendChild(video);
      }

      videosWrap.appendChild(videoWrap);
    });
    blocks.push(videosWrap);
  }

  blocks.forEach((block, i) => {
    wrap.appendChild(block);
    if (i < blocks.length - 1) {
      wrap.appendChild(createCanvasDivider(sectionTitle));
    }
  });

  return wrap;
}

// ─── Moodboard ───────────────────────────────────────────────────────────────

function openMoodboard() {
  if (document.getElementById("moodboard-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "moodboard-overlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9500;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
  `;

  const img = document.createElement("img");
  img.src = "architecture.jpeg";
  img.style.cssText = `
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  `;
  overlay.appendChild(img);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = `
    position: fixed;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    color: rgba(255,255,255,0.85);
    font-size: 28px;
    cursor: pointer;
    z-index: 9501;
    line-height: 1;
    padding: 4px 8px;
    transition: color 0.15s, transform 0.15s;
  `;
  closeBtn.onmouseover = () => {
    closeBtn.style.color = "#fff";
    closeBtn.style.transform = "scale(1.15)";
  };
  closeBtn.onmouseout = () => {
    closeBtn.style.color = "rgba(255,255,255,0.85)";
    closeBtn.style.transform = "scale(1)";
  };
  closeBtn.onclick = closeMoodboard;
  overlay.appendChild(closeBtn);

  // Also close on backdrop click
  overlay.onclick = (e) => {
    if (e.target === overlay) closeMoodboard();
  };

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
  });
}

function closeMoodboard() {
  const overlay = document.getElementById("moodboard-overlay");
  if (!overlay) return;
  overlay.style.opacity = "0";
  setTimeout(() => overlay.remove(), 400);
}

// ─── Header ───────────────────────────────────────────────────────────────────

function getIcon(name) {
  return { github: "🐙", instagram: "📷", linkedin: "in" }[name] || "•";
}

function updateAppWidthState() {
  app.classList.toggle("expanded", !!document.querySelector(".item-body.open"));
}

function renderHeader() {
  siteHeader.innerHTML = "";
  siteHeader.className = "site-header";

  const inner = createEl("div", "header-inner");
  const title = createEl("button", "site-title-toggle", "Omri Alloro");
  const bio = createEl("div", "site-bio");
  renderParagraphs(data.sections.bio.text, bio);

  title.onclick = () => {
    bio.classList.toggle("open");
    bio.style.maxHeight = bio.classList.contains("open")
      ? bio.scrollHeight + "px"
      : "0px";
  };

  const socials = createEl("div", "header-socials");
  Object.entries(data.sections.social).forEach(([k, v]) => {
    const a = document.createElement("a");
    a.href = v;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "social-icon";
    a.innerHTML = getIcon(k);
    socials.appendChild(a);
  });

  const moodboardBtn = createEl("button", "moodboard-btn", "moodboard");
  moodboardBtn.onclick = openMoodboard;

  inner.appendChild(title);
  inner.appendChild(moodboardBtn);
  inner.appendChild(socials);
  siteHeader.appendChild(inner);
  siteHeader.appendChild(bio);
}

// ─── Drawings grid ────────────────────────────────────────────────────────────

function renderDrawingsGrid(items, body, sectionTitle) {
  const grid = document.createElement("div");
  grid.className = "drawings-grid";

  items.forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "drawing-item";

    if (item.image) {
      const img = makeClickableImage(item.image, sectionTitle, "");
      cell.appendChild(img);
    }

    if (item.title) {
      const t = document.createElement("p");
      t.className = "drawing-title";
      t.textContent = item.title;
      cell.appendChild(t);
    }

    grid.appendChild(cell);
  });

  body.appendChild(grid);
}

// ─── dontLookBack GIF strip ──────────────────────────────────────────────────

function renderDLBStrip(gifs) {
  const wrap = document.createElement("div");
  wrap.style.cssText =
    "width:100%;margin-bottom:4px;margin-top:-24px;margin-left:-28px;margin-right:-28px;width:calc(100% + 56px);";

  const strip = document.createElement("div");
  strip.style.cssText = `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 3px;
    width: 100%;
  `;

  gifs.slice(0, 6).forEach((src) => {
    const cell = document.createElement("div");
    cell.style.cssText = "overflow:hidden;height:60px;";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.style.cssText =
      "width:100%;height:120px;object-fit:cover;object-position:top;display:block;";
    cell.appendChild(img);
    strip.appendChild(cell);
  });

  wrap.appendChild(strip);
  wrap.appendChild(createCanvasDivider("web projects"));

  return wrap;
}

// ─── Collection rendering ─────────────────────────────────────────────────────

function renderCollection(items, body, sectionTitle) {
  if (items.length && items[0].image) {
    const { wrapper, body: itemBody } = createItemToggle(
      "view all",
      sectionTitle,
    );
    renderDrawingsGrid(items, itemBody, sectionTitle);
    body.appendChild(wrapper);
    return;
  }

  items.forEach((item) => {
    const label = item.name || item.title || "Untitled";
    const { wrapper, body: itemBody } = createItemToggle(label, sectionTitle);

    if (label === "dontLookBack" && item.gifs && item.gifs.length) {
      itemBody.dataset.dlbGifs = JSON.stringify(item.gifs);
    }

    if (item.date || item.place) {
      const metaBits = [item.date, item.place].filter(Boolean);
      if (metaBits.length)
        itemBody.appendChild(createEl("p", "", metaBits.join(" — ")));
    }

    if (item.text) renderParagraphs(item.text, itemBody);

    // Time To Space: navigate directly to tts.html on click
    if (label === "Time To Space") {
      wrapper.querySelector(".item-toggle").onclick = (e) => {
        e.stopPropagation();
        window.location.href = "tts.html";
      };
    } else {
      const hasMedia =
        (item.images && item.images.length) ||
        (item.videos && item.videos.length) ||
        (item.gifs && item.gifs.length);

      if (hasMedia) {
        if (item.text) itemBody.appendChild(createCanvasDivider(sectionTitle));
        itemBody.appendChild(
          renderMedia(
            item.images || [],
            item.videos || [],
            item.gifs || [],
            sectionTitle,
            label,
          ),
        );
      }
    }

    body.appendChild(wrapper);
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function initSite() {
  renderHeader();
  app.innerHTML = "";

  const content = createEl("main", "content");

  Object.entries(data.sections).forEach(([key, val]) => {
    if (["bio", "social"].includes(key)) return;

    const { section, body } = createSectionShell(key);

    if (Array.isArray(val) && val.length) {
      renderCollection(val, body, key);
    }

    content.appendChild(section);
  });

  app.appendChild(content);
}

// ─── Splash ───────────────────────────────────────────────────────────────────

function hideSite() {
  app.classList.add("app-hidden");
  siteHeader.classList.add("app-hidden");
}

function showSite() {
  app.classList.remove("app-hidden");
  siteHeader.classList.remove("app-hidden");
}

function showSplash() {
  hideSite();

  let splash = document.getElementById("splash");

  if (!splash) {
    splash = document.createElement("div");
    splash.id = "splash";

    const gif1 = document.createElement("img");
    gif1.src = "NTT2.gif";
    gif1.className = "splash-gif gif-back";

    const gif2 = document.createElement("img");
    gif2.src = "bbb.gif";
    gif2.className = "splash-gif gif-front";

    splash.appendChild(gif1);
    splash.appendChild(gif2);
    document.body.appendChild(splash);
  } else {
    splash.classList.remove("fade-out");
    splash.style.display = "block";
  }

  splash.onclick = () => {
    splash.classList.add("fade-out");
    showSite();

    const { section, item, img } = getURLState();
    if (section) applyURLState({ section, item, img });

    setTimeout(() => {
      splash.style.display = "none";
    }, 800);
  };
}

// ─── Close button ─────────────────────────────────────────────────────────────

function bindCloseButton() {
  const btn = document.getElementById("close-btn");
  if (!btn) return;

  btn.onclick = () => {
    const openSectionEl = document
      .querySelector(".section-body.open")
      ?.closest(".main-section");
    const sectionSlug = openSectionEl?.dataset.sectionSlug || null;
    const sectionName = sectionSlug
      ? Object.keys(data.sections).find((k) => toSlug(k) === sectionSlug)
      : null;

    closeAllItems();
    setURLState(sectionName ? { section: sectionName } : {});
  };
}

// ─── Corner gif ───────────────────────────────────────────────────────────────

function bindCornerGifReturn() {
  const cornerGif = document.querySelector(".corner-gif");
  if (!cornerGif) return;

  cornerGif.onclick = (e) => {
    e.stopPropagation();
    closeLightboxSilent();
    closeAllItems({ silent: true });
    closeAllSections();
    app.classList.remove("subsection-open");
    document.body.classList.remove("subsection-open");
    updateAppWidthState();
    setURLState({});
    showSplash();
  };
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

initSite();
updateAppWidthState();
bindCloseButton();
bindCornerGifReturn();

const { section: initSection, item: initItem, img: initImg } = getURLState();
if (initSection) {
  history.replaceState(
    { section: initSection, item: initItem, img: initImg },
    "",
  );
  showSite();
  applyURLState({ section: initSection, item: initItem, img: initImg });
} else {
  history.replaceState({}, "", window.location.href);
  showSplash();
}
