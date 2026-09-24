---
brief_id: P07
publish_date: 2026-10-08
week: 05
weekday: Thu
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Tmall Partners"]
title: "Service TP or buy-out TP: who sets your price"
slug: tmall-partner-agency-vs-distributor-model
primary_query: "tmall partner agency vs distributor model"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P07: Service TP or buy-out TP: who sets your price

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Thu of week 05 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Service TP or buy-out TP: who sets your price |
| Slug | `/insights/tmall-partner-agency-vs-distributor-model/` |
| Output file | `output/tmall-partner-agency-vs-distributor-model.md` |
| Primary query | `tmall partner agency vs distributor model` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** Service TP or buy-out TP: who sets your price
**Query:** tmall partner agency vs distributor model · **Tags:** Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A service TP (代运营) runs your store for a fee and commission while you own the stock and set the price. A buy-out TP (经销) buys your stock, books the sales and sets the price. Pick the model for the control you need, then pick the partner.

**The table it must carry.** Service vs buy-out vs consignment: who owns stock, who sets price, who holds the store, cash needed, what goes wrong.

**The proprietary number.** Compass: model split of TPs on file. Fallback: TheChinaPath Tmall Global calculator data for the service-model cost line.

**Outline.**
1. The two categories in Tmall Global's own TP program
2. The table
3. Price control under each model
4. Cash and inventory risk
5. When each one fits
6. Switching models later

**Leads (verify, cite primary).** Tmall Global TP categories 经销类 and 代运营 (Feb 2021 program notice; 网易 lead 163.com/dy/article/G27NTF4N053814UB.html); listed TPs' disclosure of distribution vs service revenue (Baozun, Ruoyuchen annual reports).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
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
- [ ] File saved as `output/tmall-partner-agency-vs-distributor-model.md`
