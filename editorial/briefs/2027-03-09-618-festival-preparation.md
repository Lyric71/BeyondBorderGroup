---
brief_id: 27A
publish_date: 2027-03-09
week: 27
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "618 2027: the 100-day plan"
slug: 618-festival-preparation
primary_query: "618 festival preparation"
difficulty: SEAS
word_count: "2,100 to 2,400"
asset: "618 2027: the 100-day plan"
asset_format: "Countdown by workstream"
status: not_started
---

# BRIEF 27A: 618 2027: the 100-day plan

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 27 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | 618 2027: the 100-day plan |
| Slug | `/insights/618-festival-preparation/` |
| Output file | `output/618-festival-preparation.md` |
| Primary query | `618 festival preparation` |
| Difficulty | SEAS |
| Body length | 2,100 to 2,400 (body only, per the char-count rule) |
| Asset | `output/guides/618-festival-preparation.md`, publishes to `/guides/618-festival-preparation/` (Countdown by workstream) |

## The brief

**Title:** 618 2027: the 100-day plan
**Query:** 618 festival preparation · **Difficulty:** SEASONAL
**Word count:** 2,100 to 2,400

**The answer, in one line.** 618 is won or lost in the ninety days before the sale opens, because platform slot applications, bonded inventory, and price registration all close weeks ahead of the first sale window, and the levers a brand can still pull on the day are worth a fraction of the ones that close at T-90.

**The table it must carry.** One countdown grid, nine rows, five columns. Columns: Workstream, Owner (brand, TP or agency, logistics partner, platform account manager), Opens at (days before day one of the sale), Hard close (days before), What blocks it if you miss. Rows: (1) Platform campaign registration and slot application, (2) Bonded warehouse inbound booking and stock allocation, (3) Price ladder and discount mechanic registration with the platform, (4) Coupon, cross-store subsidy and platform voucher enrolment, (5) Detail page and campaign creative build plus Chinese copy sign-off, (6) Livestream slot booking and host contracting, (7) Paid media budget commitment and account funding, (8) Customer service staffing and script build for peak hours, (9) Returns and refunds capacity plus post-festival reconciliation. Every cell in the Opens and Hard close columns must be a number of days, not a vague phrase. Writer to confirm current-year platform calendar dates with a cited platform or trade-press source and to state explicitly that dates move year to year.

**The proprietary number.** From the stores TheChinaPath runs: the median number of days before day one at which those stores locked their final 618 price ladder, plus the share of the same set that missed at least one platform registration deadline in the last cycle. State the store count as the sample size.

**Outline.**
1. Why the 618 you can influence ends at T-90
2. T-100 to T-70: inventory, bonded allocation, and the SKU list you can actually sell
3. T-70 to T-45: platform registration, price ladder, and the mechanics you commit to
4. T-45 to T-21: creative, detail pages, livestream slots, and media budget
5. T-21 to day one: the last three weeks, in short, and where the full sprint guide lives
6. During the sale: the four numbers to watch and the only two you can still move
7. T+1 to T+30: returns, reconciliation, and what to file for next year

**Internal links.** /tools/tmall-global-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /work
**CTA.** Download the 100-day countdown sheet, one row per workstream, with owners and hard-close dates.
**Do not.** Do not write a generic festival explainer that opens with the history of 618 and JD's anniversary. Start at T-100 and stay operational. Do not turn the creator workstream into a how-to on seeding and creator relationship building.
**Territory guard.** The creative and creator workstreams are named as dependencies with owners and deadlines only. Creator seeding, community management and daily content production hand off to TheRedScroll. One line, in the T-45 section.

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
- [ ] File saved as `output/618-festival-preparation.md`
