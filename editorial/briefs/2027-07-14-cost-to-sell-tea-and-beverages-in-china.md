---
brief_id: 45L
publish_date: 2027-07-14
week: 45
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger A
title: "What it costs to sell tea and beverages in China"
slug: cost-to-sell-tea-and-beverages-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: A
proof: "none"
status: not_started
---

# BRIEF 45L: What it costs to sell tea and beverages in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 45 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell tea and beverages in China |
| Slug | `/insights/cost-to-sell-tea-and-beverages-in-china/` |
| Output file | `output/cost-to-sell-tea-and-beverages-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | A |
| Proof | none |

## The brief

**Title:** What it costs to sell tea and beverages in China
**Word count:** 1,100 to 1,400

Block 3 carries this, and the trap is that foreign brands assume tea is culturally impossible and therefore skip the compliance question entirely, when the actual barrier is food-category paperwork. Instruct the writer to verify and cite whether the specific product form, loose leaf, tea bag, instant powder, ready to drink, is on the cross-border positive list, the shelf-life and production-date declaration rules for imported food, and whether any product with added functional ingredients crosses out of ordinary food into a registration regime. Block 4 is the second half of the page: low unit value plus low weight makes tea a viable cross-border product where beer is not, so run the breakeven at a multi-pack basket and show the repeat purchase assumption openly, since it is the whole model.

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
- [ ] File saved as `output/cost-to-sell-tea-and-beverages-in-china.md`
