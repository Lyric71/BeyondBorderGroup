---
brief_id: 03L
publish_date: 2026-09-23
week: 03
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger A
title: "What it costs to sell dairy and spreads in China"
slug: cost-to-sell-dairy-and-spreads-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: A
proof: "Valio, Langnese. Published figures only."
status: not_started
---

# BRIEF 03L: What it costs to sell dairy and spreads in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 03 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell dairy and spreads in China |
| Slug | `/insights/cost-to-sell-dairy-and-spreads-in-china/` |
| Output file | `output/cost-to-sell-dairy-and-spreads-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | A |
| Proof | Valio, Langnese. Published figures only. |

## The brief

**Title:** What it costs to sell dairy and spreads in China
**Word count:** 1,100 to 1,400

Block 3 carries the weight: dairy is one of the most tightly controlled import categories. Registration of the overseas manufacturer, shelf-life rules on arrival, and the label. Cite everything.
**Proof.** Valio, Langnese. Published figures only.

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
- [ ] File saved as `output/cost-to-sell-dairy-and-spreads-in-china.md`
