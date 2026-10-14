# Design

Companion to PRODUCT.md. This is the visual system for SST RoboSummit. Dark, typographic, information-first. The mission voice lives in copy and one signal accent, not in decorative machinery.

## Theme

Dark by default. Pure black base, one signal red accent, a full light-text ramp on top. No light mode. The register is a brand/event surface: hierarchy is carried by type scale and spacing, not by cards, borders, and mono labels.

## Colors

OKLCH throughout. Neutrals carry a whisper of warm chroma toward the red hue (27) so they read as cohesive, never as dead gray. Contrast is verified against black: body text and labels clear WCAG AA (steel ≈ 7.4:1, silver ≈ 11:1, snow ≈ 19:1); `red-bright` clears 4.5:1 for the small mono labels and countdown it is used on.

| Token | Value | Role |
|---|---|---|
| `void` | `oklch(0 0 0)` | Page background |
| `panel` | `oklch(0.175 0.005 27)` | Elevated surfaces, image wells |
| `panel-2` | `oklch(0.22 0.006 27)` | Table headers, hover fills |
| `line` | `oklch(0.27 0.006 27)` | Hairline borders, dividers |
| `line-2` | `oklch(0.4 0.008 27)` | Stronger borders, secondary button edge |
| `steel` | `oklch(0.655 0.012 27)` | Labels, captions, tertiary text |
| `silver` | `oklch(0.83 0.008 27)` | Body copy |
| `snow` | `oklch(0.985 0 0)` | Headings, primary text |
| `red` | `oklch(0.63 0.23 29)` | Primary fill: CTA, elite badge. Label text is `void` on red |
| `red-bright` | `oklch(0.7 0.19 30)` | Accent text on black: countdown, rule codes, key numbers |

The old blue/sky/void-navy palette is retired. Blue was competing with red and adding noise; a single warm accent against black is the whole strategy.

### Usage ratios

Black dominates. Snow and silver text fill the content. Red appears only on: primary CTAs, `red-bright` key data (countdown, codes, competition day), the elite badge, and hover states. Target red coverage under 10% of any viewport.

## Typography

- **Display / body:** Space Grotesk (`--font-sans`), 400–700. Headings uppercase, tight tracking.
- **Mono / data:** IBM Plex Mono (`--font-mono`), 400–600, only for genuine data: codes, countdown, small tracked labels, table numbers.

Scale (modular, ratio ≥ 1.25):

| Step | Size | Use |
|---|---|---|
| Display | `clamp(3.25rem, 9vw, 6rem)` | Hero H1 |
| H2 | `text-3xl → lg:text-5xl` | Section titles |
| H3 | `text-xl → text-2xl` | Card / step / rule titles |
| Hero key data | `text-3xl → sm:text-4xl` | Date, registration in the hero bar |
| Body | `text-base → sm:text-lg` | Descriptions |
| Label | `10–11px mono` uppercase `tracking-[0.25em]` | Kickers replaced by section titles; now only labels/data |

`text-wrap: balance` on headings, `pretty` on paragraphs. Line-height is generous (leading-relaxed) since light type on black reads thin.

## Components

### Hero
Kicker line, oversized H1, one-paragraph lede, then a three-cell key-data bar (competition day, live countdown, registration date) as the visual anchor, primary + secondary CTA, and a three-stat row. No particle canvas, no orbital rings, no grid pattern, no mouse parallax.

### Key-data bar
`grid` with `divide-line` hairlines, cells of label (mono steel) + value (large snow, or red-bright for the countdown). Used in the hero and the registration section.

### Buttons
- Primary: `bg-red text-void`, hover `bg-snow`. Full-bleed rectangle, no radius, mono/uppercase bold label, `tracking-[0.15–0.2em]`.
- Secondary: transparent with `border-line-2 text-snow`, hover `border-snow`.
Labels are verb + object: "Register Now", "View Challenges", "Download Full Rulebook".

### Section heading
`<h2>` + optional one-line description. The old mono "kicker" eyebrow above every heading is gone (it had become AI scaffolding).

### Cards
Single hairline border on black, hover to `border-line-2`. No nested cards. Challenge meta reads as a `dt/dd` key-value list under a top border, not a boxed sub-grid.

### Placeholder image
Bordered `panel` well at the target aspect ratio, centered mono label, caption bar below. The old grid texture, corner brackets, and orbit icon are removed. Real images use `next/image` `fill` + `object-cover` in the same frame.

### Rules list
`divide-y` rows: red-bright code + uppercase title + body. No per-rule card, no hover x-shift.

### Leaderboard (currently commented out)
Clean table, top row `bg-panel` highlight (not a left stripe), trend rendered as colored text not filled chips.

### Header
Fixed, transparent at top, `bg-void/90 backdrop-blur` on scroll. Wordmark + inline nav (plain text, hover to snow) + register button. Mobile menu drops down.

### Footer
Black (no panel fill), three columns: blurb, nav, mission window, plus a slim bottom bar with a back-to-top link. The blinking "all systems nominal" status line is gone.

## Motion

Framer Motion (`MotionConfig reducedMotion="user"`) plus a global `prefers-reduced-motion` CSS reset. Reveal is translate-only (y 24 → 0), no opacity gate, so content is never hidden if the observer or JS stalls (important: this site is server-rendered and screenshotted headless). Hero uses a short staggered y-rise on load; scroll reveals stagger lightly. Hover: border color shifts, cards lift 0 (removed), buttons swap fill. No bounce, ease-out-quart curves.

## Layout

`max-w-7xl` container, `px-4 sm:px-6 lg:px-8`. Section rhythm `py-20 lg:py-28` with `border-b border-line` separators. `scroll-mt-16` on anchor sections for the fixed header. Grids use `gap-6` and `auto-fit`/explicit breakpoints; the challenge grid is `sm:2 / lg:3 / xl:4`.

## Anti-references (visual)

No particle canvases, orbital SVG rings, grid-pattern backgrounds, corner brackets, blinking status dots, gradient text, glassmorphism as default, side-stripe borders, or mono-everywhere "HUD" chrome. Restraint here is deliberate, not empty.
