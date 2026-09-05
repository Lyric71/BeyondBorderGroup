---
brief_id: 38A
publish_date: 2027-05-25
week: 38
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "Twelve questions to ask before signing a China distributor"
slug: questions-to-ask-china-distributor
primary_query: "questions to ask china distributor"
difficulty: OPEN
word_count: "2,000 to 2,400"
asset: "Twelve questions to ask a China distributor"
asset_format: "Question, good answer, red flag"
status: not_started
---

# BRIEF 38A: Twelve questions to ask before signing a China distributor

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 38 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Twelve questions to ask before signing a China distributor |
| Slug | `/insights/questions-to-ask-china-distributor/` |
| Output file | `output/questions-to-ask-china-distributor.md` |
| Primary query | `questions to ask china distributor` |
| Difficulty | OPEN |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |
| Asset | `output/guides/questions-to-ask-china-distributor.md`, publishes to `/guides/questions-to-ask-china-distributor/` (Question, good answer, red flag) |

## The brief

**Title:** Twelve questions to ask before signing a China distributor
**Query:** questions to ask china distributor · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** Most distributor relationships fail on four things that a brand can test in a single meeting: who actually owns the end customer, what the real geographic footprint is versus the claimed one, how price is controlled downstream, and what happens to your stock and your data when the contract ends.

**The table it must carry.** The three-column sheet, twelve rows. Columns: The question, What a good answer sounds like, The red flag. The twelve questions must cover: sub-distributor structure and how many layers sit below them, province-by-province coverage with named accounts, which retailers they hold direct relationships with, existing brands in your category and any conflict, who sets retail price and how it is enforced, minimum order and payment terms, who holds the import licence and registration records, marketing budget commitments and who controls the spend, sell-through reporting cadence and format, ownership of customer data and CRM, ecommerce rights and whether they will open marketplace stores under your brand, and termination terms including stock buyback and trademark reassignment. The good-answer and red-flag cells must be quotable sentences, not descriptions.

**The proprietary number.** From the Compass distributor database: the share of distributors who claim national coverage against the share whose verifiable records support a footprint beyond a single region, plus the median number of brands per distributor in the database. State the database size and the date of the cut.

**Outline.**
1. The four failure modes behind every dead distributor relationship
2. Coverage: how to test a national claim in one conversation
3. Price: who sets it, who enforces it, and what happens when they discount
4. Licences and records: what they hold in their name that you will want back
5. Data and the end customer: the question most brands never ask
6. Ecommerce rights: the clause that costs brands their own Tmall store
7. Termination: stock, trademarks, and the exit you write on day one
8. The twelve questions, in order, with the answers to walk away from

**Internal links.** /compass, /compass/how-it-works, /compass/shortlist, /enter-china/distribution, /enter-china/market-entry-consulting
**CTA.** Download the twelve-question sheet, then build a shortlist in Compass filtered by the coverage you actually need.
**Do not.** Do not write generic partner-selection advice that would apply in any market. Every question must be China-specific, and the ecommerce rights and licence-holding questions carry the piece. Do not name or characterise real distributors.

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
- [ ] File saved as `output/questions-to-ask-china-distributor.md`
