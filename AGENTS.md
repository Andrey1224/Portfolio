# Repository Guidelines

## Project Structure & Module Organization

This is an Astro portfolio site using Tailwind CSS and React integration. Source files live in `src/`: routes are in `src/pages/`, shared page shells are in `src/layouts/`, reusable UI sections are in `src/components/`, and global styles are in `src/styles/global.css`. Static browser assets belong in `public/`, such as `public/favicon.svg`. Design and planning notes are kept in root-level Markdown files and folders such as `DESIGN.md`, `CTA.md`, `DesighnSystem/`, `DesktopWireframe/`, and `mobileWireframe/`. Production output is generated into `dist/` and should not be edited directly.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the Astro dev server, usually at `http://localhost:4321`.
- `npm run build` creates the production build in `dist/` and catches many Astro/TypeScript errors.
- `npm run preview` serves the built site locally for final review.
- `npm run astro -- check` runs Astro diagnostics when type and template validation are needed.

## Coding Style & Naming Conventions

Use Astro components for page sections and keep filenames in PascalCase for components, such as `Hero.astro` and `CaseStudies.astro`. Page route files in `src/pages/` should stay lowercase and map directly to URLs, for example `audit.astro`. Follow the existing tab indentation in `.astro` and `.mjs` files. Prefer Tailwind utility classes and tokens from `tailwind.config.mjs` (`bgMain`, `surface`, `primary`, `shadow-brutal`) before introducing new colors or shadows. Keep visible copy direct and business-focused.

## Testing Guidelines

There is no dedicated test runner configured. Before submitting changes, run `npm run build`; for template or type changes, also run `npm run astro -- check`. For visual changes, review both desktop and mobile widths in the local dev server and verify the sticky hero, navigation, and CTA links still behave correctly.

## Commit & Pull Request Guidelines

Recent Git history uses very short, informal commit messages, so new work should improve clarity with concise imperative messages such as `Update audit page CTA` or `Fix mobile hero spacing`. Pull requests should include a brief summary, verification commands run, linked issue or task context if available, and screenshots for visible UI changes.

## Agent-Specific Instructions

Keep edits scoped to source, configuration, or documentation files relevant to the task. Do not modify `dist/`, `node_modules/`, or generated lockfile content unless dependency changes require it.
