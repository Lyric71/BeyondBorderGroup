---
brief_id: P25
publish_date: 2026-12-09
week: 14
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors","Tmall Partners"]
title: "Choosing a supplements partner: blue hat or cross-border"
slug: supplements-distributor-china
primary_query: "supplements distributor china"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P25: Choosing a supplements partner: blue hat or cross-border

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 14 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Choosing a supplements partner: blue hat or cross-border |
| Slug | `/insights/supplements-distributor-china/` |
| Output file | `output/supplements-distributor-china.md` |
| Primary query | `supplements distributor china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** Choosing a supplements partner: blue hat or cross-border
**Query:** supplements distributor china · **Tags:** Distributors, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A supplement sold in general trade needs a health-food registration or filing (the blue hat) held by you or your partner; cross-border skips it but limits you to online. Decide the route first, because it decides whether you need a distributor or a TP.

**The table it must carry.** Route (registration, filing, cross-border), who holds it, time, cost range with source, channels open.

**The proprietary number.** TheChinaPath calculator data (supplements category). Interlink with 29A.

**Leads (verify, cite primary).** SAMR health food registration and filing rules.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass`
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
- [ ] File saved as `output/supplements-distributor-china.md`
