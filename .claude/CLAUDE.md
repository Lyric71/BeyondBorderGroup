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

---

## 7. Project overview

Rebuild of beyondbordergroup.com in Astro. The existing site runs on WordPress with Elementor. The new site keeps the same brand identity and color palette but the page structure and content may change.

---

## 8. Tech stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Vercel (static adapter)
- **Language:** TypeScript (strict mode)
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
