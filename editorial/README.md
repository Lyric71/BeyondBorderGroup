# TheChinaPath editorial system

The year-one editorial plan (four slots a week, fifty-two weeks) and the
specs Claude Code drafts it from. Lives in `editorial/` inside the
TheChinaPath repo so the pipeline can publish straight into
`src/content/insights/`. Week 01 opens September 7, 2026.

Same principles and wiring as TheRedScroll's `editorial/`: a schedule CSV as
the single state file, one brief per slot, a house `createarticle` skill, a
PowerShell runner on Windows Task Scheduler, a Resend email on publish.

## Start here

1. `RUNBOOK.md` for the weekly process, the calendar exceptions and the
   automation.
2. `CLAUDE.md` for voice, the four slots and the standing rules. Claude Code
   loads this automatically.
3. `SPEC.md` for the output contract and the definition of done.

## Layout

```
CLAUDE.md                 standing rules, auto-loaded
SPEC.md                   output contract
RUNBOOK.md                weekly process and automation
schedule.csv              208 rows, four a week, status tracking
briefs/
  PREAMBLE.md             Part 0 of the master plan, applies to every slot
  templates/              Signal, Anchor, Ledger A, Ledger B, Teardown, Refresh
  YYYY-MM-DD-<slug>.md    104 Anchor and Ledger briefs, named by publish date
sources/
  site-profile.md         cached site fetch, refresh monthly
  verified-sources.md     the source ledger, read before researching
  signal-watch-list.md    where Monday's Signal comes from
  teardown-criteria.md    the four criteria and candidate brands
output/                   finished drafts land here (guides/ and reports/ too)
logs/                     one run log per piece, TEMPLATE.md to copy
  runs/                   console output of scheduled runs (gitignored)
scripts/
  build-briefs.mjs        regenerates briefs/ and schedule.csv from the master plan
  run-daily.ps1           the runner (draft | publish)
  register-tasks.ps1      registers the two Windows scheduled tasks
  notify-publish.mjs      Resend email on publish
```

The master plan is `public/content/editorial-briefs.md`. Edit it, then run
`node editorial/scripts/build-briefs.mjs`.

## The daily command

```
Draft today's slot.
```

## The pipeline

Chinese deep research (every source validated twice), `/createarticle`,
`/content-quality-us` on every piece, `/generate-image-openai` for the hero,
then `/createblogarticle` plus `/deep-translate` (FR, DE, ES) from the
publish task, then an email to Cyril when the publish is done. `CLAUDE.md`
has the table.

## The one rule people get wrong

The upstream CreateArticle skill tells you to plant deliberate typos. This
project forbids it. The house copy at `.claude/skills/createarticle/` runs a
cadence pass instead, and `CLAUDE.md` says so at the top. Humanize through
cadence only.
