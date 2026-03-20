# Portfolio Redesign — Newspaper Brutalist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual and structural redesign of the portfolio from warm-orange rounded cards to a Newspaper Brutalist style — off-white background, Arial Black headlines, Courier New labels, emergency red accent, hard black borders.

**Architecture:** Rewrite `styles.css` from scratch with new design tokens. Rewrite the `<body>` of `index.html` while preserving all `<head>` SEO metadata. Update translation keys in `script.js` to match new section structure, keeping the existing i18n engine untouched.

**Tech Stack:** Vanilla HTML5, CSS3 (Grid/Flexbox), JavaScript (no framework) — deployed on Cloudflare Pages.

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `index.html` | **Rewrite `<body>` only** | Structure of all 6 sections + updated nav links |
| `styles.css` | **Complete rewrite** | New design tokens, all section styles, responsive breakpoints |
| `script.js` | **Update i18n keys only** | Remove deleted section keys, add new keys for all 6 sections |

**Do NOT touch:** `<head>` metadata, canonical URLs, JSON-LD schema, Open Graph tags, analytics meta tags. Keep existing `<head>` exactly as-is except the font `<link>` (Task 1).

**Contact details to use throughout:**
- Email: `javierpperegrina@gmail.com`
- Phone: `+52 222 581 3746`
- LinkedIn: `https://www.linkedin.com/in/javierperezperegrina/`
- CV: `assets/cv.pdf` (conditional — keep existing `data-requires-asset="cv"` + `.is-hidden` logic)

---

## Task 1: Design Tokens + Base Reset

**Files:**
- Modify: `styles.css` (full rewrite — delete all content, start fresh)
- Modify: `index.html` (font `<link>` only)

- [ ] **Step 1: Replace font link in `<head>` of `index.html`**

Find this line:
```html
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

Replace with:
```html
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Rewrite `styles.css` with design tokens and base reset**

Delete all content in `styles.css` and write:

```css
/* =============================================
   DESIGN TOKENS
   ============================================= */
:root {
  --bg: #f2f0eb;
  --ink: #111111;
  --red: #ff3d00;
  --ink-soft: #555555;
  --ink-faint: #999999;
  --border: 3px solid #111111;
  --border-col: 2px solid #111111;
  --border-sub: 1px solid #cccccc;
  --container: 1100px;
}

/* =============================================
   BASE RESET
   ============================================= */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Focus visible for accessibility */
:focus-visible {
  outline: 2px solid var(--red);
  outline-offset: 3px;
}

/* Scroll reveal base state */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* Portfolio wrapper — full-width bordered column */
.portfolio {
  max-width: var(--container);
  margin: 0 auto;
  border-left: var(--border);
  border-right: var(--border);
  min-height: 100vh;
}
```

- [ ] **Step 3: Open `index.html` in a browser and verify**

Expected: blank page with off-white background (`#f2f0eb`), no errors in console. The old styles are gone.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: init newspaper brutalist design tokens and base reset"
```

---

## Task 2: Navigation

**Files:**
- Modify: `index.html` — replace `<header>` element
- Modify: `styles.css` — append nav styles
- Modify: `script.js` — update nav i18n keys

- [ ] **Step 1: Replace `<header>` in `index.html`**

Replace the entire `<header class="site-header">...</header>` block with:

```html
<header class="site-nav" id="top">
  <div class="nav-inner">
    <span class="nav-logo" aria-label="Jose Javier Perez Peregrina">JJ Pérez</span>
    <nav class="nav-links" aria-label="Secciones principales" data-i18n-attr="aria-label:nav_label">
      <a href="#perfil"   data-nav-link data-i18n="nav_profile"  data-track="nav-profile">Perfil</a>
      <a href="#casos"    data-nav-link data-i18n="nav_cases"    data-track="nav-cases">Casos</a>
      <a href="#stack"    data-nav-link data-i18n="nav_stack"    data-track="nav-stack">Stack</a>
      <a href="#contacto" data-nav-link data-i18n="nav_contact"  data-track="nav-contact">Contacto</a>
    </nav>
    <button class="nav-lang" type="button" id="langToggle" aria-label="Cambiar idioma" data-track="language-toggle">
      ES / EN
    </button>
  </div>
</header>
```

- [ ] **Step 2: Append nav styles to `styles.css`**

```css
/* =============================================
   NAVIGATION
   ============================================= */
.site-nav {
  border-bottom: var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 100;
}

.nav-inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.nav-logo {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-family: 'Courier New', monospace;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ink-soft);
  transition: color 0.15s;
}

.nav-links a:hover,
.nav-links a.is-active {
  color: var(--ink);
}

.nav-lang {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: none;
  border: 1.5px solid var(--ink);
  padding: 4px 10px;
  cursor: pointer;
  color: var(--ink);
  white-space: nowrap;
}

.nav-lang:hover {
  background: var(--ink);
  color: var(--bg);
}
```

- [ ] **Step 3: Update nav i18n keys in `script.js`**

In the `i18n.es` object, find and replace the nav keys block:

Old keys to replace (find each one):
- `nav_results` → `nav_profile`
- `nav_capabilities` → (delete)
- `nav_cases` → keep as `nav_cases`
- `nav_faq` → (delete)
- `nav_contact` → keep as `nav_contact`

Add new keys to both `i18n.es` and `i18n.en`:

In `i18n.es`:
```js
nav_label: "Secciones principales",
nav_profile: "Perfil",
nav_cases: "Casos",
nav_stack: "Stack",
nav_contact: "Contacto",
```

In `i18n.en`:
```js
nav_label: "Main sections",
nav_profile: "Profile",
nav_cases: "Cases",
nav_stack: "Stack",
nav_contact: "Contact",
```

- [ ] **Step 4: Open in browser and verify**

Expected: Sticky nav bar at top, monospace links, "JJ Pérez" logo on left, "ES / EN" button on right. Clicking ES/EN should still toggle language.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add newspaper brutalist navigation"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — replace hero section
- Modify: `styles.css` — append hero styles
- Modify: `script.js` — update hero i18n keys

- [ ] **Step 1: Replace `<main>` content with new hero section in `index.html`**

Replace the entire `<main>` element's content (keep the `<main id="top">` tag) with just the hero for now (other sections come in later tasks):

```html
<main id="main-content">
  <!-- ======= HERO ======= -->
  <section id="perfil" data-nav-section="perfil" class="reveal">

    <div class="hero-masthead">
      <span class="hero-vol" data-i18n="hero_vol">PORTFOLIO — 2025 — MEXICO CITY</span>
      <span class="hero-badge" data-i18n="hero_available">● DISPONIBLE</span>
    </div>

    <div class="hero-body">
      <div class="hero-headline-col">
        <h1 class="hero-title">
          JOSE<br/>JAVIER<br/><span class="red" data-i18n="hero_surname">PÉREZ</span>
        </h1>
        <p class="hero-tagline" data-i18n="hero_tagline">
          Program Manager especializado en rollouts de infraestructura a escala, operaciones de campo y automatización de procesos.
        </p>
      </div>
      <div class="hero-tags-col">
        <span class="hero-tag hero-tag--solid" data-i18n="hero_tag1">TPM</span>
        <span class="hero-tag" data-i18n="hero_tag2">DELIVERY MANAGER</span>
        <span class="hero-tag" data-i18n="hero_tag3">IT OPS</span>
        <span class="hero-tag" data-i18n="hero_tag4">FIELD COORD.</span>
      </div>
    </div>

    <div class="hero-metrics">
      <div class="hero-metric">
        <span class="metric-n">9K+</span>
        <span class="metric-l" data-i18n="metric_devices">DISPOSITIVOS COORDINADOS</span>
      </div>
      <div class="hero-metric">
        <span class="metric-n">5Y+</span>
        <span class="metric-l" data-i18n="metric_exp">EXPERIENCIA EN OPS</span>
      </div>
      <div class="hero-metric">
        <span class="metric-n">MX</span>
        <span class="metric-l" data-i18n="metric_city">CIUDAD DE MÉXICO</span>
      </div>
    </div>

  </section>
```

- [ ] **Step 2: Append hero styles to `styles.css`**

```css
/* =============================================
   HERO
   ============================================= */
.red { color: var(--red); }

#perfil {
  border-bottom: var(--border);
}

.hero-masthead {
  border-bottom: var(--border-sub);
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-vol {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--ink-faint);
  text-transform: uppercase;
}

.hero-badge {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: var(--red);
  color: white;
  padding: 3px 10px;
}

.hero-body {
  padding: 32px 24px 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: end;
  border-bottom: var(--border-col);
}

.hero-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: clamp(42px, 7vw, 72px);
  line-height: 0.85;
  text-transform: uppercase;
  letter-spacing: -3px;
  margin-bottom: 20px;
}

.hero-tagline {
  font-size: 13px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 360px;
}

.hero-tags-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  min-width: 180px;
}

.hero-tag {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  border: 1.5px solid var(--ink);
  white-space: nowrap;
}

.hero-tag--solid {
  background: var(--ink);
  color: var(--bg);
}

.hero-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.hero-metric {
  padding: 18px 24px;
  border-right: var(--border-col);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-metric:last-child {
  border-right: none;
}

.metric-n {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 36px;
  color: var(--red);
  line-height: 1;
}

.metric-l {
  font-family: 'Courier New', monospace;
  font-size: 7px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-faint);
}
```

- [ ] **Step 3: Add hero i18n keys to `script.js`**

In `i18n.es` add:
```js
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
```

In `i18n.en` add:
```js
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
```

- [ ] **Step 4: Open in browser and verify**

Expected:
- Masthead bar: faint "PORTFOLIO — 2025 — MEXICO CITY" on left, red "● DISPONIBLE" badge on right
- Giant name headline "JOSE / JAVIER / PÉREZ" (PÉREZ in red)
- Tags column on right: TPM filled black, others outline
- Metrics row: 9K+ / 5Y+ / MX in red large numbers with monospace labels
- Language toggle still works

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add hero section — newspaper brutalist redesign"
```

---

## Task 4: Casos de Ejecución Section

**Files:**
- Modify: `index.html` — add casos section after hero
- Modify: `styles.css` — append casos styles
- Modify: `script.js` — update casos i18n keys

- [ ] **Step 1: Add casos section to `index.html` after `</section>` of hero**

```html
  <!-- ======= CASOS ======= -->
  <section id="casos" data-nav-section="casos" class="reveal">
    <div class="section-header">
      <span data-i18n="casos_eyebrow">CASOS DE EJECUCIÓN</span>
    </div>
    <div class="casos-grid">

      <article class="caso">
        <span class="caso-n">01</span>
        <h2 class="caso-title" data-i18n="caso1_title">Rollout Nacional de Infraestructura</h2>
        <p class="caso-body" data-i18n="caso1_body">
          Coordinación de ~9,000 equipos de cómputo en múltiples sitios. Gestión de equipos de campo, control de entrega y SLAs. Sin incidentes críticos de continuidad operativa.
        </p>
        <span class="caso-result" data-i18n="caso1_result">ENTREGA 100%</span>
      </article>

      <article class="caso caso--right">
        <span class="caso-n">02</span>
        <h2 class="caso-title" data-i18n="caso2_title">Centro de Control Operativo [NDA]</h2>
        <p class="caso-body" data-i18n="caso2_body">
          Diseño e implementación de sistema de monitoreo en tiempo real con automatización de reportes y alertas. Tiempo de respuesta a incidentes reducido 60%+.
        </p>
        <span class="caso-result caso-result--nda" data-i18n="caso2_result">NDA PROTECTED</span>
      </article>

    </div>
  </section>
```

- [ ] **Step 2: Append casos styles to `styles.css`**

```css
/* =============================================
   SECTION HEADER (reused by multiple sections)
   ============================================= */
.section-header {
  padding: 8px 24px;
  border-top: var(--border);
  border-bottom: var(--border-sub);
  background: var(--ink);
  color: var(--bg);
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

/* =============================================
   CASOS
   ============================================= */
#casos {
  border-bottom: var(--border);
}

.casos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.caso {
  padding: 28px 24px;
  border-right: var(--border-col);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.caso--right {
  border-right: none;
}

.caso-n {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 48px;
  color: var(--red);
  line-height: 1;
}

.caso-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: 900;
}

.caso-body {
  font-size: 12px;
  line-height: 1.6;
  color: var(--ink-soft);
  flex: 1;
}

.caso-result {
  display: inline-block;
  background: var(--ink);
  color: var(--bg);
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 12px;
  align-self: flex-start;
}

.caso-result--nda {
  background: var(--ink-soft);
}
```

- [ ] **Step 3: Add casos i18n keys to `script.js`**

In `i18n.es` add:
```js
casos_eyebrow: "CASOS DE EJECUCIÓN",
caso1_title: "Rollout Nacional de Infraestructura",
caso1_body: "Coordinación de ~9,000 equipos de cómputo en múltiples sitios. Gestión de equipos de campo, control de entrega y SLAs. Sin incidentes críticos de continuidad operativa.",
caso1_result: "ENTREGA 100%",
caso2_title: "Centro de Control Operativo [NDA]",
caso2_body: "Diseño e implementación de sistema de monitoreo en tiempo real con automatización de reportes y alertas. Tiempo de respuesta a incidentes reducido 60%+.",
caso2_result: "NDA PROTEGIDO",
```

In `i18n.en` add:
```js
casos_eyebrow: "EXECUTION CASES",
caso1_title: "National Infrastructure Rollout",
caso1_body: "Coordination of ~9,000 computers across multiple sites. Field team management, delivery tracking, and SLAs. Zero critical operational continuity incidents.",
caso1_result: "100% DELIVERY",
caso2_title: "Operational Control Center [NDA]",
caso2_body: "Design and implementation of real-time monitoring system with automated reporting and alerts. Incident response time reduced 60%+.",
caso2_result: "NDA PROTECTED",
```

- [ ] **Step 4: Open in browser and verify**

Expected: Black header bar "CASOS DE EJECUCIÓN", 2-column grid with cases. Case 01 has red "01" number, case 02 has red "02". Result badges at bottom of each card.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add casos de ejecucion section"
```

---

## Task 5: Stack de Herramientas Section

**Files:**
- Modify: `index.html` — add stack section
- Modify: `styles.css` — append stack styles
- Modify: `script.js` — add stack i18n keys

- [ ] **Step 1: Add stack section to `index.html` after casos `</section>`**

```html
  <!-- ======= STACK ======= -->
  <section id="stack" data-nav-section="stack" class="reveal">
    <div class="section-header">
      <span data-i18n="stack_eyebrow">STACK DE HERRAMIENTAS</span>
    </div>
    <div class="stack-inner">

      <div class="stack-row">
        <span class="stack-row-label" data-i18n="stack_technical">TÉCNICO</span>
        <div class="stack-pills">
          <span class="pill pill--solid">PYTHON</span>
          <span class="pill pill--solid">JAVASCRIPT</span>
          <span class="pill pill--solid">SQL</span>
          <span class="pill pill--solid">WEBHOOKS</span>
          <span class="pill pill--solid">GOOGLE SHEETS API</span>
        </div>
      </div>

      <div class="stack-row">
        <span class="stack-row-label" data-i18n="stack_ops">GESTIÓN Y OPS</span>
        <div class="stack-pills">
          <span class="pill pill--solid">JIRA</span>
          <span class="pill">NOTION</span>
          <span class="pill">ASANA</span>
          <span class="pill">POWER BI</span>
          <span class="pill">INCIDENT MGMT</span>
          <span class="pill">SLA TRACKING</span>
          <span class="pill">FIELD TEAMS</span>
        </div>
      </div>

    </div>
  </section>
```

- [ ] **Step 2: Append stack styles to `styles.css`**

```css
/* =============================================
   STACK
   ============================================= */
#stack {
  border-bottom: var(--border);
}

.stack-inner {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stack-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.stack-row-label {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--ink-faint);
  min-width: 80px;
  padding-top: 6px;
  flex-shrink: 0;
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pill {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 12px;
  border: 1.5px solid var(--ink);
}

.pill--solid {
  background: var(--ink);
  color: var(--bg);
}
```

- [ ] **Step 3: Add stack i18n keys to `script.js`**

In `i18n.es` add:
```js
stack_eyebrow: "STACK DE HERRAMIENTAS",
stack_technical: "TÉCNICO",
stack_ops: "GESTIÓN Y OPS",
```

In `i18n.en` add:
```js
stack_eyebrow: "TOOLS & STACK",
stack_technical: "TECHNICAL",
stack_ops: "MANAGEMENT & OPS",
```

- [ ] **Step 4: Open in browser and verify**

Expected: Black header "STACK DE HERRAMIENTAS", two rows of pills. Technical row: solid black pills. Ops row: outline pills.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add stack de herramientas section (new)"
```

---

## Task 6: Experiencia Section

**Files:**
- Modify: `index.html` — add experiencia section
- Modify: `styles.css` — append experiencia styles
- Modify: `script.js` — update experiencia i18n keys

- [ ] **Step 1: Add experiencia section to `index.html` after stack `</section>`**

Note: The spec mentioned "3 entries" but the source file only contains 2 experience entries. Use both existing entries — do not invent a third.

```html
  <!-- ======= EXPERIENCIA ======= -->
  <section id="experiencia" data-nav-section="experiencia" class="reveal">
    <div class="section-header">
      <span data-i18n="exp_eyebrow">EXPERIENCIA</span>
    </div>
    <div class="exp-list">

      <div class="exp-row">
        <span class="exp-year" data-i18n="exp1_date">2021–</span>
        <div class="exp-content">
          <h2 class="exp-title" data-i18n="exp1_title">Project Manager · Gorat Digital Services</h2>
          <p class="exp-body" data-i18n="exp1_body">Liderazgo de proyectos TI con operación en campo, coordinación ejecutiva y construcción de un centro de control con trazabilidad y reporteo.</p>
        </div>
      </div>

      <div class="exp-row">
        <span class="exp-year" data-i18n="exp2_date">2019–</span>
        <div class="exp-content">
          <h2 class="exp-title" data-i18n="exp2_title">Consultor TI Independiente</h2>
          <p class="exp-body" data-i18n="exp2_body">Mejora operativa, priorización de entregables, acompañamiento a implementación y soporte para equipos técnicos y directivos.</p>
        </div>
      </div>

    </div>
  </section>
```

- [ ] **Step 2: Append experiencia styles to `styles.css`**

```css
/* =============================================
   EXPERIENCIA
   ============================================= */
#experiencia {
  border-bottom: var(--border);
}

.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-row {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 24px;
  padding: 24px;
  border-bottom: var(--border-sub);
  align-items: start;
}

.exp-row:last-child {
  border-bottom: none;
}

.exp-year {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 16px;
  color: var(--red);
  line-height: 1.2;
  font-weight: 900;
}

.exp-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 6px;
}

.exp-body {
  font-size: 12px;
  line-height: 1.6;
  color: var(--ink-soft);
}
```

- [ ] **Step 3: Update experiencia i18n keys in `script.js`**

The existing `exp1_title`, `exp1_date`, `exp1_body`, `exp2_title`, `exp2_date`, `exp2_body` keys already exist in the `i18n` object — keep them.

Add new keys:

In `i18n.es` add:
```js
exp_eyebrow: "EXPERIENCIA",
```

In `i18n.en` add:
```js
exp_eyebrow: "EXPERIENCE",
exp1_title: "Project Manager · Gorat Digital Services",
exp1_date: "2021–",
exp1_body: "IT project leadership with field operations, executive coordination and a custom control center with traceability and reporting.",
exp2_title: "Independent IT Consultant",
exp2_date: "2019–",
exp2_body: "Operational improvement, deliverable prioritization, implementation support and guidance for technical and executive teams.",
```

- [ ] **Step 4: Open in browser and verify**

Expected: "EXPERIENCIA" black header, 2 rows with red year on left, bold uppercase title + body text on right. Subtle divider between rows.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add experiencia section with brutalist timeline"
```

---

## Task 7: Contacto / CTA Section + Close `<main>`

**Files:**
- Modify: `index.html` — add contacto section and close `<main>`
- Modify: `styles.css` — append contacto styles
- Modify: `script.js` — update contacto i18n keys

- [ ] **Step 1: Add contacto section and close main in `index.html`**

After the experiencia `</section>`:

```html
  <!-- ======= CONTACTO ======= -->
  <section id="contacto" data-nav-section="contacto" class="reveal">
    <div class="cta-inner">
      <div class="cta-text">
        <p class="cta-title" data-i18n="cta_title">¿HABLAMOS?</p>
        <p class="cta-sub" data-i18n="cta_sub">DISPONIBLE AHORA · RESPONDO EN &lt;24H</p>
      </div>
      <div class="cta-buttons">
        <a class="cta-btn asset-link is-hidden"
           href="assets/cv.pdf"
           download
           data-requires-asset="cv"
           data-track="cta-download-cv"
           data-i18n="cta_cv">DESCARGAR CV</a>
        <a class="cta-btn"
           href="https://www.linkedin.com/in/javierperezperegrina/"
           target="_blank"
           rel="noopener noreferrer"
           data-track="cta-linkedin"
           data-i18n="cta_linkedin">LINKEDIN</a>
        <a class="cta-btn cta-btn--red"
           href="mailto:javierpperegrina@gmail.com"
           data-track="cta-email"
           data-i18n="cta_email">EMAIL</a>
      </div>
    </div>
  </section>

</main>

<footer class="site-footer">
  <span class="footer-copy">Jose Javier Perez Peregrina — <span id="year"></span></span>
</footer>
```

- [ ] **Step 2: Append contacto + footer styles to `styles.css`**

```css
/* =============================================
   CONTACTO / CTA
   ============================================= */
#contacto {
  border-top: 3px solid var(--red);
}

.cta-inner {
  background: var(--ink);
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.cta-title {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--bg);
  line-height: 1;
  font-weight: 900;
}

.cta-sub {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: 6px;
}

.cta-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.cta-btn {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1.5px solid var(--bg);
  color: var(--bg);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
}

.cta-btn:hover {
  background: var(--bg);
  color: var(--ink);
}

.cta-btn--red {
  background: var(--red);
  border-color: var(--red);
  color: white;
}

.cta-btn--red:hover {
  background: white;
  color: var(--red);
}

/* Hide CV button when asset not present */
.is-hidden { display: none; }

/* =============================================
   FOOTER
   ============================================= */
.site-footer {
  border-top: var(--border);
  padding: 12px 24px;
  max-width: var(--container);
  margin: 0 auto;
}

.footer-copy {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--ink-faint);
  text-transform: uppercase;
}
```

- [ ] **Step 3: Add contacto i18n keys to `script.js`**

In `i18n.es` add:
```js
cta_title: "¿HABLAMOS?",
cta_sub: "DISPONIBLE AHORA · RESPONDO EN <24H",
cta_cv: "DESCARGAR CV",
cta_linkedin: "LINKEDIN",
cta_email: "EMAIL",
```

In `i18n.en` add:
```js
cta_title: "LET'S TALK?",
cta_sub: "AVAILABLE NOW · REPLY WITHIN 24H",
cta_cv: "DOWNLOAD CV",
cta_linkedin: "LINKEDIN",
cta_email: "EMAIL",
```

Also update the existing `cta_download_cv` → `cta_cv` reference in the `checkAssets()` function in `script.js` if it references by key (check for `data-i18n="cta_download_cv"` references and update to `cta_cv`).

- [ ] **Step 4: Open in browser and verify full page**

Expected:
- Dark CTA section with red top border
- "¿HABLAMOS?" in large white Arial Black
- Buttons: DESCARGAR CV (only if `assets/cv.pdf` exists), LINKEDIN, EMAIL (red)
- Footer with monospace copyright text + year

Check entire page scrolls through all 6 sections without layout breaks.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css script.js
git commit -m "feat: add contacto CTA section and footer"
```

---

## Task 8: Responsive CSS

**Files:**
- Modify: `styles.css` — append media queries at end of file

- [ ] **Step 1: Append responsive styles to `styles.css`**

```css
/* =============================================
   RESPONSIVE — 780px (tablet/mobile breakpoint)
   ============================================= */
@media (max-width: 780px) {
  .portfolio {
    border-left: none;
    border-right: none;
  }

  /* Nav: hide text links, keep logo + lang toggle */
  .nav-links {
    display: none;
  }

  /* Hero: stack vertically */
  .hero-body {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-tags-col {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  /* Metrics: 3-col stays but smaller padding */
  .hero-metric {
    padding: 14px 16px;
  }

  .metric-n {
    font-size: 28px;
  }

  /* Casos: 1 column */
  .casos-grid {
    grid-template-columns: 1fr;
  }

  .caso {
    border-right: none;
    border-bottom: var(--border-col);
  }

  .caso--right {
    border-bottom: none;
  }

  /* Stack rows: stack label above pills */
  .stack-row {
    flex-direction: column;
    gap: 10px;
  }

  /* Exp: smaller year col */
  .exp-row {
    grid-template-columns: 56px 1fr;
    gap: 16px;
  }

  /* CTA: stack vertically */
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* =============================================
   RESPONSIVE — 560px (small mobile)
   ============================================= */
@media (max-width: 560px) {
  .hero-title {
    font-size: 36px;
  }

  /* Metrics: single column */
  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .hero-metric {
    border-right: none;
    border-bottom: var(--border-sub);
  }

  .hero-metric:last-child {
    border-bottom: none;
  }

  /* CTA buttons: stack */
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-btn {
    text-align: center;
  }
}
```

- [ ] **Step 2: Test responsiveness in browser**

Resize browser window to:
- 780px wide — nav links disappear, casos goes 1-col, hero stacks
- 560px wide — metrics go 1-col, CTA buttons stack

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

## Task 9: Clean Up `script.js`

**Files:**
- Modify: `script.js` — remove dead i18n keys, fix section references

- [ ] **Step 1: Remove dead i18n keys from `script.js`**

The following i18n keys are no longer used (their HTML elements were removed). Remove them from both `i18n.es` and `i18n.en`:

Keys to remove (search and delete):
- `nav_results`, `nav_capabilities`, `nav_faq`, `header_cta`
- `hero_eyebrow`, `hero_title`, `hero_lead`
- `hero_pill_1`, `hero_pill_2`, `hero_pill_3`, `hero_pill_4`
- `hero_signal_1_label`, `hero_signal_1_value`, `hero_signal_2_label`, `hero_signal_2_value`, `hero_signal_3_label`, `hero_signal_3_value`
- `hero_card_kicker`, `exec_title`, `hero_card_body`, `hero_card_fit_title`
- `hero_fit_1`, `hero_fit_2`, `hero_fit_3`, `hero_fit_4`, `hero_status_body`, `hero_photo_alt`
- `results_eyebrow`, `results_title`, `results_intro`
- `result1_title`, `result1_body`, `result2_title`, `result2_body`, `result3_title`, `result3_body`
- `cap_eyebrow`, `cap_title`, `cap_intro`, `cap_fit_title`, `cap_fit_body`
- `cap1_title`, `cap1_body`, `cap2_title`, `cap2_body`, `cap3_title`, `cap3_body`, `cap4_title`, `cap4_body`
- `cases_eyebrow`, `cases_title`
- `case1_tag`, `case1_title`, `case1_intro`, `case2_tag`, `case2_title`, `case2_intro`
- `case_label_challenge`, `case_label_scope`, `case_label_led`, `case_label_system`, `case_label_result`
- `case1_challenge`, `case1_scope`, `case1_led`, `case1_system`, `case1_result`
- `case2_challenge`, `case2_scope`, `case2_led`, `case2_system`, `case2_result`
- `operate_eyebrow`, `operate_title`, `operate_intro`
- `operate1_step`, `operate1_title`, `operate1_body`
- `operate2_step`, `operate2_title`, `operate2_body`
- `operate3_step`, `operate3_title`, `operate3_body`
- `operate4_step`, `operate4_title`, `operate4_body`
- `exp_title`, `exp_intro` (keep the NEW `exp_eyebrow` added in Task 6 — only remove the old `exp_title` and `exp_intro`)
- `fluence_title`, `fluence_group1`, `fluence_group2`, `fluence_group3`, `fluence_group4`
- `fluence_chip_1` through `fluence_chip_16`
- `hands_title`, `hands_body`
- `faq_eyebrow`, `faq_title`, `faq1_q` through any faq keys
- `contact_eyebrow`, `contact_title`, `contact_body` (if present)
- `cta_download_cv` (replaced by `cta_cv`)

- [ ] **Step 2: Update `navSections` references in `script.js`**

The `navSections` query selector references `[data-nav-section]`. The new sections are: `perfil`, `casos`, `stack`, `experiencia`, `contacto`. No code change needed — the Intersection Observer uses attribute selectors generically. Just verify this works.

- [ ] **Step 3: Open browser, toggle language, scroll through page**

Expected: No console errors. Language toggle switches all visible text. Active nav link highlights as you scroll.

- [ ] **Step 4: Commit**

```bash
git add script.js
git commit -m "chore: remove unused i18n keys from script.js"
```

---

## Task 10: Final Polish + .gitignore

**Files:**
- Modify: `index.html` — update `<meta name="theme-color">` and title
- Modify: `.gitignore` (create if not present)

- [ ] **Step 1: Update theme-color meta in `index.html` `<head>`**

Find:
```html
<meta name="theme-color" content="#111826" />
```
Replace with:
```html
<meta name="theme-color" content="#f2f0eb" />
```

- [ ] **Step 2: Add `.superpowers/` to `.gitignore`**

If `.gitignore` exists, append:
```
.superpowers/
```

If it doesn't exist, create it with that single line.

- [ ] **Step 3: Final visual QA checklist — open in browser**

Check each item:
- [ ] All 6 sections render correctly
- [ ] No layout breaks at 780px and 560px widths
- [ ] Language toggle (ES/EN) translates all text
- [ ] Sticky nav highlights active section on scroll
- [ ] DESCARGAR CV button only shows if `assets/cv.pdf` exists
- [ ] LinkedIn and Email links open correctly
- [ ] No console errors
- [ ] `prefers-reduced-motion`: disable animations in OS settings, verify no reveal animations run

- [ ] **Step 4: Final commit**

```bash
git add index.html .gitignore
git commit -m "chore: update theme-color and add .superpowers to .gitignore"
```

---

## Done

After Task 10 the redesign is complete. Deploy by pushing to the `master` branch — Cloudflare Pages will auto-deploy.
