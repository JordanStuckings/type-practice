# Type Practice

Type Practice is a small Next.js app that drills common typing lessons and coding snippets with Tailwind-powered UI feedback.

## Local Development

- `npm install` installs dependencies once.
- `npm run dev` starts the dev server on [http://localhost:3000](http://localhost:3000) with hot reload.

## Production Builds

- `npm run build` creates a static export under `out/` (via `output: "export"`). Inspect this folder locally or host it on any static host.
- `npm run start` is kept for parity with the default Next.js template, but the static build is meant to be hosted directly without a Node server.

## GitHub Pages Workflow

GitHub Pages expects static assets inside a `docs/` directory. Run:

```bash
npm run build:docs
```

The command runs `next build`, ensures the static export uses trailing slashes for clean URLs, and copies the result from `out/` to `docs/`. Commit `docs/` (or publish it via CI) so GitHub Pages can serve it.

## Repository Notes

- App Router pages live under `app/`. Add additional lessons or helpers directly next to the components that use them to keep features self-contained.
- Tailwind CSS (v4) powers most styling, so rely on utility classes wherever possible.
