# Design System: Alabama SMB Web Developer Portfolio

## Aesthetic: Neo-Brutalism & "Intel Briefing"
The project follows a strict **Neo-brutalist** aesthetic combined with an "Intel Briefing" or "System Terminal" vibe. This positions the developer as a serious, no-nonsense technical partner rather than a trendy creative agency.

### Core Principles
- **No Rounded Corners:** Everything is perfectly sharp (`rounded-none`).
- **Heavy Borders:** Structural elements use thick black borders (typically `3px` or `4px solid #000000`).
- **Solid Shadows:** Shadows do not blur. They are solid, offset blocks (e.g., `4px 4px 0px #000000`).
- **High Contrast:** Focus on extreme legibility using black, white, and specific functional accents.
- **Monospace Accents:** Heavy use of monospace fonts for labels, tags, and "system" text.

---

## 1. Color Palette

Use Tailwind utility classes mapped to these values:

| Usage | Hex / Tailwind | Description |
| :--- | :--- | :--- |
| **Background (Main)** | `#F2F2F2` / `bg-bgMain` | The primary off-white/gray background for the body. |
| **Surface (Cards)** | `#FFFFFF` / `bg-surface` | Pure white for cards, dropdowns, and elevated content. |
| **Text (Primary)** | `#000000` / `text-black` | Main headings and high-contrast text. |
| **Text (Secondary)** | `#57534E` / `text-textSecondary` | Paragraphs and descriptive text. |
| **Primary Accent** | `#2563EB` / `bg-primary` | Blue. Used for main CTAs, active links, and highlights. |
| **Success / Metric** | `#16A34A` / `bg-success` | Green. Used *only* for positive metrics (e.g., 100/100 score). |
| **Warning / Alert** | `#F59E0B` / `bg-warning` | Amber. Used for problem highlights, alerts, and "Direct Access" blocks. |
| **Danger / Error** | `#EF4444` / `bg-[#EF4444]` | Red. Used for critical errors, pain points, or urgent flags. |
| **Footer / Dark** | `#0F172A` | Deep navy/black for the footer section. |

---

## 2. Typography

The typography relies on extreme hierarchy and capitalization.

- **Main Font:** Geist Sans (or system sans-serif). Used for headings and body text.
- **Accent Font:** Geist Mono (or system monospace). Used for labels, tags, and small technical details.
- **Headings:**
  - Always `uppercase`.
  - Always `font-black` (900 weight) or `font-bold` (700 weight).
  - Tight line-height (`leading-none` or `leading-tight`).
  - Fluid sizing (`text-fluid-hero`, `text-fluid-h2`) for responsiveness.
- **Text Outlines:** Use `-webkit-text-stroke: 2px black` on `text-transparent` for the hollow text effect.

---

## 3. UI Components & Patterns

### Buttons & CTAs (`.btn-brutal`)
- Solid background (Black or Primary).
- White uppercase tracking-widest text.
- Thick border (`border-2` or `border-4 border-black`).
- Hover effect: Rigid translation, no shadow blur.

### Cards & Blocks (`.brutal-border`, `.shadow-brutal`)
- Background: White or specific accent color.
- Border: `border-4 border-black`.
- Shadow: `shadow-[8px_8px_0_0_#000]`.
- Hover: Often includes a slight rotation (`transform -rotate-1` to `rotate-1`) or rigid lift (`-translate-y-2`).

### Tags & Labels ("Intel Style")
- Format: `[ 01. THE PROBLEM ]`
- Font: `font-mono text-[12px] uppercase font-bold tracking-widest`.
- Colors: Often Primary text on transparent, or Black text on Warning background.
- Placement: Above main section headings or absolutely positioned on corners of cards (`-top-3 -right-3`).

### Animations
- **Reveal:** Text blocks use `.reveal-overflow` and `.reveal-text` for a staggered slide-up effect on scroll.
- **Stamps:** `.stamp-item` combined with delay classes (`delay-100`, `delay-200`) for block-level appearance animations.

---

## 4. Layout & Spacing
- **Max Width:** `max-w-[1400px]` for main container.
- **Padding:** Generous section padding (`py-16 lg:py-24` or `py-20 lg:py-32`).
- **Desktop vs Mobile:**
  - Desktop: Use 2-column or 4-column grids to utilize space. Avoid narrow center-columns.
  - Mobile: Simple stacked column, fully readable without horizontal scrolling.

---

## 5. Copywriting Rules
- **Tone:** Professional, direct, local partner.
- **Perspective:** Use "I" instead of "We".
- **Focus:** Highlight business outcomes ("leads", "performance", "stability") over technical jargon ("Astro", "Headless CMS").
- **Honesty:** Avoid generic marketing hype ("Dominate SEO"). Use factual, trust-building language ("designed to improve", "optimized for").