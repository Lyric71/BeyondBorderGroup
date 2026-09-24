---
brief_id: P27
publish_date: 2026-11-21
week: 11
weekday: Sat
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Distributors"]
title: "Supermarket fees in China: listing, barcode and end-caps"
slug: china-supermarket-listing-fee
primary_query: "china supermarket listing fee"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P27: Supermarket fees in China: listing, barcode and end-caps

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Sat of week 11 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Supermarket fees in China: listing, barcode and end-caps |
| Slug | `/insights/china-supermarket-listing-fee/` |
| Output file | `output/china-supermarket-listing-fee.md` |
| Primary query | `china supermarket listing fee` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Supermarket fees in China: listing, barcode and end-caps
**Query:** china supermarket listing fee · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Chinese retailers charge suppliers to get in and to stay visible: listing (进场费), barcode (条码费), end-cap (堆头费) and festival fees (年节费), plus promotion support. Your distributor usually pays them upfront and recovers them from you, so agree the budget and the proof before the first listing.

**The table it must carry.** Fee, what it buys, how it is charged, a sourced range (current, dated), who pays under a typical distribution deal.

**The proprietary number.** Compass: share of distributors on file that pre-fund listing fees. Fallback: log the gap.

**Leads (verify, cite primary).** Current retailer supplier terms; MOFCOM rules on retailer-supplier fees (零售商供应商公平交易管理办法). 2012 press figures only as history.

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
- [ ] File saved as `output/china-supermarket-listing-fee.md`
