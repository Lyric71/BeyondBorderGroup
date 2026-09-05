---
brief_id: 23L
publish_date: 2027-02-10
week: 23
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger A
title: "What it costs to sell outdoor and sports gear in China"
slug: cost-to-sell-outdoor-and-sports-gear-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: A
proof: "none"
status: not_started
---

# BRIEF 23L: What it costs to sell outdoor and sports gear in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 23 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell outdoor and sports gear in China |
| Slug | `/insights/cost-to-sell-outdoor-and-sports-gear-in-china/` |
| Output file | `output/cost-to-sell-outdoor-and-sports-gear-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | A |
| Proof | none |

## The brief

**Title:** What it costs to sell outdoor and sports gear in China
**Word count:** 1,100 to 1,400

Block 5 carries this one, because outdoor is the category where the platform verdict genuinely flips depending on which half of the catalogue leads. Apparel and packs run cleanly on Tmall Global with a brand story, while technical hardware, batteries, radio devices and anything with a protective claim need the route checked first, so the fee table in block 2 has to be read alongside the compliance answer rather than ahead of it. The specific trap to name: a GPS watch, a headlamp with a lithium cell and a camping stove each fail at a different step, radio type approval, air freight classification and fuel restriction, and all three are verify-and-cite items. Link back to the week 15 anchor in the first two paragraphs, and keep the sourcing disambiguation in the opening lines.

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
- [ ] File saved as `output/cost-to-sell-outdoor-and-sports-gear-in-china.md`
