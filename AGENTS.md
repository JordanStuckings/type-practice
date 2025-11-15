# Repository Guidelines

## Project Structure & Module Organization
- Core Next.js app lives under `app/` with `layout.js`, `page.js`, and global styling in `globals.css`. Keep new routes or API endpoints inside this directory using the App Router conventions.
- Shared assets reside in `public/`, and global configs (Next, Tailwind, PostCSS) sit in the repo root. Prefer colocating feature-specific helpers next to their consuming components.
- Type practice lessons are currently hardcoded inside `app/page.js`; expand via small data modules if the lesson set grows.

## Build, Test, and Development Commands
- `npm run dev`: launches the local Next dev server on port 3000 for rapid iteration with hot reload.
- `npm run build`: creates an optimized production bundle; run before deploying or testing bundle size.
- `npm run start`: serves the production build locally; useful for sanity checks that mimic deployment.

## Coding Style & Naming Conventions
- Use modern React with functional components and hooks; prefer descriptive hook/state names (`lessonComplete`, `handleNextLesson`).
- Follow Tailwind utility-first styling. Keep custom classes minimal and document non-obvious combinations with brief comments.
- Stick to double quotes, semicolons, and 2-space indentation per the existing codebase. Name files in kebab-case unless Next.js conventions dictate otherwise.

## Testing Guidelines
- No automated test suite exists yet. If you introduce one, colocate tests beside components (`component.test.js`) or under a `__tests__/` folder and document the chosen pattern here.
- Manually verify typing flows: completing lessons, auto-advance behavior, and stat tracking. Record repro steps in PR descriptions when you fix bugs.

## Commit & Pull Request Guidelines
- Commits should be scope-focused with imperative subjects (`feat: add auto-advance to lessons`, `fix: clamp accuracy calc`). Avoid bundling unrelated tweaks.
- PRs must describe the change, list test/verification steps, and attach screenshots or screen recordings for UI changes (e.g., new lesson cards). Link related issues or tasks to ensure traceability.
