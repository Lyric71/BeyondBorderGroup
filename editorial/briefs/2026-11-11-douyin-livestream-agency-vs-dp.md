---
brief_id: P46
publish_date: 2026-11-11
week: 10
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Douyin Partners"]
title: "Livestream agency or Douyin Partner: who does what"
slug: douyin-livestream-agency-vs-dp
primary_query: "douyin livestream agency vs dp"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P46: Livestream agency or Douyin Partner: who does what

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 10 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Livestream agency or Douyin Partner: who does what |
| Slug | `/insights/douyin-livestream-agency-vs-dp/` |
| Output file | `output/douyin-livestream-agency-vs-dp.md` |
| Primary query | `douyin livestream agency vs dp` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Livestream agency or Douyin Partner: who does what
**Query:** douyin livestream agency vs dp · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A livestream agency or MCN sells creator time and sessions; a Douyin Partner runs your shop, your own live room and your ad account as one P&L. Brands that hire the first expecting the second pay slot fees and keep nothing.

**The table it must carry.** Livestream agency vs DP: what they run, how paid, what you keep, when to use.

**The proprietary number.** TheChinaPath Douyin calculator data. Territory rule: transaction side only.

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/insights/china-livestream-cost-for-brands`, `/compass`
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
- [ ] File saved as `output/douyin-livestream-agency-vs-dp.md`
