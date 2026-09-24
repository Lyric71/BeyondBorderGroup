# Compass partner cluster: editorial plan

Status: SUPERSEDED by `finding-a-partner-50.md` (same day) for the article
queue; sections 1, 2 and 5 still describe the architecture.
Originally a PROPOSAL, drafted September 24, 2026. Nothing here changes
`public/content/editorial-briefs.md` or `editorial/schedule.csv` until the
founder signs off. Section 5 lists the exact changes to apply once approved.

Goal: make "finding a partner in China" (distributor, Tmall Partner, Douyin
Partner) a topic TheChinaPath owns in search, and route every piece of it to
Compass. The three guides and the reading list are live on the site; this plan
is the content that feeds them.

---

## 1. What the current year-one plan does for Compass

Read against `editorial-briefs.md` and `schedule.csv` on September 24, 2026.

| Finding | Detail |
|---|---|
| Partner selection is thin | 5 of 52 Anchors touch it: 01A (published), 07A (Oct 20), 25A (Feb 23), 34A (Apr 27), 38A (May 25). |
| Tmall Partner arrives late | The only TP selection piece is 34A, in April 2027. |
| Douyin Partner is absent | No piece in the year covers choosing or paying a DP, although the DP calculator exists. |
| Compass is a link, not a subject | It appears in internal-link lists and CTAs. Only W07 and a few category briefs use Compass data as the proprietary number. |
| Dead link in the preamble | `/compass/how-it-works` is still listed in Part 0 and in five briefs (W07, W25, W38, W44, W46). The page was folded into `/compass`; the 03T run already logged it. |
| Cannibalization risk | `insights/how-to-find-a-distributor-for-your-products-in-china-in-2024` ("Comprehensive Guide to Finding a Distributor…") competes with the new distributor guide for the same query. |
| Signal slot mostly empty | 01S, 02S and 03S were all skipped under the kill condition. That slot is the obvious place to add volume without displacing Anchors or Ledgers. |

## 2. Architecture

```
/compass                                    product page (the database)
  /compass/find-a-distributor-in-china      guide (pillar)
  /compass/find-a-tmall-partner-in-china    guide (pillar)
  /compass/find-a-douyin-partner-in-china   guide (pillar)
/insights/finding-a-partner                 reading list (hub), header menu "Insights"
  every cluster article                     tag: "Finding a partner"
/guides/<slug>                              printable assets (checklists, scorecards)
```

- **Tag rule.** Every cluster article carries the tag `Finding a partner` in its
  English frontmatter (`PARTNER_INSIGHT_TAG` in `src/lib/partner-guides.ts`).
  That alone lists it on the hub page, in the header menu, and in the "Keep
  reading" strip of all three guides.
- **Link rule.** Each cluster article links to the guide it serves, to `/compass`,
  and to one other cluster article. The CTA is the Compass shortlist
  (`/compass/shortlist`).
- **Proprietary number.** Every cluster article carries one figure only Compass
  can publish (share of candidates that fail a check, median shortlist time,
  share of TPs with a live store in the brief's category…), labelled with the
  pull date.

## 3. The partner queue

Ordered for publication. Queries are working targets; validate each with the
usual research step. "Serves" is the guide it links up to.

| # | Working title | Target query | Type | Serves |
|---|---|---|---|---|
| P1 | What a Douyin Partner costs in year one | douyin partner cost | Anchor-style | DP |
| P2 | The Tmall Partner contract: the clauses that decide your exit | tmall partner contract terms | Anchor-style | TP |
| P3 | How to replace a China distributor without losing the shelf | replace distributor china | Anchor-style | Distributor |
| P4 | Can one agency run both Tmall and Douyin? | tmall partner douyin partner same agency | Anchor-style | TP, DP |
| P5 | Checking a Chinese company before you sign: the credit registry and Qichacha | verify chinese company | Anchor + Asset | Distributor |
| P6 | Importer, distributor or TP: who you need for Tmall Global | tmall global importer | Anchor-style | TP, Distributor |
| P7 | The trade fairs worth a foreign brand's time for meeting distributors | china trade fairs find distributor | Anchor-style | Distributor |
| P8 | What a brand live room needs before you hire a DP | douyin live room setup brand | Anchor-style | DP |
| P9 | Regional or national distributor: how coverage really works in China | regional distributor china | Anchor-style | Distributor |
| P10 | Selling to JD self-run, Tmall Supermarket and Hema through an online distributor | jd self operated supplier foreign brand | Anchor-style | Distributor |
| P11 | The first 90 days with a new Tmall Partner | tmall partner onboarding | Anchor-style | TP |
| P12 | How DPs book creators, and what creator commission really costs | douyin affiliate commission brand | Anchor-style | DP |
| P13 | How to brief a China partner search | china distributor search brief | Asset (template) | all |
| P14 | Distributor red flags from the Compass files | china distributor red flags | Anchor-style, proprietary | Distributor |
| P15 | Switching Tmall Partners: a handover checklist | switch tmall partner | Asset (checklist) | TP |
| P16 | Douyin shop ownership: which accounts must be in your name | douyin shop account ownership brand | Anchor-style | DP |
| P17 | Exclusivity in a China distribution deal: what to give, what to keep | china distributor exclusivity | Anchor-style | Distributor |
| P18 | What fifteen years of partner meetings say about who succeeds | china distribution partner success | Report (Compass data) | all |

Spacing rules, in line with the plan's existing ones:
- P17 sits at least eight weeks from 25A (distribution agreement), and P2 at least eight weeks from 34A (TP, in-house or agency). They answer different queries and interlink.
- P3 and 07A (real distributor vs trading company) interlink both ways.

Printable assets for `/guides/` (English only), each built from a guide's table:
- Distributor due-diligence checklist (the eight checks)
- Tmall Partner scorecard (the seven checks plus fee models)
- Douyin Partner live-room audit sheet (the seven checks)

## 4. How it fits the four-slot week

Recommended: **the Signal slot falls back to the partner queue.** When the
Monday Signal kill condition fires (it has fired three weeks out of three), the
run drafts the next unpublished P-item instead of skipping. That adds up to one
partner piece a week with no Anchor or Ledger displaced, and a real Signal
still wins when there is one.

Supporting changes to existing slots:
- **Anchors.** Pull 34A (Tmall Partner, in-house or agency) forward from
  April 27, 2027 to December 2026, swapping it with an Anchor that is not
  date-bound. 07A stays on October 20, 2026.
- **Ledgers.** Every Ledger A and B gets a short "Who runs this category in
  China" paragraph that links to the matching guide, and uses the Compass
  shortlist CTA.
- **Teardowns.** The teardown template records the partner model the brand
  used (distributor, TP, DP, in-house) and links to that guide.
- **Refresh.** The next distributor-related Refresh targets
  `how-to-find-a-distributor-for-your-products-in-china-in-2024`. Recommended
  outcome: a 301 to `/compass/find-a-distributor-in-china`, with the FR, DE and
  ES versions redirected to their locale home until the guide is translated.
  SEO-sensitive, needs sign-off.

## 5. Changes to apply once approved

1. `editorial-briefs.md` Part 0: replace `/compass/how-it-works` with the three
   guide paths and `/insights/finding-a-partner`, in the preamble and in every
   brief that lists it.
2. Add the tag rule and the link rule from section 2 to Part 0.
3. Add the partner queue (section 3) as a new Part 2 table, "The partner queue".
4. `editorial/RUNBOOK.md` and `briefs/templates/signal.md`: the kill condition
   falls back to the next `not_started` P-item instead of `skipped`.
5. Move 34A per section 4 and regenerate with `node editorial/scripts/build-briefs.mjs`.
6. Ledger and teardown templates: add the partner paragraph and the partner-model field.
7. Redirect plan for the 2024 distributor article (Refresh slot).

## 6. Measurement

- Rankings for the three guide queries and the P-item queries, checked monthly.
- Compass shortlist form submissions whose referrer is a guide, the hub, or a
  tagged article.
- Clicks on the "Find a partner" hero slide CTAs (Explore Compass, Get a
  shortlist, How we work).
