const yearEl = document.getElementById("year");
const revealBlocks = document.querySelectorAll(".reveal");
const langToggle = document.getElementById("langToggle");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const i18n = {
  es: {
    nav_profile: "Perfil",
    nav_cases: "Casos",
    nav_stack: "Stack",
    nav_contact: "Contacto",
    cta_schedule: "Agendar llamada",
    eyebrow: "TECHNICAL PROGRAM & OPERATIONS",
    hero_title:
      "Lidero despliegues TI de gran escala para integradores y corporativos con control de equipos, tiempos y presupuesto.",
    hero_lead:
      "Soy un perfil híbrido: conecto logística de infraestructura (campo, equipos, operación) con sistemas de software (tableros, automatizaciones y reporteo) para que proyectos complejos sí lleguen a producción sin perder trazabilidad.",
    hero_badge_1: "Despliegues masivos de TI",
    hero_badge_2: "Automatización operativa con IA",
    hero_badge_3: "Integradores y corporativos",
    hero_focus_title: "Enfoque actual",
    hero_focus_body:
      "Coordino ejecución técnica y reporte estratégico para entornos operativos con alta presión de tiempo.",
    cta_view_cases: "Ver casos clave",
    cta_contact: "Contactar",
    exec_title: "Technical Program & Operations Manager | TI + Ejecución",
    value_prop:
      "Convierto operación compleja en ejecución controlada: despliegue masivo de equipos de cómputo, control operativo y visibilidad diaria para dirección y equipos técnicos.",
    stat_1: "Equipos coordinados en despliegue reciente",
    stat_2: "Ejecución bajo ventanas de tiempo críticas",
    stat_3: "Control operativo con enfoque en presupuesto",
    impact_eyebrow: "PROPOSICIÓN DE VALOR",
    impact_title: "Conecto estrategia, ejecución técnica y operación diaria",
    impact_intro:
      "Trabajo en la intersección entre campo y dirección: diseño cadencia operativa, priorizo incidentes y convierto datos en decisiones de ejecución.",
    pillar1_title: "Ejecución en campo sin fricción",
    pillar1_body:
      "Defino despliegues por olas, checklists y control de calidad para mantener continuidad operativa.",
    pillar2_title: "Visibilidad en tiempo de decisión",
    pillar2_body:
      "Consolido trazabilidad e indicadores para que dirección y equipos técnicos actúen con claridad.",
    pillar3_title: "Automatización orientada a resultado",
    pillar3_body:
      "Implemento tableros y reporteo automático que reduce retrabajo y acelera respuesta operativa.",
    cases_eyebrow: "CASOS CLAVE",
    cases_title: "Dos frentes, una misma capacidad de ejecución",
    case1_tag: "Infraestructura",
    case1_title: "Despliegue masivo de ~9,000 computadoras",
    case1_body:
      "<strong>Reto:</strong> múltiples sedes, tiempos críticos y riesgo de interrupción operativa.<br><strong>Acción:</strong> planeación por olas, checklist técnico único, coordinación de instalación/configuración y tablero diario de avance e incidencias.<br><strong>Resultado:</strong> continuidad operativa durante implementación, mejor control de tiempos y menor retrabajo.",
    case2_tag: "Operación + Datos",
    case2_title: "Automatización de control y reporteo (NDA)",
    case2_body:
      "<strong>Reto:</strong> seguimiento disperso, presión de tiempos y necesidad de controlar presupuesto operativo.<br><strong>Acción:</strong> tablero operativo con prioridad por criticidad, alertas y reportes automáticos para dirección.<br><strong>Resultado:</strong> decisiones más rápidas, control operativo consistente y mejor visibilidad de desvíos de tiempo/costo.",
    exp_eyebrow: "EXPERIENCIA",
    exp_title: "Trayectoria enfocada en resultados",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021 - Actualidad",
    exp1_body:
      "Lidero proyectos TI con operación en campo y gestión ejecutiva. Actualmente coordino un centro de control operativo con reportes automatizados y trazabilidad de incidencias.",
    exp2_title: "Consultor TI Independiente",
    exp2_date: "2019 - Actualidad",
    exp2_body:
      "Diseño y seguimiento de iniciativas de mejora operativa, priorización de entregables y soporte en implementación para equipos técnicos y directivos.",
    stack_eyebrow: "STACK PM TÉCNICO",
    stack_title: "Herramientas para gestionar y herramientas para ejecutar",
    stack_col1_title: "Gestión de proyecto",
    stack_col2_title: "Fluidez técnica para liderazgo",
    stack_net_1: "Configuración de redes y TI",
    stack_net_2: "Automatización con IA",
    stack_net_3: "Python / JavaScript / SQL",
    contact_eyebrow: "CONTACTO",
    contact_title: "Si tu proyecto es complejo, hablemos con datos y plan",
    contact_body:
      "Disponible para oportunidades donde se necesite ejecución técnica, coordinación operativa y enfoque de resultados.",
    footer_left: "Portafolio profesional de Jose Javier Perez Peregrina",
    footer_right: "Technical Program & Operations Manager",
    page_title: "Jose Javier Perez Peregrina | Technical Program & Operations Manager",
    page_desc:
      "Technical Program & Operations Manager especializado en despliegues TI de gran escala, control operativo y automatización con enfoque en equipos, tiempos y presupuesto.",
    lang_button: "EN"
  },
  en: {
    nav_profile: "Profile",
    nav_cases: "Cases",
    nav_stack: "Stack",
    nav_contact: "Contact",
    cta_schedule: "Book a call",
    eyebrow: "TECHNICAL PROGRAM & OPERATIONS",
    hero_title:
      "I lead large-scale IT rollouts for integrators and enterprises with control over equipment, timelines, and budget.",
    hero_lead:
      "I am a hybrid profile: I connect infrastructure logistics (field, hardware, operations) with software systems (dashboards, automations, reporting) so complex projects go live with traceability.",
    hero_badge_1: "Large-scale IT rollouts",
    hero_badge_2: "AI-assisted automation",
    hero_badge_3: "Integrators and enterprises",
    hero_focus_title: "Current focus",
    hero_focus_body:
      "I coordinate technical execution and strategic reporting for high-pressure operational environments.",
    cta_view_cases: "View key cases",
    cta_contact: "Contact",
    exec_title: "Technical Program & Operations Manager | IT + Execution",
    value_prop:
      "I turn complex operations into controlled execution: large-scale computer rollouts, operational control, and daily visibility for leadership and technical teams.",
    stat_1: "Devices coordinated in latest rollout",
    stat_2: "Execution under critical timelines",
    stat_3: "Operational control focused on budget",
    impact_eyebrow: "VALUE PROPOSITION",
    impact_title: "I connect strategy, technical execution, and daily operations",
    impact_intro:
      "I work at the intersection of field operations and leadership: defining execution cadence, prioritizing incidents, and turning data into decisions.",
    pillar1_title: "Frictionless field execution",
    pillar1_body:
      "I define wave-based rollouts, checklists, and quality controls to preserve operational continuity.",
    pillar2_title: "Visibility for decision time",
    pillar2_body:
      "I consolidate traceability and indicators so leaders and technical teams can act with clarity.",
    pillar3_title: "Outcome-driven automation",
    pillar3_body:
      "I build dashboards and automated reporting to reduce rework and speed up operational response.",
    cases_eyebrow: "KEY CASES",
    cases_title: "Two fronts, one execution capability",
    case1_tag: "Infrastructure",
    case1_title: "Large-scale rollout of ~9,000 computers",
    case1_body:
      "<strong>Challenge:</strong> multiple sites, tight timelines, and risk of operational disruption.<br><strong>Action:</strong> wave-based planning, unified technical checklist, coordinated install/configuration, and daily incident/progress dashboard.<br><strong>Outcome:</strong> operational continuity during implementation, stronger timeline control, and less rework.",
    case2_tag: "Operations + Data",
    case2_title: "Control and reporting automation (NDA)",
    case2_body:
      "<strong>Challenge:</strong> fragmented tracking, timeline pressure, and need for stronger operational budget control.<br><strong>Action:</strong> operational board with criticality prioritization, alerts, and automated reporting for leadership.<br><strong>Outcome:</strong> faster decisions, more consistent operational control, and better visibility into time/cost deviations.",
    exp_eyebrow: "EXPERIENCE",
    exp_title: "Track record focused on outcomes",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021 - Present",
    exp1_body:
      "I lead IT projects with field operations and executive governance. I currently coordinate an operational control center with automated reporting and incident traceability.",
    exp2_title: "Independent IT Consultant",
    exp2_date: "2019 - Present",
    exp2_body:
      "I design and track operational improvement initiatives, prioritize deliverables, and support implementation for technical and leadership teams.",
    stack_eyebrow: "TECHNICAL PM STACK",
    stack_title: "Tools for management and tools for execution",
    stack_col1_title: "Project management",
    stack_col2_title: "Technical fluency for leadership",
    stack_net_1: "Network and IT equipment configuration",
    stack_net_2: "AI-assisted automation",
    stack_net_3: "Python / JavaScript / SQL",
    contact_eyebrow: "CONTACT",
    contact_title: "If your project is complex, let's discuss with data and plan",
    contact_body:
      "Available for opportunities that require technical execution, operational coordination, and results focus.",
    footer_left: "Professional portfolio of Jose Javier Perez Peregrina",
    footer_right: "Technical Program & Operations Manager",
    page_title: "Jose Javier Perez Peregrina | Technical Program & Operations Manager",
    page_desc:
      "Technical Program & Operations Manager specialized in large-scale IT rollouts, operational control, and automation focused on equipment, timelines, and budget.",
    lang_button: "ES"
  }
};

if (yearEl) yearEl.textContent = new Date().getFullYear();

function trackEvent(name, props = {}) {
  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }
}

function initAnalytics() {
  const ga4Id = document.querySelector('meta[name="x-ga4-id"]')?.content?.trim();
  const plausibleDomain = document.querySelector('meta[name="x-plausible-domain"]')?.content?.trim();

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
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) node.innerHTML = dict[key];
  });

  document.title = dict.page_title;

  const desc = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');

  if (desc) desc.content = dict.page_desc;
  if (ogTitle) ogTitle.content = dict.page_title;
  if (ogDesc) ogDesc.content = dict.page_desc;
  if (twitterTitle) twitterTitle.content = dict.page_title;
  if (twitterDesc) twitterDesc.content = dict.page_desc;

  if (langToggle) langToggle.textContent = dict.lang_button;
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealBlocks.forEach((block) => observer.observe(block));
} else {
  revealBlocks.forEach((block) => block.classList.add("is-visible"));
}

document.querySelectorAll("[data-track]").forEach((el) => {
  el.addEventListener("click", () => {
    trackEvent("click", { target: el.dataset.track });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", () => {
    const section = anchor.getAttribute("href")?.replace("#", "") || "unknown";
    trackEvent("nav_section", { section });
  });
});

const savedLanguage = localStorage.getItem("portfolio_lang") || "es";
applyLanguage(savedLanguage);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    const next = current === "es" ? "en" : "es";
    localStorage.setItem("portfolio_lang", next);
    applyLanguage(next);
    trackEvent("language_change", { lang: next });
  });
}

if (!prefersReducedMotion) {
  window.addEventListener("load", () => {
    trackEvent("page_loaded", { lang: document.documentElement.lang || "es" });
  });
}

initAnalytics();
