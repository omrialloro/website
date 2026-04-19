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

  // Close on backdrop click
  lightboxEl.querySelector("#lightbox-backdrop").onclick = closeLightbox;
  // Close on X button
  lightboxEl.querySelector("#lightbox-close").onclick = closeLightbox;

  // Inject lightbox CSS
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

  // Push a lightbox URL state so back button closes it
  setURLState({ section, item, img: imgIndex });
}

function closeLightbox() {
  if (!lightboxEl || !lightboxEl.classList.contains("open")) return;
  lightboxEl.classList.remove("open");

  // Strip the img param from the URL without navigating.
  // Do NOT use history.back() — it fires popstate async and causes a full
  // state reset that breaks the open section/item underneath.
  const { section, item } = getURLState();
  setURLState({ section, item }, { replace: true });
}

function closeLightboxSilent() {
  // Close without triggering history.back() — used when popstate fires
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
  container.prepend(createEl("h2", "subsection-title", title));
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
    openItem(wrapper, body, toggle, title);
    setURLState({ section: sectionTitle, item: title });
  };

  wrapper.appendChild(toggle);
  wrapper.appendChild(body);

  return { wrapper, body, toggle };
}

// ─── Open / close primitives ──────────────────────────────────────────────────

function openItem(wrapper, body, toggle, title) {
  toggle.setAttribute("aria-expanded", "true");
  wrapper.classList.add("active-item");
  addSubsectionTitle(body, title);
  animateOpen(body);
  app.classList.add("subsection-open");
  document.body.classList.add("subsection-open");
  requestAnimationFrame(updateAppWidthState);
}

function closeItem(wrapper, body, toggle) {
  toggle.setAttribute("aria-expanded", "false");
  animateClose(body);
  wrapper.classList.remove("active-item");
  removeSubsectionTitle(body);
  app.classList.remove("subsection-open");
  document.body.classList.remove("subsection-open");
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
  // Always close lightbox first (silently)
  closeLightboxSilent();

  // If img param is present, open lightbox on top of current state
  if (img !== null && img !== undefined) {
    const index = parseInt(img, 10);
    if (!isNaN(index) && imageRegistry[index]) {
      createLightbox();
      const imgEl = lightboxEl.querySelector("#lightbox-img");
      imgEl.src = imageRegistry[index];
      requestAnimationFrame(() => lightboxEl.classList.add("open"));
    }
    // Don't touch the section/item DOM — lightbox sits on top
    return;
  }

  // Restore section/item state
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
  openItem(itemEl, itemBody, itemToggle, item);
}

// ─── popstate (back / forward) ────────────────────────────────────────────────

window.addEventListener("popstate", () => {
  const { section, item, img } = getURLState();
  applyURLState({ section, item, img });
});

// ─── Media rendering ──────────────────────────────────────────────────────────

// Global image registry for lightbox index lookup
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

function renderMedia(
  images = [],
  videos = [],
  gifs = [],
  sectionTitle = "",
  itemTitle = "",
) {
  const wrap = createEl("div");

  if (gifs.length) {
    const gifGrid = createEl("div", "gif-grid");
    gifs.forEach((src) => {
      const img = makeClickableImage(src, sectionTitle, itemTitle);
      gifGrid.appendChild(img);
    });
    wrap.appendChild(gifGrid);
  }

  if (images.length) {
    const grid = createEl("div", "media-grid");
    images.forEach((src) => {
      const img = makeClickableImage(src, sectionTitle, itemTitle);
      grid.appendChild(img);
    });
    wrap.appendChild(grid);
  }

  if (videos.length) {
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

      wrap.appendChild(videoWrap);
    });
  }

  return wrap;
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

  inner.appendChild(title);
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
      const img = makeClickableImage(item.image, sectionTitle, "view all");
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

    if (item.date || item.place) {
      const metaBits = [item.date, item.place].filter(Boolean);
      if (metaBits.length)
        itemBody.appendChild(createEl("p", "", metaBits.join(" — ")));
    }

    if (item.text) renderParagraphs(item.text, itemBody);

    if (
      (item.images && item.images.length) ||
      (item.videos && item.videos.length) ||
      (item.gifs && item.gifs.length)
    ) {
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
