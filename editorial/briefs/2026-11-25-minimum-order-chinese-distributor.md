---
brief_id: P41
publish_date: 2026-11-25
week: 12
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors","Contracts"]
title: "First orders, minimums and consignment in China"
slug: minimum-order-chinese-distributor
primary_query: "minimum order chinese distributor"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P41: First orders, minimums and consignment in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 12 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | First orders, minimums and consignment in China |
| Slug | `/insights/minimum-order-chinese-distributor/` |
| Output file | `output/minimum-order-chinese-distributor.md` |
| Primary query | `minimum order chinese distributor` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** First orders, minimums and consignment in China
**Query:** minimum order chinese distributor · **Tags:** Distributors, Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Size the first order to a launch plan, attach annual minimums to any exclusivity, and use consignment only for a test. Courts enforce minimum-purchase clauses, so write the number you can live with.

**The table it must carry.** Structure (first order, annual minimum, take-or-pay, consignment), risk to each side, when it fits.

**Leads (verify, cite primary).** Minimum-purchase judgments on 裁判文书网 (a Japanese cosmetics case, RMB 48m annual minimum, reported by a law firm as lead).

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
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
- [ ] File saved as `output/minimum-order-chinese-distributor.md`
