---
brief_id: 44A
publish_date: 2027-07-06
week: 44
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell B2B and industrial products in China"
slug: b2b-marketing-china-industrial
primary_query: "b2b marketing china industrial"
difficulty: MED
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 44A: How to sell B2B and industrial products in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 44 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell B2B and industrial products in China |
| Slug | `/insights/b2b-marketing-china-industrial/` |
| Output file | `output/b2b-marketing-china-industrial.md` |
| Primary query | `b2b marketing china industrial` |
| Difficulty | MED |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell B2B and industrial products in China
**Query:** b2b marketing china industrial · **Difficulty:** MEDIUM (Alibaba's own content, SIS International and Daxue rank; no operator page exists)
**Word count:** 2,200 to 2,400

**The answer, in one line.** A foreign industrial supplier does not need a China marketing funnel, it needs three things in sequence: a WeChat presence a Chinese engineer can actually find and forward, a technically credible Chinese-language spec library, and either a local sales entity or a distributor who owns the customer relationship, and the whole budget question is which of those three you pay for first.

**The table it must carry.** A B2B channel table, 6 to 8 rows: WeChat official account plus mini program, industry vertical portals and trade media, Chinese-language technical site and search visibility, trade shows and exhibitions, 1688 and Alibaba's domestic B2B surfaces, distributor or agent network, direct sales hire in China, LinkedIn equivalent professional channels. Columns: who it actually reaches (job title, not "decision makers"), what it costs per month to run at a working level stated as an observed market band with the basis named, realistic cost per qualified lead, sales cycle length in months, and who owns the customer relationship at the end. Note explicitly which rows produce leads and which only produce credibility that other rows convert.

**The proprietary number.** From the Compass vetted-distributor database: the share of vetted partners in the industrial and components segment that hold their own technical sales team versus those that are trading intermediaries, and the median number of end customers those partners claim in the target province set. State the record count and how the vetting distinguishes the two. Add the observed spread in exclusivity demands, since exclusivity is the negotiation that decides this category.

**Outline.**
1. Why the consumer China playbook produces zero industrial leads
2. Who is actually buying: the specification, procurement and plant-engineer triangle
3. The channel table
4. The trade show question, answered with a cost per qualified lead
5. Distributor, agent or your own entity: the three structures and what each costs to keep alive
6. What a foreign supplier can and cannot do without a China legal entity
7. A twelve-month build for an industrial brand with no China presence

**Internal links.** /compass, /enter-china/distribution, /enter-china/market-entry-consulting, /compass/how-it-works, /work
**CTA.** Request a Compass shortlist of vetted industrial distributors.
**Do not.** Do not import consumer marketplace logic; a page that recommends Tmall to a valve manufacturer is a failed page. Do not assert what a foreign company may do without a China entity, including invoicing, hiring and contracting; frame every one of those as a point the writer verifies with a named source and cites.
**Territory guard.** Baidu visibility and the Chinese-language website build are named as dependencies and handed to ChinaWebFoundry with one link each. This page does not explain Baidu SEO, ICP filing or hosting.

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
- [ ] File saved as `output/b2b-marketing-china-industrial.md`
