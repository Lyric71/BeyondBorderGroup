---
brief_id: P17
publish_date: 2026-10-24
week: 07
weekday: Sat
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Douyin Partners"]
title: "Douyin's dual verification: what it changes for your partner"
slug: douyin-cross-border-brand-verification
primary_query: "douyin cross border brand verification"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P17: Douyin's dual verification: what it changes for your partner

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Sat of week 07 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Douyin's dual verification: what it changes for your partner |
| Slug | `/insights/douyin-cross-border-brand-verification/` |
| Output file | `output/douyin-cross-border-brand-verification.md` |
| Primary query | `douyin cross border brand verification` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Douyin's dual verification: what it changes for your partner
**Query:** douyin cross border brand verification · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Since 2026 Douyin asks cross-border brands to prove both overseas production and overseas sales before they sell. Your partner can prepare the file, but only you hold the evidence, so the partner's value shifts from paperwork to operations.

**The table it must carry.** Requirement, evidence accepted, what is excluded, who prepares it, timing.

**The proprietary number.** TheChinaPath Douyin calculator data (cross-border deposit and commission).

**Outline.** 1. The rule and its dates 2. The table 3. What counts as overseas sales 4. What your DP should and should not do 5. Tmall's parallel rule

**Leads (verify, cite primary).** Douyin cross-border rule announcement (jinritemai); the Tmall parallel notice. Trade press may point to them; cite the platform text.

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
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
- [ ] File saved as `output/douyin-cross-border-brand-verification.md`
