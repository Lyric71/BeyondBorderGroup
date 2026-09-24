---
brief_id: P09
publish_date: 2026-10-12
week: 06
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Distributors"]
title: "From ex-works to shelf: how a China price ladder is built"
slug: china-distributor-margin-imported-product-price
primary_query: "china distributor margin imported product price"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P09: From ex-works to shelf: how a China price ladder is built

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 06 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | From ex-works to shelf: how a China price ladder is built |
| Slug | `/insights/china-distributor-margin-imported-product-price/` |
| Output file | `output/china-distributor-margin-imported-product-price.md` |
| Primary query | `china distributor margin imported product price` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** From ex-works to shelf: how a China price ladder is built
**Query:** china distributor margin imported product price · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** An imported product's shelf price in China stacks freight, duty, VAT, the importer's margin, the distributor's margin and the retailer's margin on top of your ex-works price. Build the ladder backwards from the shelf price shoppers accept before you quote anyone.

**The table it must carry.** A worked ladder for one general-trade product: each step, the rate, the source, the running price. Then the same product through cross-border (9610/1210) for comparison.

**The proprietary number.** TheChinaPath calculator data (duty and VAT paths, cross-border tax).

**Outline.**
1. Why the ladder starts at the shelf
2. Duty and VAT (MOF schedule; 13% and 9% VAT bands)
3. The table
4. Where margins sit and why layers multiply
5. The cross-border comparison
6. What to cut, and what never to cut

**Leads (verify, cite primary).** 财政部关税司 tariff schedule; VAT rates (State Taxation Administration); cross-border comprehensive tax rules; layered distribution markups (新浪财经 2013, history only).

**Internal links.** `/compass/find-a-distributor-in-china`, `/tools/tmall-global-setup-and-run`, `/insights/china-distributor-vs-own-store`, `/compass`
**CTA.** Compass shortlist.

## Slot spec

```
SLOT: Partner piece (Finding a partner cluster), weekday per schedule.csv
BRIEF: briefs/YYYY-MM-DD-<slug>.md

Every partner piece must carry:
1. A title that is the query a buyer types, or its answer.
2. The answer inside the first 60 words.
3. One real table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such
   (Compass figure, else calculator or case data, per the brief).
5. Byline TheChinaPath, published date and updated date.
6. Links: the guide it serves, /compass, and one other published
   partner piece when one exists. One CTA: the Compass shortlist.
7. Tags: "Finding a partner" plus the topic tags in the brief.
8. No competitor cited or named. Chinese primary sources first.

KILL CONDITION: none. Partner pieces always ship. If a proprietary
figure is missing, use the fallback and log it.
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
- [ ] File saved as `output/china-distributor-margin-imported-product-price.md`
