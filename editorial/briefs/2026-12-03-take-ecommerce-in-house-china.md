---
brief_id: P30
publish_date: 2026-12-03
week: 13
weekday: Thu
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Managing a partner","Tmall Partners"]
title: "When to take eCommerce back from your Tmall Partner"
slug: take-ecommerce-in-house-china
primary_query: "take ecommerce in house china"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P30: When to take eCommerce back from your Tmall Partner

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Thu of week 13 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | When to take eCommerce back from your Tmall Partner |
| Slug | `/insights/take-ecommerce-in-house-china/` |
| Output file | `output/take-ecommerce-in-house-china.md` |
| Primary query | `take ecommerce in house china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Managing a partner`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** When to take eCommerce back from your Tmall Partner
**Query:** take ecommerce in house china · **Tags:** Managing a partner, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Brands take operations back (收回运营权) when the store is large enough to staff and the know-how sits in their own team. Plan the move a year ahead, keep the partner on a transition contract, and never switch before a festival.

**The table it must carry.** Signal it is time, what to build in-house first, what to keep outsourced.

**Leads (verify, cite primary).** Lirenlizhuang annual reports (L'Oréal brands leaving); 人人都是产品经理 analysis as lead. Interlink with 34A.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/grow-in-china/cross-border-ecommerce`, `/compass`
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
- [ ] File saved as `output/take-ecommerce-in-house-china.md`
