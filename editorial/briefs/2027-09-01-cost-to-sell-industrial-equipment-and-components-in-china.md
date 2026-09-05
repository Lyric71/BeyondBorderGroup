---
brief_id: 52L
publish_date: 2027-09-01
week: 52
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger B
title: "What it costs to sell industrial equipment and components in China"
slug: cost-to-sell-industrial-equipment-and-components-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: B
proof: "none"
status: not_started
---

# BRIEF 52L: What it costs to sell industrial equipment and components in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 52 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell industrial equipment and components in China |
| Slug | `/insights/cost-to-sell-industrial-equipment-and-components-in-china/` |
| Output file | `output/cost-to-sell-industrial-equipment-and-components-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | B |
| Proof | none |

## The brief

**Title:** What it costs to sell industrial equipment and components in China
**Word count:** 1,100 to 1,400

Ledger B, no marketplace route, and the load sits on the channel table and on the licensing constraint. The specific trap is that industrial buyers do not convert from marketing channels at all in this category, they convert from specification listings, existing installed base and distributor relationships, so the channel table must report cost per qualified lead honestly, including the rows where it is effectively unmeasurable, and say so rather than inventing a figure. Instruct the writer to verify and cite what a foreign supplier may do without a Chinese entity when selling equipment, including contracting, invoicing, holding stock and providing on-site service and warranty work, and whether any of the equipment types in scope require certification or registration before import. Block 4 becomes cost per qualified lead plus sales cycle length in months, and the ledger should state plainly that a cycle measured in quarters makes monthly marketing spend the wrong unit of budgeting for this category.

**Proof.** None available. Use the block 6 honesty line.

**Block 7.** Link to /compass and /enter-china/distribution.

**Link back.** Pairs with the W44 B2B and industrial anchor. Link from block 1, and add the reciprocal link from the anchor.agentId: aa532f1b7bd3f8ccc (use SendMessage with to: 'aa532f1b7bd3f8ccc', summary: '<5-10 word recap>' to continue this agent)
<usage>subagent_tokens: 85315
tool_uses: 2
duration_ms: 280900</usage>

## Slot spec

```
SLOT: Ledger B, Wednesday, 1,200 to 1,500 words
CATEGORY: [B2B or service category]
TITLE: How [category] actually reaches buyers in China
PROOF: [named case study]

Same seven blocks, with block 2 replaced:

2. THE CHANNEL TABLE. Row per channel: what it reaches, monthly cost to
   run, what a qualified lead costs, and who owns the relationship.
   Cover the vertical portals, the social platforms that matter for this
   category, WeChat, distributors, and offline.

Block 3 becomes the regulatory or licensing constraint on selling this
category as a foreign company. Block 4 becomes cost per qualified lead
and the length of the sales cycle. Block 7 links to Compass or the
relevant service page, since no calculator applies.

State plainly and early that this category has no cross-border
marketplace route. That honesty is the differentiator: every competitor's
category content assumes a Tmall store.
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
- [ ] File saved as `output/cost-to-sell-industrial-equipment-and-components-in-china.md`
