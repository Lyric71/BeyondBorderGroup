---
brief_id: 10L
publish_date: 2026-11-11
week: 10
weekday: Wed
slot: L
slot_name: Ledger
content_type: Ledger B
title: "How hotel groups actually reach Chinese travellers"
slug: how-hotel-groups-reach-chinese-travellers
primary_query: ""
word_count: "1,200 to 1,500"
variant: B
proof: "Marriott, including the published Tmall Super Brand Day and Bonvoy enrolment figures. Channels: Fliggy and Ctrip, WeChat mini programme for direct booking, RedNote for consideration, and the loyalty programme as the actual asset. This is the one Ledger B with a marketplace component, so it can carry a partial fee table for Fliggy."
status: not_started
---

# BRIEF 10L: How hotel groups actually reach Chinese travellers

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Ledger, Wed of week 10 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How hotel groups actually reach Chinese travellers |
| Slug | `/insights/how-hotel-groups-reach-chinese-travellers/` |
| Output file | `output/how-hotel-groups-reach-chinese-travellers.md` |
| Primary query | `derive from the title` |
| Body length | 1,200 to 1,500 (body only, per the char-count rule) |
| Ledger variant | B |
| Proof | Marriott, including the published Tmall Super Brand Day and Bonvoy enrolment figures. Channels: Fliggy and Ctrip, WeChat mini programme for direct booking, RedNote for consideration, and the loyalty programme as the actual asset. This is the one Ledger B with a marketplace component, so it can carry a partial fee table for Fliggy. |

## The brief

**Title:** How hotel groups actually reach Chinese travellers
**Word count:** 1,200 to 1,500
**Proof.** Marriott, including the published Tmall Super Brand Day and Bonvoy enrolment figures. Channels: Fliggy and Ctrip, WeChat mini programme for direct booking, RedNote for consideration, and the loyalty programme as the actual asset. This is the one Ledger B with a marketplace component, so it can carry a partial fee table for Fliggy.

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
- [ ] File saved as `output/how-hotel-groups-reach-chinese-travellers.md`
