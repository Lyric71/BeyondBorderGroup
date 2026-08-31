# WO-0.1 Recon: all four repos

Answers to the ten Phase 0 questions, per repo. No guesses. Where the spec assumed something
that is not in the repo, the conflict is recorded under "Conflicts with the spec" at the bottom.

Local checkouts used:

| Spec name | Local path |
|---|---|
| `thechinapath` | `C:\Users\cyril\Project\TheChinaPath` |
| `compass` | `C:\Users\cyril\Project\BearingBridgeCompass` |
| `chinawebfoundry` | `C:\Users\cyril\Project\Chinawebfoundry` |
| `theredscroll` | `C:\Users\cyril\Project\TheRedScroll` |

---

## 1. thechinapath

**1. Framework, router, rendering.** Astro 7.0.6 (`package.json`). File-based router. Static by
default with per-route opt-out: the API routes set `export const prerender = false`
(`src/pages/api/contact.ts:5`). Adapter is `@astrojs/vercel` 11 (`astro.config.mjs`).

**2. Where routes are declared, how to add a page.** `src/pages/**`. One `.astro` file per route,
no route manifest. English lives at the root (`src/pages/about.astro` -> `/about`), locales under
`src/pages/<locale>/` with native slugs (`src/pages/fr/qui-nous-sommes.astro`). Adding a page
means: create the file, add the English path to the slug table in `src/i18n/utils.ts`, then add
the locale file.

**3. i18n mechanism. This decides WO-2.3.** Locales are a **global constant**, declared twice and
both declarations must agree:

- `src/i18n/ui.ts:15` - `export const locales = ['en', 'fr', 'de', 'es'] as const`
- `astro.config.mjs` - `i18n.locales: ['en', 'fr', 'de', 'es']`, `prefixDefaultLocale: false`

Three consumers read the global array, and each would emit a ZH artefact the moment `zh` joined it:

- `src/components/Header.astro:172` - the switcher maps over `locales.filter(l => l !== locale)`.
- `src/layouts/Layout.astro:89-101` - the hreflang cluster loops `for (const l of locales)`.
- `astro.config.mjs` sitemap `serialize` hook - builds the `links[]` alternates per locale.

Path translation is a per-locale slug table plus a prefix table in `src/i18n/utils.ts:47`
(`slugMap`) and `:141` (`prefixMap`), reversed at module load and exposed as
`localizePath(path, locale)`. Insight article slugs resolve separately through
`src/i18n/insight-slugs.mjs`.

**Consequence for WO-2.3:** the first branch of that work order applies. The switcher, the
hreflang builder and the sitemap serializer all need a per-route locale list before `/zh/` can
exist. `zh` must not go into `ui.ts` or `astro.config.mjs`.

**4. Where copy lives.** Inline in the `.astro` page files. Shared chrome only (header, footer,
layout defaults) is keyed in `src/i18n/ui.ts`: 286 keys across 4 locales. Long-form content is a
content collection: `src/content/insights`, `insights-fr`, `insights-de`, `insights-es`, and
`cases`, `cases-fr`, `cases-de`, `cases-es`. No CMS.

**5. Nav data structure.** `src/components/Header.astro:31-158`. Plain module-scope arrays
(`enterChina`, `growChina`, `learnChina`), each entry `{label, desc, href, svg}`, assembled into
`sections[]` at `:137`. Three feature tiles sit outside those arrays: `enterChinaFeature` (`:59`,
pointing at `https://compass.bearingbridge.com/en`), `growChinaFeature` (`:98`,
chinawebfoundry.com), `growChinaFeatureHub` (`:104`, hubstudio.ai). The footer keeps its own
parallel arrays at `src/components/Footer.astro:8-33`, plus the seven-logo `network` strip at `:37`.

**6. Redirects, and which layer serves them.** The `redirects:` map in `astro.config.mjs`,
expanded from generated tables (insight articles, case studies, EN and FR service pages, FR slug
renames). The Vercel adapter compiles these into Vercel platform routes, so they are
**server-side 301** and satisfy the spec's rule 7. `vercel.json` `redirects[]` holds only the two
host-level beyondbordergroup.com rules, plus every security and cache header. Note the CSP in
`vercel.json`: `form-action 'self'` and `connect-src 'self'`.

**7. Styling and reusable components.** Tailwind 4 through `@tailwindcss/vite`, plus a large
hand-written layer in `src/styles/global.css` and per-page `<style>` blocks. There is **no shared
component library** for hero, stat row, comparison table, card grid, testimonial or CTA. The only
components are `Header.astro`, `Footer.astro`, `SchemaGraph.astro` and `home/HomeAssets.astro`.
Every section pattern is written inline per page with local BEM-ish classes (`.dis-hero__`,
`.bc-cta__`, `.creds__`).

**Consequence:** the spec's "reuse these, do not build new ones" cannot be met by importing
shared components, because none exist. The nearest equivalent is copying markup and class
conventions from the closest existing page. Named references for the new pages: the comparison
table and Compass block in `src/pages/enter-china/distribution.astro` (`.dis-compass__`,
`.dis-hero__meta`), the stat row at `src/pages/about.astro:529`, the homepage Compass card at
`src/pages/index.astro:732-860`.

**8. Form handling.** `POST /api/contact` (`src/pages/api/contact.ts`), `prerender = false`, JSON
body, an arithmetic captcha checked server-side, delivery through Resend (`src/lib/resend.ts`).
Recipient is the `CONTACT_TO_EMAIL` env var. Sender is currently the Resend sandbox address
`onboarding@resend.dev` (`src/lib/resend.ts:14`). A second endpoint, `/api/calculator-lead`,
serves the Budget Calculator. The confirmation pattern is a redirect to `/thank-you` (localised
`/fr/merci`, `/de/danke`, `/es/gracias`), rendered `noindex` through the `Layout` prop.

**9. Hosting.** Vercel, `@astrojs/vercel` 11. Production host `https://www.thechinapath.com`
(`src/lib/seo.ts` `SITE_URL`, referenced throughout `astro.config.mjs`).

**10.** Not applicable, compass-only question.

---

## 2. compass (BearingBridgeCompass)

**1. Framework.** Next.js 16.2.4, App Router, React 19. Mixed static and dynamic: the marketing
group is server-rendered and reads the database for one figure, the `(app)` group is fully dynamic
and authenticated. Prisma 7 on Postgres (Neon, Singapore region, per the comment at
`src/auth.ts:57`).

**2. Routes.** `src/app/[locale]/`, split into three route groups:

- `(marketing)`: `page.tsx`, `why-this-database`, `what-you-can-find`, `how-we-use-it`, `contact`,
  `become-partner`
- `(partner)`: `partner/page.tsx`
- `(app)`: the authenticated database, with `login/` and `forgot-password/` at the locale root

**3. i18n.** `next-intl` 4.11 through `createNextIntlPlugin('./src/i18n/request.ts')`
(`next.config.ts`). Locales are already **per-purpose lists** in `src/lib/site.ts`:
`SUPPORTED_LOCALES = ['en','zh','fr','de','es']` (`:41`), `PARTNER_LOCALES = ['en','zh']` (`:53`)
with an `isPartnerLocale()` predicate at `:55`. Messages live in `messages/{en,zh,fr,de,es}.json`.

**This is the pattern WO-2.3 should port to TheChinaPath.** Compass already solved the same
problem: the partner form ships in EN and ZH only while the marketing pages ship in five locales,
and the gate is one exported constant plus a predicate.

**4. Copy.** Marketing copy is typed TSX modules, one per locale:
`src/content/marketing/{en,de,es,fr,zh}.tsx`, shaped by `types.ts` and dispatched by `index.ts`.
App and form strings live in `messages/*.json`. No CMS.

**5. Nav.** `src/components/marketing/marketing-header.tsx` and `marketing-footer.tsx`. Out of
scope for this project beyond WO-2.5.

**6. Redirects.** `next.config.ts` `async redirects()`. Three rules today: the legacy host
`beyondcompass.beyondbordergroup.com` 301s to `compass.bearingbridge.com` (host-matched,
permanent), and two `/who-we-are` rules point at the parent site. Next serves them at the edge on
Vercel. `async headers()` applies security headers site-wide and
`X-Robots-Tag: noindex, nofollow` to `/:locale/app/*`, `/:locale/login` and `/login`.

**7. Styling.** Tailwind 4 with shadcn (`components.json`), Base UI, `lucide-react`,
`class-variance-authority`. A real marketing component set exists under
`src/components/marketing/`: `stat-tile`, `content-card`, `numbered-steps`, `section-shell`,
`eyebrow`, `blockquote`, `cta-button`, `cta-cluster`, `reveal`, `tilt-card`, `marquee`. None of it
is portable to Astro, so WO-2.1's "use TheChinaPath's own components" means rebuilding the
layout, not copying files.

**8. Forms.** Next server actions, not API routes: `(marketing)/contact/actions.ts`,
`(marketing)/become-partner/actions.ts`, `(partner)/partner/actions.ts`. Validation with zod, rate
limiting with `@upstash/ratelimit`, delivery with Resend through `src/lib/email.ts`.

**9. Hosting.** Vercel. `SITE_BASE_URL` reads `process.env.NEXT_PUBLIC_SITE_URL` with a hardcoded
fallback of `https://compass.bearingbridge.com` (`src/lib/site.ts:5-9`).

**10. Compass-specific.**

- **`basePath`: not present.** `next.config.ts` sets no `basePath`. This confirms the spec's
  reasoning for WO-2.4: a subdomain move needs no path rewriting at all.
- **Auth cookies: no explicit domain is configured.** `src/auth.ts` sets `trustHost: true`,
  `session: {strategy:'jwt'}` and `pages: {signIn:'/login'}`, and defines no `cookies` block, so
  NextAuth v5 defaults apply: host-only cookies, `SameSite=Lax`, a `__Secure-` prefix and `Secure`
  over HTTPS. **WO-2.4 step 2 is therefore a verification step, not a code change.** There is no
  cookie domain to widen or narrow. Steps 2 and 3 collapse into one: confirm on the new host that
  the cookie is issued host-only and still `Secure` and `Lax`.
- **Asset URLs.** Relative. Every absolute URL derives from `SITE_BASE_URL` (`sitemap.ts`,
  `robots.ts`, `[locale]/layout.tsx` `metadataBase`, `breadcrumb-json-ld.tsx`, `json-ld.tsx`,
  `llms.txt/route.ts`). Setting `NEXT_PUBLIC_SITE_URL` moves all of them at once.
- **Hardcoded `bearingbridge.com` strings for WO-2.4 step 5**, full verified list:
  `src/lib/site.ts:8` (fallback origin) and `:13` (`PARENT_ORG_URL`);
  `next.config.ts:16` (`PARENT_TEAM_URL`) and `:21` (`CANONICAL_ORIGIN`);
  `src/app/[locale]/opengraph-image.tsx:108`, where the domain is **drawn into the OG image**;
  `src/components/marketing/marketing-footer.tsx:30,37,45,67`;
  `src/content/marketing/{de,es,fr}.tsx:117` and `zh.tsx:119`;
  `src/app/llms.txt/route.ts:40`;
  `messages/{de,en,es,fr,zh}.json`, keys `emailValue` (`hello@bearingbridge.com`), `parentSite`,
  and the `external` aria string.

---

## 3. chinawebfoundry

**1-2.** Astro 6.1.2, `@astrojs/vercel` 10, static. Routes at `src/pages/**`.

**3.** i18n through `astro.config.mjs` `i18n.locales: ['en','fr','es','de']`, plus a routes table
in `src/i18n/routes.ts` and helpers in `src/i18n/utils.ts`. Same shape as TheChinaPath.

**4.** Copy inline in `.astro` pages, with shared data modules under `src/data/`, for example
`src/data/problems.ts`.

**5.** `src/i18n/navigation.ts`. The footer ecosystem strip at
`src/components/global/Footer.astro:39` already lists TheChinaPath.

**6.** `vercel.json` holds **247** redirects plus rewrites and headers. Server-side.

**7.** Tailwind 4 with custom CSS variables (`--color-brand-orange`, `--color-text-dark`), a
`src/components/ui/` set, and per-locale home component folders (`home`, `home-fr`, `home-de`,
`home-es`).

**8.** `src/pages/api/contact.ts`, a captcha pair (`captcha.ts`, `verify-captcha.ts`), and the
scanner endpoints (`scan.ts`, `scanner-access.ts`). Resend.

**9.** Vercel.

---

## 4. theredscroll

**1-2.** Astro 7.0.7, `@astrojs/vercel` 11, static. Routes at `src/pages/**`.

**3.** **No i18n block in `astro.config.mjs`. The site is English only.** This matters for WO-3.5:
the reciprocal links and the market-entry rewrite are single-locale work.

**4.** Copy inline in `.astro` pages. Insights are a content collection
(`src/pages/insights/[...slug].astro`).

**5.** `src/components/global/`. The footer ecosystem strip at
`src/components/global/Footer.astro:59` already lists TheChinaPath.

**6.** `vercel.json` with 5 redirects, plus `cleanUrls` and `trailingSlash`. Server-side.

**7.** Tailwind 4 with its own token set (`--color-stone` and friends), and shared components such
as `SectionHeading`.

**8.** Resend 6.17.

**9.** Vercel.

The page WO-3.5.2 targets is `src/pages/services/market-entry.astro`, one of eight service pages
(`advertising`, `content-production`, `crm-private-domain`, `influencer-marketing`,
`market-entry`, `strategy-campaigns`, `training-consulting`).

---

## Conflicts with the spec

Reported under the "if a step conflicts with the repo, the repo wins" rule.

1. **WO-3.4 has no target.** The spec says to cut the About page ecosystem list "from seven
   companies to three". `src/pages/about.astro` contains **no ecosystem or sister-company section
   at all**: no occurrence of BeyondBridge, Nuvora, BearingBridge or hubStudio anywhere in the
   file. The seven-logo strip lives only in `src/components/Footer.astro:37`, which WO-3.4
   explicitly says to leave alone. WO-3.4 therefore becomes: **add** a three-company section to
   the About page rather than trim an existing one, then add the closing group line. Compass still
   stays out of it.

2. **WO-0.1 question 7, and WO-2.1's "use TheChinaPath's own components".** There is no shared
   component layer to reuse. See section 1.7 above for the substitute instruction.

3. **The Compass partner count is database-backed.** `getVettedPartnersCount()`
   (`src/lib/settings.ts:34`) reads a `SiteSetting` row and falls back to a hardcoded `529`
   (`:14`). TheChinaPath is a static Astro build with no database access, so WO-1.4 and WO-2.1
   cannot render a live count. The figure has to be frozen as a constant at port time, with the
   source of truth recorded so it can be refreshed by hand. Do not copy `529` as though it were
   verified: it is the fallback, not the current value. Read the live value out of the Compass
   `SiteSetting` table before porting.

4. **Pricing already exists on a page in scope.**
   `src/pages/enter-china/distribution.astro:296` carries "typically EUR 40k to 90k" and
   "RMB 40k to 150k" inside a FAQ answer. WO-2.1 rewires that page's Compass links. The spec's
   rule 2 bans pricing in new copy and says nothing about removing existing copy, so this is
   flagged, not changed. Needs a decision before WO-2.1.

5. **CSP note for WO-2.3.** `vercel.json` sets `img-src 'self' data: https:`, so a WeChat QR code
   shipped as a local asset under `/Images/` is fine. `form-action 'self'` means the partner form
   must post to the site's own endpoint, which is the plan anyway.

6. **Compass sends transactional mail from a configured Resend identity. TheChinaPath does not.**
   `src/lib/resend.ts:14` still uses `onboarding@resend.dev` as the From address. WO-2.6 requires
   no bearingbridge.com address in the reply path, and this sandbox sender is a separate
   pre-existing problem. It should be fixed before the Compass shortlist form goes live, or every
   Compass enquiry confirmation will arrive from a resend.dev address.

---

## Decisions taken (2026-08-31)

1. **Pricing on `/enter-china/distribution`: strip.** The FAQ answer at `:296` loses "EUR 40k to
   90k" and "RMB 40k to 150k" and is rewritten to "quoted in the first call" and "a monthly
   retainer, scaled to scope". The site then carries no amounts anywhere. Applies to the FR, DE
   and ES twins of that page as well.

2. **Years: fifteen everywhere.** The bench claim and the database claim both read fifteen. The
   comparison-table row "Years spent building it: Fifteen" ports verbatim, `about.astro:418` is
   already correct, and the four places Compass says twenty are not carried across. No new page
   says twenty.

3. **Locale scope for the new pages: English only.** Spec section 9 puts translation of the
   Compass marketing pages beyond what the i18n pipeline produces automatically out of scope, and
   recon question 4 established that the pipeline produces nothing automatically: every locale
   page is hand-written. The five Compass pages and the two door pages therefore ship in English.
   `localizePath` already falls back to the locale home for unmapped paths, and
   `Layout.astro:89-101` already skips the hreflang alternate when a path falls back, so no broken
   cluster is emitted. Nav rows pointing at these pages use the raw English path in every locale
   rather than a link that would dead-end on the locale home. Nav *labels* are translated.

4. **Nav ordering deviation from the phase gate.** WO-1.1's acceptance criterion forbids a
   dropdown item pointing at another domain, and the new "Find a partner" group points at
   `/compass`, which WO-2.1 creates. Shipping WO-1.1 before WO-2.1 would wire the nav to a 404.
   The pages are therefore built before the nav is rewired. End state is unchanged.
