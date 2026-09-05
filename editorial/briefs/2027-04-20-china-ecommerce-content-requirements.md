---
brief_id: 33A
publish_date: 2027-04-20
week: 33
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "The monthly content load a China store actually needs"
slug: china-ecommerce-content-requirements
primary_query: "china ecommerce content requirements"
difficulty: OPEN
word_count: "2,100 to 2,400"
asset: "The monthly content spec for a China store"
asset_format: "Assets per month per channel, with owners"
status: not_started
---

# BRIEF 33A: The monthly content load a China store actually needs

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 33 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The monthly content load a China store actually needs |
| Slug | `/insights/china-ecommerce-content-requirements/` |
| Output file | `output/china-ecommerce-content-requirements.md` |
| Primary query | `china ecommerce content requirements` |
| Difficulty | OPEN |
| Body length | 2,100 to 2,400 (body only, per the char-count rule) |
| Asset | `output/guides/china-ecommerce-content-requirements.md`, publishes to `/guides/china-ecommerce-content-requirements/` (Assets per month per channel, with owners) |

## The brief

**Title:** The monthly content load a China store actually needs
**Query:** china ecommerce content requirements · **Difficulty:** OPEN
**Word count:** 2,100 to 2,400

**The answer, in one line.** A single-channel China store needs roughly a defined, countable set of assets every month to stay merchandisable, and brands underfund it by budgeting for a launch package instead of a monthly production line, which is why detail pages go stale by month four and campaign slots get declined.

**The table it must carry.** The monthly content spec. Six columns: Channel, Asset type, Units per month, Format spec (dimensions, length, language requirement), Owner, What triggers an unscheduled refresh. Channel rows must cover a Tmall Global flagship, a JD Worldwide store, a Douyin store, a RedNote storefront and a WeChat mini program, and each channel must list its own asset types: detail page modules, main image sets, short video, livestream backdrops and scripts, campaign key visuals, size and ingredient charts, customer service response templates. Every Units per month cell is a number. A second small table: the same spec at three budget levels, minimum viable, competitive and category-leading, with a monthly asset count total for each.

**The proprietary number.** From the stores TheChinaPath runs: the median number of content assets produced per store per month across the portfolio, split by channel, plus the median interval between detail page refreshes. State the store count.

**Outline.**
1. Why a launch package is not a content plan
2. The unit of work: what counts as an asset on a Chinese marketplace
3. Channel by channel: the monthly count and the format rules
4. The unscheduled load: campaigns, SKU changes, compliance edits and complaints
5. Three budget levels, and what each one buys you in shelf quality
6. Who produces it: in-house, TP, studio, or a mix, and what each model costs to hold
7. The four signs your store is under-produced

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/social-commerce, /enter-china/branding-localisation, /work
**CTA.** Download the monthly content spec, one row per asset, with owners and refresh triggers.
**Do not.** Do not slide into a how-to on producing the content. The value here is the load, the count and the owner. Do not present the numbers as universal; state that they come from a named portfolio with a stated size.
**Territory guard.** Daily content production, editorial calendars and community management hand off to TheRedScroll. This piece specifies the requirement and the owner, not the production service. One line, in section six.

## Slot spec

```
Every Anchor must carry:
1. A title that is the query a buyer types, or its answer. No "Ultimate",
   no "Complete Guide", no brand name in front.
2. The answer inside the first 60 words.
3. One real HTML table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such.
5. A named human byline, published date and updated date.
6. Three to five internal links, at least one to a service page and one
   to a calculator or Compass.
7. One CTA. Never "learn more".
```

## Definition of done

- [ ] The answer lands inside the first 60 words
- [ ] Every third-party figure carries a dated, linked citation
- [ ] The proprietary number is present and labelled as ours
- [ ] Byline `TheChinaPath`, published date and updated date in frontmatter
- [ ] One real table with real figures, in the scrollable wrapper
- [ ] Three to five internal links from the target list, one to a service page and one to a calculator or Compass
- [ ] One CTA, never "learn more"
- [ ] No pricing for TheChinaPath's own services
- [ ] Zero em dashes, no banned vocabulary, no three-item rhetorical lists
- [ ] Territory rule respected, hand-offs use the canonical anchor text
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] New figures appended to `sources/verified-sources.md` with both check dates
- [ ] Feature image block appended with the correct slug path
- [ ] File saved as `output/china-ecommerce-content-requirements.md`
