# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Franklin Alvarado for full-time roles (Tech Lead / Full Stack Web Developer). They are screening candidates quickly — scanning for real, verifiable impact and technical range, not just a list of technologies.

## Product Purpose

Franklin's personal portfolio, built to get him hired for a full-time position. It exists to prove — with real project evidence, not claims — that he can lead technical decisions and move business metrics, not just write code.

## Positioning

Combines two things most candidate portfolios keep separate: technical leadership tied to measurable business outcomes (e.g. leading a multibrand platform, +30% delivery speed, payment gateway integration securing prepaid liquidity) and hands-on technical craft with a modern, AI-forward workflow (Nuxt/Vue/TypeScript, Claude in the dev process). Neither side dominates — the combination is the differentiator.

## Operating Context

Static Astro site, built section by section (Header sets the visual baseline; each section is validated in-browser before moving to the next). Current sections:

- **Header** — logo mark + "Contáctame" mailto button. Light mode only (dark mode was removed).
- **Hero** — name, rotating role/phrase line.
- **Projects** (`Projects.astro`, `#projects`) — project case studies as a single "hoja" (paper sheet) surface. First entry: Multibrand (Servicios Turísticos Panameños — National, Alamo, Enterprise car rental brands), with tech-stack icons and numbered sub-sections (e.g. "01 SEO") breaking down specific impact areas.
- **Contacto** — currently a placeholder; scoped to become direct links (mailto + LinkedIn + GitHub), no contact form.

## Capabilities and Constraints

- Fully static Astro site — no backend, no CMS, no form-handling service. Any "contact" mechanism must work without server infrastructure.
- Light mode only — no dark theme, no theme toggle.
- Typography is still in CDN trial mode (Fontsource via jsDelivr, not installed as a dependency): Geist for headings, Manrope for body, Caveat as a project-title accent. Not finalized.
- `--color-secondary` token is defined but not yet used/confirmed anywhere in the UI.

## Brand Commitments

- Name: Franklin Alvarado.
- LinkedIn: linkedin.com/in/frankalvarado. GitHub: github.com/frankivann.
- Primary accent color: orange (`--color-primary: #ff6a00`), used sparingly (logo mark, occasional accents) — not a dominant color.
- Visual references pinned by Franklin: Apple LA, Vercel, Rauno Craft — minimalist, professional, sophisticated. Not playful, not colorful-by-default.

## Evidence on Hand

- **Multibrand** (real, in production): platform centralizing business logic for 3 car-rental brands (National, Alamo, Enterprise) under Servicios Turísticos Panameños S.A., with Wompi integrated for reservations/payments. Stack used: Nuxt, Vue, TypeScript, Strapi, Claude. Documented impact: 40% performance improvement via GTM + Google Analytics implementation (currently the only sub-section written; more are expected).
- Full CV/work history is captured separately (Franklin's CV memory) — includes a second past role (Georgia Tech Panamá, B2B logistics platform) not yet added as a Proyectos entry.
- No testimonials, press, or third-party case studies exist or should be fabricated.
- CV file download was tried once in Hero and explicitly rejected by Franklin ("no me gustó") — do not reintroduce without being asked.

## Product Principles

1. Every claim ties to a real, verifiable achievement — never invent metrics, testimonials, or case studies.
2. Business impact and technical leadership carry equal weight to raw technical skill; neither side of the story gets dropped.
3. Restrained, minimal visual language — the work and the numbers carry the page, not decoration.
4. Contact must be zero-friction and zero-backend: direct links only, no forms.
5. Ship section by section, validating each visually in-browser before moving to the next.

## Accessibility & Inclusion

No project-specific requirement established yet.
