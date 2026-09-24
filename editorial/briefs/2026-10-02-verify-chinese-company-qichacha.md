---
brief_id: P03
publish_date: 2026-10-02
week: 04
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Anchor + Asset
tags: ["Finding a partner","Due diligence","Distributors"]
title: "How to read a Chinese company report before you sign"
slug: verify-chinese-company-qichacha
primary_query: "verify chinese company qichacha"
word_count: "1,600 to 2,400"
asset: "How to read a Chinese company report before you sign"
asset_format: "printable page"
status: not_started
---

# BRIEF P03: How to read a Chinese company report before you sign

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 04 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to read a Chinese company report before you sign |
| Slug | `/insights/verify-chinese-company-qichacha/` |
| Output file | `output/verify-chinese-company-qichacha.md` |
| Primary query | `verify chinese company qichacha` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Due diligence`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |
| Asset | `output/guides/verify-chinese-company-qichacha.md`, publishes to `/guides/verify-chinese-company-qichacha/` (printable page) |

## The brief

**Title:** How to read a Chinese company report before you sign
**Query:** verify chinese company qichacha · **Tags:** Due diligence, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Pull the partner's record from the national credit system (GSXT) and one commercial database (Qichacha or Tianyancha), then read eight fields: registration date, registered and paid-in capital, business scope, shareholders, branches, court judgments, the dishonest-debtor list and administrative penalties. Most bad candidates fail here, before a call.

**The table it must carry.** Field, where to find it, what a real distributor's record shows, what should stop you.

**The proprietary number.** Compass: share of candidates dropped at the licence and record check. Fallback: log the gap.

**Asset.** `output/guides/<slug>.md`: a one-page printable field checklist with the eight fields and a pass/stop column.

**Outline.**
1. The two registries and what each is good for
2. Reading the licence: scope (经营范围), capital, age
3. Reading the record: 裁判文书, 失信被执行人, 行政处罚
4. The table
5. What the report cannot tell you, and the call that covers it
6. The printable checklist

**Leads (verify, cite primary).** gsxt.gov.cn field definitions; the Supreme People's Court dishonest-debtor list (zxgk.court.gov.cn); 裁判文书网.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`, `/insights/find-distributor-china-verify` (when 07A is live)
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
- [ ] File saved as `output/verify-chinese-company-qichacha.md`
