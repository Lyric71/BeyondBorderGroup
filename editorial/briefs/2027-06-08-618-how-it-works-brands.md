---
brief_id: 40A
publish_date: 2027-06-08
week: 40
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Running 618: an operator's log"
slug: 618-how-it-works-brands
primary_query: "618 how it works brands"
difficulty: OPEN
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 40A: Running 618: an operator's log

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 40 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Running 618: an operator's log |
| Slug | `/insights/618-how-it-works-brands/` |
| Output file | `output/618-how-it-works-brands.md` |
| Primary query | `618 how it works brands` |
| Difficulty | OPEN |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Running 618: an operator's log
**Query:** 618 how it works brands · **Difficulty:** OPEN
**Word count:** 2,200 to 2,400

**The answer, in one line.** 618 is not a sale, it is a scheduled traffic event with a presale window, two hard opening bells and a cash-flow tail, and the brands that win it are the ones who finished pricing, inventory allocation and platform paperwork before the presale page went live in late May.

**The table it must carry.** A single hour-by-hour operator log, roughly 22 to 28 rows, running from the presale page going live through midnight on June 18. Columns: China time (date plus hour), what the platform did, what the team did in that hour, minutes elapsed from decision to live change, and consequence stated as a number or a plain "no effect." Rows must include at least: presale page live, presale deposit open, first deposit-to-balance conversion check, the June 1 opening bell, the first hour restock decision, a coupon stack that broke and how long it took to unbreak, a livestream slot handover, the mid-window lull on June 8 to 10, the June 15 replenishment cutoff, the final bell, and the first refund wave. Every row must be an hour that actually contained a decision. No filler rows.

**The proprietary number.** The share of total 618 window GMV that landed inside the first four hours after the June 1 opening bell, averaged across the cross-border stores TheChinaPath ran through 618 2027. Give the split for the June 1 bell versus the June 18 bell. State the number of stores in the sample and the platforms they sat on. Second number if available: median minutes from a pricing decision to that price being live on the storefront, same sample.

**Outline.**
1. What 618 actually is, and why the June 18 date is the least important date in it
2. The presale window: what has to be finished before the page goes live
3. Opening bell, hour by hour: the log
4. The mid-window lull nobody budgets for
5. The second bell and the replenishment cutoff
6. The tail: refunds, reviews, and what the store looks like on June 25
7. What we would do differently in 2028

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /tools/douyin-cost-calculator, /work
**CTA.** Run your own 618 window in the Tmall Global setup and run calculator.
**Do not.** Do not turn the log into a 618 explainer with a history of Jingdong; the format is the value and the first paragraph must already be inside an operating hour. Do not name or make identifiable any brand whose store is in the log, including by category plus country of origin.
**Territory guard.** The livestream host handover and any KOL slot appear in the log only as an operating cost and a schedule dependency. Anything about selecting hosts, briefing creators or seeding content links out to TheRedScroll and is not explained here.

## Slot spec

```
Every Anchor must carry:
1. A title that is the query a buyer types, or its answer. No "Ultimate",
   no "Complete Guide", no brand name in front.
2. The answer inside the first 60 words.
3. One real HTML table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such.
5. A named human byline, published date and updated date.
6. Three to five internal links, at least one to a service page and one
   to a calculator or Compass.
7. One CTA. Never "learn more".
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
- [ ] File saved as `output/618-how-it-works-brands.md`
