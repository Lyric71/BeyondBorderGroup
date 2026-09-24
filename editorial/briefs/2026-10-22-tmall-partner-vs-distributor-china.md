---
brief_id: P16
publish_date: 2026-10-22
week: 07
weekday: Thu
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Distributors","Tmall Partners","Douyin Partners"]
title: "TP, DP or distributor: who to hire first in China"
slug: tmall-partner-vs-distributor-china
primary_query: "tmall partner vs distributor china"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P16: TP, DP or distributor: who to hire first in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Thu of week 07 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | TP, DP or distributor: who to hire first in China |
| Slug | `/insights/tmall-partner-vs-distributor-china/` |
| Output file | `output/tmall-partner-vs-distributor-china.md` |
| Primary query | `tmall partner vs distributor china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Tmall Partners`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** TP, DP or distributor: who to hire first in China
**Query:** tmall partner vs distributor china · **Tags:** Distributors, Tmall Partners, Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** Hire a distributor when your product needs a shelf, a Tmall Partner when shoppers search for your category online, and a Douyin Partner when the product sells on demonstration. Most brands start with one, and the right one follows from the category, the cash and the channel.

**The table it must carry.** Distributor vs TP vs DP: what they run, how they are paid, cash needed in year one, time to first sale, control you keep, best for.

**The proprietary number.** TheChinaPath calculator data for the TP and DP cost lines.

**Outline.** 1. Three partners, three jobs 2. The table 3. Category decides first 4. Cash and time 5. The usual second partner 6. How to test before committing

**Internal links.** all three guides, `/insights/china-distributor-vs-own-store`, `/compass`
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
- [ ] File saved as `output/tmall-partner-vs-distributor-china.md`
