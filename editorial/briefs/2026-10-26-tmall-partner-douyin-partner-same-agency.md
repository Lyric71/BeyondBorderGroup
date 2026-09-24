---
brief_id: P19
publish_date: 2026-10-26
week: 08
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Tmall Partners","Douyin Partners"]
title: "Can one agency run your Tmall store and Douyin shop?"
slug: tmall-partner-douyin-partner-same-agency
primary_query: "tmall partner douyin partner same agency"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P19: Can one agency run your Tmall store and Douyin shop?

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 08 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Can one agency run your Tmall store and Douyin shop? |
| Slug | `/insights/tmall-partner-douyin-partner-same-agency/` |
| Output file | `output/tmall-partner-douyin-partner-same-agency.md` |
| Primary query | `tmall partner douyin partner same agency` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Tmall Partners`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Can one agency run your Tmall store and Douyin shop?
**Query:** tmall partner douyin partner same agency · **Tags:** Tmall Partners, Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** One agency can run both when it has a separate live-room team with its own results in your category. Running a store and running a live room are different trades, so judge the Douyin side on its own evidence even when the contract is shared.

**The table it must carry.** One agency vs two: coordination, pricing conflicts, cost, accountability, what to check.

**The proprietary number.** Compass: share of TPs on file with a rated Douyin practice. Fallback: log the gap.

**Outline.** 1. Why the question matters now (Tmall-first operators moving to Douyin) 2. The table 3. Price conflict between channels 4. Checking the Douyin team 5. Contract structure for one or two agencies

**Leads (verify, cite primary).** Lirenlizhuang 2025 annual report (Douyin revenue +46.6%, Tmall share down; 21世纪经济报道 April 1, 2026 as lead).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
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
- [ ] File saved as `output/tmall-partner-douyin-partner-same-agency.md`
