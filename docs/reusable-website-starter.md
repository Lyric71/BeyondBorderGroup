# Reusable Website Starter

Extracted from the BeyondBorderGroup config. Everything here is project-agnostic:
tooling, build setup, i18n architecture, translation rules, automation scripts,
git hooks, SEO/redirect infrastructure, and API integrations. Nothing about brand
style, copy voice, colors, fonts, spacing, or page layout is carried over. Copy
the parts you need into the new project and replace the domain, paths, and keys.

---

## 1. Stack and prerequisites

```bash
node --version   # >= 22.12.0 (LTS)
npm --version    # >= 9.x
git --version    # >= 2.x

npm install -g @anthropic-ai/claude-code
claude --version
claude login                       # or: export ANTHROPIC_API_KEY=sk-ant-...
```

- **Framework:** Astro 6.x (static site generation)
- **Styling:** Tailwind CSS 4.x (via `@tailwindcss/vite`)
- **Deployment:** Vercel (`@astrojs/vercel` adapter)
- **Language:** TypeScript, strict mode
- **Sitemap:** `@astrojs/sitemap`
- **Email:** Resend
- **Screenshots / visual checks:** Playwright

### Scaffold

```bash
npm create astro@latest <project> -- --template minimal --typescript strict --git --install
npx astro add tailwind
npx astro add vercel
npm install @astrojs/check @astrojs/sitemap dotenv resend
npm install -D prettier prettier-plugin-astro playwright

git init
git add .
git commit -m "chore: initial Astro project scaffold"
git remote add origin git@github.com:YOUR_ORG/<project>.git
git push -u origin main
```

---

## 2. package.json — scripts block

The reusable script set. Drop the image/llms/indexnow scripts in `scripts/` (see
sections below) and these wire them up:

```json
{
  "type": "module",
  "engines": { "node": ">=22.12.0" },
  "scripts": {
    "dev": "astro dev --host 127.0.0.1",
    "prebuild": "node scripts/generate-llms-full.mjs",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "gen": "node scripts/generate-image.mjs",
    "gen:edit": "node scripts/generate-image-edit.mjs",
    "img": "node scripts/optimize-image.mjs",
    "img:batch": "node scripts/optimize-images-batch.mjs",
    "hooks:install": "node scripts/install-hooks.mjs",
    "indexnow": "node scripts/submit-indexnow.mjs",
    "llms:full": "node scripts/generate-llms-full.mjs"
  }
}
```

`prebuild` runs automatically before every `build`, so the llms-full.txt dump
stays current without a manual step.

---

## 3. Base config files

### tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

### .gitignore

```gitignore
# build output
dist/
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# OS / editor
.DS_Store
.idea/
.vercel

# generated images (text-to-image script default output)
generated-*.png
```

### .env.example

Commit this, never commit `.env`:

```dotenv
# WaveSpeed AI — text-to-image generation (https://wavespeed.ai)
WAVESPEED_API_KEY=

# Resend — transactional email (https://resend.com/api-keys)
RESEND_API_KEY=

# Recipient address for the contact form
CONTACT_TO_EMAIL=
```

---

## 4. CLAUDE.md — the parts worth keeping

Put a `.claude/CLAUDE.md` at the project root with the hard, permanent rules.
The reusable, non-style sections:

### Testing

- Run `npm run build` before committing to catch build errors.
- Run `npx astro check` for TypeScript validation.
- Verify responsive at 375px, 768px, 1280px.

### Git conventions

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `style:`.
- Branch naming: `feature/description`, `fix/description`.
- Always run build before pushing.

### Performance / deployment constraints (keep if relevant)

- Self-host everything. No external CDN dependencies.
- Pick analytics that fits the audience (Vercel Analytics or a self-hosted,
  privacy-friendly option).
- If the site must serve a region with a restrictive firewall, avoid any
  blocked third-party service (Google Fonts, Analytics, Maps, reCAPTCHA, Tag
  Manager). Self-host fonts as woff2 in `/public/fonts`.

### Image optimization rule (see section 8 for the scripts)

Every raster image (`.jpg`, `.jpeg`, `.png`, `.webp`) added under
`public/Images/` must be optimized before it ships. SVG and AVIF are exempt.
Enforced by a pre-commit hook so an unoptimized asset cannot be committed.

---

## 5. Internationalization architecture

This is the reusable skeleton: English at the root, every other locale under a
prefix, with **native-language slugs per locale** (not the English slug with a
prefix slapped on).

### astro.config.mjs — i18n block

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr'],          // add locales as they ship
  routing: { prefixDefaultLocale: false },
},
```

`prefixDefaultLocale: false` keeps English URLs at `/` so legacy links and the
redirect map keep working.

### File layout

```
src/i18n/
  ui.ts             # shared chrome strings (header, footer, meta) per locale
  utils.ts          # getLocaleFromUrl, stripLocale, localizePath, useTranslations
  <content>-slugs.mjs   # per-collection EN<->native slug maps
src/pages/
  index.astro       # EN home
  about.astro       # EN pages at root
  fr/
    qui-nous-sommes.astro   # FR pages with NATIVE slugs
```

### ui.ts — shared string dictionary

Page-level content stays inside each locale's `.astro` file. Only shared chrome
(nav, footer, meta) goes in `ui.ts`. Rules when extending it:

- English is the source of truth for key names.
- Every locale must define the same keys.
- `useTranslations(locale)` returns a `t()` with `{placeholder}` interpolation
  and English fallback for any missing key.

### utils.ts — the routing helpers (reuse verbatim)

`localizePath(path, locale)` round-trips a URL in either direction
(`/about` <-> `/fr/qui-nous-sommes`) using a per-locale `slugMap`. A
`prefixMap` handles nested routes whose tail segment is a shared brand/content
slug (e.g. `/work/<slug>` <-> `/fr/nos-realisations/<slug>`). Unknown slugs
fall back to the locale home so the language switcher never 404s.

The whole `src/i18n/` directory is portable. For a new project: keep
`utils.ts` as-is, rewrite the `slugMap` / `prefixMap` entries, swap the
`ui.ts` strings.

### Translation rules (MANDATORY — keep these in CLAUDE.md)

The single source of truth for any non-English work. Output must read like a
native journalist in the target language wrote it originally, not like a
translated English page.

**When the rule fires:** any time you edit, draft, translate, or fix content in
`src/pages/<locale>/`, any non-English string in `src/i18n/`, or any
non-English alt text, meta description, OpenGraph copy, slug label, button
label, form label, error message, microcopy, blog post, email, or caption. It
does NOT fire for code, identifiers, file paths, console logs, code comments,
commit messages, or PR descriptions.

**Core principles:**

1. **Native translation, not literal translation.** Write as a native speaker
   would naturally express the idea. Adapt idioms and cultural references.
   Prioritize natural flow over word-for-word fidelity. Match register (formal,
   casual, professional) to the audience. Use locale-specific conventions for
   dates, currency, units, punctuation, quotation marks, number formatting.
2. **Improve the existing locale page, do NOT retranslate from English.** Start
   from the current target-language page. Treat the existing translation as the
   baseline; preserve what works. Only modify sections that are awkward,
   outdated, inaccurate, or missing. Never regenerate the full page from
   English: that destroys prior editorial work. If the English source has new
   content missing in the target page, add ONLY the missing parts and translate
   them natively, keeping the rest untouched. The existing locale page is
   editorial state, not draft state.
3. **Native journalistic register per language.** Target the register of a
   serious daily/business paper in that market, not literal Anglo-translation.
   (FR: Le Monde / Les Echos. ES: El País. ZH: 财经 / 36氪. DE: FAZ /
   Handelsblatt.)

**Workflow per edit (mandatory order):**

1. Open the existing target-language page first. Read it in full.
2. Compare against the English source ONLY to identify gaps or outdated parts.
3. Per section: reads naturally and accurate → leave it. Reads awkward or
   machine-translated → rewrite natively. Missing → translate natively.
4. Preserve existing terminology unless clearly wrong. Consistency beats
   personal preference.
5. Keep page structure intact (headings, anchors, IDs, frontmatter, metadata,
   slugs, ARIA labels, schema markup) unless explicitly asked to change it.
6. Do not change SEO-sensitive elements (title, meta description, H1, slugs)
   without flagging it first.

**Two-step rewrite for any new or rewritten section:**

- *Step 1 — Humanized translation.* Translate from English, hit the native
  journalistic register, match register to audience, apply locale conventions
  for dates/currency/units/numbers/punctuation/quotation marks.
- *Step 2 — Native rewrite (mandatory, even when Step 1 looks fine).* Treat
  Step 1's output as a draft that is not native enough. Do NOT look back at the
  English source. Work only from the target-language draft. Restructure
  sentences, switch idioms to native equivalents, swap weak verbs for strong
  native ones, drop English-shaped clauses and noun chains, replace nominal
  constructions with verbal ones where the target language prefers verbs, use
  the language's natural rhythm and connectors, vary sentence length the way a
  native journalist would.

**Diacritics (never optional):** never ship unaccented copy. FR:
`é è ê à â ç ù û ü ô î ï ÿ`, capitals keep accents. ES: `á é í ó ú ñ ü`,
opening `¿` and `¡` mandatory. DE: `ä ö ü ß`, use `ß` correctly, never
substitute `ss` to dodge the character. PT: `á à â ã é ê í ó ô õ ú ç`.

**Punctuation per locale:** ZH uses full-width punctuation `。， 、：；！？""''（）`,
no half-width Latin punctuation inside Chinese sentences (numbers and Latin
product names stay half-width). FR uses guillemets `« »` with non-breaking
spaces, and a non-breaking space before `: ; ! ?`. ES needs opening `¿` and
`¡`. DE uses `„…"` quotes where typesetting allows.

**Locale variant defaults:** Chinese → simplified (zh-CN) unless the path
indicates traditional. French → metropolitan. Spanish → neutral peninsular.
German → standard de-DE.

**Brand and product names:** names conventionally kept in English in the target
market stay in their canonical English form. Do not translate them, do not
invent localized versions, do not retitle-case them.

**Single-locale default — no auto-translate.** When the user requests a content
change, edit ONLY the file(s) they referenced. Do not propagate the same change
to other locales until the user explicitly says so (e.g. "translate this",
"do all locales", "propagate"). When editing the English version, end with a
one-line offer to propagate. Shared infrastructure changes (CSS, shared
components, route helpers, layout files, `astro.config.mjs`) are global by
nature and exempt from this.

**Slug localisation (permanent).** Every page slug under a non-English locale
must be in that locale's language. No English slugs under `/fr/`, `/de/`, etc.
Form: lowercase, hyphen-separated, no spaces or underscores. Strip diacritics
for URL safety (`entrée` → `entree`, `réalisations` → `realisations`); the page
CONTENT keeps accents, only the slug strips them. DE: `ä→ae ö→oe ü→ue ß→ss`.
ES: `ñ→n`, accents → unaccented vowel. `localizePath` and any hreflang
`<link rel="alternate">` must map between native slugs, never blindly prefix
`/<locale>/` onto the English path. When editing a non-English page already
shipped with an English slug, do NOT silently rename it: flag the mismatch and
propose a redirect from old slug to new.

---

## 6. SEO infrastructure

### Sitemap with locale-pair rewriting

`@astrojs/sitemap`'s built-in i18n option only handles simple prefix routing.
For native per-locale slugs you need a `serialize` hook that resolves both
halves of each locale pair through your slug maps and emits correct
`xhtml:link` hreflang alternates plus `x-default`. The BBG `astro.config.mjs`
has a working `canonicalize()` / `enToFr()` pair plus a `serialize` hook and a
`build:done` postprocess integration that normalizes trailing slashes on the
root alternate. Reuse the structure, swap the slug logic.

Drop non-indexable routes from the sitemap with `filter`:

```js
sitemap({
  filter: (page) =>
    !page.includes('/thank-you') &&
    !page.includes('/api/'),
  changefreq: 'weekly',
  priority: 0.7,
  serialize: (item) => { /* locale-pair rewrite */ },
})
```

### Trailing slash

```js
trailingSlash: 'never',
```

Makes Vercel strip trailing slashes before applying redirect rules. Without it,
legacy URLs served with a trailing slash miss the path-level 301.

### llms-full.txt generator (`scripts/generate-llms-full.mjs`)

Generates `public/llms-full.txt`: a full-text dump of every published article
for AI crawlers that consume the [llmstxt.org](https://llmstxt.org) format.
Reads a content directory, parses frontmatter, skips drafts, emits a header
plus one entry per article. Wired to `prebuild` so it regenerates every build.
Reusable: change `SOURCE_DIR`, `TARGET`, `SITE`, and the header text.

### IndexNow submission (`scripts/submit-indexnow.mjs`)

Pings IndexNow (Bing, Yandex, Seznam, Naver) after a deploy.

```bash
node scripts/submit-indexnow.mjs                          # all URLs in sitemap
node scripts/submit-indexnow.mjs https://site.com/page    # one URL
node scripts/submit-indexnow.mjs --changed-since=2026-05-15
```

Reusable: generate a fresh key, place it at `public/<key>.txt`, update `HOST`,
`KEY`, `KEY_LOCATION`, `SITEMAP_PATH`.

---

## 7. Redirect / migration pattern

If the new site replaces an existing one, the BBG `redirection-plan.md` +
`astro.config.mjs` `redirects` block is a strong template. Reusable mechanics
(the specific URL tables are project data, not reusable):

- Keep every legacy slug's last path segment where possible so external
  citations still resolve; make the redirect 1:1.
- Build redirect maps programmatically from arrays of `[oldPath, newPath]`
  pairs and `Object.fromEntries`, rather than hand-writing each `301` object.
- Use `status: 301` for permanent moves. Never downgrade to 302 later, and
  never remove a 301 after recrawl: that resets accumulated link equity.
- Where several legacy pages cover the same intent, point them all at one hub
  to consolidate equity.
- Do not chain redirects. Point the original URL directly at the final
  destination.
- Host canonicalisation (apex → www) is configured in Vercel as an alias
  redirect, not in code. Vercel issues a 308 that preserves the path.
- Keep a `docs/redirection-plan.md` mirroring the config, as the list to submit
  to Google Search Console.

**GSC rollout checklist after redirects go live:**

1. Verify both apex and www properties in GSC.
2. Confirm the apex→www host redirect in Vercel.
3. Submit the new sitemap under the www property.
4. Spot-check old URLs via URL Inspection from the apex property.
5. Request re-indexing of the top destination pages on www.
6. Leave the 301s in place permanently.
7. Keep the old server reachable ~30 days post-cutover for DNS caches.

---

## 8. Image pipeline

### Optimizer scripts

- `scripts/optimize-images-batch.mjs` — in-place batch optimizer. Scans a tree
  or a single file, resizes oversized images, recompresses (JPG mozjpeg q82
  progressive, PNG palette + max compression, WebP q78 effort 6), skips files
  under 30 KB, replaces in place at the same path. `npm run img:batch`.
- `scripts/optimize-image.mjs` — older single-file variant that emits a
  JPG + WebP pair. `npm run img <path>`.
- Targets: heroes max 2000px wide / under ~600 KB, inline 1600px / under
  ~250 KB, thumbnails under ~80 KB.

### Git hook auto-optimization

`scripts/pre-commit-optimize-images.mjs` detects staged raster images under
`public/Images/`, optimizes each, and re-stages them. Wired through
`scripts/hooks/pre-commit` (a bash shim).

### Hook installer (`scripts/install-hooks.mjs`)

Copies everything in `scripts/hooks/` into `.git/hooks/`, idempotent, chmods on
non-Windows. Run once per clone:

```bash
npm run hooks:install
```

This is the reusable pattern for any repo-tracked git hook: keep hooks in
`scripts/hooks/`, install with a script. Note BBG keeps hooks in
`scripts/hooks/` rather than Husky; a separate repo in the workspace uses a
`.husky/` directory instead — pick one convention.

---

## 9. API integration recipes

### Resend (transactional email)

`npm install resend`. Pattern:

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
const { data, error } = await resend.emails.send({
  from: 'Your App <onboarding@resend.dev>',  // free tier sender
  to: 'you@yourdomain.com',
  replyTo: userEmail,                         // replies go to the user
  subject: '...',
  html: '...',                                // inline styles only
  text: '...',                                // plain-text fallback
});
```

Notes: free tier is 100 emails/day and forces `onboarding@resend.dev` as
sender; verify a domain to use your own. Always include a `text` fallback. Use
inline styles only in HTML emails. Add a `List-Unsubscribe` header on
transactional mail. Validate input server-side:
`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Full Express and Next.js App Router route
examples plus an error-handling table are in
[integrate-resend-api.md](integrate-resend-api.md).

### WaveSpeed (text-to-image)

No SDK needed, plain `fetch`. Two-step async pattern: POST to submit a task,
get a task ID, then poll `GET .../predictions/{taskId}/result` once per second
until `status` is `completed` or `failed`. Timeout 60s for web, 120s for CLI.
A copy-paste `generateImage()` utility, an Express route, a standalone CLI
script, and an error-handling table are in
[integrate-wavespeed-api.md](integrate-wavespeed-api.md). `scripts/generate-image.mjs`
and `scripts/generate-image-edit.mjs` are the working CLI versions
(`npm run gen`, `npm run gen:edit`).

---

## 10. Playwright screenshot utility (`.shot.mjs`)

Standalone visual-check script. Takes a JSON array of `[url, outPath, selector?]`
and a viewport width, scrolls each page to trigger lazy content, then captures a
full-page or per-selector screenshot at `deviceScaleFactor: 2` with
`reducedMotion: 'reduce'`. Reusable as-is for responsive QA. Needs
`npm install -D playwright` and `npx playwright install chromium`.

---

## 11. HUMANIZER.md — carry this file over

`HUMANIZER.md` (project root) is portable and worth keeping. It is a
self-contained skill that strips AI-writing tells from any text: 29 numbered
patterns (significance inflation, superficial -ing analyses, vague
attributions, rule of three, copula avoidance, em dash overuse, filler,
hedging, and so on) plus a final "what makes this obviously AI generated" audit
pass. It is based on Wikipedia's "Signs of AI writing" guide, MIT licensed,
project-agnostic, and not tied to BBG's brand voice.

It backs the "humanized" Step 1 of the translation rules in section 5. Copy
`HUMANIZER.md` into the new project root so that step means something.

Current version is **2.5.1**, which matches the canonical upstream
([blader/humanizer](https://github.com/blader/humanizer)) as of May 2026, so
the copy in this repo is already up to date. See section 12 for the version
check.

## 12. What was deliberately left out

Excluded because it is style, content, or layout, or project-specific:

- Design tokens, color palette, typography scale, spacing grid, component
  patterns, motion specs, accessibility visual specs (CLAUDE.md §9–14).
- `anti-ai-writing-style.md` and the 9-iteration humanizer *workflow* in
  CLAUDE.md §5 — these encode BBG's specific copy-voice process. `HUMANIZER.md`
  itself is kept (see section 11); the project-specific iteration ritual around
  it is not.
- `docs/imagen-front-end.md` — an image art-direction skill for generating
  design reference comps; purely visual direction.
- The actual redirect URL tables, insight/case slug lists, brand copy, and the
  `src/content/` articles — all project data.
- `migrate-insights-taxonomy.mjs`, `rename-fr-insights.mjs`, `add-pubdates.mjs`,
  `internal-link-insights.mjs`, `add-case-metrics.mjs`,
  `add-insight-author-takeaways.mjs`, `localize-wp-images.mjs` — one-off
  content-migration scripts tied to this site's data shape.
