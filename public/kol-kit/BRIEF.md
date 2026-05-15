# China KOL Directory — Implementation Brief for Claude Code

This brief tells Claude Code (the CLI agent) how to integrate a "China KOL Directory" section into an existing public-facing landing page. The canonical source of truth is `data/kols.json`.

---

## 1. Goal

Add a long-scrolling, SEO-optimized section to a public landing page that showcases 80 Chinese KOLs across 8 industry verticals. The section must:

- Render server-side (no client-only data fetching) so Google can index every KOL.
- Group KOLs by industry, with one anchor-linkable section per industry.
- Show each KOL as a card with avatar, name (中文 + EN), tier badge, primary platform, follower estimate, niche, brand collaborations, and an outbound link to the live profile.
- Feel premium and editorial — not a SaaS data table.
- Work on mobile first; degrade gracefully without JS.

The section is for visitors who land via SEO (`top china KOLs`, `chinese beauty influencers`, `小红书 顶级博主`, etc.) and for prospective brand clients evaluating the agency.

---

## 2. Inputs Claude Code will receive

```
claude-code-kit/
├── BRIEF.md              ← this file
├── data/
│   └── kols.json         ← canonical data (80 KOLs across 8 industries)
└── reference/
    ├── KOLDirectory.tsx  ← reference React + Tailwind implementation
    └── styles.css        ← framework-agnostic token sheet
```

**Before generating code, Claude Code must:**

1. Read `data/kols.json` end-to-end and confirm the schema (see §5 below).
2. Inspect the host repo to identify the existing site's framework (Next.js, Astro, Nuxt, Remix, Hugo, plain HTML, etc.), styling system (Tailwind, CSS modules, vanilla CSS, styled-components, etc.), and routing convention.
3. Match those conventions exactly. Do not introduce a new framework or styling system. The reference component is a *reference*, not a prescription.
4. Confirm with the user where the section should live (own route at `/kols`, embedded on the homepage, etc.) before writing files.

---

## 3. Deliverables

The page section must include, in order:

### 3.1 Hero strip (one element)
- H1 with English headline and Chinese subhead ("China KOL Directory — 中国KOL指南")
- Short standfirst (≤ 30 words) drawn from `meta.subtitle`
- Inline industry nav: 8 chips linking to each industry anchor (`#beauty`, `#luxury`, …). Chips are tinted with the industry color.

### 3.2 Industry sections (one per industry, 8 total)
For each `industries[]` entry render:
- An anchor target `id="{industry.id}"` so chips deep-link.
- Section banner: industry name (EN + 中文), tagline, and a thin colored bar using `industry.color`.
- Grid of 10 KOL cards (see §3.3). Responsive: 1 col mobile, 2 col tablet, 3 col ≥1024px, 4 col ≥1440px.
- "About this vertical" caveat block when applicable. Healthcare must show the disclaimer from `meta.healthcare_note`.

### 3.3 KOL card (the workhorse component)
Each card shows:
- Circular avatar — start with a colored initials avatar (use `kol.avatar_initials` and the industry color). Leave a clear extension point to swap in a real `kol.avatar_url` later.
- `name_zh` as the dominant label (semibold, larger). `name_en` as a quieter subline.
- Tier pill — color by `kol.tier`:
  - `top` → green `#2E7D32` (label "Top · 1M+")
  - `mid` → amber `#F9A825` (label "Mid · 100K–1M")
  - `rising` → slate `#455A64` (label "Rising · crossing 1M")
- Primary platform badge with `primary_platform_label`. If `platforms.length > 1`, show a "+N" pill indicating additional platforms (tooltip lists them).
- Follower line: `kol.followers_text` rendered verbatim — these are deliberately formatted strings (e.g. "Douyin 35M+ ; Weibo 7M+").
- Specialty line (`kol.specialty`).
- Brand collab strip: render `kol.notable_brands` as small comma-separated pills (cap visible at 3, then "+N more" expand).
- Footer row: "View profile →" linking to `kol.profile_url` (open in new tab, `rel="noopener noreferrer"`) and a smaller "Source: …" line from `kol.source_note`.

### 3.4 Footer / methodology block (one element)
- A collapsible "Methodology" panel listing the four facts from `meta.tier_definitions`, `meta.follower_data_note`, and `meta.sources`.

---

## 4. Design system

Editorial, not dashboard. Borrow restraint from `bof.com` and `lvmh.com`, not Bootstrap.

| Token | Value | Use |
|---|---|---|
| Body font | system serif → editorial sans pair, e.g. `"Source Serif Pro", Georgia, serif` for headings; `"Inter", system-ui` for body. If host repo already defines a font stack, **use that**. | All text |
| Base background | `#FAFAF7` (warm off-white) | Page bg |
| Card background | `#FFFFFF` | Card bg |
| Text primary | `#1A1A1A` | Names, headlines |
| Text secondary | `#555555` | Specialty, body |
| Text muted | `#888888` | Source notes |
| Industry color | from `industry.color` | Section accents, chips, tier bars |
| Radius | 12px on cards; 999px on pills | — |
| Card shadow | `0 1px 2px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.04)` | Card depth |
| Spacing | 4 / 8 / 12 / 16 / 24 / 40 / 64 px scale | — |
| Industry color contrast | Industry color is used as a thin accent only — never as card background. Maintain WCAG AA contrast for any colored text. | — |

Animations: only `transform: translateY(-2px)` and shadow lift on card hover, 150ms ease-out. No carousels, no parallax.

---

## 5. Data schema (kols.json)

```ts
type Root = {
  meta: {
    title: string;
    subtitle: string;
    prepared_for: string;
    tier_definitions: { top: string; mid: string; rising: string };
    platforms_covered: string[];   // canonical slugs
    sources: string[];
    follower_data_note: string;
    healthcare_note: string;
  };
  industries: Industry[];
};

type Industry = {
  id: "beauty" | "luxury" | "hospitality" | "food"
    | "pet" | "healthcare" | "wellness" | "travel";
  name_en: string;          // "Beauty"
  name_zh: string;          // "美妆"
  tagline: string;          // one-line vertical descriptor
  color: string;            // hex "#E91E63"
  kols: KOL[];
};

type KOL = {
  id: string;                       // stable slug, e.g. "beauty-01-li-jiaqi"
  rank: number;                     // 1..10 inside the industry
  name_zh: string;
  name_en: string;
  tier: "top" | "mid" | "rising";
  tier_label: string;               // human-readable original ("Top", "Mid → Top")
  platforms: string[];              // slugs, e.g. ["douyin", "xiaohongshu"]
  primary_platform: string | null;  // slug
  primary_platform_label: string;   // "Douyin (抖音)"
  followers_text: string;           // verbatim string — render as-is
  specialty: string;
  profile_url: string;              // outbound link
  notable_brands: string[];         // pre-split
  source_note: string;
  avatar_initials: string;          // 1–2 chars for placeholder
};
```

Two rules about the data:

- **Never parse `followers_text`** to derive a number. The agency wants the textual breakdown ("Douyin 24M ; XHS 1.04M") rendered as-is. If a sort-by-followers feature is added later, introduce a separate `followers_primary_estimate` field — don't regex this one.
- **`name_zh` is the canonical name.** It must always be visually dominant. `name_en` is for SEO and Western readers; keep it secondary.

---

## 6. SEO & accessibility

### 6.1 SEO
- Use a single `<h1>` for the page hero. Each industry section uses `<h2>`. Each KOL card name is `<h3>`.
- Set `<title>` to the meta title and `<meta name="description">` to the meta subtitle.
- Add Open Graph + Twitter card meta (image: re-use the host site's existing OG image at first; the agency will replace with a custom one).
- Emit a JSON-LD `ItemList` per industry section with each KOL as a `Person` (name, url, knowsAbout). This is the agency's primary SEO play.
- All industry sections must render in the initial HTML response — no client-only data fetching.
- Ensure profile links use `rel="noopener noreferrer"` and `target="_blank"` (not `nofollow` — the agency wants link equity to flow to the KOLs as a goodwill signal).

### 6.2 Accessibility
- Each card must be reachable via keyboard tab order, with a visible focus ring (not the default).
- Tier pills must include a screen-reader-only label: e.g. `<span class="sr-only">Tier: Top, 1M plus followers</span>`.
- Avatar `<img>` (or div) must have `alt={kol.name_en}` or `aria-label` on the div equivalent.
- Color is never the only signal — tier pills include text, not just color.
- Industry color is decorative; never use it for text on white below 16px without checking contrast.

---

## 7. Performance budget

- Section ships ≤ 30KB JS gzipped (only the optional filter/anchor-scroll interactions need JS).
- Largest Contentful Paint must come from a server-rendered card title, not an image.
- All 80 placeholder avatars are CSS-only (no image requests) until real photos are wired up.
- Lighthouse Performance ≥ 90 on mobile, Accessibility ≥ 95.

---

## 8. Out of scope

- Filtering/search UI. The reference component shows a chip-nav, not filters.
- Admin/CMS surface. Data lives in `kols.json`; the agency updates it manually.
- Internationalization framework. Page is bilingual by content, not by language switching.
- Real KOL photos. Initials avatars ship first; photo URLs will be added to `kols.json` later as a `avatar_url` field.
- Analytics events. The host site already has analytics; just don't break it.

---

## 9. Acceptance checklist

Claude Code is done when:

- [ ] One `kols.json` is the only data source; nothing is hard-coded in the component.
- [ ] All 8 industries render with all 10 KOLs each, server-rendered, in the HTML response (verified with `curl | grep`).
- [ ] Industry anchor links deep-link correctly and scroll smoothly.
- [ ] Mobile (375px), tablet (768px), and desktop (≥1280px) layouts are all clean — verified by capturing screenshots if puppeteer/playwright is installed.
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95 on the new page.
- [ ] JSON-LD validates against schema.org `ItemList` + `Person`.
- [ ] Healthcare section shows the brand-deal disclaimer.
- [ ] No console errors; no React hydration mismatches.
- [ ] A short PR description summarizes what was added, where, and the framework decisions made.

---

## 10. Where to start

1. Read this brief.
2. Read `data/kols.json` (don't skim — note the schema).
3. Read `reference/KOLDirectory.tsx` for visual reference (translate idioms to host framework).
4. Read `reference/styles.css` for the design tokens.
5. Inspect the repo to identify framework, styling, and where the page section should live.
6. Ask the user one question: which route/page the section should live on. Then start.
