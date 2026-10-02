# 2026-10-02: no-TODO sweep (rule change and closure of open items)

Requested by Cyril: no publishing job leaves a TODO behind, in any project;
close every open item, change the rule so it cannot recur, then build,
commit and push. Model: Claude Opus 5.5 on every step.

## Rule changes

- `editorial/CLAUDE.md`: new section "No TODO leaves a run" (what a run
  finds, how it is closed in the same run); Report weeks publish as a
  printable guide with a request CTA (the site has no gated download);
  the proprietary number has a settled fallback (calculator data, then a
  case page, else none) and no marker; settled items added under "Project
  wins over runbook" (headless rendering of the rule centres, service pages
  versus the territory rule, SEO field changes signed off by the review
  window); the notify command has no `--todo`.
- `editorial/SPEC.md`: "When to stop and flag" replaced by "Closing what
  the draft finds" (seven cases, none leaves a marker); the ASSET BRIEF
  field `CLIENT SIGN-OFF NEEDED` became `CLIENT FIGURES USED`; definition of
  done checks zero markers.
- `editorial/RUNBOOK.md`: `check-no-todo.mjs` added to the publish gates;
  the email carries no open items; the troubleshooting rows that left
  `TODO: proprietary number` and `TODO: client sign-off` rewritten.
- `.claude/CLAUDE.md` section 20 and `.claude/skills/createarticle/SKILL.md`
  carry the rule.
- `editorial/scripts/run-daily.ps1`: draft, partner and publish prompts
  carry the rule; publish runs `check-no-todo.mjs` first.
- `editorial/scripts/notify-publish.mjs`: `--todo` removed; the script
  refuses `--todo`, `--open`, `--followup`, or a `--note` with a marker.
- `editorial/scripts/build-briefs.mjs`: the Report line no longer says
  "assembled by a person".
- `editorial/logs/TEMPLATE.md`: "Flags" became "Found and closed in this run".
- Master plan `public/content/editorial-briefs.md`: the fourteen
  "Fallback: log the gap" lines and the P01 fallback now name the settled
  fallback; the Anchor preamble says how to treat a "from stores under
  management" or "from Compass" figure that is not on file. Briefs
  regenerated (154 files).

## Enforcement

`scripts/check-no-todo.mjs` (`npm run check:todo`) fails on TODO, FIXME or
TBD in `src/content/`, `editorial/output/`, `editorial/sources/`,
`editorial/briefs/` and the master plan. Wired into the publish step and the
pre-commit hook (`--staged`), reinstalled with `npm run hooks:install`.

## Open items closed (logs of September 18 to October 2)

| Item | Where it was raised | How it was closed |
|---|---|---|
| `TODO: proprietary number` markers in ten drafts and one ledger note | outputs of double-11-preparation-checklist, china-social-media-marketing-cost-per-month, douyin-store-vs-douyin-ads, china-trade-fairs-find-distributor, verify-chinese-company-qichacha, payment-terms-chinese-distributor, sell-in-vs-sell-out-china-distributor, china-distributor-price-control-parallel, replace-distributor-china, tmall-agency-fake-orders-brand-liability; ledger | Markers removed; settled fallback recorded in each ASSET BRIEF and in the ledger. Published copy never carried them. |
| `compass-stats.md` missing, repeated in every partner log | Sept 24 to Oct 2 | Settled fallback written into `editorial/CLAUDE.md`, the run prompts and the master plan; no run reports it again. |
| 03A can cite Tmall Oct 15 and JD Oct 12 | Sept 28 Signal log | Added to `double-11-preparation-checklist` in EN, FR, DE, ES with citations (both pages re-fetched today, third check), `updatedDate` 2026-10-02. |
| 03A working H1 still "60-day" in the master plan | Sept 22 | Master plan W03 now says 50-day, with the decided publish date; schedule row regenerated. |
| 04L proof Bassetti is not a bedding client | Sept 30 | Master plan W04 Ledger corrected. |
| Calculator home rows and JD rows contradict the platforms' rules; footwear Ledger's JD row stale | Sept 30 | All four Tmall Global and JD Worldwide calculators corrected against the rule pages rendered and checked twice today (JD fee standard revised Sept 24, effective Oct 1; JD has no annual fee; Tmall home and bedding 60,000). Six JD-citing articles corrected in four locales, `updatedDate` moved. Ledger: "Calculator fee audit, October 2, 2026"; superseded entries marked. |
| Bedding article cites the JD standard as "effective August 1, 2026" | today, after the audit | Citation now gives the Sept 24 revision and Oct 1 effective date in four locales (bedding figures unchanged), `updatedDate` 2026-10-02. |
| 04A WeChat rows rest on 2018 list prices | Sept 29 | Newer official rate card found (WeChat Moments deck, Q2 2020, same minimums, checked twice); cited in four locales. No official card dated 2023 to 2026 exists; the copy states the vintage. |
| `/grow-in-china/social-commerce` versus the territory rule | Sept 29, Oct 2 | Settled in `editorial/CLAUDE.md`: service pages are Cyril's commercial pages; articles follow the territory rule; no log flags the difference again. |
| Signal sweep "blind spot", recommendation of a logged-in export | Sept 7, 14, 21, 28 | Settled method (headless browser, gov.cn and MOFCOM mirrors) written into `editorial/CLAUDE.md` and `sources/signal-watch-list.md`. |
| Back-queue Signal candidate NMPA No. 70; battery consumption tax 2% to 4% | Sept 21 | NMPA No. 70 closed (published as P02). Battery tax registered in the watch list's dated items for 2027-09-01. |
| P03 should link to 07A once live | Sept 24 | Registered in the master plan's W07 brief ("On publish"), regenerated. |
| AML ledger entry lacks the SAMR safe harbor cross reference and a Used in | Sept 24 | Done in the ledger. |
| P06 log: 2021 and 2018 star schemes not marked superseded; listed-operator entry not retired | Sept 24 | Marked in `logs/partner/P06.md`. |
| P06 brief answer line out of date (three to five stars) | Sept 24 | Master plan P06 answer line corrected to the 2026 rule. |
| Dairy Ledger may imply direct mail for butter or cheese | P09 log | Checked: the piece covers bonded and general trade only. Nothing to change. |
| Douyin cross-border deposit table | P05 log | Already corrected on Sept 24 (5,000 RMB); confirmed in the calculator. |
| schedule.csv notes carrying "Open TODO" | 03A, 04A, 05A | Rewritten as closed. |
| Site profile monthly refresh | Oct 1 | Done by the Oct 2 draft run. |

## Not closed here

- `Relaunch-MissedTasks.ps1` (the automation repo, outside this repository)
  can start a second session while one is alive. Runs since Oct 1 detect a
  live peer and stand down, so no publish has raced since.

## Checks

Recorded in the commit: check-no-todo, check-insight-links,
generate-llms-full, astro check and the build.
