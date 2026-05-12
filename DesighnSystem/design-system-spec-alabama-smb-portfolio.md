# Design System Specification — Alabama SMB Web Developer Portfolio

## Purpose

This document describes the design system for a portfolio / sales landing page for an Alabama-based full-stack web developer serving small businesses.

The design system should help an AI coding/design assistant understand:

```txt
visual direction
colors
typography
spacing
components
motion
section treatments
what to avoid
```

The site should not feel like a generic developer resume.

It should feel like:

```txt
a premium technical sales page for Alabama small business owners
```

The website should communicate:

```txt
modern technical ability
local trust
clear communication
business outcomes
reliability
no ghosting
```

---

# 1. Core Visual Direction

## Style Name

```txt
Warm Editorial Engineering
```

This is an evolution of the earlier style:

```txt
Warm Technical Minimalism
```

The new direction keeps the trustworthy light SMB foundation, but adds stronger editorial/technical energy through:

```txt
larger typography
stronger section contrast
dark punch sections
better mockups
subtle gradients
clearer visual rhythm
controlled motion
```

## Main Feeling

The website should feel:

```txt
premium but not luxury
technical but understandable
bold but not aggressive
local but modern
trustworthy but not boring
```

## Target Audience

```txt
Alabama small business owners
local service businesses
healthcare / vet clinics
home services
premium local brands
business owners with outdated websites
non-technical clients
```

The design should be impressive enough to create a “wow” reaction, but still safe and clear enough for SMB owners who care about trust, clarity, and risk reduction.

---

# 2. Design Strategy

## The Main Balance

The design should balance:

```txt
70% light trust-based SMB design
30% dark editorial engineering energy
```

Do not make the whole site black.

Do not make the whole site look like a startup, crypto, AI, or cyber landing page.

## Why Hybrid Works

The light system says:

```txt
I am trustworthy.
I am local.
I am easy to talk to.
I am safe to hire.
```

The dark editorial system says:

```txt
I am technical.
I am confident.
I can build premium modern work.
I am not a generic freelancer.
```

The final result should be:

```txt
clear enough for SMB
bold enough to feel premium
```

---

# 3. Brand Personality

## Core Traits

```txt
Reliable
Clear
Modern
Local
Human
Technical
Practical
Calm
Confident
Premium
```

## Voice

Use direct, plain business language.

Prefer:

```txt
I build fast, reliable websites that help small businesses look professional, get found, and capture leads.
```

Avoid:

```txt
We create next-generation digital experiences powered by cutting-edge scalable innovation.
```

## Use “I”, Not Fake Agency “We”

Because this is a solo developer portfolio, transparency is a strength.

Use:

```txt
I build
I help
You work with me directly
I stay available after launch
```

Avoid:

```txt
Our agency
Our team
We deliver digital transformation
```

Some process wording can use “we” when referring to collaboration with the client:

```txt
We find what is broken.
We test and launch with confidence.
```

But the general positioning should remain personal and direct.

---

# 4. Color System

## Base Palette

```txt
Page Background:
#FAFAF9
Warm off-white. Main background.

Surface:
#FFFFFF
Cards, nav, FAQ, CTA blocks.

Surface Muted:
#F5F5F4
Muted light sections.

Surface Warm:
#FDFCFB
Warm panels and human sections.

Soft Blue:
#EFF6FF
Light CTA highlights, active FAQ, featured service card.

Soft Blue Gray:
#F8FAFC
Case study or CTA section backgrounds.

Soft Teal:
#F0FDFA
Automation / AI / success highlights.

Text Primary:
#1C1917
Warm near-black for headings and main text.

Text Secondary:
#57534E
Secondary body text.

Text Muted:
#78716C
Labels, captions, metadata.

Border:
#E7E5E4
Default card borders.

Border Strong:
#D6D3D1
Active or stronger borders.

Primary Blue:
#2563EB
Main CTA and action color.

Primary Hover:
#1D4ED8

Accent Teal:
#14B8A6
Automation, subtle technical accent, availability.

Success Green:
#16A34A
Real positive metrics and availability.

Warning Amber:
#F59E0B
Technical debt, warning, rescue problems.

Dark Navy:
#0F172A
Dark sections, footer, process section.

Deep Black:
#080808
Optional dark editorial problem section.

Dark Text:
#F8FAFC
Text on dark sections.

Dark Muted Text:
#CBD5E1 or rgba(248,250,252,0.62)
Muted copy on dark backgrounds.
```

---

# 5. Color Usage Rules

## 80 / 15 / 5 Rule

```txt
80% warm neutral / light backgrounds
15% dark text and structural contrast
5% blue / teal / green / amber accents
```

Do not overuse accent colors.

## Primary Blue

Use for:

```txt
primary CTAs
important links
active navigation
case study buttons
section highlights
featured service border
```

## Teal

Use for:

```txt
automation / AI accents
available badge
technical glow
small trust details
```

## Green

Use only for positive proof:

```txt
available status
100/100 performance
success metrics
delivered status
```

## Amber

Use only for diagnostic/problem contexts:

```txt
technical debt
broken forms
slow site
technical rescue
warning icons
```

## Dark Navy / Black

Use strategically for:

```txt
Problem section
Process section
Footer
optional strong final CTA
```

Do not make the whole site dark.

---

# 6. Recommended Section Color Rhythm

The site should not feel like one endless white page.

Use this rhythm:

```txt
Hero:
Light warm background + soft blue/teal glow

Trust / Identity:
Muted light background #F5F5F4

Problem:
Dark editorial section #080808 or #0F172A

Case Studies:
Light blue-gray #F8FAFC or warm off-white

Services:
Light warm background #FAFAF9

Process:
Dark navy #0F172A

About / Guarantee:
Light warm / human section #FDFCFB or white

Project Outcomes:
Muted light background #F5F5F4

FAQ:
White or warm off-white

Final CTA:
Light editorial CTA with glow OR dark CTA if Process is not dark

Footer:
Dark navy #0F172A
```

This creates visual rhythm:

```txt
calm → trust → punch → proof → offers → method → human → proof → objections → action
```

---

# 7. Dark Editorial Section Style

Use dark editorial styling only for selected sections.

Best candidates:

```txt
Problem
Process
optional Final CTA
```

## Dark Section Background

```css
.dark-editorial-section {
  background:
    radial-gradient(circle at 20% 10%, rgba(37, 99, 235, 0.14), transparent 28%),
    radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.10), transparent 30%),
    #080808;
  color: #F8FAFC;
}
```

## Dark Cards

```css
.dark-card {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 24px;
  color: #F8FAFC;
  backdrop-filter: blur(12px);
}
```

## Dark Muted Text

```css
.dark-muted {
  color: rgba(248, 250, 252, 0.62);
}
```

## Dark Card Hover

```css
.dark-card {
  transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
}

.dark-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.45);
  background: rgba(255, 255, 255, 0.055);
}
```

---

# 8. Gradient / Glow System

Use subtle glows to add premium technical energy.

## Hero Glow

```css
.hero-section {
  background:
    radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.12), transparent 34%),
    radial-gradient(circle at 85% 65%, rgba(20, 184, 166, 0.10), transparent 30%),
    #FAFAF9;
}
```

## Final CTA Glow

```css
.final-cta-light {
  background:
    radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.12), transparent 35%),
    radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.10), transparent 30%),
    #F8FAFC;
}
```

## Dark Process Glow

```css
.process-section-dark {
  background:
    radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.20), transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.14), transparent 32%),
    #0F172A;
}
```

## Rules

Avoid:

```txt
neon glow
strong purple gradients
heavy colorful blobs
full-page gradient overload
```

Use glows mostly behind:

```txt
hero mockup
main case study
process timeline
final CTA
```

---

# 9. Typography System

## Recommended Font Stack

Best option:

```txt
Geist Sans
Geist Mono
```

Fallback:

```txt
Inter
Manrope
IBM Plex Sans
system-ui
```

## Usage

```txt
Geist Sans:
headings, body, buttons, cards

Geist Mono:
small labels, section numbers, metrics, technical badges
```

Do not overuse mono. Use it as a technical accent only.

---

# 10. Typography Scale

## Desktop

```txt
Hero Display:
64px–76px
line-height: 0.98–1.06
letter-spacing: -0.045em
font-weight: 700–800

Large Editorial Heading:
72px–104px
line-height: 0.9–0.98
letter-spacing: -0.06em
font-weight: 800

H1:
56px
line-height: 1.08
letter-spacing: -0.035em
font-weight: 700

H2:
42px–48px
line-height: 1.1
letter-spacing: -0.03em
font-weight: 700

H3:
26px–32px
line-height: 1.2
letter-spacing: -0.02em
font-weight: 650

Card Title:
18px–22px
line-height: 1.25
font-weight: 650

Body Large:
18px
line-height: 1.65
font-weight: 400

Body:
16px
line-height: 1.6
font-weight: 400

Small:
14px
line-height: 1.5

Label:
11px–13px
letter-spacing: 0.08em–0.12em
text-transform: uppercase
font-weight: 650
```

## Mobile

```txt
Hero:
36px–42px
line-height: 1.06–1.1

Editorial Heading:
42px–56px
line-height: 0.95–1.0

H2:
30px–34px
line-height: 1.12

H3:
22px–24px

Body:
16px
line-height: 1.6

Small:
14px

Label:
11px–12px uppercase
```

---

# 11. Editorial Typography Rules

Use large editorial typography only in high-impact sections:

```txt
Problem
Case Studies heading
Process
Final CTA
```

Do not make every heading massive.

## Good Editorial Headings

```txt
SLOWING YOU DOWN.
PROOF, NOT PROMISES.
HOW I BUILD.
CLEAR PROCESS. NO GUESSWORK.
LET'S FIX YOUR WEBSITE.
```

## Avoid Overly Startup/Founder Language

Avoid:

```txt
I build systems that scale businesses.
Fractional CTO.
10x growth.
Q4 open.
Founder velocity.
```

Prefer SMB-friendly wording:

```txt
I build and repair high-performance websites.
Proof, not promises.
Clear process. No guesswork.
Let’s fix your website.
```

## Uppercase Rule

Uppercase can be used for:

```txt
short editorial headings
section labels
technical badges
```

Do not use uppercase for long paragraphs or all section titles.

---

# 12. Layout System

## Container

```txt
Desktop max-width:
1200px–1280px

Wide visual sections:
1360px max

Desktop padding:
32px–48px

Tablet padding:
24px

Mobile padding:
20px
```

## Section Padding

```txt
Desktop:
96px–140px

Mobile:
64px–88px

Sticky desktop screens:
min-height: 100dvh
content must fit viewport
```

## Grid

```txt
Desktop:
12-column grid
gap: 24px–32px

Hero:
6 columns text / 6 columns visual

Trust:
4 cards in row

Problem:
4 cards in row or 2x2

Case Studies:
main case larger, secondary cases smaller

Services:
2x2 grid or 4-card grid

Process:
left copy + right timeline OR horizontal timeline

About:
photo card + text/promise card

FAQ + CTA:
FAQ left / CTA right
```

## Mobile

```txt
single column
stacked cards
no heavy sticky pinning
large tap targets
```

---

# 13. Spacing System

Use consistent spacing tokens.

```txt
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
128px
```

## Recommended

```txt
Card padding:
24px–32px desktop
20px–24px mobile

Card gap:
20px–32px

Section header bottom margin:
32px–48px

CTA group gap:
12px–16px

Card internal gap:
12px–20px
```

---

# 14. Radius System

```txt
XS:
8px — small tags

SM:
12px — buttons, inputs

MD:
16px — small cards

LG:
24px — standard cards

XL:
32px — large panels, mockups

2XL:
40px — hero / major storytelling containers
```

Recommended:

```txt
Buttons:
12px–14px

Cards:
24px–32px

Large panels:
32px–40px
```

Avoid very sharp corners unless used in a dark editorial section intentionally.

---

# 15. Shadow System

Use soft, calm shadows.

```txt
Shadow Subtle:
0 1px 2px rgba(28, 25, 23, 0.04)

Shadow Card:
0 12px 40px rgba(28, 25, 23, 0.07)

Shadow Elevated:
0 24px 80px rgba(28, 25, 23, 0.10)

Shadow Mockup:
0 32px 100px rgba(15, 23, 42, 0.14)

Shadow Button:
0 10px 24px rgba(37, 99, 235, 0.22)
```

Dark section shadows can use:

```txt
0 24px 80px rgba(0,0,0,0.28)
```

Rule:

```txt
Mockups and main case cards can have the strongest shadows.
Normal cards should stay subtle.
```

---

# 16. Border / Glass System

## Light Card

```css
.light-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(231, 229, 228, 0.9);
  border-radius: 28px;
  box-shadow: 0 12px 40px rgba(28, 25, 23, 0.07);
}
```

## Glass Panel

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(231, 229, 228, 0.78);
  box-shadow: 0 24px 80px rgba(28, 25, 23, 0.08);
}
```

## Dark Glass Card

```css
.dark-glass-card {
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(16px);
  border-radius: 28px;
}
```

Rules:

```txt
Do not use glass everywhere.
Do not put unreadable text over complex blur.
Use glass mostly for hero mockups, process cards, and dark sections.
```

---

# 17. Icon System

Use Lucide React icons.

## Icon Style

```txt
stroke width: 1.75 or 2
rounded line icons
simple, not decorative
```

## Icon Sizes

```txt
Desktop card icons:
28px–36px

Mobile card icons:
24px–32px

Small labels:
16px–20px
```

## Recommended Icons

```txt
Hero / Trust:
MapPin
Phone
ShieldCheck
Users
BadgeCheck

Problem:
Gauge
Smartphone
TriangleAlert
DollarSign
Wrench
AlertCircle

Services:
Search
Settings
Bot
LifeBuoy
Sparkles

Process:
ClipboardCheck
Code2
Rocket
Headphones
CheckCircle

FAQ:
Plus
ChevronDown

CTA:
Calendar
Mail
Linkedin
ArrowRight
```

## Icon Color Rules

```txt
Primary / audit:
blue

Automation:
teal

Success / performance:
green

Rescue / warning:
amber

Dark cards:
white/80 with accent hover
```

---

# 18. Button System

## Primary Button

Use for the main conversion action.

Examples:

```txt
Book a Free Strategy Call
Get My Free Technical Audit
```

```css
.button-primary {
  background: #2563EB;
  color: #FFFFFF;
  border-radius: 14px;
  padding: 14px 22px;
  font-weight: 650;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.22);
}
```

Hover:

```txt
background: #1D4ED8
translateY(-1px)
stronger shadow
```

## Dark Primary Button

Use on light editorial sections if a stronger CTA is needed.

```css
.button-dark {
  background: #0F172A;
  color: #F8FAFC;
  border-radius: 14px;
  padding: 14px 22px;
}
```

## Secondary Button

```css
.button-secondary {
  background: #FFFFFF;
  color: #1C1917;
  border: 1px solid #D6D3D1;
  border-radius: 14px;
  padding: 14px 22px;
}
```

Hover:

```txt
border: #2563EB
background: #EFF6FF
```

## Dark Section Button

```css
.button-on-dark {
  background: #F8FAFC;
  color: #0F172A;
  border-radius: 14px;
  padding: 14px 22px;
}
```

## Button Rule

Each section should have:

```txt
maximum 1 primary CTA
maximum 1 secondary CTA
```

Avoid too many competing CTAs.

---

# 19. Badge System

Use badges for section labels, status, categories, and trust signals.

## Light Badge

```css
.badge-light {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 1px solid #E7E5E4;
  color: #57534E;
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.04em;
}
```

## Dark Badge

```css
.badge-dark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(248,250,252,0.84);
  font-size: 12px;
  font-weight: 650;
}
```

## Availability Dot

```css
.available-dot {
  width: 8px;
  height: 8px;
  background: #16A34A;
  border-radius: 999px;
  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.12);
}
```

---

# 20. Component Style Rules

## Header

```txt
fixed or sticky top
z-index above all sections
white/85 background
backdrop blur
subtle bottom border
desktop nav visible
mobile burger only below lg
```

## Hero

```txt
light warm background
soft blue/teal glow behind mockup
large clear headline
strong CTA row
real or intentional project mockup
subtle phone float animation
```

## Trust Cards

```txt
light cards
simple icons
hover lift
blue border on hover
short copy
```

## Problem Section

Recommended: dark editorial version.

```txt
dark background
large editorial heading
4 dark cards
amber/blue/green accents
stagger reveal
```

## Case Studies

```txt
main case must dominate
real screenshots or styled mockups
before/after slider for main case
metric badge
secondary cards smaller
```

## Services

```txt
productized cards
starting price visible
Modernization Engine highlighted as Most Recommended
icons with subtle color
CTA below cards
```

## Process

Recommended: dark section.

```txt
dark navy background
large method heading
4-step flow
connector line
step reveal animation
```

## About / Guarantee

```txt
light human section
real photo or intentional identity card
No-Ghosting Promise card
warm tone
```

## Project Outcomes

```txt
muted light background
3 cards
project tags
no fake testimonials
```

## FAQ

```txt
light readable section
accordion
active item blue tint
plus rotates
```

## Final CTA

```txt
large editorial heading
clear supporting text
primary CTA
optional animated underline
micro trust row
```

## Footer

```txt
dark navy
simple contact info
service area
muted text
```

---

# 21. Motion System

## Core Principle

```txt
Motion should guide the story, not show off.
```

## Do Animate

```txt
hero entry
section label reveal
large heading line reveal
card stagger reveal
card hover lift
phone mockup float
before/after slider
metric count-up
process connector line
FAQ accordion
CTA underline
```

## Do Not Animate

```txt
every paragraph
every icon constantly
entire page scroll hijacking
long blocking sequences
heavy parallax on mobile
layout-shifting animations
```

## Timing

```txt
Fast interaction:
150ms–220ms

Card hover:
180ms–260ms

Card reveal:
450ms–650ms

Section heading reveal:
500ms–800ms

Section transition:
700ms–1000ms

Phone float:
5s–7s infinite ease-in-out
```

## Easing

Use:

```txt
easeOutCubic
easeOutQuart
cubic-bezier(0.16, 1, 0.3, 1)
```

Avoid harsh linear motion.

---

# 22. Animation Patterns

## Hero Entry

Order:

```txt
1. Badge fades up
2. Headline line-by-line reveal
3. Subheadline fades up
4. CTA row fades up
5. Trust line fades up
6. Mockup fades/scales in
7. Phone starts subtle float
```

## Hero Phone Float

```css
@keyframes floatPhone {
  0%, 100% {
    transform: translateY(0) rotate(-1deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}
```

## Card Reveal

```txt
opacity 0 → 1
translateY(20px) → 0
delay: 80ms between cards
```

## Large Heading Reveal

For editorial headings:

```txt
line 1 delay 0ms
line 2 delay 120ms
line 3 delay 240ms
```

Use for:

```txt
SLOWING YOU DOWN.
PROOF, NOT PROMISES.
CLEAR PROCESS. NO GUESSWORK.
LET'S FIX YOUR WEBSITE.
```

## Metric Count-up

Use only for real metrics:

```txt
100 / 100
```

Count once when visible.

## Process Line Draw

Desktop only:

```txt
connector line scales from 0 to 1
steps appear after line reaches them
```

## FAQ Accordion

```txt
answer height animates
plus rotates 45deg
active item background becomes #EFF6FF
```

---

# 23. Reduced Motion

Always respect reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

If using JavaScript animation libraries, also check reduced motion before initializing non-essential animations.

---

# 24. Accessibility Rules

## Contrast

Ensure text contrast is readable on all backgrounds.

Dark sections:

```txt
white text on dark background
muted text must still be readable
avoid very low opacity body copy
```

Light sections:

```txt
dark text on warm light backgrounds
avoid pale gray text for important content
```

## Tap Targets

Mobile buttons and menu items:

```txt
minimum 44px height
comfortable spacing
```

## Focus States

All interactive elements need visible focus states:

```txt
buttons
links
accordion items
mobile menu
case study buttons
```

Focus style:

```css
outline: 2px solid #2563EB;
outline-offset: 3px;
```

## Avoid Motion Issues

Do not use heavy parallax or scroll hijacking.

Respect reduced motion.

---

# 25. Image / Mockup System

## Real Visuals Preferred

Use real project screenshots whenever possible:

```txt
Lee’s Veterinary Hospital
Odyssey Baths / Walk-In Baths
Bulldog Breeder
```

## If Real Screenshots Are Not Ready

Use intentional mockups, not gray empty placeholders.

Mockup should include:

```txt
browser frame
mobile frame
simple UI skeleton
label
subtle gradient or warm background
```

Good labels:

```txt
Previous Website
Modernized Website
Website Preview
Mobile Preview
```

Avoid:

```txt
generic empty image icon
plain gray rectangle
unlabeled placeholder
```

## Case Study Main Visual

The veterinary clinic case should use:

```txt
before/after slider
browser mockup
mobile preview
100/100 metric badge
```

---

# 26. Section-Specific Visual Direction

## Hero

```txt
Light background
soft glow
big clean headline
browser + mobile mockup
green available badge
primary CTA blue or dark navy
```

## Trust

```txt
muted light background
4 cards
local / direct / no ghosting / service area
calm and readable
```

## Problem

```txt
dark editorial punch section
heading: SLOWING YOU DOWN.
4 dark cards
warning and technical accents
```

## Case Studies

```txt
proof-focused section
heading: Proof, not promises.
main case visual-heavy
secondary cases compact
metric badge
```

## Services

```txt
light productized offer grid
Modernization Engine featured
prices visible
cards clear and scannable
```

## Process

```txt
dark navy method section
heading: Clear process. No guesswork.
4 steps with line/connector
technical but understandable
```

## About

```txt
warm human section
photo / identity card
No-Ghosting Promise
soft blue promise card
```

## Project Outcomes

```txt
muted light section
3 proof cards
tags and delivered status
no fake quotes
```

## FAQ

```txt
clean light section
accordion
plain language
```

## Final CTA

```txt
large editorial CTA
Let’s fix your website.
glow or underline
clear next step
```

## Footer

```txt
dark navy
simple
contact and service area
```

---

# 27. What to Avoid

Do not use:

```txt
full black website from top to bottom
neon gradients
purple everywhere
crypto / cyber look
fake agency language
fake testimonials
unverified metrics
tiny body text
too many CTAs
too many animations
scroll hijacking
overly playful illustrations
generic stock agency visuals
GitHub-style developer-only presentation
```

Avoid claims like:

```txt
Guaranteed #1 ranking
Dominates local search
10x growth
Doubled leads
Maintenance-free forever
AI-powered everything
```

Prefer honest claims:

```txt
Designed to improve local visibility
Built to reduce WordPress plugin risk
Maintenance-light
Optimized for speed and mobile UX
Prepared for stronger local SEO
Automation that helps you respond faster
```

---

# 28. Implementation Notes for AI Assistant

Use the existing structure and content strategy.

Do not redesign the whole site from scratch unless asked.

The first visual upgrade should be:

```txt
1. Keep Hero light, but add glow and stronger mockup styling.
2. Convert Problem section to dark editorial style.
3. Add section numbers / labels.
4. Make Case Studies more visual-heavy.
5. Keep Services light, but highlight Modernization Engine.
6. Convert Process to dark navy method section.
7. Keep About and FAQ light/readable.
8. Make Final CTA more editorial.
```

---

# 29. Acceptance Criteria

A good implementation should pass these checks:

```txt
The site feels more premium and less boring.
The site still feels trustworthy for SMB clients.
The dark sections create contrast but do not dominate the whole site.
The Hero remains clear and readable.
Problem section has strong visual punch.
Case Studies feel like proof, not placeholders.
Services feel productized and easy to compare.
Process feels structured and professional.
About feels human.
FAQ is easy to read.
Final CTA is clear and persuasive.
Animations are subtle and do not hurt usability.
Reduced motion is respected.
```

---

# Final Direction

The final design should feel like:

```txt
A warm, local, technical sales page with editorial engineering energy.
```

Not:

```txt
a boring consultant website
a fully dark startup agency page
a fake agency template
an over-animated developer portfolio
```

The emotional goal:

```txt
This person understands my business problems, can build something modern, communicates clearly, and seems safe to hire.
```
