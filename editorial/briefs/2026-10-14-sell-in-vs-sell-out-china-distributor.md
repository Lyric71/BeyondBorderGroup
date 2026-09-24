---
brief_id: P11
publish_date: 2026-10-14
week: 06
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Managing a partner","Distributors"]
title: "Sell-in is not sell-out: spotting stock pushing in China"
slug: sell-in-vs-sell-out-china-distributor
primary_query: "sell in vs sell out china distributor"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P11: Sell-in is not sell-out: spotting stock pushing in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 06 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Sell-in is not sell-out: spotting stock pushing in China |
| Slug | `/insights/sell-in-vs-sell-out-china-distributor/` |
| Output file | `output/sell-in-vs-sell-out-china-distributor.md` |
| Primary query | `sell in vs sell out china distributor` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Managing a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Sell-in is not sell-out: spotting stock pushing in China
**Query:** sell in vs sell out china distributor · **Tags:** Managing a partner, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Sell-in is what your distributor buys; sell-out is what shoppers buy. When the first grows faster than the second, stock is piling up in the channel (压货) and a price war or a returns fight follows. Ask for scan or depletion data every month, and read weeks of cover, not orders.

**The table it must carry.** Signal (orders vs scans, weeks of cover, discounting online, sudden promotions, late payment), what it looks like, what to ask for.

**The proprietary number.** Compass: share of distributors on file that share scan or depletion data. Fallback: log the gap.

**Outline.**
1. Why distributors are refusing stock in 2025 and 2026
2. The table
3. Weeks of cover: the one ratio to track
4. Where to get sell-out data (retailer portals, POS, platform backends)
5. What to write into the contract
6. What to do when the channel is already full

**Leads (verify, cite primary).** 压货 and 动销 (虎嗅 huxiu.com/article/4873623.html; 界面 jiemian.com/article/13003026.html, one distributor's RMB 4 to 5 million of stock against under RMB 300,000 profit).

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
- [ ] File saved as `output/sell-in-vs-sell-out-china-distributor.md`
