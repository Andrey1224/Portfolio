# Design System v1 — Alabama SMB Web Developer Portfolio

## 1. Core Direction

### Style Name

**Warm Technical Minimalism**

### Main Goal

The website should position the developer as a **local technical partner for Alabama small businesses**, not just as a coder or generic freelancer.

The visitor should feel:

> “This person is modern, technical, reliable, and easy to work with.”

### Brand Positioning

```txt
Local expert
Clear communication
Modern websites
Reliable systems
No ghosting
Business results
```

### What to Avoid

```txt
AI hype
Startup crypto/neon style
Fake agency language
Overly luxury look
Overly corporate template look
Too much technical jargon
```

---

## 2. Brand Personality

### Core Traits

```txt
Reliable
Clear
Modern
Local
Human
Technical
Practical
Calm
```

### Tone

Use direct, clear, business-focused language.

Avoid:

```txt
We build cutting-edge digital experiences powered by next-generation technologies.
```

Prefer:

```txt
I build fast, reliable websites that help small businesses look professional, get found, and capture leads.
```

### Main Message

```txt
I’m not just a developer.
I’m your local technical partner.
```

---

## 3. Color System

The site should not use pure white as the only background. A warm off-white base gives the design a more human, trustworthy, less sterile feeling.

### Core Palette

```txt
Background / Page:
#FAFAF9
Warm off-white. Main page background.

Surface:
#FFFFFF
Cards, nav, FAQ, CTA blocks.

Surface Muted:
#F5F5F4
Secondary blocks and soft sections.

Surface Warm:
#FDFCFB
Large storytelling sections.

Text Primary:
#1C1917
Deep warm black. Main text and headings.

Text Secondary:
#57534E
Descriptions and secondary text.

Text Muted:
#78716C
Small labels, metadata, captions.

Border:
#E7E5E4
Default card borders.

Border Strong:
#D6D3D1
Active or important borders.

Primary:
#2563EB
Main CTA color. Professional blue.

Primary Hover:
#1D4ED8

Primary Soft:
#EFF6FF
Soft background for blue badges or highlights.

Accent:
#14B8A6
Teal accent. Use sparingly.

Accent Soft:
#CCFBF1

Success:
#16A34A
Availability, positive metrics, success indicators.

Warning:
#F59E0B
Audit/problem highlights. Use carefully.

Dark Surface:
#0F172A
Footer or strong CTA block.

Dark Text:
#F8FAFC
Text on dark backgrounds.
```

### Color Ratio

```txt
80% — warm neutral colors
15% — dark text and structure
5% — blue/teal accents
```

The blue should mainly be used for CTAs and action states, not for flooding the entire website.

---

## 4. Semantic Color Usage

### Primary Blue

Use for:

```txt
Primary buttons
Active navigation
Important links
Section numbers
Case study CTAs
```

### Teal

Use for:

```txt
Available badge
Success accents
Small trust details
Automation / AI highlights
```

### Green

Use only for real positive signals:

```txt
100/100 Performance
2x clarity
More leads
Available status
```

### Amber / Warning

Use only in problem or audit contexts:

```txt
Slow site
Broken mobile
Lost leads
Technical debt
```

---

## 5. Typography

### Recommended Font Stack

Best option:

```txt
Geist Sans
Geist Mono
```

Alternative options:

```txt
Inter
Manrope
IBM Plex Sans
```

### Recommendation

```txt
Geist Sans — main font
Geist Mono — small technical labels, metrics, code-style details
```

Geist looks modern, technical, and clean without feeling too much like a developer-only portfolio.

---

## 6. Typography Scale

### Desktop

```txt
Display / Hero:
64px / 1.05 / -0.04em
font-weight: 700

H1:
56px / 1.08 / -0.035em
font-weight: 700

H2:
44px / 1.12 / -0.03em
font-weight: 700

H3:
28px / 1.2 / -0.02em
font-weight: 650

Card Title:
20px / 1.25
font-weight: 650

Body Large:
18px / 1.65
font-weight: 400

Body:
16px / 1.6
font-weight: 400

Small:
14px / 1.5
font-weight: 400

Label:
12px / 1.2
font-weight: 650
letter-spacing: 0.08em
text-transform: uppercase
```

### Mobile

```txt
Hero:
36px–40px / 1.08

H2:
30px–34px / 1.12

H3:
22px–24px

Body:
16px / 1.6

Small:
14px / 1.45

Label:
11px–12px uppercase
```

### Typography Rules

Avoid:

```txt
Too much uppercase
Too much mono
Too small body text
Too many gradients in text
```

Prefer:

```txt
Big clear heading
Short readable paragraph
Strong CTA
One metric or proof point nearby
```

---

## 7. Layout System

### Container

```txt
Max width:
1200px or 1240px

Wide visual sections:
1360px max

Desktop horizontal padding:
32px–48px

Tablet:
24px

Mobile:
20px
```

### Section Spacing

```txt
Desktop section padding:
96px–128px

Hero:
min-height: 100vh or 820px

Sticky storytelling sections:
min-height: 100vh

Normal sections:
96px top / 96px bottom

Mobile sections:
72px–88px
```

### Grid

```txt
12-column grid desktop
Gap: 24px–32px

Hero:
6 columns text / 6 columns visual

Case Studies:
Main case 6–7 columns
Secondary cases 5–6 columns

Services:
4-card grid or 2x2 grid

FAQ + CTA:
FAQ 6 columns
CTA 6 columns
```

---

## 8. Radius System

The site should feel soft, reliable, and modern. Avoid overly sharp corners.

```txt
Radius XS:
8px — small tags, tiny elements

Radius SM:
12px — buttons, inputs

Radius MD:
16px — small cards

Radius LG:
24px — service cards, testimonial cards

Radius XL:
32px — major panels, hero mockups

Radius 2XL:
40px — large storytelling containers
```

Recommended:

```txt
Main cards:
border-radius: 28px or 32px

Buttons:
border-radius: 12px or 14px
```

---

## 9. Shadow System

Use soft depth, not heavy black shadows.

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

Rule:

```txt
The more important the element, the more visual depth it may have.
Do not make every card look like it is floating.
```

---

## 10. Border / Glass System

Use soft glass carefully. It should feel premium and subtle, not decorative or noisy.

### Card Base

```css
.card {
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(231, 229, 228, 0.9);
  border-radius: 28px;
  box-shadow: 0 18px 60px rgba(28, 25, 23, 0.07);
}
```

### Glass Panel

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(231, 229, 228, 0.78);
  box-shadow: 0 24px 80px rgba(28, 25, 23, 0.08);
}
```

### Avoid

```txt
Over-transparent cards
Strong blur behind text
Too many nested glass cards
Blue gradients everywhere
```

Glass should be an accent, not the entire visual system.

---

## 11. Component System

### 11.1 Navigation

#### Desktop Nav

```txt
Logo left

Links:
Work
Services
Process
About
FAQ
Contact

Primary CTA right:
Book a Free Strategy Call
```

#### Style

```txt
Height: 72px–80px
Background: rgba(255,255,255,0.82)
Backdrop blur: 16px
Border bottom: #E7E5E4
Sticky top
```

#### Mobile Nav

```txt
Logo / name left
Menu icon right
Primary CTA inside drawer
```

Keep mobile navigation clean and simple.

---

### 11.2 Buttons

#### Primary Button

Used for the main action:

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
slight translateY(-1px)
stronger shadow
```

#### Secondary Button

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

#### Button Rule

Each section should have a maximum of:

```txt
1 primary CTA
1 secondary CTA
```

Avoid placing too many buttons next to each other.

---

### 11.3 Badge

Use for:

```txt
Available for new projects in Alabama
Alabama-based developer
The Problem
The Proof
How I Can Help
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 1px solid #E7E5E4;
  color: #57534E;
  font-size: 13px;
  font-weight: 550;
}
```

Availability dot:

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

## 12. Key Sections

### 12.1 Hero

#### Desktop Layout

```txt
Left:
Badge
Headline
Subheadline
CTA row
Trust line

Right:
Browser mockup + mobile mockup
```

#### Hero Headline

```txt
I Build & Repair High-Performance Websites for Alabama Small Businesses.
```

#### Subheadline

```txt
I help small businesses fix slow, outdated websites and replace them with fast, reliable systems that capture leads and are easier to maintain.
```

#### Trust Line

```txt
I don’t just write code. I build stability for your business.
```

#### Hero Visual

Avoid abstract 3D graphics. Use:

```txt
Real project screenshot
Browser frame
Mobile preview
Small performance badge
```

Potential visual details:

```txt
Browser mockup
Mobile mockup
100/100 performance badge
Local SEO / lead form callout
```

---

### 12.2 Trust / Identity Cards

Purpose: quickly reduce the fear of hiring an anonymous freelancer.

#### Desktop

4 cards in a row:

```txt
Local Partner
Direct Communication
No-Ghosting Guarantee
Service Area
```

#### Mobile

3–4 compact trust items.

#### Style

```css
.trust-card {
  background: rgba(255,255,255,0.72);
  border: 1px solid #E7E5E4;
  border-radius: 24px;
  padding: 24px;
}
```

#### Copy

```txt
Local Partner
Based in Alabama and working with businesses across the state.

Direct Communication
You work with me directly. I pick up the phone.

No-Ghosting Guarantee
Structured SOWs, clear timelines, and ongoing support.

Service Area
Serving Birmingham, Huntsville, Mobile, and Montgomery.
```

---

### 12.3 Problem Cards

Purpose: create urgency without making the site too negative.

#### Cards

```txt
Slow & Bloated
Mobile-Broken
Technically Abandoned
Lost Leads & Revenue
```

Replace “Losing Trust” with **Lost Leads & Revenue** because it is closer to the business problem.

#### Style

```txt
White card
Subtle border
Large simple line icon
Short business-focused text
```

#### Copy

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

#### Bottom Promise Bar

```txt
Your local technical partner who fixes what’s broken and builds what lasts.
```

---

### 12.4 Case Study Cards

This is one of the most important sections.

#### Desktop Layout Recommendation

Do not make all 3 cards equal.

Preferred:

```txt
Main case large:
Veterinary Clinic Modernization

Secondary cases:
Walk-In Baths
Bulldog Breeder
```

The veterinary clinic case is the strongest and most locally relevant proof point. It should become the visual anchor.

#### Main Case Structure

```txt
Industry badge
Title
Large before/after image
Situation
Action
Result
Metric
CTA
```

#### Example Copy

```txt
Local Healthcare / Alabama

Veterinary Clinic Modernization

Situation:
A local clinic had an outdated site that was slow, hard to update, and weak for local search.

Action:
I rebuilt the site on a faster custom stack, improved mobile UX, cleaned up technical SEO, and simplified lead/contact flows.

Result:
A faster, more trustworthy website designed to improve local visibility and make patient inquiries easier to manage.
```

#### Important

Avoid unproven claims:

```txt
dominates local search
doubled leads
guaranteed ranking
```

Prefer honest wording:

```txt
designed to improve
optimized for
prepared for
improved performance
simplified inquiry flow
```

#### Metric Style

```txt
100/100 Performance
```

Use a large green metric only when it is real and verifiable.

---

### 12.5 Service Cards

Purpose: turn “web development” into understandable products.

#### Services

```txt
1. Diagnostic Audit
2. Modernization Engine
3. AI Edge
4. Technical Rescue
```

#### Card Structure

```txt
Icon
Service name
One-line promise
What’s included
Starting price
Best for
CTA
```

#### Diagnostic Audit

```txt
Find what’s slowing your website down.

Includes:
Technical review
SEO gap scan
Speed/performance check
Prioritized action plan

Starting at:
$500–$1,500
```

#### Modernization Engine

```txt
Replace your outdated website with a faster, cleaner system.

Includes:
Custom redesign
Mobile-first build
SEO setup
Lead forms
Launch support

Starting at:
$5,000+
```

#### AI Edge

```txt
Use automation to respond faster and save time.

Includes:
Lead routing
AI chat/support tools
Make/Zapier workflows
Customer intake automation

Starting at:
$3,000+
```

#### Technical Rescue

```txt
Fix what’s broken without rebuilding everything.

Includes:
Bug fixes
SEO errors
Speed optimization
Broken forms
Emergency cleanup

Starting at:
$750+
```

---

### 12.6 Process Component

Purpose: sell structure, reliability, and clear communication.

#### Process

```txt
Audit → Build → Launch → Support
```

Do not end at Launch. For SMB clients, **Support** is a major trust signal.

#### Copy

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

---

### 12.7 Guarantee / Trust Section

Purpose: reduce ghosting anxiety.

#### Headline

```txt
A partner, not just a developer.
```

#### Subcopy

```txt
I’m a web developer based in Alabama who partners with small businesses to build, repair, and maintain high-performance websites. No handoffs. No ghosting. Just clear communication, reliable work, and systems built to last.
```

#### Trust Bullets

```txt
Structured SOWs & clear timelines
Direct communication
Ongoing support after launch
Long-term partner mindset
```

#### No-Ghosting Promise

Prefer a softer promise instead of a risky hard guarantee:

```txt
No-Ghosting Promise
You’ll always know the project status, next steps, and how to reach me. I use clear scopes, timelines, and regular updates so you’re never left guessing.
```

A hard promise such as “if I don’t respond in 1 day, you get a free month” should only be used if it can truly be honored.

---

### 12.8 Testimonials

If real testimonials are not available yet, do not fake them.

Use:

```txt
Client quote
Project result
Business name
Role/person
```

If testimonials are not ready, temporarily use:

```txt
Project outcomes
```

Example:

```txt
Project Outcome
“Modernized an outdated clinic website with faster performance, clearer mobile UX, and stronger local SEO foundations.”
```

Avoid inventing names, clients, doctors, or quotes.

#### Card Style

```txt
Large quote mark
Short quote
Name / business
Small project tag
```

---

### 12.9 FAQ

Purpose: remove objections before the call.

#### Recommended FAQ

```txt
How long does a typical project take?
Do you work with WordPress?
Can you fix my existing website?
Do you offer ongoing support?
What do you need from me to get started?
Are third-party tools or subscriptions included?
How much does a website usually cost?
Can you help with SEO after launch?
```

#### FAQ Style

```txt
Accordion
White cards
Large clickable rows
Plus icon
```

On desktop, use 2 columns if needed.  
On mobile, use 1 column.

---

### 12.10 Final CTA

The final CTA should be simple, calm, and direct.

#### Headline

```txt
Ready to fix what’s holding your website back?
```

#### Subheadline

```txt
Get a clear plan, a faster website, and a technical partner who keeps things moving.
```

#### Buttons

```txt
Book a Free Strategy Call
Get My Free Technical Audit
```

#### Micro Trust Signals

```txt
No pressure
Free audit
20–30 min call
```

---

### 12.11 Footer

The footer can use a dark background to create a clean final contrast.

#### Background

```txt
#0F172A
```

#### Content

```txt
Serving businesses across Alabama
Birmingham
Huntsville
Mobile
Montgomery

Email
Phone
LinkedIn

© 2026 Andrii Web Developer
```

Keep the footer clean and not oversized.

---

## 13. Icon System

Use **Lucide React**.

### Recommended Icons

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

FAQ:
Plus
ChevronDown

CTA:
Calendar
Mail
Linkedin
```

### Icon Style

```txt
Stroke width: 1.75 or 2
Size desktop cards: 28–36px
Size mobile: 24–32px
Icon container: circle or rounded square
```

---

## 14. Motion System

### Main Principle

```txt
Motion should guide the story, not show off.
```

### Desktop Motion

Use:

```txt
Sticky slide-over sections
Mockup parallax
Cards fade + slide up
Case study before/after slider
CTA hover lift
Progress indicator
```

### Mobile Motion

Avoid heavy sticky pinning.

Use:

```txt
Simple reveal on scroll
Light card slide-up
Accordion open/close
Reduced parallax or none
```

### Animation Timings

```txt
Fast interaction:
150–220ms

Card reveal:
450–650ms

Section transition:
700–1000ms

Easing:
easeOutCubic
easeOutQuart
```

### Reduced Motion

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

## 15. Sticky Storytelling Rules

### Desktop

Use sticky sections strategically, not for every small block.

Recommended:

```txt
Hero — full viewport
Trust + Problem — slide section
Case Studies — strong sticky visual
Services + Process — sticky
Guarantee/Testimonial — normal or semi-sticky
FAQ/CTA — normal
```

### Mobile

```txt
No aggressive sticky pinning.
Normal vertical scroll.
Each section feels like a story card.
```

Mobile should feel like storytelling, but it should not be irritating or hard to scroll.

---

## 16. UI Rhythm

The site should follow this rhythm:

```txt
1. Big promise
2. Quick trust
3. Pain
4. Proof
5. Offers
6. Process
7. Human trust
8. Objection removal
9. CTA
```

Visual rhythm:

```txt
Hero — bold
Trust — calm
Problem — focused
Case Studies — visual-heavy
Services — structured
Process — simple
Guarantee — human
Testimonials — proof
FAQ — practical
CTA — direct
```

---

## 17. Copywriting Rules

### Use “I”, Not “We”

Because this is a solo developer portfolio, transparency is stronger than fake agency language.

Prefer:

```txt
I build
I help
You work with me directly
```

Avoid:

```txt
Our agency
Our team
We create scalable digital ecosystems
```

### Avoid Jargon

Avoid:

```txt
Headless CMS
Composable architecture
LLM workflow orchestration
JAMstack
API-first platform
```

Prefer:

```txt
Fast website
Easy to update
Less maintenance
Better mobile experience
Lead forms that work
Automation that saves time
```

### Each Section Should Answer One Question

```txt
Hero:
What do you do?

Trust:
Can I trust you?

Problem:
Do you understand my situation?

Case Studies:
Have you done this before?

Services:
How can I hire you?

Process:
What happens after I contact you?

Guarantee:
Will you disappear?

FAQ:
What should I know before booking?

CTA:
What do I do next?
```

---

## 18. Design Tokens Draft

Use this as a starting point for Tailwind or a project-level token file.

```ts
export const designTokens = {
  colors: {
    background: "#FAFAF9",
    surface: "#FFFFFF",
    surfaceMuted: "#F5F5F4",
    surfaceWarm: "#FDFCFB",

    textPrimary: "#1C1917",
    textSecondary: "#57534E",
    textMuted: "#78716C",

    border: "#E7E5E4",
    borderStrong: "#D6D3D1",

    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    primarySoft: "#EFF6FF",

    accent: "#14B8A6",
    accentSoft: "#CCFBF1",

    success: "#16A34A",
    warning: "#F59E0B",

    dark: "#0F172A",
    darkText: "#F8FAFC",
  },

  radius: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
  },

  shadow: {
    subtle: "0 1px 2px rgba(28, 25, 23, 0.04)",
    card: "0 12px 40px rgba(28, 25, 23, 0.07)",
    elevated: "0 24px 80px rgba(28, 25, 23, 0.10)",
    mockup: "0 32px 100px rgba(15, 23, 42, 0.14)",
    button: "0 10px 24px rgba(37, 99, 235, 0.22)",
  },

  spacing: {
    sectionDesktop: "112px",
    sectionMobile: "76px",
    containerXDesktop: "48px",
    containerXMobile: "20px",
    cardPadding: "28px",
  },
};
```

---

## 19. Tailwind-style Direction

If using Astro + Tailwind, the general direction:

```txt
body:
bg-stone-50
text-stone-900
font-sans
antialiased

cards:
bg-white/80
border border-stone-200
rounded-[28px]
shadow-[0_12px_40px_rgba(28,25,23,0.07)]

primary button:
bg-blue-600
hover:bg-blue-700
text-white
rounded-xl
shadow

secondary button:
bg-white
border border-stone-300
hover:border-blue-600
hover:bg-blue-50
```

---

## 20. What to Avoid

### Do Not Use

```txt
Dark cyber AI style
Neon gradients everywhere
Too much purple
Too much glassmorphism
Fake agency language
Overly playful illustrations
Tiny text
Crowded sections
Too many CTAs
Too many animations
Unproven metrics
Fake testimonials
```

### Especially Avoid

```txt
Guaranteed #1 Google ranking
Dominate local search
Maintenance-free forever
AI-powered everything
```

### Prefer

```txt
Designed to improve local visibility
Maintenance-light
Built to reduce plugin/security issues
Optional automation and AI tools
```

---

## 21. Final Visual Direction

```txt
Style:
Warm Technical Minimalism

Colors:
Warm off-white, white glass cards, deep charcoal text, blue primary, teal/green trust accents.

Typography:
Geist Sans + Geist Mono.

Shape:
Large rounded cards, soft borders, calm shadows.

Visuals:
Real screenshots inside browser/iPhone mockups.
Before/after slider for strongest case.
No random abstract graphics.

Motion:
Desktop storytelling slide-over.
Mobile normal scroll with light reveal.

Tone:
Clear, local, reliable, direct.
No hype. No jargon. No fake agency language.
```

---

## 22. Final Product Direction

Do not design this as a generic “designer portfolio.”

Design it as:

```txt
A premium technical sales page for Alabama small business owners.
```

The website should look impressive enough to prove technical and design skill, but clear enough that a non-technical business owner immediately understands:

```txt
This person can fix my website, explain the process, and not disappear.
```
