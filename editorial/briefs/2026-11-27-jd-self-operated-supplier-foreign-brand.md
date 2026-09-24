---
brief_id: P34
publish_date: 2026-11-27
week: 12
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors"]
title: "Selling to JD self-run and Hema through a distributor"
slug: jd-self-operated-supplier-foreign-brand
primary_query: "jd self operated supplier foreign brand"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P34: Selling to JD self-run and Hema through a distributor

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 12 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Selling to JD self-run and Hema through a distributor |
| Slug | `/insights/jd-self-operated-supplier-foreign-brand/` |
| Output file | `output/jd-self-operated-supplier-foreign-brand.md` |
| Primary query | `jd self operated supplier foreign brand` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Selling to JD self-run and Hema through a distributor
**Query:** jd self operated supplier foreign brand · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** JD self-run, Tmall Supermarket and Hema buy stock like retailers, with a guaranteed margin, rebates and 45- to 60-day payment terms. An online distributor carries that cash gap and the buyer relationship; your job is to price the margin guarantee into the ladder.

**The table it must carry.** Term (毛保, 返利, 账期, promotion support), what it means, who carries it.

**Leads (verify, cite primary).** JD supplier terms; retailer annual reports. Practitioner posts as leads only.

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
- [ ] File saved as `output/jd-self-operated-supplier-foreign-brand.md`
