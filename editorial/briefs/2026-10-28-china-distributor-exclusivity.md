---
brief_id: P20
publish_date: 2026-10-28
week: 08
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Contracts","Distributors"]
title: "Exclusivity in China: what to give, and what to keep"
slug: china-distributor-exclusivity
primary_query: "china distributor exclusivity"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P20: Exclusivity in China: what to give, and what to keep

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 08 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Exclusivity in China: what to give, and what to keep |
| Slug | `/insights/china-distributor-exclusivity/` |
| Output file | `output/china-distributor-exclusivity.md` |
| Primary query | `china distributor exclusivity` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Contracts`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Exclusivity in China: what to give, and what to keep
**Query:** china distributor exclusivity · **Tags:** Contracts, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Give exclusivity by channel and by region, tie each grant to a purchase target and a review date, and keep online channels and the right to take the grant back. Courts enforce exclusivity both ways, so write it narrowly and give notice formally.

**The table it must carry.** Grant type (national, regional, channel, online, category), what the brand gives up, target to attach, exit trigger.

**The proprietary number.** Compass: share of distributors on file that asked for national exclusivity at first meeting. Fallback: log the gap.

**Outline.** 1. Why distributors ask for everything 2. The Beijing double-damages case 3. The table 4. Targets and take-or-pay 5. Online carve-outs 6. Notice and review

**Leads (verify, cite primary).** Beijing No. 1 Intermediate Court (2015)一中民(商)终字第7955号. Interlink with 25A (distribution agreement) when live.

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
- [ ] File saved as `output/china-distributor-exclusivity.md`
