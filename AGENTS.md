# Repository Guidelines

## Project Structure & Modules
- Core App Router code lives under `app/`. `app/page.js` contains the letter drills, coding mode, analytics dashboards, and settings UI. Supporting data lives beside it in `app/snippetLibrary.js`.
- Shared assets (dictionary word list, icons) live in `public/`. The typing lessons hydrate themselves from `public/full_dictionary_en.csv`, so update that file if you need custom vocabulary or metadata tweaks.
- Deployment helpers live under `scripts/` (`export-docs.mjs` and `deploy-docs.mjs`). Both scripts assume the static export in `out/` was produced by `next build`.
- Static exports that will be published to GitHub Pages must land in `docs/`. When iterating locally, keep `docs/` ignored unless you are intentionally updating the hosted build.

## Lesson & Coding Systems
- Lessons unlock letters based on `LETTER_SEQUENCE` and `LESSON_WORD_LIMIT`. `buildLessonWords` synthesizes prompts from the dictionary (or a fallback list), so only introduce lesson tweaks through those helpers.
- Typing progress, unlocked letters, history, and user settings persist in `window.localStorage` under the `typing-progress-v1` key. Any new state needs to be versioned in that payload.
- Coding practice is powered by `SNIPPET_LIBRARY` and `SUPPORTED_LANGUAGES`. Every snippet should include descriptive metadata plus language-specific strings so the UI can render stats, focus characters, and indentation hints.
- Highlighting and metric components assume immutable lesson/coding entries (objects are pushed into history arrays). Avoid mutating those records in place to preserve chart accuracy.

## Build, Test, and Deployment Commands
- `npm run dev`: launch the Next dev server with hot reload on port 3000.
- `npm run build`: run the production build (`next build`). Use this before validating exports.
- `npm run start`: serve the built app (`next start`) when you need to inspect the production bundle locally.
- `npm run build:pages`: build, run the static export, copy the `out/` directory into `docs/`, and drop a `.nojekyll` file for GitHub Pages.
- `npm run deploy:pages`: run the build:pages workflow and push the refreshed `docs/` folder to the `gh-pages` (or configured) branch via a temporary worktree.

## Coding Style & Patterns
- Use modern React with hooks. Memoize derived data (`useMemo`) and callbacks (`useCallback`) when they feed into effects or render-heavy components to prevent wasted renders and stats drift.
- Keep feature helpers colocated: letter logic stays within `app/page.js`, snippet data in `app/snippetLibrary.js`, etc. If you extract utilities, keep them near their consumers.
- Stick to Tailwind utility classes for styling. Explain non-obvious combinations with small comments sparingly.
- Follow the existing formatting conventions: double quotes, semicolons, and 2-space indentation. New files should follow Next.js/App Router naming conventions.

## Testing & Verification
- There is no automated suite yet. If you introduce one, keep tests alongside components (`Component.test.js`) or under `__tests__/` and document the pattern here.
- Manual QA expectations: (1) complete lessons to trigger letter unlocks and auto-advance, (2) confirm metadata-backed prompts load, (3) run through coding snippets (including Tab/Enter helpers), and (4) verify profile charts, stats, and persistence in localStorage.
- When touching Pages deployment scripts, run `npm run build:pages` to confirm the export copies into `docs/` without errors.

## Commit & Pull Request Guidelines
- Keep commits focused and imperative (e.g., `feat: add spanish snippets`, `fix: persist coding history length`). Avoid mixing unrelated refactors with feature work.
- PR descriptions should outline the change, mention manual verification steps (lesson flow, coding flow, deploy scripts), and include screenshots or screen recordings for any UI changes, especially new lessons or charts. Link related issues/tasks for traceability.
