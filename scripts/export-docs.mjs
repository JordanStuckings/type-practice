import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const outDir = join(projectRoot, "out");
const docsDir = join(projectRoot, "docs");

if (!existsSync(outDir)) {
  console.error("Static export missing. Run `next build` before copying to docs/.");
  process.exit(1);
}

if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
}

cpSync(outDir, docsDir, { recursive: true });
console.log("Copied static export from out/ to docs/ for GitHub Pages.");
