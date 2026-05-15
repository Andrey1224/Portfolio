# Design System: Alabama SMB Web Developer Portfolio

## Aesthetic: Neo-Brutalism & "Intel Briefing"
The project follows a strict **Neo-brutalist** aesthetic combined with an "Intel Briefing" or "System Terminal" vibe. This positions the developer as a serious, no-nonsense technical partner rather than a trendy creative agency. The style is loud in structure, but calm in reading.

### Core Principles
- **Function over Form:** Decorations must act as interface signals (press, stamp, alert, scan, system status).
- **No Rounded Corners:** Everything is perfectly sharp (`rounded-none`).
- **High Contrast:** Focus on extreme legibility using black, white, and specific functional accents.

---

## 1. UI Intensity Levels (Rule of Dosing)
Do not make every block scream. Use a strict hierarchy:

- **Level 1 — Quiet / Base (60%):** Background `#F2F2F2`, pure text, no borders/shadows. Used for long text, FAQ, secondary content.
- **Level 2 — Structured / Brutal Card (30%):** Background `#FFFFFF`, `2px solid #000`, `4px 4px 0 #000` shadow. Used for services, case studies, features.
- **Level 3 — Alert / Intel Briefing (10%):** Background `#000000` or `#111111`, white/accent text, heavy shadow. Used *only* for the main hero, a major CTA, or a critical system warning. **Rule: Maximum one heavy black anchor per screen/viewport.** Never put long paragraphs on a black background.

---

## 2. Color Palette & Rules
Use Tailwind utility classes mapped to these values:

| Usage | Hex / Tailwind | Description |
| :--- | :--- | :--- |
| **Background (Main)** | `#F2F2F2` / `bg-bgMain` | The primary off-white/gray background for the body. |
| **Surface (Cards)** | `#FFFFFF` / `bg-surface` | Pure white for cards, dropdowns, and elevated content. |
| **Text (Primary)** | `#000000` / `text-black` | Main headings and high-contrast text. |
| **Text (Secondary)** | `#57534E` / `text-textSecondary` | Paragraphs and descriptive text. |
| **Primary Accent** | `#2563EB` / `bg-primary` | Blue. *(Note: Consider shifting to a toxic yellow/green for a stronger Intel vibe).* Use strictly as a **signal**, not a flood. |
| **Success / Metric** | `#16A34A` / `bg-success` | Green. Used *only* for positive metrics (e.g., 100/100 score). |
| **Warning / Alert** | `#F59E0B` / `bg-warning` | Amber. Used for problem highlights, alerts, and "Direct Access" blocks. |
| **Danger / Error** | `#EF4444` / `bg-[#EF4444]` | Red. Used for critical errors, pain points, or urgent flags. |

---

## 3. Typography & Hierarchy
Typography acts as a visual element.

- **Main Font:** Geist Sans (or system sans-serif). Used for headings and body text.
- **Accent Font:** Geist Mono (or system monospace). Used **only** for system language, labels, metadata, and case IDs. Never use for long paragraphs.
- **Headings:**
  - `uppercase`, `font-black` (900) or `font-bold` (700).
  - Tight line-height (`leading-[0.9]` to `leading-none`).
- **Body Text:**
  - Normal case, `16px` or `18px`, `leading-[1.5]`. Max width `60-72ch`.
- **Text Outlines:** Use `-webkit-text-stroke: 2px black` on `text-transparent` for the hollow text effect.

---

## 4. Spacing System (8px Grid)
Thick borders and hard shadows require **more breathing room**, not less. Stick to the 8px grid (Tailwind spacing).
- **Avoid:** `p-5` (20px), `gap-[22px]`.
- **Use:** `p-4` (16px), `p-6` (24px), `p-8` (32px), `py-16` (64px), `py-24` (96px).

---

## 5. Border & Shadow Hierarchy
Do not use `3px` or `4px` borders/shadows for everything. This creates a flat, "cartoon" look.

**Borders:**
- `1px solid #000`: Internal dividers, table lines, metadata.
- `2px solid #000`: Standard cards, buttons, inputs.
- `4px solid #000`: Hero block, major CTA, massive section wrappers.

**Shadows (Solid, no blur):**
- `shadow-sm` (`3px 3px 0 #000`): Small buttons, tags, tooltips.
- `shadow-md` (`5px 5px 0 #000`): Standard cards.
- `shadow-lg` (`8px 8px 0 #000`): Hero cards, featured CTAs.
- *Never use massive 16px shadows.*

---

## 6. Motion & Animation Rules
Animations must be brief, mechanical, and unobtrusive. **No bouncy or soft luxury easing.**

### Approved Effects:
- **Button Press:** `:active` state must push the button down (`translate(4px, 4px)`) and completely remove the shadow (`box-shadow: 0 0 0`).
- **Block Wipe Reveal:** Opening panel effect (`clip-path: inset(0 100% 0 0) to inset(0 0 0 0)`).
- **Stamp-in:** Hard scale-down and slight rotation for labels.
- **Hard Slide-in:** `cubic-bezier(0.2, 0.8, 0.2, 1)` or `steps()`. **Absolutely no overshoot (e.g., cubic-bezier with values > 1 like 1.1).**
- **FAQ Snap:** Instant or very fast (`120ms`) mechanical snap. No slow `ease-out`.
- **Marquee:** Must `pause` on hover. Max 1 per page.

### Forbidden Effects:
- `rotate(4deg)` text reveals (too agency-like).
- Constant glitches.
- Parallax or scroll-jacking.
- Soft floating cards or bouncy easing.
- Extreme tilts (keep rotations to `1deg` or `2deg`; never `12deg`).

### Accessibility:
Always include `@media (prefers-reduced-motion: reduce)` to disable non-essential motion. Ensure proper `:focus-visible` states (e.g., `outline: 3px solid var(--accent); outline-offset: 3px;`).

---

## 7. "Intel Briefing" Specifics
Make it look like a technical diagnostic report:
- Use **System Labels**: `[ SYSTEM WARNING ]`, `[ 404 UX ]`.
- Build **Fake Terminal Panels**: Use browser dots, status rows, and data grids.
- Keep the tone honest: "Designed to improve", "Optimized for" — no hype.
