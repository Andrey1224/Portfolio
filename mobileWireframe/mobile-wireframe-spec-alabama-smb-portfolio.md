# Mobile Wireframe Specification — Alabama SMB Web Developer Portfolio

## Purpose

This document describes the intended **mobile-first wireframe** for a portfolio / sales landing page for an Alabama-based full-stack web developer serving small businesses.

The goal is to help an AI coding/design assistant understand exactly what each mobile section should contain, why it exists, and how it should behave.

The website should communicate:

```txt
I am a local technical partner for Alabama small businesses.
I build and repair fast, reliable websites.
I help businesses replace outdated, broken, slow websites with modern systems.
I communicate clearly and do not disappear.
```

The mobile experience should feel:

```txt
clear
trustworthy
local
technical
modern
easy to scan
not overloaded
```

Avoid:

```txt
generic agency language
fake testimonials
neon AI hype
too much technical jargon
heavy sticky scroll on mobile
tiny text
too many CTAs
```

---

# Global Mobile Rules

## Layout

Mobile layout should be single-column.

Use:

```txt
max-width: 100%
horizontal padding: 20px
section padding: 64px–88px
large readable buttons
stacked cards
simple vertical scroll
```

Do not use aggressive sticky pinning on mobile.

The mobile site should feel like a sequence of **story cards**, not like a complicated scroll-hijacked presentation.

---

## Visual Style

Use the established design system:

```txt
Background:
#FAFAF9 / warm off-white

Surface:
#FFFFFF

Muted surface:
#F5F5F4

Text:
#1C1917

Secondary text:
#57534E

Primary:
#2563EB

Accent:
#14B8A6

Success:
#16A34A

Warning:
#F59E0B

Dark footer:
#0F172A
```

Cards should use:

```txt
white or white/80 background
soft borders
large rounded corners
subtle shadows
clear spacing
```

Recommended card radius:

```txt
20px–28px
```

---

## Typography

Mobile typography should be strong but readable.

Recommended:

```txt
Hero headline:
36px–40px / line-height 1.08

Section heading:
30px–34px / line-height 1.12

Card title:
18px–22px

Body:
16px / line-height 1.55–1.65

Small label:
11px–12px uppercase / letter-spaced
```

Use strong headings, short paragraphs, and scannable card titles.

---

## Motion

Mobile animations should be light.

Allowed:

```txt
fade-up section reveal
small card slide-up
button hover/tap feedback
accordion open/close
slight mockup reveal
```

Avoid:

```txt
heavy parallax
scroll hijacking
long animation sequences
pinned sticky sections
animations that block reading
```

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
    scroll-behavior: auto;
  }
}
```

---

# Final Mobile Section Order

The mobile site should follow this exact storytelling order:

```txt
1. Header
2. Hero
3. Trust / Identity
4. Problem
5. Case Studies
6. Services
7. Process
8. Guarantee / About
9. Project Outcomes
10. FAQ
11. Final CTA
12. Footer
```

This order should not be changed unless there is a strong strategic reason.

---

# 1. Header

## Purpose

The header helps users identify the developer and access navigation without taking too much vertical space.

## Mobile Layout

```txt
Left:
Andrii
Web Developer

Right:
hamburger menu icon
```

The header should be sticky or fixed at the top.

## Header Content

```txt
Name:
Andrii

Subtitle:
Web Developer

Menu:
hamburger icon
```

## Mobile Menu Content

When opened, the menu should show:

```txt
Work
Services
Process
About
FAQ
Contact
Book a Free Strategy Call
Get My Free Technical Audit
```

The menu should feel clean and easy to tap.

## Behavior

```txt
Sticky top
White or white/85 background
Backdrop blur
Subtle bottom border
High z-index
```

Recommended header height:

```txt
64px–72px
```

---

# 2. Hero

## Purpose

The hero must answer immediately:

```txt
Who is this?
What does he do?
Who is it for?
What should I do next?
```

The hero should reduce the fear of hiring an anonymous freelancer and make the value proposition clear within seconds.

## Mobile Layout

Single-column order:

```txt
1. Availability badge
2. Main headline
3. Subheadline
4. Primary CTA
5. Secondary CTA
6. Trust line
7. Project mockup visual
8. Down arrow / scroll cue
```

## Content

### Badge

```txt
Available for new projects in Alabama
```

Use a green status dot.

### Headline

```txt
I Build & Repair High-Performance Websites for Alabama Small Businesses.
```

### Subheadline

```txt
Stop losing customers to a slow, broken website. I replace outdated systems with custom, fast websites and automation that generate leads 24/7.
```

Alternative softer version:

```txt
I help small businesses fix slow, outdated websites and replace them with fast, reliable systems that capture leads and are easier to maintain.
```

### Primary CTA

```txt
Get My Free Technical Audit
```

### Secondary CTA

```txt
View My Work
```

### Trust Line

```txt
I don’t just write code.
I build stability for your business.
```

## Hero Visual

Show a browser mockup and a mobile mockup.

Preferred:

```txt
real project screenshot
browser frame
mobile frame
small performance badge
```

If real screenshots are not ready, use intentional placeholders:

```txt
Modernized Website
Previous Website
Website Preview
Mobile Preview
```

Do not use generic empty image icons if possible.

## Design Notes

Hero should feel strong but not overcrowded.

Buttons should be full-width or nearly full-width on mobile:

```txt
Primary button: full-width
Secondary button: full-width
```

Keep generous spacing between CTA buttons.

---

# 3. Trust / Identity

## Purpose

This section quickly builds trust and local relevance.

It should answer:

```txt
Is this person local?
Will I talk directly to him?
Will he disappear?
Does he serve businesses like mine?
```

## Mobile Layout

```txt
Section label
Section heading
3–4 trust items/cards
Service area line
Down arrow / scroll cue
```

## Section Label

```txt
Alabama-Based Developer
```

## Heading

```txt
Alabama-based. Local partner. Direct communication.
```

Alternative shorter version:

```txt
Local. Reliable. Real communication.
```

## Trust Cards

Use either compact cards or icon columns.

### Card 1 — Local Partner

```txt
Local Partner
Based in Alabama and working with businesses across the state.
```

### Card 2 — Direct Communication

```txt
Direct Communication
You work with me directly. I pick up the phone.
```

### Card 3 — No Ghosting

```txt
No Ghosting
Structured projects, clear timelines, and ongoing support.
```

### Card 4 — Service Area

```txt
Service Area
Serving Birmingham, Huntsville, Mobile, Montgomery, and Cullman.
```

## Design Notes

This section can use a muted background:

```txt
#F5F5F4
```

Icons should be simple line icons.

Recommended icons:

```txt
MapPin
Phone
Users
Compass / Map
ShieldCheck
```

---

# 4. Problem

## Purpose

This section creates urgency and shows that the developer understands the client’s pain.

It should answer:

```txt
What is wrong with my current website?
Why does this matter?
Does this developer understand my situation?
```

## Mobile Layout

```txt
Section label
Heading
Short explanation
4 stacked problem cards
Promise card
Down arrow / scroll cue
```

## Section Label

```txt
The Problem
```

Optional editorial label:

```txt
01. The Problem
```

## Heading

Current version:

```txt
Is your website an asset — or a liability?
```

More dramatic option:

```txt
SLOWING YOU DOWN.
```

## Supporting Copy

Current version:

```txt
Most local business sites are "Digital Ghost Towns".
```

Improved version:

```txt
Most local business websites are technically abandoned. They frustrate visitors, lose leads, and quietly cost revenue every day.
```

## Problem Cards

### Card 1 — Slow & Bloated

```txt
Slow & Bloated
Slow load times frustrate visitors and hurt your Google visibility.
```

### Card 2 — Mobile-Broken

```txt
Mobile-Broken
Customers leave when your site is hard to use on their phone.
```

### Card 3 — Technically Abandoned

```txt
Technically Abandoned
Old plugins, broken forms, and no one responsible for maintenance.
```

### Card 4 — Lost Leads & Revenue

```txt
Lost Leads & Revenue
Forms fail, calls are missed, and opportunities quietly slip away.
```

## Promise Card

```txt
The Promise
Your local technical partner who fixes what’s broken and builds what lasts.
```

## Design Options

### Safe Light Version

Use white background and white problem cards.

### Stronger Dark Editorial Version

Use this section as a dark “punch” section:

```txt
background: #080808 or #0F172A
text: white
cards: dark border cards
accent: amber / blue / green
```

This is a good place to add more visual drama without making the whole site dark.

## Motion

Problem cards can reveal one by one on scroll.

Use light stagger:

```txt
card 1 delay 0ms
card 2 delay 80ms
card 3 delay 160ms
card 4 delay 240ms
```

---

# 5. Case Studies

## Purpose

This section proves that the developer can solve real business problems.

It should answer:

```txt
Has he done this before?
Can I see real work?
What outcomes did he create?
```

## Mobile Layout

```txt
Section label
Heading
Main case card
Secondary case card 1
Secondary case card 2
View All Projects button
Down arrow / scroll cue
```

## Section Label

```txt
The Proof
```

Optional stronger label:

```txt
02. The Proof
```

## Heading

Current:

```txt
Case Studies
```

Better options:

```txt
Proof, not promises.
```

or:

```txt
Engineered results.
```

For SMB audience, prefer:

```txt
Proof, not promises.
```

## Case 1 — Main Case

The first case should be the strongest and visually dominant.

### Title

```txt
Veterinary Clinic Modernization
```

### Industry

```txt
Local Healthcare (AL)
```

### Visual

Use before/after mockup or slider.

Labels:

```txt
Before
After
```

If screenshots are not ready:

```txt
Previous Website
Modernized Website
```

### Metric

```txt
100 / 100 Performance Score
```

Only use this if it is real or intended as a verified Lighthouse/performance result.

### Short Result

```txt
A faster, more trustworthy website designed to improve local visibility and make patient inquiries easier to manage.
```

### CTA

```txt
View Case Study
```

## Case 2 — Secondary Case

### Title

```txt
Senior Accessibility: Walk-In Baths
```

### Industry

```txt
High-Ticket Service (UK)
```

### Result

```txt
Improved clarity for an older audience with accessibility-focused UI and simplified inquiry flow.
```

### Metric / Proof

```txt
2x Increase in clarity leading to inquiries.
```

Only use “2x” if it is backed by real data. If not, use softer wording:

```txt
Clearer inquiry flow
```

### CTA

```txt
Case Study
```

## Case 3 — Secondary Case

### Title

```txt
Premium Branding: Bulldog Breeder
```

### Industry

```txt
Niche Private Brand (AL)
```

### Result

```txt
Built a premium mobile-first brand presence with stronger visual trust and reservation flow.
```

### Metric / Proof

```txt
Stronger brand identity
```

### CTA

```txt
Case Study
```

## Design Notes

The main case should be larger or more visually rich than the secondary cases.

On mobile, stack the cards.

Recommended card order:

```txt
Main case expanded
Secondary case compact
Secondary case compact
```

## Motion

Recommended:

```txt
before/after slider interaction
100/100 count-up
case cards fade-up
CTA arrow moves on tap/hover
```

---

# 6. Services

## Purpose

This section turns general web development into clear, productized offers.

It should answer:

```txt
How can I hire him?
What does he offer?
What does it cost?
Which service fits my situation?
```

## Mobile Layout

```txt
Section label
Heading
4 stacked service cards
CTA button
Down arrow / scroll cue
```

## Section Label

```txt
How I can help
```

Optional editorial label:

```txt
03. Solutions
```

## Heading

```txt
Services
```

Stronger option:

```txt
How I Build.
```

## Service Cards

Each card should include:

```txt
icon
service number
service title
one-line benefit
short description
starting price
arrow / learn more icon
```

## Service 1 — Diagnostic Audit

```txt
1. The Diagnostic Audit

Find what’s slowing your website down.

Technical review, SEO gap scan, speed check, and prioritized action plan.

Starting at $500–$1,500
```

## Service 2 — Modernization Engine

```txt
2. The Modernization Engine

Replace your outdated website with a faster, cleaner system.

Custom redesign, mobile-first build, SEO setup, lead forms, and launch support.

Starting at $5,000+
```

This can be visually highlighted as:

```txt
Most Recommended
```

## Service 3 — AI Edge

```txt
3. The AI Edge

Use automation to respond faster and save time.

Lead routing, AI chat/support tools, Make/Zapier workflows, and intake automation.

Starting at $3,000+
```

## Service 4 — Technical Rescue

```txt
4. Technical Rescue

Fix what’s broken without rebuilding everything.

Bug fixes, SEO errors, speed optimization, broken forms, and emergency cleanup.

Starting at $750+
```

## Main CTA

```txt
See Service Packages & Pricing
```

## Design Notes

Mobile service cards should be stacked.

Modernization Engine can be highlighted with:

```txt
soft blue background
blue border
Most Recommended badge
```

Do not overload cards with too many bullets on mobile.

## Motion

Cards can reveal one by one.

Card tap/hover:

```txt
slight lift
arrow shifts right
border color strengthens
```

---

# 7. Process

## Purpose

This section reduces fear by showing that the work has a clear structure.

It should answer:

```txt
What happens after I contact him?
Will this process be organized?
Will I know what is happening?
```

## Mobile Layout

```txt
Section label
Heading
Short paragraph
4 process steps
Down arrow / scroll cue
```

## Section Label

```txt
My Process
```

Optional editorial label:

```txt
04. The Method
```

## Heading

Current:

```txt
Simple process.
Clear outcomes.
```

Stronger option:

```txt
Clear process.
No guesswork.
```

or:

```txt
Zero friction.
```

For SMB clarity, prefer:

```txt
Clear process. No guesswork.
```

## Supporting Copy

```txt
I use a structured 4-step approach to ensure your project stays on track, launches smoothly, and continues to perform long after it goes live.
```

## Steps

### Step 1 — Audit

```txt
Audit
We find what’s broken and what’s holding your website back.
```

### Step 2 — Build

```txt
Build
I engineer a clean solution around your business goals.
```

### Step 3 — Launch

```txt
Launch
We test, optimize, and go live with confidence.
```

### Step 4 — Support

```txt
Support
I stay available after launch to keep things running.
```

## Alternative More Technical Step Names

If the design is more editorial/technical:

```txt
01 Diagnose
02 Plan
03 Build
04 Support
```

Avoid overly corporate words like:

```txt
Governance
```

## Design Options

This is a good candidate for a dark editorial section:

```txt
background: #0F172A
text: white
steps: glass/dark cards
connector line: blue/teal
```

If mobile, keep it simple and stacked or compact horizontal.

## Motion

Recommended:

```txt
step reveal one by one
connector line draw
icons pop in lightly
```

---

# 8. Guarantee / About

## Purpose

This section humanizes the developer and reduces the “ghosting freelancer” fear.

It should answer:

```txt
Who am I hiring?
Is he a real person?
Is he local?
Will he communicate?
Will he stay available after launch?
```

## Mobile Layout

```txt
Section label
Heading
Photo / identity card
Short paragraph
No-Ghosting Promise card
Down arrow / scroll cue
```

## Section Label

```txt
The No-Ghosting Guarantee
```

Optional:

```txt
05. Guarantee
```

## Heading

```txt
A partner, not just a developer.
```

## Identity Card

Should include:

```txt
photo or intentional avatar placeholder
Andrii
Web Developer & Technical Partner
Based in Alabama
```

If real photo is available, use it.

If no photo is available, use a clean intentional placeholder, not a generic empty icon.

## About Copy

```txt
I’m a web developer based in Alabama who partners with small businesses to build, repair, and maintain high-performance websites. No handoffs. No ghosting. Just clear communication, reliable work, and systems built to last.
```

## No-Ghosting Promise Card

```txt
No-Ghosting Promise
You’ll always know the project status, next steps, and how to reach me. I use clear scopes, timelines, and regular updates so you’re never left guessing.
```

## Design Notes

This section should feel human and warm.

Keep it light or warm-toned.

Avoid making this section too dark or too aggressive.

Recommended background:

```txt
white
#FDFCFB
#FAFAF9
```

---

# 9. Project Outcomes

## Purpose

This section replaces testimonials without using fake quotes.

It provides social proof through project outcomes.

It should answer:

```txt
What kinds of results has he delivered?
What types of businesses has he helped?
Can I trust that these are real projects?
```

## Mobile Layout

```txt
Section label
Heading
3 stacked outcome cards
Optional tags inside cards
```

## Section Label

```txt
Proven Impact
```

## Heading

```txt
Project Outcomes
```

## Outcome Cards

### Card 1 — Veterinary Clinic

```txt
Veterinary Clinic

Modernized an outdated clinic website with faster performance, clearer mobile UX, and stronger local SEO foundations.

Delivered & Optimized
```

Optional tags:

```txt
Performance
Mobile UX
Local SEO
Lead Flow
```

### Card 2 — Walk-In Baths

```txt
Walk-In Baths

Improved clarity for an older audience with accessibility-focused UI and simplified inquiry flow.

Delivered & Optimized
```

Optional tags:

```txt
Accessibility
Clarity
Inquiry Flow
```

### Card 3 — Bulldog Breeder

```txt
Bulldog Breeder

Built a premium mobile-first brand presence with stronger visual trust and reservation flow.

Delivered & Optimized
```

Optional tags:

```txt
Brand Trust
Mobile UX
Reservation Flow
```

## Design Notes

Use this section only if there are no real testimonials yet.

Do not invent names or fake quotes.

Use:

```txt
project outcomes
real client names only if allowed
real logos only if allowed
```

Recommended background:

```txt
#F5F5F4
```

## Motion

Cards can fade up on scroll.

Tags can appear after the card.

---

# 10. FAQ

## Purpose

FAQ removes friction before the user books a call.

It should answer common objections:

```txt
How long does it take?
Do you work with WordPress?
Can you fix my current site?
Do you offer support?
How much does it cost?
What do you need from me?
```

## Mobile Layout

```txt
Section label
Heading
single-column accordion
small “More questions?” link
```

## Section Label

```txt
Common Questions
```

Optional editorial label:

```txt
05. Intel
```

## Heading

```txt
FAQs
```

Alternative:

```txt
Common Questions
```

## Recommended FAQ Items

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

## Example Answers

### How long does a typical project take?

```txt
Most custom modernization projects take between 3 to 6 weeks, depending on the complexity and scope.
```

### Do you work with WordPress?

```txt
Yes, I can repair and optimize existing WordPress sites, or migrate you to a faster, modern platform if needed.
```

### Can you fix my existing website?

```txt
Absolutely. The Technical Rescue service is designed to hunt down bugs, fix SEO errors, and optimize speed on current sites.
```

### Do you offer ongoing support?

```txt
Yes. I offer ongoing support after launch so your website stays updated, secure, and reliable.
```

### What do you need from me to get started?

```txt
A quick call to understand your business goals, plus access to your current domain, hosting, or website if applicable.
```

### How much does a website usually cost?

```txt
Technical rescue projects start around $750, while full custom modernization starts around $5,000+. The right fit depends on scope and goals.
```

### Are third-party tools or subscriptions included?

```txt
Third-party tools such as hosting, email, automation platforms, or analytics may require separate subscriptions. I’ll explain these clearly before the project starts.
```

### Can you help with SEO after launch?

```txt
Yes. I can help with technical SEO, local SEO foundations, page structure, metadata, analytics, and ongoing improvements after launch.
```

## FAQ Behavior

Accordion behavior:

```txt
tap question
answer expands smoothly
plus icon rotates
active row gets subtle blue tint
```

On mobile, FAQ must be single-column.

---

# 11. Final CTA

## Purpose

This section pushes the user toward the next step after they have seen the story, proof, services, process, and FAQ.

It should answer:

```txt
What should I do now?
Is this low pressure?
What will happen if I click?
```

## Mobile Layout

```txt
Section label
Large CTA headline
Short supporting text
Primary CTA
Secondary CTA
CTA helper text
Micro trust row
```

## Section Label

```txt
Ready to grow?
```

Optional editorial label:

```txt
Ready to scale?
```

## Headline

Current:

```txt
Ready to fix what's holding your website back?
```

Stronger editorial option:

```txt
Let’s fix your website.
```

or:

```txt
Let’s work.
```

For SMB clarity, prefer:

```txt
Let’s fix your website.
```

## Supporting Text

```txt
Get a clear plan, a faster website, and a technical partner who keeps things moving.
```

## Primary CTA

```txt
Book a Free Strategy Call
```

Helper text:

```txt
Best if you want to discuss a project.
```

## Secondary CTA

```txt
Get My Free Technical Audit
```

Helper text:

```txt
Best if you want me to review what’s broken.
```

## Optional Clarifier

```txt
Both options lead to a quick scheduling form — no commitment required.
```

## Micro Trust Signals

```txt
No pressure
100% Free
20–30 min
```

## Design Notes

This section can be more visually expressive.

Options:

### Light Editorial CTA

```txt
white / warm background
huge bold black heading
underlined key phrase
dark or blue CTA button
```

### Soft Technical CTA

```txt
#F8FAFC background
blue/teal radial glow
large heading
blue primary button
```

### Dark CTA

Use carefully. If Process is already dark, CTA should probably stay light.

## Motion

Recommended:

```txt
headline reveal
CTA buttons fade up
underline draws from left to right
micro trust row fades in last
```

---

# 12. Footer

## Purpose

The footer provides contact details, service area, and final trust closure.

## Mobile Layout

```txt
dark background
developer name
service area
email
phone
LinkedIn
copyright
```

## Content

```txt
Andrii Web Developer

Serving Alabama small businesses:
Birmingham • Huntsville • Mobile • Montgomery • Cullman

Email:
hello@andrii.dev

Phone:
(256) 555-0198

LinkedIn:
LinkedIn Profile

© 2026 Andrii Web Developer. All rights reserved.
```

Use real email/phone when ready.

## Design Notes

Footer should be dark:

```txt
background: #0F172A
text: #F8FAFC
muted text: #94A3B8
```

Keep it clean and not oversized.

---

# Mobile UX Checklist

Use this checklist to validate the mobile wireframe.

## Content Checklist

```txt
Hero explains what the developer does.
Trust section proves he is local and direct.
Problem section creates urgency.
Case studies show proof.
Services explain how to hire him.
Process explains what happens next.
Guarantee section reduces ghosting fear.
Project outcomes provide proof without fake testimonials.
FAQ removes common objections.
Final CTA gives a clear next step.
Footer has contact and service area.
```

## Layout Checklist

```txt
No section feels overloaded.
All text is readable on mobile.
Buttons are large enough to tap.
Cards have enough spacing.
Important CTAs are not hidden.
The user can scan the page quickly.
```

## Visual Checklist

```txt
Hero has a clear visual proof element.
Problem section has enough contrast.
Main case study is visually stronger than secondary cases.
Services feel productized, not generic.
Process feels structured.
About feels human.
CTA feels decisive.
Footer feels clean.
```

## Motion Checklist

```txt
Animations are subtle.
No scroll hijacking.
No heavy sticky on mobile.
FAQ opens smoothly.
Cards can fade in gently.
Reduced motion is respected.
```

---

# Recommended Mobile Component List

The AI assistant can implement the mobile site using these components:

```txt
Header
MobileMenu
Hero
TrustSection
ProblemSection
ProblemCard
CaseStudies
CaseStudyCard
BeforeAfterSlider
ServicesSection
ServiceCard
ProcessSection
ProcessStep
AboutGuaranteeSection
ProjectOutcomes
OutcomeCard
FAQSection
FAQAccordionItem
FinalCTA
Footer
```

---

# Final Direction

The mobile site should feel like:

```txt
A clear, premium, mobile-first sales page for Alabama small business owners.
```

It should not feel like:

```txt
a generic developer resume
a fake agency page
a dark startup landing page
an over-animated portfolio
```

The final emotional goal:

```txt
This person understands my website problems, has proof, communicates clearly, and seems safe to contact.
```
