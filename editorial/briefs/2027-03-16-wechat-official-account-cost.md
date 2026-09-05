---
brief_id: 28A
publish_date: 2027-03-16
week: 28
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a WeChat presence costs a foreign brand"
slug: wechat-official-account-cost
primary_query: "wechat official account cost"
difficulty: WEAK
word_count: "1,900 to 2,300"
status: not_started
---

# BRIEF 28A: What a WeChat presence costs a foreign brand

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 28 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a WeChat presence costs a foreign brand |
| Slug | `/insights/wechat-official-account-cost/` |
| Output file | `output/wechat-official-account-cost.md` |
| Primary query | `wechat official account cost` |
| Difficulty | WEAK |
| Body length | 1,900 to 2,300 (body only, per the char-count rule) |

## The brief

**Title:** What a WeChat presence costs a foreign brand
**Query:** wechat official account cost · **Difficulty:** WEAK
**Word count:** 1,900 to 2,300

**The answer, in one line.** A working WeChat presence for a foreign brand is four separate purchases, not one, and the setup bill is the small half: verification and account registration land in the low four figures in dollars, while the recurring cost of running a mini program store, a payment merchant account and a CRM sits in the low to mid four figures a month before anyone writes a single post.

**The table it must carry.** One cost table, six rows, five columns. Columns: Component, What it actually does, One-time setup band (RMB and USD), Annual run band (RMB and USD), Who can own it. Rows: (1) Official Account, service type, verified, (2) Official Account, subscription type, verified, (3) Mini Program storefront build and hosting, (4) WeChat Pay merchant account and settlement, (5) SCRM or CRM layer plus tagging and member data, (6) Channels store and livestream capability. Bands, not point estimates. Writer to verify and cite the current annual verification fee and any WeChat Pay rate and settlement terms with a source, and to state the date checked.

**The proprietary number.** From TheChinaPath's calculator runs: the median monthly WeChat run cost modelled across foreign-brand cross-border scenarios, split between platform and tooling cost versus people cost, with the run count stated. Say plainly what share of that median is fixed regardless of sales volume.

**Outline.**
1. The four things people mean when they say WeChat
2. Setup: what you pay once, and what a verified account actually unlocks
3. Running it: the monthly bill nobody quotes you
4. The mini program store versus a Tmall Global flagship, on cost per order
5. What WeChat is good at for a foreign brand, and what it is not
6. Three presence levels and what each one costs to hold for twelve months
7. How to decide before you spend

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/social-commerce, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /insights
**CTA.** Model your own year one against the Tmall Global setup and run calculator before you commit to a mini program build.
**Do not.** Do not publish a step-by-step account registration walkthrough. Every incumbent already ranks for that and it is the wrong buyer. Do not quote a single number for "a WeChat account"; the whole value of this piece is the split.
**Territory guard.** Content production, community management and ongoing editorial for the account are named as recurring cost lines with a band, then handed to TheRedScroll. ICP filing and hosting for anything outside the mini program hand to ChinaWebFoundry. One line each.

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
- [ ] File saved as `output/wechat-official-account-cost.md`
