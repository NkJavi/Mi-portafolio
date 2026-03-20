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
    nav_results: "Resultados",
    nav_capabilities: "Capacidades",
    nav_faq: "FAQ",
    header_cta: "Hablemos",
    hero_eyebrow: "TPM · DELIVERY · TECHNICAL OPERATIONS",
    hero_title:
      "TPM / Delivery Ops tech que convierte despliegues complejos en ejecución controlada.",
    hero_lead:
      "Lidero implementaciones donde se cruzan campo, coordinación técnica, automatización y reporting ejecutivo para llevar proyectos complejos a producción con trazabilidad, cadencia y control operativo.",
    hero_pill_1: "Rollouts e implementación",
    hero_pill_2: "Control tower operativo",
    hero_pill_3: "Automatización y dashboards",
    hero_pill_4: "Hands-on con criterio ejecutivo",
    cta_download_cv: "Descargar CV",
    cta_linkedin: "Ver LinkedIn",
    cta_email: "Escribir correo",
    hero_signal_1_label: "Escala reciente",
    hero_signal_1_value: "~9,000 equipos coordinados",
    hero_signal_2_label: "Hands-on real",
    hero_signal_2_value: "Automatización, tableros y seguimiento operativo",
    hero_signal_3_label: "Tipo de entorno",
    hero_signal_3_value: "Integradores, corporativos y ventanas críticas",
    hero_card_kicker: "Perfil híbrido raro de encontrar",
    exec_title:
      "Technical Program Manager / Delivery Ops / Technical Operations",
    hero_card_body:
      "Puedo hablar con dirección, coordinar campo, ordenar incidentes y bajar la operación a checklists, dashboards y cadencias ejecutables.",
    hero_card_fit_title: "Fit rápido para reclutadores",
    hero_fit_1: "Technical Program Manager",
    hero_fit_2: "Delivery / Implementation Manager",
    hero_fit_3: "Technical Operations Lead",
    hero_fit_4: "Automation Ops / Control Tower",
    hero_status_body:
      "México · abierto a roles de ejecución técnica, delivery, operaciones e implementación.",
    hero_photo_alt: "Foto de Jose Javier Perez Peregrina",
    results_eyebrow: "RESULTADOS CLAVE",
    results_title: "Señales rápidas de que sí puedo cargar proyectos complejos",
    results_intro:
      "No vendo humo de full-stack universal. Vendo una combinación útil: ejecución de campo, criterio operativo, automatización y comunicación con dirección.",
    result1_title: "Escala coordinada",
    result1_body:
      "~9,000 equipos considerados dentro de un despliegue con múltiples sedes, prioridades y riesgo real de afectar continuidad operativa.",
    result2_title: "Control bajo presión",
    result2_body:
      "He trabajado con ventanas críticas, seguimiento diario, incidencias y cadencia de avance donde perder visibilidad cuesta tiempo y dinero.",
    result3_title: "Automatización útil",
    result3_body:
      "Conecto operación con dashboards, alertas, reportes y automatizaciones para reducir retrabajo y acelerar decisiones.",
    cap_eyebrow: "QUÉ PUEDO LIDERAR",
    cap_title:
      "Capacidad práctica para vacantes que mezclan delivery, operación y tecnología",
    cap_intro:
      "Si el reto requiere coordinar personas, ejecución y sistemas a la vez, ahí es donde más valor aporto.",
    cap_fit_title: "Ideal para roles como",
    cap_fit_body:
      "TPM, Delivery Manager, Implementation Manager, Technical Operations, Service Delivery, PM técnico con responsabilidad de campo y automatización.",
    cap1_title: "Rollouts e implementación",
    cap1_body:
      "Planeación por olas, readiness técnico, coordinación de instalación/configuración y seguimiento de avance por sede.",
    cap2_title: "Control tower / incidentes / cadencia",
    cap2_body:
      "Triage, prioridades, tableros operativos, seguimiento diario y escalación clara cuando el proyecto se empieza a desalinear.",
    cap3_title: "Automatización y dashboards",
    cap3_body:
      "Dashboards, reportes automáticos, alertas y flujos con APIs/webhooks para que la operación deje de depender de seguimiento manual.",
    cap4_title: "Alineación dirección + técnico",
    cap4_body:
      "Traduzco lo técnico al lenguaje de decisión y lo ejecutivo a instrucciones accionables para el equipo.",
    cases_eyebrow: "CASOS DE EJECUCIÓN",
    cases_title:
      "Dos pruebas de ejecución donde importaba salir bien, no sonar bonito",
    case1_tag: "Infraestructura / Implementación",
    case1_title: "Despliegue masivo de ~9,000 computadoras",
    case1_intro:
      "Proyecto con múltiples sedes, presión operativa y necesidad de mantener continuidad durante la implementación.",
    case2_tag: "Operación / Datos / Automatización",
    case2_title: "Centro de control operativo y reporteo automatizado (NDA)",
    case2_intro:
      "Necesidad de ordenar seguimiento disperso, priorizar incidentes y dar visibilidad diaria para decisiones de tiempo y costo.",
    case_label_challenge: "Reto",
    case_label_scope: "Alcance",
    case_label_led: "Lo que lideré",
    case_label_system: "Sistema / herramientas",
    case_label_result: "Resultado",
    case1_challenge:
      "Coordinar despliegue físico y técnico a gran escala sin romper continuidad operativa en sedes con tiempos críticos.",
    case1_scope:
      "Planeación por olas, coordinación de instalación y configuración, checklist técnico común y seguimiento diario de avance/incidencias.",
    case1_led:
      "Alineé operación de campo, prioridades, secuencia de ejecución y comunicación entre equipos para que todos trabajaran sobre el mismo plan.",
    case1_system:
      "Tablero de avance, control de incidencias, checklists operativos y cadencia de seguimiento para visibilidad diaria.",
    case1_result:
      "Mayor control de tiempos, menos retrabajo y una implementación con continuidad operativa mejor resguardada.",
    case2_challenge:
      "La operación tenía seguimiento disperso, demasiada dependencia de actualización manual y poca visibilidad ejecutiva para reaccionar a tiempo.",
    case2_scope:
      "Diseño de control operativo, criterios de prioridad, trazabilidad de incidencias y reporting para dirección bajo restricciones de NDA.",
    case2_led:
      "Definí flujo de seguimiento, criterios de escalación, lectura diaria de desvíos y la conversación entre dato operativo y toma de decisión.",
    case2_system:
      "Dashboard operativo, alertas, automatización de reportes y estructuras de seguimiento orientadas a criticidad.",
    case2_result:
      "Decisiones más rápidas, control operativo consistente y mejor visibilidad de desviaciones de tiempo, carga y costo.",
    operate_eyebrow: "CÓMO OPERO",
    operate_title:
      "Mi forma de trabajar en proyectos donde la ejecución se complica rápido",
    operate_intro:
      "No entro solo a coordinar reuniones. Entro a construir visibilidad, cadencia y control.",
    operate1_step: "01",
    operate1_title: "Aterrizo el frente real",
    operate1_body:
      "Defino qué se entrega, qué puede romperse, qué depende de terceros y cómo se ve el avance útil.",
    operate2_step: "02",
    operate2_title: "Monto la cadencia",
    operate2_body:
      "Instalo tablero, rutina de seguimiento, prioridades y responsables para que el proyecto no viva en chats dispersos.",
    operate3_step: "03",
    operate3_title: "Automatizo lo repetitivo",
    operate3_body:
      "Conecto datos, alertas y reportes para que la operación tenga menos retrabajo y la dirección vea el estado sin perseguir a nadie.",
    operate4_step: "04",
    operate4_title: "Escalo con criterio",
    operate4_body:
      "Cuando algo se desvía, traduzco el impacto, propongo salida y destrabo decisiones.",
    exp_eyebrow: "EXPERIENCIA Y FLUIDEZ TÉCNICA",
    exp_title: "No soy dev puro ni manager decorativo",
    exp_intro:
      "Mi valor está en que puedo coordinar la ejecución y también entender suficiente capa técnica para ordenar sistemas, automatización y operación.",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021 - Actualidad",
    exp1_body:
      "Liderazgo de proyectos TI con operación en campo, coordinación ejecutiva y construcción de un centro de control con trazabilidad y reporteo.",
    exp2_title: "Consultor TI Independiente",
    exp2_date: "2019 - Actualidad",
    exp2_body:
      "Mejora operativa, priorización de entregables, acompañamiento a implementación y soporte para equipos técnicos y directivos.",
    fluence_title: "Fluidez técnica que sí suma",
    fluence_group1: "Operación y delivery",
    fluence_group2: "Automatización",
    fluence_group3: "Herramientas y datos",
    fluence_group4: "Entorno técnico",
    fluence_chip_1: "Rollouts multi-sede",
    fluence_chip_2: "Incident management",
    fluence_chip_3: "Control tower cadence",
    fluence_chip_4: "Riesgos y dependencias",
    fluence_chip_5: "Dashboards",
    fluence_chip_6: "Reportes automáticos",
    fluence_chip_7: "Alertas y escalación",
    fluence_chip_8: "APIs / Webhooks",
    fluence_chip_9: "Python / JavaScript / SQL",
    fluence_chip_10: "Reporting ejecutivo",
    fluence_chip_11: "Trazabilidad operativa",
    fluence_chip_12: "Cloudflare Pages",
    fluence_chip_13: "Configuración TI y redes",
    fluence_chip_14: "Equipos de campo",
    fluence_chip_15: "Stakeholder reporting",
    fluence_chip_16: "NDA-safe execution",
    hands_title: "Lo que sí significa hands-on en mi caso",
    hands_body:
      "Puedo bajar operación a sistemas útiles: estructurar tableros, definir alertas, conectar flujos, leer datos y convertirlos en decisiones ejecutables. No me vendo como software engineer full-time; me vendo como alguien que hace que la operación técnica avance.",
    faq_eyebrow: "FAQ PARA RECLUTADORES",
    faq_title:
      "Respuestas rápidas a las dudas que normalmente salen en entrevista",
    faq1_q: "¿Qué tan hands-on eres?",
    faq1_a:
      "Lo suficiente para diseñar y operar tableros, automatizaciones, alertas y seguimiento técnico sin depender de traducción constante. No me posiciono como dev puro de producto, sino como operador técnico que sí puede construir herramientas de control.",
    faq2_q: "¿Qué tipo de proyectos te quedan mejor?",
    faq2_a:
      "Implementaciones, rollouts, delivery complejo, operaciones técnicas, service delivery y entornos donde hay que coordinar campo, sistemas y dirección al mismo tiempo.",
    faq3_q: "¿Puedes hablar con liderazgo y con equipos técnicos?",
    faq3_a:
      "Sí. Esa es parte central de mi valor: bajar decisiones ejecutivas a ejecución real y subir la señal operativa de forma clara, accionable y sin ruido.",
    faq4_q: "¿Qué buscas ahora?",
    faq4_a:
      "Roles donde la ejecución técnica y operativa importe de verdad: TPM, Delivery, Implementation, Technical Operations o Automation Ops con responsabilidad real.",
    contact_eyebrow: "CONTACTO",
    contact_title:
      "Si tu equipo necesita ejecución técnica con criterio operativo, hablemos",
    contact_body:
      "Disponible para procesos donde importe coordinar despliegue, orden operativo, automatización útil y comunicación clara con stakeholders.",
    contact_note:
      "Correo, LinkedIn y teléfono directos. Si quieres CV, aparece aquí en cuanto esté cargado el archivo público.",
    contact_email_label: "Enviar correo",
    contact_linkedin_label: "Abrir LinkedIn",
    contact_phone_label: "Llamar",
    footer_left: "Portafolio recruiter-first de Jose Javier Perez Peregrina",
    footer_right: "TPM / Delivery Ops / Technical Operations",
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
    nav_results: "Results",
    nav_capabilities: "Capabilities",
    nav_faq: "FAQ",
    header_cta: "Let's talk",
    hero_eyebrow: "TPM · DELIVERY · TECHNICAL OPERATIONS",
    hero_title:
      "Technical PM / Delivery Ops hybrid who turns complex rollouts into controlled execution.",
    hero_lead:
      "I lead implementations where field execution, technical coordination, automation, and executive reporting meet to move complex projects into production with traceability, cadence, and operational control.",
    hero_pill_1: "Rollouts and implementation",
    hero_pill_2: "Operational control tower",
    hero_pill_3: "Automation and dashboards",
    hero_pill_4: "Hands-on with executive judgment",
    cta_download_cv: "Download CV",
    cta_linkedin: "View LinkedIn",
    cta_email: "Send email",
    hero_signal_1_label: "Recent scale",
    hero_signal_1_value: "~9,000 coordinated devices",
    hero_signal_2_label: "Real hands-on depth",
    hero_signal_2_value:
      "Automation, dashboards, and operational follow-through",
    hero_signal_3_label: "Environment type",
    hero_signal_3_value: "Integrators, enterprise teams, and critical windows",
    hero_card_kicker: "Hybrid profile that is hard to find",
    exec_title:
      "Technical Program Manager / Delivery Ops / Technical Operations",
    hero_card_body:
      "I can talk to leadership, coordinate field execution, organize incidents, and translate operations into checklists, dashboards, and cadences people can actually run.",
    hero_card_fit_title: "Fast recruiter fit",
    hero_fit_1: "Technical Program Manager",
    hero_fit_2: "Delivery / Implementation Manager",
    hero_fit_3: "Technical Operations Lead",
    hero_fit_4: "Automation Ops / Control Tower",
    hero_status_body:
      "Mexico · open to technical execution, delivery, operations, and implementation roles.",
    hero_photo_alt: "Portrait of Jose Javier Perez Peregrina",
    results_eyebrow: "KEY RESULTS",
    results_title: "Fast signals that I can carry complex technical work",
    results_intro:
      "I do not sell generic full-stack smoke. I sell a useful combination: field execution, operational judgment, automation, and communication with leadership.",
    result1_title: "Coordinated scale",
    result1_body:
      "~9,000 devices considered within a rollout across multiple sites, shifting priorities, and real risk to operational continuity.",
    result2_title: "Control under pressure",
    result2_body:
      "I have worked with critical windows, daily follow-up, incidents, and execution cadence where losing visibility costs both time and money.",
    result3_title: "Useful automation",
    result3_body:
      "I connect operations with dashboards, alerts, reports, and automation to reduce rework and accelerate decisions.",
    cap_eyebrow: "WHAT I CAN LEAD",
    cap_title:
      "Practical capability for roles that mix delivery, operations, and technology",
    cap_intro:
      "If the work requires coordinating people, execution, and systems at the same time, that is where I add the most value.",
    cap_fit_title: "Strong fit for roles like",
    cap_fit_body:
      "TPM, Delivery Manager, Implementation Manager, Technical Operations, Service Delivery, and technical PM roles with field and automation responsibility.",
    cap1_title: "Rollouts and implementation",
    cap1_body:
      "Wave planning, technical readiness, installation/configuration coordination, and site-level execution tracking.",
    cap2_title: "Control tower / incidents / cadence",
    cap2_body:
      "Triage, priorities, operational boards, daily follow-up, and clear escalation when a project starts drifting.",
    cap3_title: "Automation and dashboards",
    cap3_body:
      "Dashboards, automated reporting, alerts, and API/webhook flows so the operation stops depending on manual chase work.",
    cap4_title: "Leadership + technical alignment",
    cap4_body:
      "I translate technical work into decision language and executive direction into instructions the team can execute.",
    cases_eyebrow: "EXECUTION CASES",
    cases_title:
      "Two proofs of execution where results mattered more than sounding smart",
    case1_tag: "Infrastructure / Implementation",
    case1_title: "Large-scale rollout of ~9,000 computers",
    case1_intro:
      "Project with multiple sites, operational pressure, and the need to preserve continuity during implementation.",
    case2_tag: "Operations / Data / Automation",
    case2_title: "Operational control center and automated reporting (NDA)",
    case2_intro:
      "Need to organize fragmented tracking, prioritize incidents, and create daily visibility for time and cost decisions.",
    case_label_challenge: "Challenge",
    case_label_scope: "Scope",
    case_label_led: "What I led",
    case_label_system: "System / tooling",
    case_label_result: "Result",
    case1_challenge:
      "Coordinate physical and technical rollout at scale without breaking operational continuity across time-critical sites.",
    case1_scope:
      "Wave planning, installation and configuration coordination, shared technical checklist, and daily progress/incident tracking.",
    case1_led:
      "I aligned field execution, priorities, rollout sequence, and cross-team communication so everyone worked from the same operating plan.",
    case1_system:
      "Progress board, incident control, operational checklists, and a follow-up cadence that kept daily visibility intact.",
    case1_result:
      "Stronger time control, less rework, and an implementation with operational continuity better protected.",
    case2_challenge:
      "The operation had fragmented follow-up, too much manual update dependency, and weak executive visibility to react in time.",
    case2_scope:
      "Operational control design, prioritization criteria, incident traceability, and leadership reporting under NDA constraints.",
    case2_led:
      "I defined the follow-up flow, escalation criteria, daily deviation review, and the bridge between operational data and decision-making.",
    case2_system:
      "Operational dashboard, alerts, automated reports, and follow-up structures oriented around criticality.",
    case2_result:
      "Faster decisions, more consistent operational control, and better visibility into time, workload, and cost drift.",
    operate_eyebrow: "HOW I OPERATE",
    operate_title: "How I work on projects where execution gets messy fast",
    operate_intro:
      "I do not join just to run meetings. I join to build visibility, cadence, and control.",
    operate1_step: "01",
    operate1_title: "Ground the real problem",
    operate1_body:
      "I define what is being delivered, what can break, what depends on third parties, and what useful progress actually looks like.",
    operate2_step: "02",
    operate2_title: "Install the cadence",
    operate2_body:
      "I put in place the board, follow-up routine, priorities, and ownership so the project does not live inside scattered chats.",
    operate3_step: "03",
    operate3_title: "Automate the repetitive work",
    operate3_body:
      "I connect data, alerts, and reports so operations carry less rework and leadership sees status without chasing people.",
    operate4_step: "04",
    operate4_title: "Escalate with judgment",
    operate4_body:
      "When something drifts, I translate the impact, propose a path, and unblock decisions.",
    exp_eyebrow: "EXPERIENCE AND TECHNICAL FLUENCY",
    exp_title: "I am not a pure developer or a decorative manager",
    exp_intro:
      "My value is that I can coordinate execution while also understanding enough of the technical layer to organize systems, automation, and operations.",
    exp1_title: "Project Manager · Gorat Digital Services",
    exp1_date: "2021 - Present",
    exp1_body:
      "Leading IT projects with field execution, executive coordination, and the buildout of a control center with traceability and reporting.",
    exp2_title: "Independent IT Consultant",
    exp2_date: "2019 - Present",
    exp2_body:
      "Operational improvement, deliverable prioritization, implementation support, and guidance for technical and leadership teams.",
    fluence_title: "Technical fluency that actually helps",
    fluence_group1: "Operations and delivery",
    fluence_group2: "Automation",
    fluence_group3: "Tools and data",
    fluence_group4: "Technical environment",
    fluence_chip_1: "Multi-site rollouts",
    fluence_chip_2: "Incident management",
    fluence_chip_3: "Control tower cadence",
    fluence_chip_4: "Risk and dependency tracking",
    fluence_chip_5: "Dashboards",
    fluence_chip_6: "Automated reporting",
    fluence_chip_7: "Alerts and escalation",
    fluence_chip_8: "APIs / Webhooks",
    fluence_chip_9: "Python / JavaScript / SQL",
    fluence_chip_10: "Executive reporting",
    fluence_chip_11: "Operational traceability",
    fluence_chip_12: "Cloudflare Pages",
    fluence_chip_13: "IT and network configuration",
    fluence_chip_14: "Field teams",
    fluence_chip_15: "Stakeholder reporting",
    fluence_chip_16: "NDA-safe execution",
    hands_title: "What hands-on actually means in my case",
    hands_body:
      "I can turn operations into useful systems: structure dashboards, define alerts, connect flows, read data, and convert it into executable decisions. I do not sell myself as a full-time software engineer; I sell myself as someone who makes technical operations move.",
    faq_eyebrow: "RECRUITER FAQ",
    faq_title:
      "Fast answers to the questions that usually show up in interviews",
    faq1_q: "How hands-on are you?",
    faq1_a:
      "Hands-on enough to design and operate dashboards, automations, alerts, and technical follow-up without needing constant translation. I do not position myself as a pure product engineer, but as a technical operator who can build control tools.",
    faq2_q: "What kind of projects fit you best?",
    faq2_a:
      "Implementations, rollouts, complex delivery, technical operations, service delivery, and environments where field execution, systems, and leadership all need to move together.",
    faq3_q: "Can you work with leadership and technical teams?",
    faq3_a:
      "Yes. That is a core part of my value: translate executive decisions into real execution and raise operational signal in a way that is clear, actionable, and low-noise.",
    faq4_q: "What are you looking for now?",
    faq4_a:
      "Roles where technical and operational execution genuinely matters: TPM, Delivery, Implementation, Technical Operations, or Automation Ops with real ownership.",
    contact_eyebrow: "CONTACT",
    contact_title:
      "If your team needs technical execution with operational judgment, let's talk",
    contact_body:
      "Available for processes where rollout coordination, operational clarity, useful automation, and stakeholder communication matter.",
    contact_note:
      "Direct email, LinkedIn, and phone. If you want the CV, it appears here as soon as the public file is uploaded.",
    contact_email_label: "Send email",
    contact_linkedin_label: "Open LinkedIn",
    contact_phone_label: "Call",
    footer_left: "Recruiter-first portfolio of Jose Javier Perez Peregrina",
    footer_right: "TPM / Delivery Ops / Technical Operations",
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
