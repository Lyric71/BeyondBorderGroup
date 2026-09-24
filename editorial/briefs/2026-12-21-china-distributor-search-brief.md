---
brief_id: P45
publish_date: 2026-12-21
week: 16
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Asset
tags: ["Finding a partner","Due diligence"]
title: "How to brief a China partner search"
slug: china-distributor-search-brief
primary_query: "china distributor search brief"
word_count: "1,000 to 1,400"
asset: "How to brief a China partner search"
asset_format: "printable page"
status: not_started
---

# BRIEF P45: How to brief a China partner search

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 16 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to brief a China partner search |
| Slug | `/insights/china-distributor-search-brief/` |
| Output file | `output/china-distributor-search-brief.md` |
| Primary query | `china distributor search brief` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Due diligence` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |
| Asset | `output/guides/china-distributor-search-brief.md`, publishes to `/guides/china-distributor-search-brief/` (printable page) |

## The brief

**Title:** How to brief a China partner search
**Query:** china distributor search brief · **Tags:** Due diligence
**Word count:** 1,000 to 1,400

**The answer, in one line.** A good partner brief fits on one page: category and price band, channels wanted, stage in China, registrations held, budget for the first year and what has been tried. It halves the time to a shortlist.

**The table it must carry.** Brief field, why a partner needs it, example answer.

**Asset.** Printable one-page brief that matches the `/compass/shortlist` form fields.

**Internal links.** `/compass/shortlist`, `/compass`, all three guides
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
- [ ] File saved as `output/china-distributor-search-brief.md`
