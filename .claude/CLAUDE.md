# Beyond Border Group — Project Context for Claude Code

Project rules for Claude Code working on BeyondBorderGroup. These rules are permanent and apply to every session.

---

## 1. User role — founder of BeyondBorderGroup

The user is the founder of BeyondBorderGroup (BBG), the parent group/org reflected in the working directory `BeyondBorderGroup`. BBG is a marketing and eCommerce agency in China with offices in Shanghai, Hong Kong, and Paris.

He founded the group itself, so treat him as the top-level decision-maker on brand, product direction, and cross-studio concerns, not just a contributor to one studio. When work touches naming, positioning, or how studios relate to the parent group, defer to his framing.

---

## 2. Copywriting rule (MANDATORY)

Before producing ANY user-facing copy (page content, headings, microcopy, button labels, marketing text, blog drafts, social posts, alt text), you MUST first read `.claude/anti-ai-writing-style.md` and apply its rules. This is non-negotiable. Code comments and internal docs are exempt.

---

## 3. No em dashes

Never use the em dash character `—` (U+2014) in any user-visible content of the BeyondBorderGroup project, in any language (English, French, Chinese, etc.). This applies to: page copy, headings, hero text, descriptions, card content, button labels, marketing material, and any other displayed text.

Replace em dashes with one of:
- a comma, period, or colon (depending on the sentence)
- parentheses
- a simple hyphen `-` only when it's a true hyphenation (not a separator)
- a line break / restructured sentence

This rule does NOT apply to: code, identifiers, URLs, file paths, or technical content where dashes carry meaning (this CLAUDE.md included).

**Why:** User design preference. Em dashes give a generic AI-written feel and the user wants prose to feel hand-written and clean. They have flagged this as a permanent project-wide rule.

**How to apply:** Whenever writing or editing any text content for this project, proactively avoid the `—` character. When reviewing existing files, search for `—` and replace it. Apply across all locale files (en, fr, zh, etc.).

---

## 4. No numbers in cards

NO NUMBER IN CARDS. Never add numeric badges (`01`, `02`, `03`, …), watermark numbers, or numbered prefixes inside cards, pillars, matrix rows, feature blocks, or any card-like UI in this project.

**Why:** The user explicitly made this a permanent rule after seeing 01/02/03/04/05 labels in matrix-grid layer headers and pillar card watermarks on the home page. They find numbered cards visually noisy and "old-fashioned."

**How to apply:** When designing or reviewing any card/grid/pillar/list-item UI, never reach for numbered badges as a visual device. Use icons, color, typography, or order alone. This applies even when prior similar designs use numbers, strip them. Also check existing markup before adding new cards: do not reintroduce numbered badges anywhere on the site.

---

## 5. Humanizer process — 9 iterations for English copy

For every English content drafted (page copy, hero text, card bodies, blog, emails, captions, anything user-visible in English), run the following process before delivering. Tag the work mentally as `@humanizer`.

**The 9 iterations:**

1. **Iteration 1** — Draft in journalist style from a daily US newspaper. American English. Easy to read. Open in artifact (or inline in the file edit).
2. **Iteration 2** — Review the iteration 1 output. Identify 10 specific weaknesses or gaps.
3. **Iteration 3** — Rewrite addressing all 10 weaknesses.
4. **Iteration 4** — Final review: is this production-ready? If not, list what is missing and apply the updates.
5. **Iteration 5** — Pass for AI-detection: rewrite anything that reads machine-generated.
6. **Iteration 6** — Clean all em dashes `—`. Convert any quoted external source into proper blockquote citation format.
7. **Iteration 7** — Deeper humanizing pass. Re-read multiple times. Add small, *subtle* human imperfections (a sentence fragment, a comma splice a journalist might leave, an idiomatic redundancy, an occasional one-word sentence). Imperfections must stay believable for a working professional writer; never break factual accuracy or brand voice.
8. **Iteration 8** — Pause 15 seconds (settle, re-read with fresh eyes), then do another AI-detection scrub.
9. **Iteration 9** — One more pass. Go deeper. Read it three times. Confirm nothing reads as AI.

**Why:** The user is the founder of BeyondBorderGroup. The site copy must sound like a senior operator wrote it, not a model. AI-tells (em dashes, balanced triads everywhere, "It's not X, it's Y" patterns, abstract nouns, hedging, listicle rhythm) erode the brand's editorial voice and make the work look templated.

**How to apply:**
- Trigger: any English content I write or rewrite for the user, no matter how small. Card body, headline, paragraph, alt text, meta description.
- Skip the artifact step for tiny edits (one phrase, a single word swap), but still mentally run iterations 5–9 (AI-detection + human polish + em-dash + citation check).
- Always combine with existing rules: no em dashes, no 01/02/03 numeric badges.
- Never tell the user the iteration steps in the response. Show only the final, polished output. The process is internal.
- Acceptable subtle "errors": occasional sentence fragment, a comma where a writer might have used a period, mild redundancy, a colloquial contraction, slight tonal unevenness between paragraphs. Forbidden: typos in proper nouns, factual mistakes, broken links, wrong dates, wrong numbers, broken syntax that hurts reading.

---

## 6. Translation rule (MANDATORY, full detail)

This is the single source of truth for any non-English work on the site. Apply every part of it. Output must read like a native journalist in the target language wrote it originally, not like an English page that got translated. Never expose any of the steps below to the user. Ship only the final native-quality output.

### 6.0 TOP PRIORITY: use the `deep-translate` skill first

For ANY translation, localization, or non-English rewrite task, the `deep-translate` skill (`.claude/skills/deep-translate/`) is the primary, top-priority tool. Invoke it via `/deep-translate` (or the Skill tool) BEFORE doing translation work by hand. This is a blocking requirement: when a task matches the trigger in 6.1, run the skill first, then let the rest of section 6 govern the details. The skill drives the three-pass native rewrite and honors all house rules below (no em dashes, no numeric card badges, native slugs, single-locale default). Only fall back to manual translation if the skill is unavailable.

### 6.1 When this rule fires

Trigger: any time I edit, draft, translate, or fix content in
- `src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`
- any non-English string in `src/i18n/` (including `ui.ts` and any locale JSON)
- any non-English alt text, meta description, OpenGraph copy, slug label, button label, form label, error message, microcopy, blog post, email, caption

It does NOT fire for: code, identifiers, file paths, console logs, code comments, commit messages, PR descriptions, internal docs.

### 6.2 Core principles (read every time)

**1. Native translation, not literal translation**
- Write as a native speaker would naturally express the idea in the target language.
- Adapt idioms, expressions, and cultural references to feel local.
- Prioritize natural flow, tone, and readability over word-for-word fidelity to the source.
- Match the register (formal, casual, professional) appropriate to the target audience.
- Use locale-specific conventions (date formats, currency, units, punctuation, quotation marks, number formatting, address forms).

**2. Improve the existing language page, do NOT retranslate from English**
- Always start from the current version of the target-language page, not from the English source.
- Treat the existing translation as the baseline. Preserve what already works.
- Only modify sections that are awkward, outdated, inaccurate, or missing.
- Do NOT regenerate the full page from English. That destroys prior editorial work (humanizer + native-rewrite passes already applied) and reintroduces translated-sounding copy.
- If the English source has new content that is missing in the target page, add ONLY the missing parts and translate them natively, keeping the rest of the page untouched.
- The existing locale page is editorial state, not draft state.

**3. Native journalistic register per language**

Step 1 below targets the journalistic register of a serious daily/business paper. Step 2 polishes it further.

- FR: Le Monde / Les Echos register, not literal Anglo-French.
- ES: El País register.
- ZH: 财经 / 36氪 register, not English-syntax 中式中文.
- DE: FAZ / Handelsblatt register.

### 6.3 Workflow per edit (mandatory order)

1. Open the existing target-language page first. Read it in full before doing anything else.
2. Compare against the English source ONLY to identify gaps or outdated sections.
3. For each section:
   - If it reads naturally and is accurate → leave it as is.
   - If it reads awkwardly or like a machine translation → rewrite it in native style (apply the two-step process in 6.4 to that section only).
   - If it is missing → translate the corresponding English section natively (apply the two-step process in 6.4).
4. Preserve existing terminology choices unless they are clearly wrong. Consistency matters more than personal preference.
5. Keep page structure (headings, anchors, IDs, frontmatter, metadata, slugs, ARIA labels, schema.org markup) intact unless explicitly asked to change it.
6. Do not change SEO-sensitive elements (title, meta description, H1, slugs) without flagging it first.

### 6.4 Two-step rewrite (for any new or rewritten section)

When porting a new English section, or when an existing section needs a rewrite, apply BOTH steps in order. Step 2 is non-optional and applies even when Step 1 looks fine.

**Step 1 — Humanized translation**

- Translate from the English source using the 9-iteration humanizer process from section 5.
- Hit the native journalistic register listed in 6.2.3.
- Match register (formal / casual / professional) to the audience.
- Use locale-specific conventions for dates, currency, units, numbers, punctuation, quotation marks.

**Step 2 — Native rewrite (mandatory)**

- Treat Step 1's output as a draft that is *not native enough* and *too familiar / too low level*. This step is non-optional and applies even when Step 1 looks fine.
- Do NOT look back at the English source while doing this. Work only from the target-language draft and improve it in-language.
- Goal is a full rewrite, not a correction. Specifically:
  - Restructure sentences (break long ones, merge choppy ones).
  - Switch idioms to native equivalents.
  - Swap weak verbs for strong native ones.
  - Drop English-shaped clauses, relative pronouns, possessives, and noun chains that betray translation.
  - Replace nominal constructions with verbal ones where the target language prefers verbs (esp. FR / ES).
  - Use the target language's natural rhythm and connectors.
  - Vary sentence length the way a native journalist would in that register.

### 6.5 Diacritics (mandatory, never optional)

Never ship unaccented copy. Accents and diacritics are mandatory wherever the language requires them.

- FR: `é è ê à â ç ù û ü ô î ï ÿ`. Capital letters keep their accents (`À`, `É`, `Ç`, `Ê`, `Î`).
- ES: `á é í ó ú ñ ü`. Opening punctuation `¿` and `¡` are mandatory.
- DE: `ä ö ü ß`. Use `ß` and `ss` correctly per current orthography; never substitute `ss` to avoid the character.
- PT (if added later): `á à â ã é ê í ó ô õ ú ç`.

### 6.6 Punctuation conventions per locale

- ZH: full-width punctuation `。 ， 、 ： ； ！ ？ " " ' ' （ ）` and full-width brackets where appropriate. No half-width Latin punctuation inside Chinese sentences. Numbers and Latin product names stay half-width.
- FR: guillemets `« »` with non-breaking spaces inside for quotation marks where natural; non-breaking space before `: ; ! ?` per French typography. Use insécable spaces conventions where typesetting allows.
- ES: opening `¿` and `¡` are mandatory at the start of questions and exclamations.
- DE: standard double quotes `„…"` (low-9 + high-99) where typesetting allows; otherwise straight quotes are acceptable. Use the correct dash conventions and no Oxford-comma style enumerations.

### 6.7 Locale variant

- Chinese: prefer simplified Chinese (zh-CN) unless the file path, frontmatter, or directory indicates traditional (zh-TW / zh-HK).
- French: metropolitan French unless otherwise specified.
- Spanish: neutral peninsular Spanish unless otherwise specified.
- German: standard German (de-DE) unless otherwise specified.

### 6.8 Brand and product names

Brand names, product names, and technical terms that are conventionally kept in English in the target market stay in their canonical English form. Do NOT translate them. Do NOT invent localized versions. Do NOT change capitalization to match the target language's title-case rules.

### 6.9 Single-locale default — no auto-translate

When the user requests a content or copy change, default to editing **only the file(s) they referenced or are looking at**. Do not propagate the same change to the other locale variants (`src/pages/de/`, `src/pages/es/`, `src/pages/fr/`, `src/pages/zh/`, or non-English strings in `src/i18n/`) until the user explicitly tells me to.

- Default scope = single locale, usually English (`src/pages/*.astro` without a locale prefix), even when the same section exists in `de/`, `es/`, `fr/`, `zh/`.
- This overrides any previous default of "if a section exists in 5 locales, edit all 5". The new default is one locale at a time.
- Only propagate to other locales when the user says so explicitly, e.g.: "now apply to all locales", "translate this", "do all 5 versions", "propagate", "update all languages", "translate to FR/DE/ES/ZH".
- When editing the English version, end with a one-line offer: "Want me to propagate this to FR/DE/ES/ZH?". Never propagate without the user accepting.
- Once the user authorizes translation, still apply the full two-step humanize + native-rewrite process from 6.4 for each locale; never copy English structure into the translation.
- For each locale the user authorizes, apply the workflow in 6.3: open the existing locale page first, port only the diff, then run the two-step process on the new section.
- Applies to: copy changes, hero rewrites, section reworks, button labels, taglines, alt text, meta descriptions, error messages, and any user-visible text.
- Does NOT apply to shared infrastructure changes (CSS in `global.css`, shared Astro components, route helpers, layout files, `astro.config.mjs`); those changes are technically global by nature.

### 6.10 What to avoid

- Full retranslation of an existing locale page from English.
- "Improving" sections that are already fine just to show changes.
- Em dashes in any language (see section 3).
- Numeric card badges in any language (see section 4).
- Translating brand or product names.
- Anglicized syntax: literal "of the", overuse of "which", noun chains, gerund-heavy sentences, possessive `'s` ported into FR/ES/DE/ZH.
- Mixed register inside one page.
- Unaccented diacritics, missing `¿ ¡`, missing `ß`, half-width punctuation inside Chinese sentences.
- Changing SEO-sensitive elements (title, meta description, H1, slugs) without flagging.
- Exposing the two-step process or iteration steps to the user. Ship only the final native-quality output.
- Copying English clause structure ("not X, but Y", balanced triads, "the way we…").
- Typos in proper nouns, factual mistakes, broken links, wrong dates or numbers.

**Why:** The user is the founder of BeyondBorderGroup. The site bridges China and the West. Translated-sounding copy in any language signals an outsider and undermines the brand premise. Past locale copy has read as English with the words swapped, which is the exact failure mode this rule blocks. Regenerating a locale page from English destroys prior editorial work (humanizer + native-rewrite passes), reintroduces the failure mode, wastes the translation budget, and forces the user to babysit changes in languages they were not yet ready to touch.

### 6.11 Slug localisation (MANDATORY, permanent)

Every page slug must be written in the target language of the locale it lives under. No English slugs under non-English locales. This rule is permanent and applies to every new page from now on.

**Scope**

- Every file and directory name under `src/pages/<locale>/` (e.g. `fr/`, `de/`, `es/`, `zh/`) uses words in that locale's language, not English.
- Applies to landing pages, sub-pages, section indexes, dynamic-route folder names, and any URL-visible path segment.
- The English site keeps English slugs at the root (`src/pages/<page>.astro`); this rule fires only for non-English locales.

**Examples (illustrative, French)**

- `src/pages/fr/nous-contacter.astro` instead of `src/pages/fr/contact.astro`
- `src/pages/fr/qui-nous-sommes.astro` instead of `src/pages/fr/about.astro`
- `src/pages/fr/entrer-en-chine/conseil-en-entree-de-marche.astro` instead of `src/pages/fr/enter-china/market-entry-consulting.astro`
- `src/pages/fr/nos-realisations/` instead of `src/pages/fr/work/`
- `src/pages/fr/decryptages/` instead of `src/pages/fr/insights/`

**Form**

- Lowercase, hyphen-separated. No spaces, no underscores, no trailing slashes in the filename.
- Strip diacritics for URL safety: `entrée` becomes `entree`, `réalisations` becomes `realisations`, `développement` becomes `developpement`. The page CONTENT keeps the accents; only the slug strips them.
- Use the word a native marketer or journalist would expect in the URL bar of a serious news / business site in that market.
- Brand and product names stay in their canonical form (see 6.8). `tmall-global`, `wechat`, `beyondcompass` are fine inside any locale slug.

**Locale defaults**

- FR: native French nouns / verbs. `nous-contacter`, `qui-nous-sommes`, `realisations`, `decryptages`.
- DE: native German. Compound nouns are normal; do not force English-style word breaks. `ueber-uns`, `kontakt`, `referenzen`. Replace umlauts: `ä→ae`, `ö→oe`, `ü→ue`, `ß→ss`.
- ES: native Spanish. `contacto`, `quienes-somos`, `proyectos`. Replace `ñ→n` and accents with the unaccented vowel.
- IT (if added later): same principle, `contatti`, `chi-siamo`.
- PT (if added later): same principle, `contato`, `quem-somos`.

**Routing / helpers**

- `localizePath` and any other locale-link helper must map between locale slugs (per-locale slug table), not blindly prefix `/<locale>/` onto the English path.
- Hreflang `<link rel="alternate">` tags must point to the native-language URL for each locale, not to the English-slug URL with a locale prefix.
- Internal `<a>`, `<Link>`, and CTA references in any locale page must use that locale's slug.

**Workflow when creating a new non-English locale page**

1. Open the English source page to confirm scope.
2. Draft the slug in the target language using a native journalist's framing. Apply the two-step humanize + native-rewrite pass from 6.4 to the slug itself, the same way you would for body copy.
3. Strip diacritics and lowercase, hyphenate.
4. Update the per-locale slug table / `localizePath` map so internal links resolve correctly.
5. Run a build to confirm no broken links.

**Workflow when EDITING a non-English locale page that is already shipped with an English slug**

- Do NOT silently rename the file. URL changes break links, search ranking, and any external references.
- Flag the mismatch to the user. Propose a renaming plan that includes a redirect from the old slug to the new one.
- Let the user authorise before renaming. Default scope is single-locale (see 6.9); slug renames in one locale do not propagate to others without explicit instruction.

**Why:** Native-language slugs match how users search in that market, build the credibility of the localized site, and signal to search engines that the page targets that audience. An English slug under `/fr/` undercuts both the editorial premise of the translation and the search ranking the page can achieve. The user has flagged this as a permanent project-wide rule.

**How to apply:** Whenever creating a new locale page, draft the slug in the target language BEFORE creating the file. When auditing existing locale pages, scan for English slugs under non-English locales and flag them as renames that need user sign-off plus a redirect plan. This rule overrides the default in 6.3 step 5 ("keep page structure intact") for NEW pages, but the "do not change without flagging" guidance in 6.10 still applies to renaming SHIPPED slugs.

---

## 7. Project overview

Rebuild of beyondbordergroup.com in Astro. The existing site runs on WordPress with Elementor. The new site keeps the same brand identity and color palette but the page structure and content may change.

---

## 8. Tech stack

- **Runtime:** Node.js >= 22.12
- **Framework:** Astro 7.x (static site generation)
- **Styling:** Tailwind CSS 4.x (via `@tailwindcss/vite`)
- **Deployment:** Vercel (`@astrojs/vercel` 11.x adapter)
- **Language:** TypeScript (strict mode); type checking via `@astrojs/check` + `astro check`
- **Sitemap:** `@astrojs/sitemap` 3.x
- **Email:** Resend 6.x (contact form delivery)
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **Formatting:** Prettier 3.x with `prettier-plugin-astro`
- **Fonts:** System UI stack (no Google Fonts, no external CDNs)

---

## 9. Key design tokens

- Brand Blue: `#269ADA` (primary, links, buttons, eyebrows, accents)
- Brand Blue Dark: `#1E7DB0` (hover, active states)
- Brand Blue Light: `#E8F4FC` (soft tints, hover backgrounds)
- Ink: `#1A1A1A` (headings)
- Body Text: `#333333` (paragraphs)
- Text Muted: `#6B6B6B` (captions, metadata)
- Border: `#E5E5E5` (card borders, dividers)
- Surface: `#F7F9FB` (alternating section backgrounds)
- Black: `#000000` (footer background)
- White: `#FFFFFF` (base background)

IMPORTANT: Body copy never uses brand blue. `#269ADA` on white fails WCAG AA for small text. Blue is reserved for links, buttons, eyebrows, icons, and large accents. Body stays on `#1A1A1A` / `#333`.

---

## 10. Typography

- Single font stack, system UI. No Google Fonts, no webfont downloads.
- Stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif`
- PingFang SC and Microsoft YaHei ensure clean rendering for Chinese characters (platform names, team names, nav labels).
- CRITICAL: Never link to `fonts.googleapis.com` or any external font CDN. The Great Firewall blocks Google services and will break the site for Chinese visitors.
- If a display font is added later, self-host as woff2 in `/public/fonts`.

### Type scale (desktop)

- H1 Hero: 56px / 700 / line-height 1.1 / tracking -0.02em
- H2 Section: 40px / 700 / 1.15 / -0.01em
- H3 Card: 24px / 600 / 1.25
- H4 Sub: 20px / 600 / 1.3
- Lead: 20px / 400 / 1.5
- Body: 17px / 400 / 1.65
- Small: 14px / 500 / 1.5
- Eyebrow label: 13px / 600 / 1.3 / tracking 0.08em / UPPERCASE / blue

Use `clamp()` for fluid scaling. Mobile: H1 drops to 38px, H2 to 30px.

---

## 11. Spacing

8px base grid. Section padding defaults to 120px top/bottom on desktop, 64px on mobile. Container max-width 1200px with 24px side padding.

---

## 12. Component patterns

- Use Astro components (`.astro`) for everything static.
- Use `class:list` for conditional Tailwind classes.
- Button variants: `"primary" | "secondary" | "ghost"`
  - primary: solid `#269ADA`, white text, hover `#1E7DB0`
  - secondary: white bg, 2px blue border, blue text, hover flips to filled
  - ghost: text-only blue with `→` that translates 4px on hover
- Card pattern: white bg, 1px `#E5E5E5` border, 8px radius, 24px padding. Hover: lifts 4px, border shifts to `#269ADA`, soft shadow.
- Eyebrow: small uppercase blue label that sits above every section heading.
- Container: `max-w-[1200px]` with responsive horizontal padding.

---

## 13. Motion

Keep subtle. 200ms ease for hover states. Section entrance: fade + 12px rise, 400ms, IntersectionObserver-triggered once. No parallax. No auto-carousels. Respect `prefers-reduced-motion`.

---

## 14. Accessibility

- Focus rings: 3px outline `#269ADA` with 2px offset.
- All interactive elements reachable by keyboard.
- Body contrast minimum 4.5:1.

---

## 15. Performance constraints

- Self-host everything. No external CDN dependencies.
- No Google services (Analytics, Fonts, reCAPTCHA, Maps, Tag Manager).
- For analytics use Vercel Analytics or a privacy-friendly self-hosted option.
- Site must load cleanly from inside China (no blocked assets).

---

## 16. Testing

- Run `npm run build` before committing to catch build errors.
- Run `npx astro check` for TypeScript validation.
- Verify responsive at 375px, 768px, 1280px.
- Test with Chinese characters to confirm the system font stack falls through to PingFang SC / Microsoft YaHei.

---

## 17. Git conventions

- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`).
- Branch naming: `feature/description`, `fix/description`.
- Always run build before pushing.

---

## 18. Image optimization (MANDATORY for every image added)

Every raster image (`.jpg`, `.jpeg`, `.png`, `.webp`) added under `public/Images/` must be optimized before it ships. SVG and AVIF are exempt (already vector / already modern).

**Targets**

- Max width 2000px (heroes), 1600px or less for inline. Anything larger gets resized down on optimize.
- JPG: mozjpeg, quality 82, progressive.
- PNG: palette + max compression. PNGs without meaningful alpha are flattened on white.
- WebP: quality 78, effort 6.
- Files under 30 KB are left alone (no meaningful gain).
- After optimize, file is replaced in place at the same path with the same extension. No `<picture>` retrofit, no link breakage.

**How it runs**

- Manual: `npm run img:batch` to scan the whole tree, or `node scripts/optimize-images-batch.mjs <path>` for a folder or a single file. Add `--dry` to preview, `--max-width=1600` to override.
- Automatic: a `pre-commit` git hook (`scripts/hooks/pre-commit` -> `scripts/pre-commit-optimize-images.mjs`) detects staged images under `public/Images/`, runs the optimizer on each, and re-stages them. Install once per clone with `npm run hooks:install`.
- The single-file `npm run img <path>` script (`scripts/optimize-image.mjs`) is the older variant that emits a JPG + WebP pair into `public/`. Prefer `img:batch` for in-place work; reserve the old script for ad-hoc dual-format exports.

**How to apply when adding images**

1. Drop the source file into the right `public/Images/<topic>/` folder using a kebab-case slug.
2. Run `npm run img:batch public/Images/<topic>/` (or rely on the pre-commit hook to do it on stage).
3. Verify the new file size is reasonable: heroes under ~600 KB, inline under ~250 KB, thumbnails under ~80 KB.
4. Reference the same path in markup, `/Images/<topic>/<file>.<ext>`. The extension does not change.
5. Always pair with descriptive `alt` text per the copy rules.

**Why:** Half the site weight was photos. From inside China the difference between a 9 MB PNG and a 400 KB PNG is the difference between a page that loads and a page that doesn't. The optimizer keeps quality high enough that the saving is invisible to the eye but cuts payload by 60-90% on most files. Enforcing it via a git hook means we cannot accidentally ship an unoptimized asset.

**How to apply (for future Claude work):** Whenever the user asks for new imagery, generated images, or imports a screenshot/photo, run the batch optimizer on the file before reporting the task as done. Treat unoptimized images the same way you treat em dashes: never ship them.
