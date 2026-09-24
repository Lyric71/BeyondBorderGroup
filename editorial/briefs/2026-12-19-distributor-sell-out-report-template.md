---
brief_id: P44
publish_date: 2026-12-19
week: 15
weekday: Sat
slot: P
slot_name: Partner
content_type: Partner Asset
tags: ["Finding a partner","Managing a partner"]
title: "The monthly report to demand from your China partner"
slug: distributor-sell-out-report-template
primary_query: "distributor sell out report template"
word_count: "1,000 to 1,400"
asset: "The monthly report to demand from your China partner"
asset_format: "printable page"
status: not_started
---

# BRIEF P44: The monthly report to demand from your China partner

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Sat of week 15 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The monthly report to demand from your China partner |
| Slug | `/insights/distributor-sell-out-report-template/` |
| Output file | `output/distributor-sell-out-report-template.md` |
| Primary query | `distributor sell out report template` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Managing a partner` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |
| Asset | `output/guides/distributor-sell-out-report-template.md`, publishes to `/guides/distributor-sell-out-report-template/` (printable page) |

## The brief

**Title:** The monthly report to demand from your China partner
**Query:** distributor sell out report template · **Tags:** Managing a partner
**Word count:** 1,000 to 1,400

**The answer, in one line.** One page a month: sell-out by channel, stock and weeks of cover, price checks, returns, ad spend and return, next month's plan. If a partner cannot produce it, it cannot manage your brand either.

**The table it must carry.** Line, source of the number, distributor / TP / DP variant.

**Asset.** Printable monthly report template.

**Internal links.** all three guides, `/compass`
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
- [ ] File saved as `output/distributor-sell-out-report-template.md`
