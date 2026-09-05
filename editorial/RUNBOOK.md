# Weekly runbook

Four slots a week, Monday to Thursday, for fifty-two weeks. Week 01 opens
Monday September 7, 2026; week 52 closes Thursday September 2, 2027. Friday
is review only.

## The daily command

Open Claude Code at the repo root and paste:

```
Draft today's slot.
```

That is the whole prompt. `CLAUDE.md` tells Claude what "today's slot" means.
If you want a specific one:

```
Draft brief 04A.
```

Brief ids are `<week><slot>`: `S` Signal, `A` Anchor, `L` Ledger, `T`
Teardown, `R` Refresh. So `04A` is the week 4 Anchor, `07L` the week 7
Ledger, `09T` the week 9 Teardown.

To publish a reviewed draft by hand:

```
Publish china-distributor-vs-own-store
```

## What Claude does, in order

1. Reads `CLAUDE.md`, `SPEC.md` and `briefs/PREAMBLE.md`.
2. Finds today's row in `schedule.csv`. If today has no row, takes the oldest
   row with status `not_started` that has a brief file, and says so.
3. Reads the brief (Anchor, Ledger) or the slot template (Signal, Teardown,
   Refresh) plus the matching source file (`signal-watch-list.md`,
   `teardown-criteria.md`, or the refresh queue below).
4. Checks the kill condition for the slot. If it fires, sets the row to
   `skipped` with the reason, writes a short run log, and stops.
5. Reads `sources/site-profile.md` instead of fetching the site, unless the
   profile is more than a month old.
6. Reads `sources/verified-sources.md` and reuses any figure already logged
   and verified twice.
7. Runs deep research in Chinese for every figure still missing. Validates
   each source (check 1). Writes the research note into the run log. No body
   copy before this.
8. Runs `/createarticle` (13 iterations, iteration 7 as the cadence variant,
   iteration 8 re-fetches every cited URL for check 2), printing the tracker.
   Writes `output/<slug>.md`. On an Asset week, also writes
   `output/guides/<slug>.md`.
9. Runs `/content-quality-us` on the output (18 passes, in place). House SEO
   ceilings (52 / 152 / 25 words) override the skill's own.
10. Runs `/generate-image-openai` with the prompt from the feature-image
    block, checks the image visually, converts it to webp, saves it to
    `public/Images/insights/<slug>.webp`.
11. Appends new figures to `sources/verified-sources.md` with both check
    dates.
12. Updates the `schedule.csv` row: status `image_ready`, with `drafted_on`,
    `quality_passed_on` and `image_generated_on` filled.
13. Writes `logs/YYYY-MM-DD.md`.

Then it stops. The publish task picks the row up two and a half hours later
unless someone sets it to `blocked` first.

## Publishing

`Publish <slug>` (or the scheduled publish run) runs `/createblogarticle` on
`output/<slug>.md`. That skill creates `src/content/insights/<slug>.md`, maps
the frontmatter to the insights schema, wires the hero image, propagates to
FR, DE and ES with native slugs (`src/i18n/insight-slugs.mjs` gets one entry
per locale, per `.claude/CLAUDE.md` 6.11), and runs the build. It then runs
`/deep-translate` on each locale, all three passes, FR then DE then ES. The
propagation and the deep translation are part of the publish step, never
optional, never deferred. Claude sets the row to `published` with
`published_on`.

Guides publish into `src/content/guides/` (English only, no locale
propagation). Refreshes update the existing insight files in place, in every
locale, and move `updatedDate`.

Then, in this order, and only when each step passes: `npm run build`,
`npx astro check`, `git add` of everything the piece touched, one commit on
main (`feat(insights): publish <slug>`), `git push origin main`. A failed
build or check means no commit, no push, the row stays at `image_ready`, and
the email reports the failure. Vercel deploys from main, so the push is what
puts the article live. The scheduled publish run is the explicit request for
a build that `.claude/CLAUDE.md` section 19 requires; nothing else in this
pipeline builds.

When the publish finishes, Claude runs `scripts/notify-publish.mjs` from the
repo root. It sends one email through Resend (`RESEND_API_KEY` in `.env`) with
the live URL per locale, the hero image path, build status, open TODOs and
the run log path. If the send fails, Claude says so instead of skipping
silently.

## Weekly rhythm

| Day | Slot | Job |
|---|---|---|
| Monday | Signal | A platform or regulatory change with an operating consequence, worked at a stated GMV. Skipped when nothing moved a number. |
| Tuesday | Anchor | The week's query-owning piece. The answer in 60 words, a real table, a proprietary number, a byline. |
| Wednesday | Ledger A or B | "What it costs to sell [category] in China" or "How [category] reaches buyers in China". Seven blocks. |
| Thursday, odd weeks | Teardown | How a named non-client brand entered China, every figure sourced. |
| Thursday, even weeks | Refresh | One back-catalogue insight upgraded to the Anchor spec. |
| Friday | none | Review. Fix what the week shipped. Refresh the site profile on the first working day of the month. |

Ledger scheduling rule: a category that also has a category Anchor sits at
least eight weeks from it, and the two interlink. The schedule already
resolves this; do not swap Ledger weeks without checking the rule.

If a week slips, drop the Signal, then the Thursday slot. Never drop the
Anchor. If two weeks slip, run Anchor and Ledger only.

## The refresh queue

Even-week Thursdays refresh one existing insight. The queue is computed on
the day, not stored: list `src/content/insights/*.md`, sort by `updatedDate`
(falling back to `pubDate`) ascending, skip anything published or refreshed
in the last twelve months, skip anything already refreshed by this plan
(grep `schedule.csv` notes for the slug), take the first. Kill condition: if
the only change would be the year in the title, take the next one. Re-dating
without substantive change teaches Google to ignore dates on this domain.

## Dates that break the rhythm

| When | What | What to do |
|---|---|---|
| Sept 22, 2026 | Double 11, 60-day checklist (03A) | Decided Sept 4, 2026: 03A stays on Sept 22 even though the brief says "do not publish after 12 September". Write it as the 50-day checklist, counting back from Nov 11, and keep the "60-day" framing only if the copy explains the countdown honestly. |
| Sept 25 to 27 | Mid-Autumn Festival | China-side review finishes Thursday Sept 24. |
| Oct 1 to 7 | National Day Golden Week | Week 04 falls inside it. Draft 04A and 04L during the week of Sept 28 with `Draft brief 04A` and `Draft brief 04L`, one at a time. |
| Oct 28 | Double 11, last fourteen days | Brief 08A. Fixed date, do not slip. |
| Nov 11 | Double 11 | 10A (live read) and 11A (results, gated report) must publish within their weeks. |
| Feb 6, 2027 | Chinese New Year | 16A (CNY cut-off calendar) publishes Dec 22, 2026. Office closes around Feb 5 to 13; draft weeks 23 and 24 early. |
| June 18, 2027 | 618 | 27A (100-day plan) on Mar 16, 37A (last three weeks) on May 25, 40A (operator's log) on Jun 15, 42A (results) on Jun 29. |

## Before the first run

1. `sources/site-profile.md` was written on Sept 4, 2026. Refresh due Oct 1:
   `Refresh sources/site-profile.md from the repo and the live site.`
2. Seed `sources/verified-sources.md` with platform fee figures you already
   trust (the calculators' category data is the obvious first batch). Every
   one you add now is one Claude does not research later. Each seeded entry
   still needs its two check dates.
3. Fill `sources/signal-watch-list.md` with the feeds you actually read. The
   seed list is a starting point, not the plan's.
4. Add candidate brands to `sources/teardown-criteria.md`. Claude verifies
   the four criteria on the day; a pre-vetted list makes Thursday faster.
5. `OPENAI_API_KEY` and `RESEND_API_KEY` are in `.env` at the repo root
   (added Sept 4, 2026).
6. `/guides/` exists since Sept 4, 2026 (collection, listing page, article
   template). It is not in the navigation or footer because those menus are
   shared across four locales and the section is English only. Assets are
   reachable from their Anchor's body links.
7. Byline rule, decided Sept 4, 2026: every pipeline piece is authored
   `TheChinaPath`, never a named person. The master plan lists "home and
   kitchen products" twice; week 13's Ledger was replaced by "beauty devices
   and tools" (week 22 keeps the category, eight weeks after the week 14
   Anchor as the scheduling rule requires).

## Regenerating the briefs

The briefs and `schedule.csv` are generated from
`public/content/editorial-briefs.md`:

```
node editorial/scripts/build-briefs.mjs
```

Edit the master document, rerun, commit. Status, dates and notes in
`schedule.csv` survive the rerun (keyed by brief id). Brief files are
overwritten, so put standing corrections in the master document, not in the
generated files.

## Reviewing a draft

Three checks that catch most problems in under five minutes.

1. **Search the file for the em dash character.** Zero results, or it goes
   back.
2. **Read every citation.** Each needs a publisher, a date and a URL. Spot
   check two against the ledger: both check dates present, URL live.
3. **Read the first 60 words.** If a reader who stops there does not have
   the answer, the opening is doing the wrong job.

Then check the proprietary number is there and labelled. Then check the
length. Then open the hero image in `public/Images/insights/`. No text, no
logos, Chinese platform UI on a screen, China setting, Chinese people only.

To hold a draft: set its row to `blocked` in `schedule.csv` before the
publish task fires. To pause all publishing:

```
Disable-ScheduledTask -TaskName 'TheChinaPath Editorial Publish'
```

## If something goes wrong

| Problem | What to do |
|---|---|
| A figure cannot be sourced in Chinese or English | Claude cuts the claim and marks it. Decide whether the section still stands. |
| A source fails check 2 (page changed or gone) | Claude fixes the citation or cuts the claim. Never ship a citation that failed re-fetch. |
| No proprietary number could be found | Claude leaves `TODO: proprietary number`. Supply one from stores under management, or let it ship without and log it. |
| A client number is missing from `/work` | Claude leaves `TODO: client sign-off`. Chase it, do not guess. |
| A Teardown brand turns out to be a client or fails a criterion | Claude picks another. Correct behavior. |
| Claude planted a typo | It ignored `CLAUDE.md` and the house skill. Point at the conflict section and rerun iteration 7. |
| The draft reads generic | The brief's "answer in one line" was skipped. Rerun with `Reread the answer line in the brief and rewrite the opening.` |
| Two pieces cite the same figure differently | The ledger was not updated. Fix the ledger, then fix both files. |
| A table renders as raw text | The blank lines inside the `table-scroll` wrapper are missing. |
| Image generation fails | Check `OPENAI_API_KEY` in `.env`. Retry once with a lightly reworded prompt. Row stays at `quality_passed`. |
| Image has text, a logo, a Western subject or no Chinese UI | Regenerate. Never wire in an unchecked image. |
| The quality pass loosened the SEO fields past 52 / 152 | The skill's own ceilings leaked through. Recount and trim. |
| Build fails on a locale slug | The `insight-slugs.mjs` entry is missing or does not match the FR/ES filename. Fix the map, rebuild. |
| No publish email arrived | Run the notify script again with `--dry-run` to see the payload, then without it. Check `RESEND_API_KEY` in `.env`. |

## Automating it

The pipeline runs on Cyril's machine through Windows Task Scheduler and the
local Claude Code CLI, the same way TheRedScroll's does. Local on purpose:
the user-level skills, the `.env` keys and the full model are all here, and a
cloud routine has none of them.

| Task | When (Shanghai) | What | Default |
|---|---|---|---|
| TheChinaPath Editorial Draft | Mon, Tue, Wed, Thu 15:00 | `run-daily.ps1 -Mode draft`: steps 0 to 3, stops at `image_ready` | enabled |
| TheChinaPath Editorial Publish | every day 17:30 | `run-daily.ps1 -Mode publish`: publishes every due `image_ready` row, builds, commits, pushes, emails | enabled |

The hours sit after TheRedScroll's (11:00 and 13:00) so the two pipelines
never run the Claude CLI at the same time.

Scripts live in `editorial/scripts/`. `register-tasks.ps1` creates or updates
both tasks. Each run writes its console output to `logs/runs/<date>-<mode>.txt`
next to the article run log. The machine has to be on, or asleep with wake
allowed, at the run time. A missed run fires as soon as the machine is back.

**Sleep kills a run in progress.** A run can take an hour or more, so the
machine must stay awake from 15:00 until the publish finishes. Set the power
plan to never sleep on AC, or keep the laptop plugged in and the lid open on
run days. The runner retries transient API errors (overloaded, rate limit,
5xx) up to three times, five minutes apart, on the same model.

Publishing is fully unattended: a draft made at 15:00 is published at 17:30
the same day unless someone sets its row to `blocked` before then. That
window is the review.

Manual test run, ignoring the date guards:

```
powershell -ExecutionPolicy Bypass -File editorial\scripts\run-daily.ps1 -Mode draft -Force
powershell -ExecutionPolicy Bypass -File editorial\scripts\run-daily.ps1 -Mode publish -Force
```

Runs use `--dangerously-skip-permissions` so nothing pauses for approval, and
pin the most capable model. Never lower the model to speed a run up.
