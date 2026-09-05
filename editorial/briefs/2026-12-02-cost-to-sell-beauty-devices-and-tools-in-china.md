---
brief_id: 13L
publish_date: 2026-12-02
week: 13
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger A
title: "What it costs to sell beauty devices and tools in China"
slug: cost-to-sell-beauty-devices-and-tools-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: A
proof: "none"
status: not_started
---

# BRIEF 13L: What it costs to sell beauty devices and tools in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 13 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell beauty devices and tools in China |
| Slug | `/insights/cost-to-sell-beauty-devices-and-tools-in-china/` |
| Output file | `output/cost-to-sell-beauty-devices-and-tools-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | A |
| Proof | none |

## The brief

**Title:** What it costs to sell beauty devices and tools in China
**Word count:** 1,100 to 1,400

Block 3 carries the weight. Beauty devices sit on the line between cosmetics and electronics: a facial cleansing brush, an LED mask, a hair removal device and a scalp massager do not share a route. Anything with a plug or a battery raises the mandatory product certification question, anything that claims a skin effect raises the question of whether it is a cosmetic, a household appliance or a medical device under the current classification, and the writer must verify and cite the current position for each sub-type rather than summarize. Block 2 uses the closest calculator category (small appliances or beauty, whichever the platform files the device under) and says so. Block 4 should note the unusually high return rate on devices sold cross-border, which changes the fee arithmetic more than the commission does. Block 5 should say Tmall Global for brand-led devices and Douyin cross-border where the product demonstrates well on video.

**Proof.** None available. Use the block 6 honesty line.

## Slot spec

```
SLOT: Ledger A, Wednesday, 900 to 1,400 words
CATEGORY: [category]
TITLE: What it costs to sell [category] in China
PROOF: [named case study, or "none available"]

Seven blocks, in this order:

1. THE ANSWER. 60 words. Which platform wins for this category and
   roughly what year one costs.
2. THE FEE TABLE. Deposit, annual fee and commission for this category
   on Tmall Global, JD Worldwide and Douyin cross-border. Real figures.
3. THE ROUTE. Cross-border positive list status. Licence, registration
   or test report required. What the Chinese label must carry. Cite every
   regulatory claim.
4. UNIT ECONOMICS. Typical order value for the category, cost per order
   at the fee table above, breakeven GMV.
5. THE VERDICT. Which platform first, and the condition that flips it.
6. PROOF OR HONESTY. The named case study using only figures already
   published on /work, or one plain line saying this is not a category
   the team has worked in.
7. THE TOOL LINK. Deep link to the matching calculator with this
   category preselected.

KILL CONDITION: if the block-2 table is identical to a category already
published, do not write this page. Merge it into that one.
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
- [ ] File saved as `output/cost-to-sell-beauty-devices-and-tools-in-china.md`
