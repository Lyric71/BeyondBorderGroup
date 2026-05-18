# Pre-commit image-optimization hook — portable extract

A self-contained git pre-commit hook: it detects raster images staged for
commit, optimizes them in place, and re-stages them, so an unoptimized asset
can never land in history. Project-agnostic. Copy the four files below into a
new project, add the package.json entries, install once.

## What it does

On every `git commit`, the hook:

1. Lists files staged as added/modified/renamed.
2. Keeps only raster images (`.jpg`, `.jpeg`, `.png`, `.webp`) under the
   watched directory (default `public/Images/`).
3. Runs the batch optimizer on each: resizes down past a max width, re-encodes
   (JPG mozjpeg q82 progressive, PNG palette, WebP q78), keeps the original if
   the re-encode does not save at least 3%.
4. Re-stages the optimized file so the commit contains the optimized bytes.

It is idempotent and safe to run repeatedly. SVG and AVIF are skipped (already
vector / already modern). Files under 30 KB are left alone.

## Requirements

- Node >= 18 (the scripts use `node:` imports and ESM).
- [`sharp`](https://sharp.pixelplumbing.com) for image encoding.
- `"type": "module"` in package.json (scripts are `.mjs` so this is optional,
  but the project should be ESM-friendly).

```bash
npm install --save-dev sharp
```

## File layout

```
scripts/
  hooks/
    pre-commit                    # bash shim copied into .git/hooks/
    prepare-commit-msg            # auto-prepends a timestamp to commit messages
  pre-commit-optimize-images.mjs  # staged-image detector
  optimize-images-batch.mjs       # the sharp optimizer
  install-hooks.mjs               # one-time installer
```

`install-hooks.mjs` copies **everything** in `scripts/hooks/` into
`.git/hooks/`, so both the `pre-commit` (image optimization) and
`prepare-commit-msg` (commit naming) hooks install together.

## package.json additions

```json
{
  "scripts": {
    "hooks:install": "node scripts/install-hooks.mjs",
    "img:batch": "node scripts/optimize-images-batch.mjs"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

## Install (once per clone)

```bash
npm install
npm run hooks:install
```

`install-hooks.mjs` copies everything in `scripts/hooks/` into `.git/hooks/`.
Git hooks are not tracked by git, so every clone must run this once. Consider
adding it to a `postinstall` script if you want it automatic.

## Adapting to a new project

The only project-specific value is the watched directory. In
`scripts/pre-commit-optimize-images.mjs` change:

```js
const ROOT_PREFIX = "public/Images/";
```

to wherever the project keeps raster images (e.g. `src/assets/`,
`public/img/`). The optimizer defaults (`maxWidth`, quality, `minSizeKB`) live
in `DEFAULTS` inside `optimize-images-batch.mjs` and can be tuned there or
overridden per run with flags.

---

## File 1 — `scripts/hooks/pre-commit`

Bash shim. Gets copied into `.git/hooks/pre-commit`. On non-Windows the
installer also `chmod +x` it.

```bash
#!/bin/bash
# Auto-optimize any staged raster images under the watched directory.
# Installed by `npm run hooks:install`. See scripts/pre-commit-optimize-images.mjs.

set -e

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

node scripts/pre-commit-optimize-images.mjs
```

---

## File 2 — `scripts/pre-commit-optimize-images.mjs`

Detects staged raster images, optimizes each, re-stages it. Aborts the commit
(exit 1) if the optimizer fails.

```js
#!/usr/bin/env node
// Pre-commit step: optimize any staged raster images, then re-stage them.
//
// Wired in via .git/hooks/pre-commit. Runs only on files git reports as added
// or modified that fall under the watched directory and have a raster
// extension. Safe to run repeatedly: the batch optimizer keeps the original
// buffer if it can't shrink it.

import { execSync } from "node:child_process";
import path from "node:path";

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const ROOT_PREFIX = "public/Images/"; // <-- change per project

function staged() {
  // -z + null parser keeps paths with spaces intact.
  const out = execSync("git diff --cached --name-only --diff-filter=ACMR -z", {
    encoding: "buffer",
  });
  return out
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

function isTargetImage(p) {
  const norm = p.replace(/\\/g, "/");
  if (!norm.startsWith(ROOT_PREFIX)) return false;
  return RASTER_EXT.has(path.extname(norm).toLowerCase());
}

function main() {
  const files = staged().filter(isTargetImage);
  if (files.length === 0) return;

  console.log(`[pre-commit] optimizing ${files.length} image(s)...`);
  for (const f of files) {
    try {
      execSync(`node scripts/optimize-images-batch.mjs "${f}"`, { stdio: "inherit" });
      execSync(`git add -- "${f}"`, { stdio: "inherit" });
    } catch (err) {
      console.error(`[pre-commit] failed to optimize ${f}: ${err.message}`);
      process.exit(1);
    }
  }
}

main();
```

---

## File 3 — `scripts/install-hooks.mjs`

Copies repo-tracked hooks into `.git/hooks/`. Idempotent. Run once per clone.

```js
#!/usr/bin/env node
// Install repo git hooks into .git/hooks/. Run once after cloning:
//   npm run hooks:install
//
// Idempotent: re-running just overwrites the files in .git/hooks/. Skips with a
// warning if .git/hooks/ doesn't exist (e.g. running from a tarball).

import { copyFile, readdir, chmod, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const SRC = path.resolve("scripts/hooks");
const DST = path.resolve(".git/hooks");

async function main() {
  try {
    await stat(DST);
  } catch {
    console.warn(`No .git/hooks/ directory at ${DST}; skipping hook install.`);
    return;
  }

  const files = await readdir(SRC);
  for (const name of files) {
    const from = path.join(SRC, name);
    const to = path.join(DST, name);
    await copyFile(from, to);
    if (process.platform !== "win32") {
      await chmod(to, 0o755);
    }
    console.log(`installed: ${path.relative(process.cwd(), to)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

---

## File 4 — `scripts/optimize-images-batch.mjs`

The optimizer. Usable on its own (`npm run img:batch`) or called by the hook.

```js
#!/usr/bin/env node
// Batch-optimize raster images in place under the watched dir (or a path you pass).
//
// Usage:
//   node scripts/optimize-images-batch.mjs                   # scan public/Images/
//   node scripts/optimize-images-batch.mjs public/Images/work
//   node scripts/optimize-images-batch.mjs path/to/file.png  # single file is fine too
//   node scripts/optimize-images-batch.mjs --dry             # report only, no writes
//   node scripts/optimize-images-batch.mjs --max-width=1800
//   node scripts/optimize-images-batch.mjs --min-size=50     # skip files <50 KB
//   node scripts/optimize-images-batch.mjs --force           # re-encode even if no savings
//
// Behavior:
//   - Walks the target path, picks up .jpg/.jpeg/.png/.webp (case-insensitive).
//   - Skips .svg (already vector) and .avif (treat as already-optimized).
//   - For each file: resizes down if wider than --max-width, then re-encodes at the
//     same path with the same extension. JPG -> mozjpeg q82, PNG -> palette q90,
//     WEBP -> q78. Keeps EXIF orientation. Flattens onto white only for JPG.
//   - If the new buffer is not smaller than the original (with --force off), the
//     original is left untouched. This protects already-optimized files.
//   - Prints a per-file line and a total report at the end.

import { argv, exit, cwd } from "node:process";
import { readFile, stat, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const SKIP_EXT = new Set([".svg", ".avif", ".gif", ".ico"]);

const DEFAULTS = {
  maxWidth: 2000,
  minSizeKB: 30, // files smaller than this gain little, skip
  jpgQuality: 82,
  webpQuality: 78,
  pngQuality: 90,
  alphaThreshold: 0.995,
  dry: false,
  force: false,
  root: "public/Images", // <-- change per project
};

function parseArgs(rawArgs) {
  const opts = { ...DEFAULTS };
  const positional = [];
  for (const arg of rawArgs) {
    if (arg === "--dry") opts.dry = true;
    else if (arg === "--force") opts.force = true;
    else if (arg.startsWith("--max-width=")) opts.maxWidth = Number(arg.split("=")[1]);
    else if (arg.startsWith("--min-size=")) opts.minSizeKB = Number(arg.split("=")[1]);
    else if (arg.startsWith("--")) {
      console.error(`Unknown flag: ${arg}`);
      exit(2);
    } else {
      positional.push(arg);
    }
  }
  if (positional.length > 0) opts.root = positional[0];
  return opts;
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

async function walk(target) {
  const out = [];
  let st;
  try {
    st = await stat(target);
  } catch {
    return out;
  }
  if (st.isFile()) {
    out.push(target);
    return out;
  }
  const stack = [target];
  while (stack.length) {
    const dir = stack.pop();
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (e.isFile()) out.push(p);
    }
  }
  return out;
}

async function hasMeaningfulAlpha(pipeline, meta, threshold) {
  if (!meta.hasAlpha) return false;
  const stats = await pipeline.stats();
  const alpha = stats.channels[stats.channels.length - 1];
  return alpha.min < 255 * threshold;
}

async function optimizeOne(file, opts) {
  const ext = path.extname(file).toLowerCase();
  if (SKIP_EXT.has(ext)) return { file, skipped: "vector/other" };
  if (!RASTER_EXT.has(ext)) return { file, skipped: "not raster" };

  const srcStat = await stat(file);
  const srcBytes = srcStat.size;
  if (srcBytes < opts.minSizeKB * 1024) {
    return { file, srcBytes, skipped: "small" };
  }

  const srcBuf = await readFile(file);
  const probe = sharp(srcBuf, { failOn: "error" }).rotate();
  let meta;
  try {
    meta = await probe.metadata();
  } catch (err) {
    return { file, srcBytes, error: `metadata: ${err.message}` };
  }

  const needsResize = meta.width && meta.width > opts.maxWidth;
  const resizer = (p) =>
    needsResize ? p.resize({ width: opts.maxWidth, withoutEnlargement: true }) : p;

  let outBuf;
  try {
    if (ext === ".jpg" || ext === ".jpeg") {
      outBuf = await resizer(sharp(srcBuf).rotate())
        .flatten({ background: "#ffffff" })
        .jpeg({ quality: opts.jpgQuality, mozjpeg: true, progressive: true })
        .toBuffer();
    } else if (ext === ".png") {
      const alpha = await hasMeaningfulAlpha(probe, meta, opts.alphaThreshold);
      let pipe = resizer(sharp(srcBuf).rotate());
      if (!alpha) pipe = pipe.flatten({ background: "#ffffff" });
      outBuf = await pipe
        .png({ palette: true, quality: opts.pngQuality, compressionLevel: 9, effort: 10 })
        .toBuffer();
    } else if (ext === ".webp") {
      outBuf = await resizer(sharp(srcBuf).rotate())
        .webp({ quality: opts.webpQuality, effort: 6 })
        .toBuffer();
    }
  } catch (err) {
    return { file, srcBytes, error: `encode: ${err.message}` };
  }

  if (!outBuf) return { file, srcBytes, skipped: "no output" };

  const saved = srcBytes - outBuf.length;
  const ratio = saved / srcBytes;

  // Don't replace if we didn't actually save space (unless --force).
  if (!opts.force && saved <= 0) {
    return { file, srcBytes, outBytes: outBuf.length, kept: true };
  }
  // Don't bother replacing if savings are negligible (<3%) to avoid churn.
  if (!opts.force && ratio < 0.03) {
    return { file, srcBytes, outBytes: outBuf.length, kept: true };
  }

  if (!opts.dry) {
    await writeFile(file, outBuf);
  }

  return {
    file,
    srcBytes,
    outBytes: outBuf.length,
    width: meta.width,
    height: meta.height,
    resized: needsResize,
    saved,
    ratio,
  };
}

async function main() {
  const opts = parseArgs(argv.slice(2));
  const root = path.resolve(opts.root);
  console.log(
    `Scanning: ${path.relative(cwd(), root) || "."}  (max-width=${opts.maxWidth}, min-size=${opts.minSizeKB} KB${opts.dry ? ", DRY RUN" : ""})`,
  );

  const files = (await walk(root)).filter((f) =>
    RASTER_EXT.has(path.extname(f).toLowerCase()),
  );
  if (files.length === 0) {
    console.log("No raster images found.");
    return;
  }

  let totalSrc = 0;
  let totalOut = 0;
  let optimized = 0;
  let kept = 0;
  let skipped = 0;
  let errored = 0;

  for (const f of files) {
    const r = await optimizeOne(f, opts);
    const rel = path.relative(cwd(), f);
    if (r.error) {
      errored++;
      console.log(`  !! ${rel}  ${r.error}`);
      continue;
    }
    if (r.skipped) {
      skipped++;
      continue;
    }
    if (r.kept) {
      kept++;
      totalSrc += r.srcBytes;
      totalOut += r.srcBytes; // we kept the original
      continue;
    }
    optimized++;
    totalSrc += r.srcBytes;
    totalOut += r.outBytes;
    const pct = (r.ratio * 100).toFixed(0);
    const flags = r.resized ? " [resized]" : "";
    console.log(
      `  ${rel}  ${fmtBytes(r.srcBytes)} -> ${fmtBytes(r.outBytes)}  (-${pct}%)${flags}`,
    );
  }

  const totalSaved = totalSrc - totalOut;
  const pct = totalSrc > 0 ? ((totalSaved / totalSrc) * 100).toFixed(1) : "0.0";
  console.log("");
  console.log(
    `Done: ${optimized} optimized, ${kept} kept (no gain), ${skipped} skipped, ${errored} errored.`,
  );
  console.log(
    `Total: ${fmtBytes(totalSrc)} -> ${fmtBytes(totalOut)}  (${fmtBytes(totalSaved)} saved, -${pct}%)${opts.dry ? "  [DRY RUN, nothing written]" : ""}`,
  );
}

main();
```

---

## File 5 — `scripts/hooks/prepare-commit-msg`

Auto-prepends a `MMDD-HHMM` timestamp to the commit message. Optional, drop it
if the project wants plain conventional-commit messages only.

```bash
#!/bin/bash
COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2

if [ -z "$COMMIT_SOURCE" ]; then
  TIMESTAMP=$(date +"%m%d-%H%M")
  ORIGINAL_MSG=$(cat "$COMMIT_MSG_FILE")
  echo "$TIMESTAMP $ORIGINAL_MSG" > "$COMMIT_MSG_FILE"
fi
```

Behavior:

- Prepends a timestamp like `0516-1637` (May 16, 16:37) to the message.
- The `[ -z "$COMMIT_SOURCE" ]` guard means it fires **only on a plain
  `git commit`** (the editor path). It is skipped for `-m` / `-F`
  (`COMMIT_SOURCE=message`), `--amend` / `-C` (`commit`), merges (`merge`),
  squashes (`squash`), and templates (`template`).
- Type a real message and the hook keeps it: `git commit` then typing
  `feat: add contact form` yields `0516-1637 feat: add contact form`.

To change the format, edit the `date` pattern, e.g. `+"%Y-%m-%d %H:%M"` for
`2026-05-16 16:37`. To make it append instead of prepend, swap the `echo` to
`echo "$ORIGINAL_MSG $TIMESTAMP"`.

---

## Notes

- **Hooks are not version-controlled.** `.git/hooks/` is local to each clone.
  Keeping the hook source in `scripts/hooks/` and installing with
  `install-hooks.mjs` is what makes it shareable. Everyone who clones must run
  `npm run hooks:install` once (or wire it into `postinstall`).
- **Bypassing.** A commit can still skip the hook with `git commit --no-verify`.
  That is the intended escape hatch, not a bug.
- **Windows.** The installer skips `chmod` on Windows; Git for Windows runs the
  bash shim through its bundled Bash, so the hook still works.
- **Extending.** To add more hooks (lint, type-check, secret-scan), drop more
  files into `scripts/hooks/` and they get installed the same way. The
  `pre-commit` shim can call several scripts in sequence.
- **Husky alternative.** This is a zero-dependency approach. If the project
  already uses Husky, put the same `node scripts/pre-commit-optimize-images.mjs`
  line in `.husky/pre-commit` instead and skip files 1 and 3.
