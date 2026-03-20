# Portfolio Redesign — Newspaper Brutalist

**Date:** 2026-03-20
**Status:** Approved
**Scope:** Full redesign of index.html + styles.css + script.js

---

## Overview

Complete visual and structural redesign of Jose Javier Pérez Peregrina's recruiter-facing portfolio. The goal is maximum impact in minimum time: a recruiter should understand who he is, what he delivers, and how to contact him within 3 seconds.

**Chosen direction:** Newspaper Brutalist — asymmetric editorial grid, bold sans-serif headlines (Arial Black), monospace labels, off-white newsprint background, hard black borders, emergency red accent.

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f2f0eb` | Page background (newsprint off-white) |
| `--ink` | `#111111` | Text, borders, filled tags |
| `--red` | `#ff3d00` | Primary accent: numbers, highlights, CTA button |
| `--ink-soft` | `#555555` | Body text, secondary content |
| `--ink-faint` | `#999999` | Labels, meta info |

### Typography
| Role | Font | Weight/Style |
|------|------|-------------|
| Headlines (H1, H2, section numbers) | Arial Black, sans-serif | 900, uppercase |
| Labels / Nav / Tags | Courier New, monospace | 400, letter-spacing: 2-4px |
| Body text | Manrope (keep from current) | 400-500 |

### Spacing & Borders
- Section borders: `3px solid #111`
- Column dividers: `2px solid #111`
- Sub-dividers: `1px solid #ccc`
- No border-radius on structural elements (zero or 2px max)
- Tags/pills: `0px` border-radius (hard edges)
- Generous padding per section: `20-28px`
- Inter-section gap (between major sections): `0px` — sections are separated by their own top borders, not margins

---

## Structure — 6 Sections

### 1. Navigation
- Logo: "JJ Pérez" in Arial Black
- Nav links: PERFIL · CASOS · STACK · CONTACTO (monospace, uppercase)
- Language toggle: `ES / EN` button (keep existing i18n logic)
- Bottom border: `3px solid #111`

### 2. Hero
Three sub-zones stacked:

**a) Masthead bar**
- Left: `PORTFOLIO — 2025 — MEXICO CITY` (monospace, faint)
- Right: `● DISPONIBLE` badge in red (ES) / `● AVAILABLE` (EN) — uses `hero.available` translation key

**b) Headline + Tags**
- Left: Giant name `JOSE / JAVIER / PÉREZ` (Arial Black, 54px+, `PÉREZ` in red)
- Below name: 1-line tagline describing specialty
- Right column: 4 role tags (TPM solid, rest outline)

**c) Metrics bar** (3 columns, bordered)
- `9K+` → DISPOSITIVOS COORDINADOS
- `5Y+` → EXPERIENCIA EN OPS
- `MX` → CIUDAD DE MÉXICO

### 3. Casos de Ejecución
2-column grid, each case:
- Large red number (01, 02)
- Bold uppercase title
- 2-3 sentence description
- Black pill result label (`ENTREGA 100%` / `NDA PROTECTED`)

Cases to include:
1. **Rollout Nacional de Infraestructura** — Coordinación de ~9,000 equipos de cómputo en múltiples sitios. Gestión de equipos de campo, control de entrega y SLAs. Resultado: entrega al 100% sin incidentes críticos. [COPY TBD — placeholder ok for implementation]
2. **Centro de Control Operativo** [NDA] — Diseño e implementación de sistema de monitoreo en tiempo real con automatización de reportes y alertas. Tiempo de respuesta a incidentes reducido 60%+. [NDA: no mencionar empresa, solo el proyecto]

### 4. Stack de Herramientas *(New Section)*
Two rows of pills:
- **Técnico:** Python · JavaScript · SQL · Webhooks · Google Sheets API — filled (black)
- **Gestión y Ops:** Jira · Notion · Asana · Power BI · Incident Mgmt · SLA Tracking — outline

### 5. Experiencia
Timeline-style list:
- `YEAR–` | **JOB TITLE** | Description — layout using `grid-template-columns: 64px 1fr`
- 3 entries (most recent first)
- Dividers between entries: `1px solid #ddd`
- Content: use existing entries from current `index.html` — copy from current experience section [TBD: implementor pulls real data from source file]

### 6. Contacto / CTA
Full-width dark block (`background: #111`):
- Left: `¿HABLAMOS? / DISPONIBLE AHORA` (Arial Black, red accent)
- Right: 3 buttons — LINKEDIN · EMAIL · DESCARGAR CV (red)
- Top border: `3px solid #ff3d00` (color break)
- CV button: links to `assets/cv.pdf` — use same conditional logic as current (check if file exists before showing button)

---

## Sections Removed (vs current)

| Section | Reason |
|---------|--------|
| Resultados (separate) | Merged into Hero metrics bar |
| Capacidades | Merged into Hero tags + Stack section |
| Cómo Opero | Removed — implicit in Casos descriptions |
| FAQ | Removed — cleaner without it |
| Testimonios | No quotes available |

---

## Bilingual (ES/EN)

Keep existing i18n system in `script.js` (localStorage + data-i18n attributes). All new copy needs Spanish and English translation keys added.

New translation keys needed:
- `stack.technical` / `stack.ops`
- `hero.tagline`
- `hero.available`
- `metrics.devices` / `metrics.experience` / `metrics.city`
- `cta.title` / `cta.subtitle`
- All section headers

---

## Technical Constraints

- **Stack:** Vanilla HTML5 + CSS3 + JavaScript (no frameworks, no build tools)
- **Files:** `index.html`, `styles.css`, `script.js` — same file structure
- **Assets:** Keep existing images (`headshot.webp`, `og-cover.jpg`, etc.)
- **Deployment:** Cloudflare Pages (static)
- **Accessibility:** Maintain ARIA labels, semantic HTML, focus-visible outlines
- **Performance:** No new external dependencies (fonts: Google Fonts OK)
- **Responsive:** Breakpoints at 780px (2-col → 1-col) and 560px (mobile)

---

## Fonts to Load

Remove existing Sora `<link>` from `<head>`. Replace with:
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap" rel="stylesheet">
```
Arial Black is system font — no additional load needed. Fallback `sans-serif` is acceptable if Arial Black unavailable (low-risk: recruiter audience skews Windows/macOS).
Courier New is system font — no additional load needed.

---

## Responsive Behavior

| Breakpoint | Changes |
|-----------|---------|
| `> 780px` | Full 2-col layouts, metrics 3-col |
| `≤ 780px` | Hero: stack vertically, tags below name; Casos: 1-col |
| `≤ 560px` | Metrics: 1-col stacked; CTA: buttons stack vertically |

---

## Implementation Notes

- The existing `script.js` i18n system is solid — keep it, just add new translation keys
- `prefers-reduced-motion` support must be maintained
- Intersection Observer scroll animations: keep but simplify (just fade-in, no complex delays)
- Remove all existing CSS variables and redefine with new design tokens
- The `styles.css` should be a complete rewrite (not incremental patch)
