// ── Turnstile gate ──────────────────────────────────────────
(function () {
  try {
    if (sessionStorage.getItem("ts_verified") === "1") {
      const gate = document.getElementById("ts-gate");
      if (gate) gate.remove();
    }
  } catch {}
})();

window.onTurnstileSuccess = function () {
  try {
    sessionStorage.setItem("ts_verified", "1");
  } catch {}
  const gate = document.getElementById("ts-gate");
  if (!gate) return;
  gate.classList.add("ts-gate--done");
  setTimeout(() => gate.remove(), 420);
};
// ────────────────────────────────────────────────────────────

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
    nav_drawer_label: "Secciones del portafolio",
    nav_profile: "Perfil",
    nav_cases: "Casos",
    nav_stack: "Stack",
    nav_exp: "Exp.",
    nav_certs: "Certs.",
    nav_contact: "Contacto",
    hero_vol: "PORTFOLIO — 2025 — CIUDAD DE MÉXICO",
    hero_available: "● DISPONIBLE",
    hero_surname: "PÉREZ",
    hero_tagline: "Technical Project Manager con 6+ años en infraestructura TI, automatización de procesos y transformación digital.",
    hero_tag1: "TPM",
    hero_tag2: "INFRAESTRUCTURA TI",
    hero_tag3: "AUTOMATIZACIÓN",
    hero_tag4: "FIELD OPS",
    metric_devices: "DISPOSITIVOS COORDINADOS",
    metric_exp: "AÑOS EN PROYECTOS TI",
    metric_city: "CIUDAD DE MÉXICO",
    casos_eyebrow: "CASOS DE EJECUCIÓN",
    caso1_title: "Rollout Nacional de Infraestructura",
    caso1_body: "Coordinación y entrega de ~9,000 equipos de cómputo en múltiples sitios a nivel nacional. Gestión de equipos de campo, control de entrega, SLAs y trazabilidad de inventario. Entrega 100% en tiempo y forma, sin incidentes críticos de continuidad operativa.",
    caso1_result: "ENTREGA 100%",
    caso2_title: "Centro de Control Operativo [NDA]",
    caso2_body: "Diseño e implementación de centro de monitoreo en tiempo real con dashboards ejecutivos, reportes automáticos y alertas. Reducción del 60%+ en tiempo de respuesta a incidentes. Automatización de procesos: ~15 hrs/semana liberadas y 40% menos errores operativos.",
    caso2_result: "NDA PROTEGIDO",
    caso3_title: "Helpdesk ITSM & Automatización de Procesos",
    caso3_body: "Implementación end-to-end de plataforma ITSM con Zoho Desk: diseño de flujos, configuración de SLAs e integración con APIs REST. Reducción del 35% en tiempo de resolución de tickets. Automatización de tareas repetitivas liberando ~15 hrs/semana del equipo técnico.",
    caso3_result: "35% MENOS TICKETS",
    stack_eyebrow: "STACK DE HERRAMIENTAS",
    stack_infra: "INFRA",
    stack_servers: "SERVIDORES",
    stack_automation: "AUTOMATIZACIÓN",
    stack_cloud: "CLOUD",
    stack_mgmt: "GESTIÓN",
    cta_title: "¿HABLAMOS?",
    cta_sub: "DISPONIBLE AHORA · RESPONDO EN <24H",
    cta_cv: "DESCARGAR CV",
    cta_linkedin: "LINKEDIN",
    cta_email: "EMAIL",
    exp_eyebrow: "EXPERIENCIA",
    exp1_title: "Technical PM · Gorat Digital Services",
    exp1_date: "2021–Actual",
    exp1_body: "Gestión de proyectos de red e infraestructura enterprise (LAN/WAN, switches, firewalls, Windows/Linux). ITSM end-to-end con Zoho Desk: 35% menos tiempo de resolución. Automatización vía APIs REST: ~15 hrs/semana liberadas, 40% menos errores. Rollout de hasta 9,000 equipos con entrega 100%. Equipos de hasta 30 personas, 100% en tiempo y presupuesto.",
    exp2_title: "Consultor de Proyectos TI e Infraestructura",
    exp2_date: "2019–Actual",
    exp2_body: "Desarrollo de clientes B2B en retail, manufactura y servicios. Propuestas técnico-comerciales personalizadas (redes, servidores, seguridad, automatización). Negociación de contratos: 20% de reducción en sobrecostos. Ciclo de venta completo: prospección → diagnóstico técnico → cierre → PM.",
    exp3_title: "Responsable de Proyectos TI · PlugInc",
    exp3_date: "2018–2019",
    exp3_body: "Proyectos de infraestructura de red: cableado estructurado, routers/switches/APs y servidores físicos y virtuales. Gestión completa del ciclo de proyecto (requerimientos → entrega → pruebas → documentación). Puente técnico entre equipos de ingeniería y clientes no técnicos. Estandarización de procesos de PM: plantillas, checklists y reportes de avance.",
    certs_eyebrow: "CERTIFICACIONES",
    cert1_name: "Programa de Especialización en Gobierno de TI",
    cert1_issuer: "Dell Technologies",
    cert2_name: "MCLA — Microsoft Certified Learning Associate",
    cert2_issuer: "Microsoft",
    cert3_name: "Project Management: Foundations of Project Initiation",
    cert3_issuer: "Google / Coursera",
    cert4_name: "Making Data-Driven Decisions",
    cert4_issuer: "Google / Coursera",
    cert5_name: "Foundations of Data, Data, Everywhere",
    cert5_issuer: "Google / Coursera",
    page_title: "Jose Javier Perez Peregrina | TPM · Infraestructura TI · Automatización",
    page_desc: "Technical Project Manager con 6+ años en proyectos de infraestructura TI, automatización y transformación digital. Ciudad de México.",
    lang_button: "EN",
    lang_toggle_label: "Switch language to English",
  },
  en: {
    nav_label: "Main sections",
    nav_drawer_label: "Portfolio sections",
    nav_profile: "Profile",
    nav_cases: "Cases",
    nav_stack: "Stack",
    nav_exp: "Exp.",
    nav_certs: "Certs.",
    nav_contact: "Contact",
    hero_vol: "PORTFOLIO — 2025 — MEXICO CITY",
    hero_available: "● AVAILABLE",
    hero_surname: "PÉREZ",
    hero_tagline: "Technical Project Manager with 6+ years in IT infrastructure, process automation, and digital transformation.",
    hero_tag1: "TPM",
    hero_tag2: "IT INFRASTRUCTURE",
    hero_tag3: "AUTOMATION",
    hero_tag4: "FIELD OPS",
    metric_devices: "DEVICES COORDINATED",
    metric_exp: "YEARS IN IT PROJECTS",
    metric_city: "MEXICO CITY",
    casos_eyebrow: "EXECUTION CASES",
    caso1_title: "National Infrastructure Rollout",
    caso1_body: "Coordination and delivery of ~9,000 computers across multiple national sites. Field team management, delivery tracking, SLAs, and inventory traceability. 100% on-time delivery, zero critical operational continuity incidents.",
    caso1_result: "100% DELIVERY",
    caso2_title: "Operational Control Center [NDA]",
    caso2_body: "Design and implementation of a real-time monitoring center with executive dashboards, automated reports, and alerts. 60%+ reduction in incident response time. Process automation: ~15 hrs/week freed and 40% reduction in operational errors.",
    caso2_result: "NDA PROTECTED",
    caso3_title: "ITSM Helpdesk & Process Automation",
    caso3_body: "End-to-end ITSM platform implementation with Zoho Desk: workflow design, SLA configuration, and REST API integration. 35% reduction in ticket resolution time. Repetitive task automation freeing ~15 hrs/week from the technical team.",
    caso3_result: "35% FASTER RESOLUTION",
    stack_eyebrow: "TOOLS & STACK",
    stack_infra: "INFRA",
    stack_servers: "SERVERS",
    stack_automation: "AUTOMATION",
    stack_cloud: "CLOUD",
    stack_mgmt: "MANAGEMENT",
    cta_title: "LET'S TALK?",
    cta_sub: "AVAILABLE NOW · REPLY WITHIN 24H",
    cta_cv: "DOWNLOAD CV",
    cta_linkedin: "LINKEDIN",
    cta_email: "EMAIL",
    exp_eyebrow: "EXPERIENCE",
    exp1_title: "Technical PM · Gorat Digital Services",
    exp1_date: "2021–Present",
    exp1_body: "Enterprise network and infrastructure project management (LAN/WAN, switches, firewalls, Windows/Linux). End-to-end ITSM with Zoho Desk: 35% reduction in resolution time. REST API automation: ~15 hrs/week freed, 40% fewer errors. Rollouts of up to 9,000 devices with 100% on-time delivery. Teams of up to 30 people, 100% on time and budget.",
    exp2_title: "IT & Infrastructure Project Consultant",
    exp2_date: "2019–Present",
    exp2_body: "B2B client development in retail, manufacturing, and services. Custom technical-commercial proposals (networks, servers, security, automation). Contract negotiation: 20% reduction in cost overruns. Full sales cycle: prospecting → technical diagnosis → close → PM.",
    exp3_title: "IT Project Lead · PlugInc",
    exp3_date: "2018–2019",
    exp3_body: "Network infrastructure projects: structured cabling, routers/switches/APs, physical and virtual servers. Full project lifecycle management (requirements → delivery → testing → documentation). Technical bridge between engineering teams and non-technical clients. Standardized PM processes: templates, checklists, and progress reports.",
    certs_eyebrow: "CERTIFICATIONS",
    cert1_name: "IT Governance Specialization Program",
    cert1_issuer: "Dell Technologies",
    cert2_name: "MCLA — Microsoft Certified Learning Associate",
    cert2_issuer: "Microsoft",
    cert3_name: "Project Management: Foundations of Project Initiation",
    cert3_issuer: "Google / Coursera",
    cert4_name: "Making Data-Driven Decisions",
    cert4_issuer: "Google / Coursera",
    cert5_name: "Foundations of Data, Data, Everywhere",
    cert5_issuer: "Google / Coursera",
    page_title: "Jose Javier Perez Peregrina | TPM · IT Infrastructure · Automation",
    page_desc: "Technical Project Manager with 6+ years in IT infrastructure, automation, and digital transformation projects. Mexico City.",
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
      link.setAttribute("aria-current", "location");
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
  // Guard: sólo ejecuta si existe el elemento picture en el DOM.
  // La sección de foto no está activa en la versión actual del HTML.
  const picture = document.querySelector("[data-headshot-picture]");
  if (!picture) return;

  const img = picture.querySelector("img");
  const webpSource = picture.querySelector('[data-headshot-source="webp"]');
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

function initMetricCounters() {
  if (prefersReducedMotion) return;

  const counters = document.querySelectorAll(".metric-n[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);

          if (target >= 1000) {
            el.textContent = Math.round(current / 1000) + suffix;
          } else {
            el.textContent = current + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => observer.observe(el));
}

// ── Mobile nav / drawer ──────────────────────────────────
function initMobileNav() {
  const hamburger = document.getElementById("navHamburger");
  const drawer    = document.getElementById("nav-drawer");
  const closeBtn  = document.getElementById("navDrawerClose");
  const backdrop  = document.getElementById("navBackdrop");

  if (!hamburger || !drawer || !closeBtn || !backdrop) return;

  function getFocusable() {
    return Array.from(
      drawer.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.closest("[aria-hidden='true']"));
  }

  function openDrawer() {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-visible");
    drawer.setAttribute("aria-hidden", "false");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label",
      document.documentElement.lang === "en"
        ? "Close navigation menu"
        : "Cerrar menú de navegación");
    document.body.style.overflow = "hidden";
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    drawer.setAttribute("aria-hidden", "true");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label",
      document.documentElement.lang === "en"
        ? "Open navigation menu"
        : "Abrir menú de navegación");
    document.body.style.overflow = "";
    hamburger.focus();
  }

  const isOpen = () => drawer.classList.contains("is-open");

  drawer.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") { e.preventDefault(); closeDrawer(); return; }
    if (e.key !== "Tab") return;

    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  hamburger.addEventListener("click", () => isOpen() ? closeDrawer() : openDrawer());
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  drawer.querySelectorAll(".nav-drawer-link").forEach((link) => {
    link.addEventListener("click", () => { if (isOpen()) closeDrawer(); });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && isOpen()) closeDrawer();
  });
}

initMobileNav();
initMetricCounters();
