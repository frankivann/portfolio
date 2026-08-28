---
name: Franklin Alvarado — Portfolio
description: Evidence-driven Tech Lead / Full Stack portfolio built around a single "sheet of paper" motif
colors:
  signal-orange: "#ff6a00"
  pure-white: "#ffffff"
  paper: "#f5f5f5"
  hairline-grey: "#e5e5e5"
  whisper-grey: "#d4d4d4"
  faint-grey: "#a3a3a3"
  soft-graphite: "#737373"
  deep-graphite: "#262626"
  ink: "#171717"
typography:
  heading:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  accent:
    fontFamily: "Caveat, cursive"
    fontWeight: 700
rounded:
  none: "0px"
  sm: "8px"
  md: "16px"
  full: "9999px"
components:
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "36px"
    width: "36px"
  avatar-chip:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.full}"
    height: "36px"
    width: "36px"
  hoja-surface:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.none}"
    padding: "32px"
  nav-link:
    textColor: "{colors.soft-graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  nav-link-hover:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Franklin Alvarado — Portfolio

## Overview

**Creative North Star: "The Blank Sheet"**

The system is built around one governing image: a blank sheet of paper resting on a quiet desk. Proyectos renders this literally — a borderless white surface that overlaps the section above it via negative margin and holds a single, very soft ambient shadow. It is the one moment of elevation in an otherwise flat interface. Everywhere else — Header, Hero, navigation — stays quiet: hairline borders, no heavy shadows, a near-black/near-white grayscale palette with a single orange "signal" that appears in at most one place per view and is never a background wash.

The Caveat cursive project title (e.g. "Multibrand") reads like a handwritten note on that sheet — the system's one deliberately human, informal voice, set against an otherwise precise, geometric heading face (Geist). This tension — one handwritten mark on an otherwise typographically disciplined page — is the system's signature move, not an inconsistency to resolve.

Confirmed visual rejections: no colorful brand-icon treatment anywhere except inside the TechStack avatar stack, where per-tech brand color is the one deliberate exception; no CV-download button in Hero (built once, explicitly rejected — "no me gustó"); no directional/offset shadows anywhere (tried, replaced with ambient-only after it read unevenly).

**Key Characteristics:**
- One sheet, one moment of elevation — every other surface stays flat.
- Grayscale plus a single rare "signal" accent, never a dominant brand color.
- Geist carries structure; Caveat is the one handwritten accent, reserved for project titles.
- Circles are the default interactive shape — logo, icon buttons, nav indicator, avatar stack.

## Colors

Near-monochrome grayscale system with one rare accent; every color below is named for the role it plays, not just its hue.

### Primary
- **Signal Orange** (#ff6a00): a rare attention marker, not a brand wash — currently only the Header logo mark. Never used as a button fill or background.

### Neutral
- **Pure White** (#ffffff): the "sheet" surface itself (Proyectos), and the cutout border between overlapping TechStack avatar chips.
- **Paper** (#f5f5f5): the ambient page background the sheet rests on; doubles as the primary text color in dark mode.
- **Hairline Grey** (#e5e5e5): default light-mode borders — header, icon buttons, the Proyectos image placeholder.
- **Whisper Grey** (#d4d4d4): the image-placeholder border's slightly heavier weight; decorative dividers.
- **Faint Grey** (#a3a3a3): the most-muted text, e.g. the "01" numeral before a sub-section heading.
- **Soft Graphite** (#737373): secondary/body copy — descriptions, nav links at rest.
- **Deep Graphite** (#262626): dark-mode borders, mirroring Hairline Grey's role.
- **Ink** (#171717): primary headings and text in light mode; the page background in dark mode.

### Named Rules
**The One Signal Rule.** Signal Orange appears in at most one place per view. Its rarity is what makes it read as a signal, not a brand color.

**Reserved:** `--color-secondary` (#2563eb, blue) exists in the token file but has no confirmed role anywhere in the UI yet. Do not assign it speculatively.

## Typography

**Heading Font:** Geist (with system-ui fallback) — CDN trial, not yet an installed dependency.
**Body Font:** Manrope (same fallback stack) — CDN trial.
**Accent Font:** Caveat, cursive — CDN trial, reserved exclusively for project titles inside the "hoja."

**Character:** Geist gives structure and UI text quiet, geometric precision. Manrope reads a touch warmer for body copy. Caveat is the system's one handwritten voice — a signature, not a heading style.

### Hierarchy
- **Display** (Hero name; semibold, `text-5xl` → `text-8xl` responsive, `tracking-tight`): the one large display moment on the page.
- **Accent** (Caveat project title, e.g. "Multibrand"; bold, `text-4xl` → `text-6xl`, Ink): the handwritten annotation on the sheet.
- **Title** (sub-section headings, e.g. "SEO"; semibold, `text-lg`, Ink): always paired with a muted numeral prefix (`text-sm`, Faint Grey) — "01 SEO."
- **Body** (descriptions; regular, `text-sm`/`text-lg` responsive, Soft Graphite, `leading-relaxed`): 65–75ch reading width where the layout allows it.
- **Label** (nav links, UI text; regular, `text-sm`, Soft Graphite → Ink on hover/active).

### Named Rules
**The One Handwritten Voice Rule.** Caveat is reserved for project titles inside the "hoja." Never use it for headings, body copy, or UI chrome.

## Layout

`mx-auto max-w-6xl px-6` is the canonical page container, established by the Header. Any new nav-aligned section should reuse it exactly so content lines up edge-to-edge with the logo and nav. The Proyectos "hoja" is the one deliberate exception: it carries its own, wider internal padding because it is a distinct surface, not nav-aligned content — not a symmetry bug to fix.

The Proyectos text+visual pairing uses a 2-column grid (`grid-cols-1 sm:grid-cols-2 gap-12`, `items-center`) so both halves carry equal visual weight, rather than a `max-w`-constrained text column next to a flexible visual one.

`sm` (640px) is the primary responsive breakpoint for nearly everything — grid collapse, type scale, spacing. `md` (768px) is reserved specifically for the Header's nav/icon visibility switch (full nav + icons vs. hamburger menu).

The "hoja" deliberately breaks the page's vertical flow: a large negative top margin (`-mt-40`) pulls it up to overlap the Hero section above, and a tall minimum height (`min-h-[170vh]`) gives it room to grow as more project entries are added.

## Elevation & Depth

The system uses exactly one ambient shadow value, applied to one surface (the "hoja") and one small component (TechStack avatar chips). Everywhere else is flat; separation comes from a 1px hairline border or, for the sticky Header, a backdrop blur — never elevation.

### Shadow Vocabulary
- **Sheet Ambient** (`box-shadow: 0 0 40px -4px rgba(0,0,0,0.05)`): the Proyectos "hoja." Used once per page.
- **Chip Ambient** (`shadow-sm`): the small lift under each TechStack avatar circle.

### Named Rules
**The Ambient-Only Rule.** No shadow in this system carries a directional y-offset. An offset shadow was tried on the "hoja" and read stronger at the bottom/sides than the top — every shadow here is a soft, omnidirectional glow instead.

## Shapes

Circles are the default interactive shape: the logo mark, every icon button (LinkedIn, theme toggle, mobile menu — all 36×36px), the nav hover-indicator pill, and every TechStack avatar chip are `rounded-full`. Rectangles get soft, moderate rounding — `rounded-2xl` for the Proyectos image placeholder, `rounded-lg` for mobile nav-link hit areas.

The one un-rounded shape in the system is the "hoja" itself: zero border-radius, no border. It must read as a literal sheet of paper, not an app card.

### Named Rules
**The Paper Has No Corners Rule.** Every other surface in the system is rounded; the "hoja" alone stays a sharp-edged rectangle — rounding it would make it read as a card instead of a sheet.

## Components

### Icon Button
- **Shape:** circle, 36×36px, fully rounded.
- **Style:** transparent background, 1px hairline border (Hairline Grey light / Deep Graphite dark), 18px icon in Ink/white via `currentColor`.
- **Hover:** border steps one shade darker (Faint Grey light / a lighter graphite dark) — no fill, no shadow.
- **Used for:** LinkedIn link, theme toggle (Sun/Moon crossfade + rotate, 300ms ease-out), mobile menu toggle (Menu/X crossfade).

### Nav Pill Indicator (signature)
A pill (`rounded-full`) that slides and resizes to trace whichever nav link is hovered, using a translucent fill (`ink/5%` light, `white/10%` dark) rather than a solid color — 300ms ease-out, width and position both animated.

### TechStack Avatar Stack (signature)
- **Shape:** circles, 32–36px, overlapping via negative margin (`-space-x-2`), each with a 2px Pure White "cutout" border so overlapping chips read as separate coins, not a blob.
- **Color:** chip background stays neutral (Paper); the icon inside is the one place brand color is allowed, applied via `currentColor` set to each technology's own official hex.
- **Interaction:** hovering a chip brings it to front (`z-10`) and reveals a small dark tooltip pill above it with the tech name, fading in over 150ms.

### Hoja / Sheet Surface (signature)
- **Corner style:** none — full-bleed rectangle.
- **Background:** Pure White, floating on the Paper page background.
- **Shadow:** Sheet Ambient (see Elevation).
- **Composition:** pulled upward over the section above it via negative margin; holds project case studies as a 2-column grid (text + visual, equal width), followed by numbered sub-sections for specific impact areas (e.g. "01 SEO").

### Navigation
- **Desktop:** horizontal link row, `text-sm font-normal`, Soft Graphite at rest → Ink on hover, with the sliding pill indicator underneath on hover.
- **Mobile:** height-animated dropdown (`grid-template-rows` 0fr → 1fr, 300ms), links stacked with a `rounded-lg` hover fill, plus a bottom utility row (LinkedIn + theme toggle) separated by a hairline top border.

## Do's and Don'ts

### Do:
- **Do** reuse `max-w-6xl` + `px-6` as the shared container for any new nav-aligned section, so it lines up edge-to-edge with the Header.
- **Do** keep brand color exclusive to TechStack icons — every other icon (LinkedIn, Sun/Moon, Menu/X) stays monochrome via `currentColor`.
- **Do** use zero-offset ambient shadows only (The Ambient-Only Rule).
- **Do** build one-off page content (e.g. a new project entry) as plain hardcoded markup until its visual style is settled; promote to a reusable component with props only once a pattern repeats and is confirmed — the way TechStack was.

### Don't:
- **Don't** reintroduce a CV-download button/"sheet" in the Hero — built once, explicitly rejected.
- **Don't** round the corners of the "hoja" — it must stay a sharp-edged rectangle to read as paper, not a card.
- **Don't** use `--color-secondary` (#2563eb) — defined but has no confirmed role yet.
- **Don't** add a directional/offset `box-shadow` anywhere in the system.
