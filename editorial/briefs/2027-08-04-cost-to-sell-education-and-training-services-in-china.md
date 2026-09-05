---
brief_id: 48L
publish_date: 2027-08-04
week: 48
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger B
title: "What it costs to sell education and training services in China"
slug: cost-to-sell-education-and-training-services-in-china
primary_query: ""
word_count: "1,100 to 1,400"
variant: B
proof: "none"
status: not_started
---

# BRIEF 48L: What it costs to sell education and training services in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 48 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What it costs to sell education and training services in China |
| Slug | `/insights/cost-to-sell-education-and-training-services-in-china/` |
| Output file | `output/cost-to-sell-education-and-training-services-in-china.md` |
| Primary query | `derive from the title` |
| Body length | 1,100 to 1,400 (body only, per the char-count rule) |
| Ledger variant | B |
| Proof | none |

## The brief

**Title:** What it costs to sell education and training services in China
**Word count:** 1,100 to 1,400

This is a Ledger B: there is no marketplace route, and the licensing constraint is the whole page. Instruct the writer to verify and cite what a foreign company may and may not do in education and training services in China, which activities require a local licence, whether the constraint differs for corporate and professional training versus consumer-facing tutoring and academic services, and whether any of it can be delivered from outside China to Chinese customers without a local entity. That verification decides whether the channel table is even relevant, so it goes above the table, not after it. The channel table then runs WeChat official account, professional community and industry association channels, RedNote, Douyin, partnership with a licensed local training provider, and offline events, each with what it reaches, monthly cost to run as an observed market band with the basis named, cost per qualified lead, and who owns the relationship. Block 4 becomes cost per qualified lead plus sales cycle length, which in this category is long enough that the ledger should state it in months and name what stalls it.

**Proof.** None available. Use the block 6 honesty line.

**Block 7.** Link to /compass and /enter-china/market-entry-consulting rather than a calculator.

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
- [ ] File saved as `output/cost-to-sell-education-and-training-services-in-china.md`
