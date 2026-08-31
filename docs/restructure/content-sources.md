# WO-0.2 Content inventory

Every row of spec section 3.4, with the exact file path, line reference and current string. This
is the fact base every later PR cites. Nothing in new copy may claim a figure that is not on this
page.

Paths are relative to each repo root. Repo roots are listed in `recon.md`.

---

## 1. "A contact list tells you who exists. We tell you who fits."

**Verbatim, and it exists in two forms.**

`compass` -> `src/content/marketing/en.tsx:23`

> A contact list tells you who exists. We tell you who fits.

That is the homepage problem-section heading, and it is the form the spec names. A second,
branded variant is used as the pull quote on `/why-this-database`:

`compass` -> `src/content/marketing/en.tsx:175`

> A contact list tells you who exists. Bearing Bridge Compass tells you who fits.

**Port the `:23` form.** The `:175` form carries the retired brand name and must not travel.

Two supporting lines from the same section, available if the block needs body copy
(`src/content/marketing/en.tsx:26-33`):

> Google "China distributor database" and what comes back is a stack of scraped lists with a
> contact form bolted on the front. A thousand names by lunchtime, almost none of them right for
> your brand.

> We've watched brands sign with a name lifted straight off one of those lists. Four months in,
> they find out the partner has never really run their category. Or that the warehouse they toured
> was rented for the morning.

---

## 2. The scraped-directories comparison table, all four rows

`compass` -> `src/content/marketing/en.tsx:58-86`

Section eyebrow (`:59`): **How we are different**
Section title (`:60`): **A database, not another directory**
Column headers (`:61`): **Scraped directories** / **Bearing Bridge Compass**

The right-hand column header carries the retired brand. Rename it to **Compass** on the ported
page. The four rows travel unchanged:

| Row label | Scraped directories | Compass |
|---|---|---|
| How names get added (`:64`) | Bulk uploads, scraped from public sources | One meeting at a time |
| What we actually know about them (`:69`) | A company name. Maybe an email. | Real categories, real volume, payment terms and fit for your brand |
| Years spent building it (`:74`) | A few months | Fifteen |
| What you walk away with (`:79`) | A list of maybes | A shortlist worth meeting |

The stat beside the table: value `15`, hardcoded at
`compass` -> `src/app/[locale]/(marketing)/page.tsx:373` (`<CountUp to={15} />`), with the label
**Years on the ground** at `src/content/marketing/en.tsx:84`.

---

## 3. "Zero commission from distributors. Ever."

**The spec's wording does not match the repo. The repo wins.** The line on
`/enter-china/distribution` reads:

`thechinapath` -> `src/pages/enter-china/distribution.astro:19`

> No commission from distributors. Ever.

The same claim appears three more times on that page, and the hero splits it across two elements:

- `:163` - "Project fee. Quoted in the first call once the brief is clear. No commission from
  distributors."
- `:226` - the FAQ answer: "No. We bill you on the engagement. The distributor does not pay us
  referral fees. That is deliberate and it is written into the contract. If we took commission,
  our incentive would flip toward closing a deal instead of finding the right partner. Some
  clients ask. We are glad they do."
- `:382` - hero meta label, rendered as "No" plus `commission from distributors. Ever.`
- `:482` - Compass block stat label, same split

**Port "No commission from distributors. Ever."** Do not silently upgrade "No" to "Zero" for the
Chinese partner page or anywhere else: the claim is contractual and the site should say it one way.

---

## 4. The three-step brief / shortlist / introductions sequence

`compass` -> `src/content/marketing/en.tsx:38-57`

Eyebrow (`:39`): **How it works**
Title (`:40`): **You brief us. We come back with the shortlist.**
Quote (`:41`): *Finding the right partner in China usually swallows a quarter. We start with the
answer.*

**The brief** (`:45-46`)

> Half an hour to an hour, on a call. Your category, your stage and what you're really trying to
> pull off in China. A cross-border test. A domestic launch. The quiet replacement of a distributor
> who's stopped picking up the phone. Sometimes something we've never seen before, which is fine too.

**The shortlist** (`:49-50`)

> We come back with a map of who actually operates in your space, plus three to five partners
> worth meeting. Each one with a short brief: strengths, weak spots and where to push when you sit
> down to negotiate.

**The introductions** (`:53-54`)

> Most of these partners already know us. You walk in with a relationship behind you, which
> usually puts the A-team in the room rather than the pitch team.

The quote attribution at `:42` is "Bearing Bridge Compass" and must be changed or dropped.

---

## 5. Partner counts, years, categories, city list

### Partner count: NOT AVAILABLE AS A STATIC FIGURE. Read the database before porting.

The public "vetted partners on file" number is stored, not computed, and is fetched at request
time:

- `compass` -> `src/lib/settings.ts:34` - `getVettedPartnersCount()` reads the `SiteSetting` row
  keyed `vetted_partners_count` (`:7`)
- `compass` -> `src/lib/settings.ts:14` - `const VETTED_PARTNERS_FALLBACK = 529`, described in the
  comment as what shows "if the row is missing or the DB is unreachable"
- `compass` -> `src/app/[locale]/(marketing)/page.tsx:85-86` - the homepage awaits it and hides the
  stat entirely when it is 0
- label: **Vetted partners on file**, `src/content/marketing/en.tsx:18`

`529` is the fallback constant, not a verified count. TheChinaPath is a static build with no
database access, so WO-1.4 and WO-2.1 must freeze a number. **Query the live `SiteSetting` table
and record the value and the date here before writing the figure into any page.** Until that
happens, the ported Compass block ships without a partner count.

### Years: two different numbers, both live, used for different claims

- **Fifteen** - years spent building the database. `src/content/marketing/en.tsx:76` (comparison
  row) and `:84` / `page.tsx:373` (the stat, "Years on the ground").
- **20 years** - the leadership team's time in China distribution and e-commerce.
  `src/content/marketing/en.tsx:112`, and again at `:170`, `:206`, `:210` (`statValue: 20`), plus
  the meta description at `:8`.

Do not merge these. Fifteen is the database. Twenty is the bench. TheChinaPath's own About page
uses a third figure for the same bench: "Each of us has 15 years in China marketing, digital and
eCommerce" (`thechinapath` -> `src/pages/about.astro:418`). Pick one and use it consistently on
any new page; flag the mismatch in the PR rather than averaging.

### Categories: eight, verbatim

`compass` -> `src/content/marketing/en.tsx:307-317`, label **Categories covered**:

Beauty, Food and beverage, Fashion, Home, Wellness, Mother and baby, Pet, Supplements.

Closing line (`:318`): *Mostly B2C, with B2B when the buyer is in China.*

A slightly different list appears in the About block at `:112`: "beauty, food and beverage,
fashion, lifestyle, home, wellness, mother and baby, and pet" (adds lifestyle, drops supplements).
The `:307` list is the structured one. Use it.

### City list: DOES NOT EXIST.

There is no city or coverage list in the Compass repo. The only geographic strings are the office
addresses in `messages/en.json:148` (Shanghai, Trinity Plaza) and `:156` (Paris, 12 rue Curial),
and one case-study tag, "Premium skincare / Shanghai"
(`src/content/marketing/en.tsx:367`). The nearest thing to coverage is a field description at
`:337`: "Cities, provinces, warehouses and where the sales team actually sits."

**Any "cities covered" claim in new copy would be invented. Leave it out.** TheChinaPath's own
office line, "Shanghai · Hong Kong · Paris" (`src/i18n/ui.ts`, key `footer.cities`), is about the
agency, not database coverage, and must not be repurposed as one.

---

## 6. Load time and bounce rate figures

`chinawebfoundry` -> `src/components/home/StatsSection.astro`

| Figure | Line | Exact caption |
|---|---|---|
| **1.2s** | `:144` | Median load time on launched sites, measured from Shanghai. (`:148`) |
| **82%** | `:268` | Median bounce rate, foreign brand sites in China, first 90 days. (`:259`) |
| **31%** | `:282` | The after figure in the same before/after pair |
| **15+ years** | `:81` | Leadership team with 15+ years of digital and web experience in China. (`:84`) |

The 82 / 31 pair is one comparison, labelled "Difference" at `:290`. Port them together or not at
all. A lone "31% bounce rate" means nothing.

### The five gaps, for WO-1.2 section 2

`chinawebfoundry` -> `src/data/problems.ts`, rendered by
`src/components/home/ProblemSection.astro`. Section headline (`ProblemSection.astro:47`):
*Your brand doesn't land in China. These 5 gaps explain why.*

1. **Your content doesn't resonate.** Chinese audiences scan for trust signals foreign teams
   under-emphasise: founder credibility, certifications, partner logos, awards. A native Chinese
   writer puts them on the page in the right order.
2. **Your UX feels foreign.** Mobile-first, often inside the WeChat in-app browser. Long-scroll,
   dense pages, trust signals up front. Western minimalism reads as empty or unfinished.
3. **Baidu doesn't see you.** Different ranking signals, different indexing rules. Baidu will not
   index a site properly without an ICP filing and a Chinese host. The Google playbook does not
   transfer. *Cited on the source card: "Baidu holds roughly half of China's search market. Google
   sits under 3%. Source: Statcounter Global Stats, China, 2024."*
4. **AI engines have already replaced search for many buyers.** Doubao, Kimi, DeepSeek and Baidu's
   Wenxin now answer questions that used to go to a search engine. The user rarely clicks through.
   If your site is not structured for AI to cite, you are invisible.
5. **China hosting is just the floor.** Slow loads, broken plugins, scripts that silently fail
   behind the Firewall. Once the infrastructure works, brand resonance is what wins customers.

Supporting figure, `ProblemSection.astro:71-83`: **1.1B** Chinese internet users at end of 2024,
over 99% mobile, sourced to "CNNIC 53rd report, Statcounter China 2024".

Note for WO-1.2 section 3: **the string "ICP filing" appears in the ChinaWebFoundry repo only
inside gap 3 above.** There is no dedicated ICP explainer to port. That section has to be written,
and the only sourced claim available is the one in gap 3: Baidu will not index a site properly
without an ICP filing and a Chinese host.

---

## 7. Follower growth and same-store figures

`theredscroll` -> `src/pages/work/camper.astro`

| Figure | Line | Label |
|---|---|---|
| **43K to 187K** | `:13` | Followers in 18 months |
| **+31%** | `:16` | Same-store sales YoY |
| 1.2% to 4.7% engagement | `:235` | Over 18 months, followers grew from 43,000 to 187,000. Engagement went from 1.2% to 4.7%, well above footwear benchmarks. |

Starting position, `:107`: accounts on WeChat, Weibo and RedNote with a combined 43,000 followers,
engagement at 1.2%.

Second usable outcome, `theredscroll` -> `src/pages/work/blue-insurance.astro`:

- **10,000 followers in the first month** (`:45`, `:207`, `:228`)
- **3,000 newsletter signups in the first week** (`:234`)
- Context (`:45`): Hong Kong's first digital life insurer, launched from zero audience.

Caution for WO-1.3: Camper's +31% same-store and ChinaWebFoundry's 31% bounce rate are unrelated
numbers that happen to share a digit. Do not put them on the same page without their labels.

---

## 8. "a senior partner will write back inside one working day, not a form-letter from an intake bot"

`thechinapath` -> `src/pages/about.astro:673-674`

Full sentence as written, wrapped across two lines in the source:

> Tell us where you are today and where you want to be. A senior partner will write back inside
> one working day, not a form-letter from an intake bot.

WO-1.5 moves this into the homepage contact section. It sits under the "Get in touch" eyebrow and
the heading "Thinking about taking your brand to China?" (`about.astro:670-671`).

---

## Figures that new copy must NOT contain

Collected here so review can grep for them.

- Any partner count, until the live `SiteSetting` value is read and recorded above.
- Any city or province coverage claim for the database. No source exists.
- Any price, rate or range. Note that `src/pages/enter-china/distribution.astro:296` already
  carries "EUR 40k to 90k" and "RMB 40k to 150k" in a FAQ answer. That is pre-existing copy on a
  page WO-2.1 touches. Flagged in `recon.md`, needs a decision, and must not be copied forward.
- "Zero commission". The repo says "No commission from distributors. Ever."
- Any blend of the fifteen-year and twenty-year claims.
