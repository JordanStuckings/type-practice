#!/usr/bin/env node

import { execSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const docsDir = join(projectRoot, "docs");
const deployBranch = process.env.DOCS_DEPLOY_BRANCH || process.argv[2] || "gh-pages";
const deployRemote = process.env.DOCS_DEPLOY_REMOTE || process.argv[3] || "origin";
const worktreeDir = join(projectRoot, `.deploy-${deployBranch}`);

const run = (command, options = {}) => {
  execSync(command, { stdio: "inherit", cwd: projectRoot, ...options });
};

const runInWorktree = (command, options = {}) => {
  execSync(command, { stdio: "inherit", cwd: worktreeDir, ...options });
};

const captureWorktree = (command, options = {}) => {
  return execSync(command, { stdio: "pipe", cwd: worktreeDir, ...options }).toString().trim();
};

const branchExists = () => {
  try {
    execSync(`git show-ref --verify --quiet refs/heads/${deployBranch}`, {
      stdio: "ignore",
      cwd: projectRoot,
    });
    return true;
  } catch {
    return false;
  }
};

const remoteBranchExists = () => {
  try {
    const output = execSync(`git ls-remote --heads ${deployRemote} ${deployBranch}`, {
      stdio: "pipe",
      cwd: projectRoot,
    })
      .toString()
      .trim();
    return output.length > 0;
  } catch {
    return false;
  }
};

if (!existsSync(docsDir)) {
  console.error("docs/ directory missing. Run `npm run build:docs` before deploying.");
  process.exit(1);
}

console.log(`Deploying docs/ to ${deployRemote}/${deployBranch}...`);

try {
  if (!branchExists() && remoteBranchExists()) {
    console.log(`Fetching ${deployRemote}/${deployBranch}...`);
    run(`git fetch ${deployRemote} ${deployBranch}:${deployBranch}`);
  }

  if (existsSync(worktreeDir)) {
    rmSync(worktreeDir, { recursive: true, force: true });
  }
  run("git worktree prune");

  if (branchExists()) {
    run(`git worktree add --force ${worktreeDir} ${deployBranch}`);
  } else {
    console.log(`Creating ${deployBranch} from current HEAD...`);
    run(`git worktree add --force -b ${deployBranch} ${worktreeDir} HEAD`);
  }

  const worktreeEntries = readdirSync(worktreeDir);
  for (const entry of worktreeEntries) {
    if (entry === ".git") {
      continue;
    }
    rmSync(join(worktreeDir, entry), { recursive: true, force: true });
  }

  cpSync(docsDir, join(worktreeDir, "docs"), { recursive: true });

  runInWorktree("git add --all");
  const status = captureWorktree("git status --porcelain");

  if (!status) {
    console.log("Docs branch already up to date. Nothing to push.");
    run("git worktree remove --force " + worktreeDir);
    process.exit(0);
  }

  const commitMessage = `docs: deploy ${new Date().toISOString()}`;
  runInWorktree(`git commit -m "${commitMessage}"`);
  runInWorktree(`git push ${deployRemote} ${deployBranch}`);
} finally {
  try {
    run(`git worktree remove --force ${worktreeDir}`);
  } catch (error) {
    console.warn("Failed to remove temporary worktree:", error.message);
  }
}

console.log("Docs deployed successfully.");
