const yearEl = document.getElementById("year");
const revealBlocks = document.querySelectorAll(".reveal");
const langToggle = document.getElementById("langToggle");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navSections = document.querySelectorAll("[data-nav-section]");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const i18n = {
  es: {
    nav_label: "Secciones principales",
    nav_profile: "Perfil",
    nav_cases: "Casos",
    nav_stack: "Stack",
    nav_contact: "Contacto",
    hero_vol: "PORTFOLIO — 2025 — CIUDAD DE MÉXICO",
    hero_available: "● DISPONIBLE",
    hero_surname: "PÉREZ",
    hero_tagline: "Program Manager especializado en rollouts de infraestructura a escala, operaciones de campo y automatización de procesos.",
    hero_tag1: "TPM",
    hero_tag2: "DELIVERY MANAGER",
    hero_tag3: "IT OPS",
    hero_tag4: "COORD. DE CAMPO",
    metric_devices: "DISPOSITIVOS COORDINADOS",
    metric_exp: "EXPERIENCIA EN OPS",
    metric_city: "CIUDAD DE MÉXICO",
    casos_eyebrow: "CASOS DE EJECUCIÓN",
    caso1_title: "Rollout Nacional de Infraestructura",
    caso1_body: "Coordinación de ~9,000 equipos de cómputo en múltiples sitios. Gestión de equipos de campo, control de entrega y SLAs. Sin incidentes críticos de continuidad operativa.",
    caso1_result: "ENTREGA 100%",
    caso2_title: "Centro de Control Operativo [NDA]",
    caso2_body: "Diseño e implementación de sistema de monitoreo en tiempo real con automatización de reportes y alertas. Tiempo de respuesta a incidentes reducido 60%+.",
    caso2_result: "NDA PROTEGIDO",
    stack_eyebrow: "STACK DE HERRAMIENTAS",
    stack_technical: "TÉCNICO",
    stack_ops: "GESTIÓN Y OPS",
    cta_title: "¿HABLAMOS?",
    cta_sub: "DISPONIBLE AHORA · RESPONDO EN <24H",
    cta_cv: "DESCARGAR CV",
    cta_linkedin: "LINKEDIN",
    cta_email: "EMAIL",
    exp_eyebrow: "EXPERIENCIA",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021 - Actualidad",
    exp1_body:
      "Liderazgo de proyectos TI con operación en campo, coordinación ejecutiva y construcción de un centro de control con trazabilidad y reporteo.",
    exp2_title: "Consultor TI Independiente",
    exp2_date: "2019 - Actualidad",
    exp2_body:
      "Mejora operativa, priorización de entregables, acompañamiento a implementación y soporte para equipos técnicos y directivos.",
    page_title:
      "Jose Javier Perez Peregrina | TPM, Delivery & Technical Operations",
    page_desc:
      "Technical Program Manager y perfil híbrido de delivery, technical operations y automation para rollouts, implementación y control operativo.",
    lang_button: "EN",
    lang_toggle_label: "Switch language to English",
  },
  en: {
    nav_label: "Main sections",
    nav_profile: "Profile",
    nav_cases: "Cases",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_vol: "PORTFOLIO — 2025 — MEXICO CITY",
    hero_available: "● AVAILABLE",
    hero_surname: "PÉREZ",
    hero_tagline: "Program Manager specializing in large-scale infrastructure rollouts, field operations, and process automation.",
    hero_tag1: "TPM",
    hero_tag2: "DELIVERY MANAGER",
    hero_tag3: "IT OPS",
    hero_tag4: "FIELD COORD.",
    metric_devices: "DEVICES COORDINATED",
    metric_exp: "EXPERIENCE IN OPS",
    metric_city: "MEXICO CITY",
    casos_eyebrow: "EXECUTION CASES",
    caso1_title: "National Infrastructure Rollout",
    caso1_body: "Coordination of ~9,000 computers across multiple sites. Field team management, delivery tracking, and SLAs. Zero critical operational continuity incidents.",
    caso1_result: "100% DELIVERY",
    caso2_title: "Operational Control Center [NDA]",
    caso2_body: "Design and implementation of real-time monitoring system with automated reporting and alerts. Incident response time reduced 60%+.",
    caso2_result: "NDA PROTECTED",
    stack_eyebrow: "TOOLS & STACK",
    stack_technical: "TECHNICAL",
    stack_ops: "MANAGEMENT & OPS",
    cta_title: "LET'S TALK?",
    cta_sub: "AVAILABLE NOW · REPLY WITHIN 24H",
    cta_cv: "DOWNLOAD CV",
    cta_linkedin: "LINKEDIN",
    cta_email: "EMAIL",
    exp_eyebrow: "EXPERIENCE",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021–",
    exp1_body:
      "IT project leadership with field operations, executive coordination and a custom control center with traceability and reporting.",
    exp2_title: "Independent IT Consultant",
    exp2_date: "2019–",
    exp2_body:
      "Operational improvement, deliverable prioritization, implementation support and guidance for technical and executive teams.",
    page_title:
      "Jose Javier Perez Peregrina | TPM, Delivery & Technical Operations",
    page_desc:
      "Technical Program Manager and hybrid delivery, technical operations, and automation profile for rollouts, implementation, and operational control.",
    lang_button: "ES",
    lang_toggle_label: "Cambiar idioma a español",
  },
};

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function trackEvent(name, props = {}) {
  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }
}

function initAnalytics() {
  const ga4Id = document
    .querySelector('meta[name="x-ga4-id"]')
    ?.content?.trim();
  const plausibleDomain = document
    .querySelector('meta[name="x-plausible-domain"]')
    ?.content?.trim();

  if (ga4Id) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id);
  }

  if (plausibleDomain) {
    const plausibleScript = document.createElement("script");
    plausibleScript.defer = true;
    plausibleScript.dataset.domain = plausibleDomain;
    plausibleScript.src = "https://plausible.io/js/script.js";
    document.head.appendChild(plausibleScript);
  }
}

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(";");
    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":").map((item) => item.trim());
      if (attr && key && dict[key]) {
        node.setAttribute(attr, dict[key]);
      }
    });
  });

  document.title = dict.page_title;

  const desc = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDesc = document.querySelector(
    'meta[name="twitter:description"]',
  );

  if (desc) desc.content = dict.page_desc;
  if (ogTitle) ogTitle.content = dict.page_title;
  if (ogDesc) ogDesc.content = dict.page_desc;
  if (twitterTitle) twitterTitle.content = dict.page_title;
  if (twitterDesc) twitterDesc.content = dict.page_desc;

  if (langToggle) {
    langToggle.textContent = dict.lang_button;
    langToggle.setAttribute("aria-label", dict.lang_toggle_label);
  }
}

function initRevealBlocks() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealBlocks.forEach((block) => block.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealBlocks.forEach((block) => observer.observe(block));
}

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    const isActive = target === sectionId;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initNavHighlight() {
  if (!("IntersectionObserver" in window) || !navSections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const sectionId = visible.target.getAttribute("id");
      if (sectionId) setActiveNav(sectionId);
    },
    {
      threshold: [0.25, 0.45, 0.7],
      rootMargin: "-18% 0px -55% 0px",
    },
  );

  navSections.forEach((section) => observer.observe(section));
}

function initTracking() {
  document.querySelectorAll("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      trackEvent("click", { target: el.dataset.track });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const section =
        anchor.getAttribute("href")?.replace("#", "") || "unknown";
      trackEvent("nav_section", { section });
    });
  });
}

async function assetExists(url) {
  try {
    const headResponse = await fetch(url, {
      method: "HEAD",
      cache: "no-store",
    });

    if (headResponse.ok || headResponse.type === "opaque") {
      return true;
    }

    if (headResponse.status === 405) {
      const getResponse = await fetch(url, { cache: "no-store" });
      return getResponse.ok || getResponse.type === "opaque";
    }

    return false;
  } catch {
    return false;
  }
}

async function syncCvLinks() {
  const hasCv = await assetExists("assets/cv.pdf");

  document.querySelectorAll('[data-requires-asset="cv"]').forEach((el) => {
    el.classList.toggle("is-hidden", !hasCv);

    if (hasCv) {
      el.removeAttribute("aria-hidden");
      el.removeAttribute("tabindex");
      return;
    }

    el.setAttribute("aria-hidden", "true");
    el.tabIndex = -1;
  });
}

async function syncHeadshot() {
  const picture = document.querySelector("[data-headshot-picture]");
  const img = picture?.querySelector("img");
  const webpSource = picture?.querySelector('[data-headshot-source="webp"]');
  const fallbackSrc = img?.dataset.fallbackSrc || "assets/profile.jpg";
  const fallbackWebp = "assets/profile.webp";

  if (!img || !webpSource) return;

  img.addEventListener("error", () => {
    img.src = fallbackSrc;
  });

  const [hasHeadshotWebp, hasHeadshotJpg] = await Promise.all([
    assetExists("assets/headshot.webp"),
    assetExists("assets/headshot.jpg"),
  ]);

  webpSource.srcset = hasHeadshotWebp ? "assets/headshot.webp" : fallbackWebp;
  img.src = hasHeadshotJpg ? "assets/headshot.jpg" : fallbackSrc;
}

function getStoredLanguage() {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" || saved === "es" ? saved : "es";
  } catch {
    return "es";
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem("portfolio_lang", lang);
  } catch {
    // Ignore storage errors for privacy modes.
  }
}

const savedLanguage = getStoredLanguage();
applyLanguage(savedLanguage);
initRevealBlocks();
initNavHighlight();
initTracking();
initAnalytics();
void syncCvLinks();
void syncHeadshot();

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    const next = current === "es" ? "en" : "es";
    storeLanguage(next);
    applyLanguage(next);
    trackEvent("language_change", { lang: next });
  });
}

if (!prefersReducedMotion) {
  window.addEventListener("load", () => {
    trackEvent("page_loaded", { lang: document.documentElement.lang || "es" });
  });
}
