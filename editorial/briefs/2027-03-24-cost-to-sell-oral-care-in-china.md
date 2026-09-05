---
brief_id: 29L
publish_date: 2027-03-24
week: 29
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger A
title: "What it costs to sell oral care in China"
slug: cost-to-sell-oral-care-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: A
proof: "none"
status: not_started
---

# BRIEF 29L: What it costs to sell oral care in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 29 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell oral care in China |
| Slug | `/insights/cost-to-sell-oral-care-in-china/` |
| Output file | `output/cost-to-sell-oral-care-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | A |
| Proof | none |

## The brief

**Title:** What it costs to sell oral care in China
**Word count:** 1,100 to 1,400

Block 3 carries this one. Oral care is a classification trap: the regulatory treatment of toothpaste changed, and whether a product is handled as a cosmetic, an ordinary consumer good, or something with an efficacy claim depends on what the pack says, so a whitening or anti-sensitivity claim can pull an otherwise simple SKU into a heavier filing and substantiation path. Writer must verify and cite the current rule set governing toothpaste specifically, including any filing or record requirement and any efficacy substantiation obligation for whitening and gum health claims, and must show the cost difference in block 4 between a plain-claim SKU and a claims SKU. Block 5 should say which claims are worth paying for at this category's order value and which are not.

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
- [ ] File saved as `output/cost-to-sell-oral-care-in-china.md`
