# Portfolio Mobile-First Audit Fix Brief

## Context

This project is a portfolio / sales landing page for an Alabama-based full-stack web developer serving small businesses.

The site is intentionally mobile-first, but right now the desktop version is basically the same narrow mobile layout centered on a large screen. That is acceptable for an early prototype, but it does not feel like a finished premium website on desktop.

The goal is not to redesign the whole site from scratch. Keep the current story structure and copy direction, but improve layout, hierarchy, proof, desktop responsiveness, and conversion clarity.

## Core Positioning

The website should communicate:

```txt
I am a local technical partner for Alabama small businesses.
I build and repair fast, reliable websites.
I communicate clearly and do not disappear.
I help businesses replace outdated, broken, slow websites with modern systems.
```

Avoid making the site feel like:

```txt
generic agency
AI hype landing page
developer portfolio for other developers
mobile mockup stretched onto desktop
unfinished wireframe
```

---

# Main Problems to Fix

## 1. Desktop layout is too mobile-like

Currently the desktop version keeps the mobile layout centered in a narrow column. This wastes screen space and makes the site feel unfinished on laptop/desktop.

### Fix

Create proper responsive desktop layouts while keeping mobile layout intact.

### Desktop should use:

```txt
Hero:
2-column layout
left = text / CTA
right = project mockup visual

Trust:
3 or 4 horizontal trust cards

Problem:
4 cards in a row or 2x2 grid depending on width

Case Studies:
main case larger
secondary cases smaller

Services:
2x2 grid or 4-card grid

Process:
horizontal 4-step timeline

Guarantee/About:
2-column layout

FAQ + CTA:
FAQ left, CTA card right

Footer:
full-width dark footer
```

### Mobile should stay:

```txt
single-column
stacked cards
simple vertical scroll
no heavy sticky effects
```

---

## 2. Header should be responsive

Currently desktop still shows a burger menu. On desktop, this feels too mobile and hides important navigation.

### Fix

Use responsive header behavior.

### Desktop header

Show visible nav links:

```txt
Work
Services
Process
About
FAQ
Contact
```

Show CTA button:

```txt
Book a Free Strategy Call
```

Example structure:

```astro
<header class="fixed inset-x-0 top-0 z-[100] border-b border-stone-200/80 bg-white/85 backdrop-blur-xl">
  <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
    <!-- logo -->
    <!-- desktop nav -->
    <!-- desktop CTA -->
    <!-- mobile menu button only below lg -->
  </nav>
</header>
```

### Mobile header

Keep:

```txt
logo/name left
hamburger right
CTA inside mobile menu
```

Use Tailwind:

```txt
hidden lg:flex
lg:hidden
```

---

## 3. Hero needs proper desktop hierarchy

Current hero content is good, but on desktop it should feel more premium and less like a mobile page.

### Keep copy

```txt
Badge:
Available for new projects in Alabama

Headline:
I Build & Repair High-Performance Websites for Alabama Small Businesses.

Subheadline:
Stop losing customers to a slow, broken website. I replace outdated systems with custom, fast websites and automation that generate leads 24/7.

Primary CTA:
Get My Free Technical Audit

Secondary CTA:
View My Work

Trust line:
I don’t just write code.
I build stability for your business.
```

### Desktop layout

```txt
left 50%:
badge
headline
subheadline
CTA row
trust line

right 50%:
large browser mockup
small mobile mockup overlapping
optional performance badge
```

### Important

Replace placeholder visual with a better neutral mockup or actual screenshot.

Current gray placeholders make the page feel unfinished.

Use placeholders only if they look intentional:

```txt
[Previous Website]
[Modernized Website]
```

But real project screenshots are strongly preferred.

---

## 4. Trust / Identity section is good, but desktop needs better spacing

Current section works well conceptually:

```txt
Local Partner
Direct Communication
No Ghosting
Service Area
```

### Fix

On desktop, use 4 horizontal cards.

If only 3 cards are used, add a 4th:

```txt
Service Area
Serving Birmingham, Huntsville, Mobile, and Montgomery.
```

### Desktop layout

```txt
Section heading:
Alabama-based. Local partner. Direct communication.

4 cards in one row:
Local Partner
Direct Communication
No Ghosting
Service Area
```

### Mobile

Current compact version is fine.

---

## 5. Problem section is good but needs stronger business language

Current structure is correct.

Keep the 4 pain points:

```txt
Slow & Bloated
Mobile-Broken
Technically Abandoned
Lost Leads & Revenue
```

### Recommended copy

```txt
Slow & Bloated
Slow load times frustrate visitors and hurt your Google visibility.

Mobile-Broken
Customers leave when your site is hard to use on their phone.

Technically Abandoned
Old plugins, broken forms, and no one responsible for maintenance.

Lost Leads & Revenue
Forms fail, calls are missed, and opportunities quietly slip away.
```

### Fix

On desktop:

```txt
4 cards in a row
or 2x2 grid if space is tight
```

On mobile:

```txt
stacked list is fine
```

Keep the promise card:

```txt
Your local technical partner who fixes what’s broken and builds what lasts.
```

---

## 6. Case Studies need stronger visual hierarchy

Current case section has good content structure, but all projects feel similar and visuals are placeholders.

The veterinary clinic project should be the main proof because it is Alabama/local/healthcare and most relevant to target clients.

### Fix

Split case studies into a stronger layout.

### Desktop layout option A

```txt
Main case:
Veterinary Clinic Modernization
large card, full-width or 60–65% width

Secondary cases:
Walk-In Baths
Bulldog Breeder
smaller cards
```

### Desktop layout option B

```txt
Top:
large Veterinary Clinic case

Bottom:
2 smaller cards side by side
```

### Mobile

Keep stacked cards, but make the first case visually stronger.

### Main case should include

```txt
Industry badge:
Local Healthcare / Alabama

Title:
Veterinary Clinic Modernization

Visual:
Before / After mockup or slider

Metric:
100 / 100 Performance Score

Short result:
A faster, more trustworthy website designed to improve local visibility and make patient inquiries easier to manage.

CTA:
View Case Study
```

### Important copy rule

Do not use unproven claims like:

```txt
dominates local search
doubled leads
guaranteed ranking
```

Use honest language:

```txt
designed to improve
optimized for
prepared for
improved performance
simplified inquiry flow
```

---

## 7. Replace gray placeholders with intentional visuals

Current placeholder boxes make the site look unfinished.

### Fix priority

Use real screenshots where possible:

```txt
Lees Veterinary Hospital redesign
Odyssey Baths / Walk-In Baths project
Bulldog breeder project
```

If real screenshots are not ready, use better styled placeholders:

```txt
browser frame
mobile frame
simple layout skeleton
label: Previous Website / Modernized Website
subtle gradient background
```

Do not use generic gray empty image icons if possible.

---

## 8. Services section needs productized cards and price anchors

Current services list is clear, but it feels too much like a simple list. For SMB conversion, services should feel like productized offers.

### Fix

On desktop, use cards.

### Services

```txt
1. Diagnostic Audit
2. Modernization Engine
3. AI Edge
4. Technical Rescue
```

### Each card should include

```txt
icon
title
one-line benefit
short description
starting price or range
```

### Recommended copy

#### Diagnostic Audit

```txt
Find what’s slowing your website down.
Technical review, SEO gap scan, speed check, and prioritized action plan.
Starting at $500–$1,500
```

#### Modernization Engine

```txt
Replace your outdated website with a faster, cleaner system.
Custom redesign, mobile-first build, SEO setup, lead forms, and launch support.
Starting at $5,000+
```

#### AI Edge

```txt
Use automation to respond faster and save time.
Lead routing, AI chat/support tools, Make/Zapier workflows, and intake automation.
Starting at $3,000+
```

#### Technical Rescue

```txt
Fix what’s broken without rebuilding everything.
Bug fixes, SEO errors, speed optimization, broken forms, and emergency cleanup.
Starting at $750+
```

### Mobile

Current list format is okay, but add price anchors below each short description.

---

## 9. Process section is too visually tiny

Current process section is correct conceptually, but on desktop it looks small and underpowered.

### Fix

Make process section visually stronger.

### Keep steps

```txt
Audit
Build
Launch
Support
```

### Recommended desktop layout

```txt
left:
Simple process. Clear outcomes.
Short paragraph.
CTA or small trust statement.

right:
4-step timeline/card
```

### Recommended copy

```txt
Audit
We find what’s broken and what’s holding your website back.

Build
I engineer a clean solution around your business goals.

Launch
We test, optimize, and go live with confidence.

Support
I stay available after launch to keep things running.
```

Important: keep `Support`. This is one of the most important trust signals for SMB clients.

---

## 10. Guarantee/About section is good, but needs a real human element

Current “A Partner, Not Just a Developer” section works well, but it lacks a photo or personal presence.

### Fix

Add a placeholder or real photo area:

```txt
[Your photo]
Andrii
Web Developer & Technical Partner
Based in Alabama
```

### Desktop layout

```txt
left:
photo / identity card

right:
headline
short copy
trust bullets
No-Ghosting Promise card
```

### Recommended headline

```txt
A partner, not just a developer.
```

### Recommended copy

```txt
I’m a web developer based in Alabama who partners with small businesses to build, repair, and maintain high-performance websites. No handoffs. No ghosting. Just clear communication, reliable work, and systems built to last.
```

### No-Ghosting Promise

Use softer promise:

```txt
You’ll always know the project status, next steps, and how to reach me. I use clear scopes, timelines, and regular updates so you’re never left guessing.
```

Avoid risky hard guarantees unless they are truly operationally supported.

---

## 11. Testimonials were removed — that is okay, but replace them with proof

The testimonials section was removed because it felt unnecessary. That is acceptable if there are no real testimonials.

But do not leave the site without social proof.

### Do not add fake testimonials.

Instead add one of these:

### Option A — Client Results section

Use short project outcomes without invented names.

```txt
Client Results

Veterinary Clinic
Modernized an outdated clinic website with faster performance, clearer mobile UX, and stronger local SEO foundations.

Walk-In Baths
Improved clarity for an older audience with accessibility-focused UI and simplified inquiry flow.

Bulldog Breeder
Built a premium mobile-first brand presence with stronger visual trust and reservation flow.
```

### Option B — Proof Strip

Place near case studies or before final CTA:

```txt
Built for real local businesses
Performance-focused
Mobile-first
SEO-ready
Direct support
```

### Option C — Client logos

If available, show 3 logos:

```txt
Lee’s Veterinary Hospital
Odyssey Baths
Exotic Bulldog Legacy
```

Only use real logos if allowed.

### Recommendation

Add a lightweight “Project Outcomes” block instead of testimonials.

This gives proof without fake quotes.

---

## 12. FAQ needs more conversion-focused questions

Current FAQ is okay but too short.

### Add these questions

```txt
How much does a website usually cost?
Can you help with SEO after launch?
Are third-party tools or subscriptions included?
What happens after the site launches?
```

### Recommended FAQ list

```txt
How long does a typical project take?
Do you work with WordPress?
Can you fix my existing website?
Do you offer ongoing support?
What do you need from me to get started?
How much does a website usually cost?
Are third-party tools or subscriptions included?
Can you help with SEO after launch?
```

### Desktop

Use 2-column accordion or FAQ left / CTA right.

### Mobile

Single-column accordion.

---

## 13. Final CTA is good, but clarify the two CTAs

Current CTA buttons:

```txt
Book a Free Strategy Call
Get My Free Technical Audit
```

These are good, but the difference must be clear.

### Add small helper text

For Strategy Call:

```txt
Best if you want to discuss a project.
```

For Technical Audit:

```txt
Best if you want me to review what’s broken.
```

Or simplify to one primary CTA if needed.

### Recommended final CTA

```txt
Ready to fix what’s holding your website back?

Get a clear plan, a faster website, and a technical partner who keeps things moving.
```

Keep micro trust signals:

```txt
No pressure
Free audit
20–30 min call
```

---

## 14. Footer is good

Footer direction is good.

Keep:

```txt
dark navy background
service area
email
phone
LinkedIn
copyright
```

Add if useful:

```txt
Serving Alabama small businesses
Birmingham
Huntsville
Mobile
Montgomery
Cullman
```

Since the developer is in/near Cullman, include Cullman if appropriate.

---

# Responsive Behavior Requirements

## Desktop

At widths `lg` and above:

```txt
Use full desktop layouts
Do not keep everything in one narrow mobile column
Use max-w-7xl or max-w-[1200px]
Use grids
Show nav links
Show desktop CTA
```

## Tablet

Can stay closer to mobile, but increase max-width:

```txt
max-w-3xl or max-w-4xl
```

## Mobile

Keep current stacked structure:

```txt
single column
large readable buttons
simple cards
no heavy sticky pinning
```

---

# Design System Rules

Use the existing design system:

```txt
Background:
#FAFAF9 / stone-50

Text:
#1C1917 / stone-900

Secondary text:
#57534E / stone-600

Primary:
#2563EB / blue-600

Accent:
#14B8A6 / teal

Success:
#16A34A / green

Warning:
#F59E0B / amber

Dark footer:
#0F172A
```

Keep:

```txt
warm off-white background
white or white/80 cards
soft borders
large rounded corners
calm shadows
blue primary CTAs
green only for real positive metrics
amber only for warnings/problems
```

Avoid:

```txt
neon gradients
too much purple
fake agency style
dark cyber AI look
too many animations
unproven metrics
fake testimonials
```

---

# Suggested Component / File Work

Likely files to update:

```txt
Header.astro
Hero.astro
TrustSection.astro
ProblemSection.astro
CaseStudies.astro
Services.astro
Process.astro
About.astro
FAQ.astro
ContactCTA.astro
Footer.astro
global.css
```

If the current components are named differently, map the changes to the equivalent files.

---

# Implementation Priority

## Priority 1 — Must Fix

```txt
1. Desktop should not be a narrow mobile layout.
2. Header should show desktop navigation on desktop.
3. Hero should become 2-column on desktop.
4. Case studies need stronger hierarchy and real/styled visuals.
5. Services need productized cards with price anchors.
```

## Priority 2 — Strongly Recommended

```txt
6. Add Project Outcomes or Client Results instead of testimonials.
7. Add personal photo/identity card in About.
8. Expand FAQ to 7–8 questions.
9. Clarify difference between Strategy Call and Technical Audit.
```

## Priority 3 — Polish

```txt
10. Improve spacing rhythm.
11. Add better mockup frames.
12. Add subtle reveal animations.
13. Improve desktop process section.
14. Add Cullman to service area if desired.
```

---

# Acceptance Criteria

After changes, check these viewports:

```txt
375x812
390x844
768x1024
1366x768
1440x900
1920x1080
```

For each viewport verify:

```txt
Header is visible and usable
Desktop has desktop layout, not mobile column
Mobile remains clean and readable
Hero CTA is visible without awkward scrolling
Case studies are visually convincing
Services are understandable as offers
Process is readable
About/Guarantee builds trust
FAQ removes objections
Final CTA is clear
No placeholder image icons look unfinished
No section has excessive empty space
No important CTA is hidden or cut off
```

Run:

```bash
npm run build
npm run astro -- check
```

Then manually review in Chrome screenshots.

---

# Final Direction

Keep the current mobile-first storytelling structure, but make the finished site feel like:

```txt
A premium technical sales page for Alabama small business owners.
```

Not:

```txt
a mobile wireframe displayed on desktop
```

The final site should clearly communicate:

```txt
This person can fix my website, explain the process, show real proof, and not disappear.
```
