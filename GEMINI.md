# Project Context: Alabama SMB Web Developer Portfolio

This project is in the design and planning phase for a high-performance portfolio website targeting small businesses in Alabama. The project follows a "Neo-brutalism" aesthetic, positioning the developer as a reliable local partner.

## Project Overview

- **Purpose**: A professional portfolio for a solo web developer focusing on Alabama-based small businesses.
- **Core Strategy**: Moving away from generic "freelancer" vibes toward a "local technical partner" identity.
- **Target Audience**: Non-technical small business owners in Birmingham, Huntsville, Mobile, and Montgomery.
- **Key Message**: Reliable systems, no ghosting, and business-focused results.

## Key Documentation

- **[Design System (v1)](DesighnSystem/alabama-smb-web-developer-design-system-v1.md)**: The foundational document covering brand personality, color palette, typography, layout systems, and component specifications. *(Note: Style shifted from initial V1 to Neo-Brutalism as defined in newDesighn/Brutal.html)*
- **[Brutalism Spec](newDesighn/Brutal.html)**: The HTML/CSS template defining the Neo-brutalist aesthetic.
- **[Wireframes](DesktopWireframe/)**: Visual guides for the desktop and mobile layouts.

## Design & Development Conventions

### Visual Style: Neo-Brutalism
- **Colors**: Background `#F2F2F2`, Surface `#FFFFFF`, Text `#000000`. Accents: Blue (`#2563EB`), Green (`#16A34A`), Orange (`#F59E0B`).
- **Typography**: Geist Sans for main text, Geist Mono for technical details/labels. Heavy use of uppercase, large fluid text (`text-fluid-hero`), and text outlines.
- **Components**: NO rounded corners. Thick borders (`3px solid #000000`). Hard solid shadows (`6px 6px 0px #000000`). Hover effects involve rigid translation (e.g., `translate(4px, 4px)`) and shrinking shadows.

### Copywriting Principles
- **Tone**: Professional, direct, and human.
- **Voice**: Use "I" instead of "We" to emphasize transparency and direct communication.
- **Language**: Avoid technical jargon (e.g., "Headless CMS", "LLM"). Use business-focused benefits (e.g., "Fast website", "Easy to update").

## Project Structure

- `DesighnSystem/`: Contains the core design system markdown.
- `DesktopWireframe/`: Desktop layout wireframes (PNG).
- `mobileWireframe/`: Mobile layout wireframes (PNG).

## Roadmap & TODOs

- [x] Select technology stack (e.g., Astro + Tailwind + Lucide React as suggested in design system).
- [x] Initialize code repository.
- [x] Implement core layout based on `alabama-smb-web-developer-design-system-v1.md`.
- [ ] Create storytelling components with sticky scroll effects (Desktop view).
- [x] Finalize copy based on Section 17 of the Design System.
