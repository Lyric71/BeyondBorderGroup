# Run log: YYYY-MM-DD

| Field | Value |
|---|---|
| Brief | 00X (or Signal / Teardown / Refresh, template-driven) |
| Slot | Signal / Anchor / Ledger A / Ledger B / Teardown / Refresh |
| Output | output/slug.md |
| Asset (if any) | output/guides/slug.md |
| Body word count | |
| Body char count | |
| Status reached | drafted / quality_passed / image_ready / published / blocked / skipped |

## Slot selection

- Row picked and why (today's row, or the oldest not_started with a brief):
- For a Signal: the change, the source URL, and the number it moves:
- For a Teardown: the brand and how each of the four criteria was verified:
- For a Refresh: the URL and what substantively changed:
- Kill condition checked (Signal no consequence, Ledger duplicate table,
  Refresh year-only, Teardown criteria): pass / skipped, reason:

## Research note (written before iteration 1)

| Claim | Chinese source (publisher, 中文) | Date on page | URL | Check 1 | Check 2 |
|---|---|---|---|---|---|
| | | | | pass / fail, date | pass / fail, date |

- Figures reused from the ledger:
- Claims cut because they could not be sourced:
- The proprietary number (from Compass, the calculators or a case page),
  with the label used in the copy, or "none, settled fallback":

## Iterations (createarticle)
Tracker as printed, with one line per iteration saying what changed.
Note explicitly that iteration 7 ran as the cadence variant, not the
planted-error variant. Note the check 2 results in iteration 8.

## Quality pass (content-quality-us)
Tracker as printed, 18 passes plus final. Note any SEO field trimmed back to
the house ceiling afterward.

## Image
- Prompt used (verbatim from the feature-image block):
- Attempts and what was wrong with rejected ones:
- Saved to:

## Sources
- New figures added to the ledger:

## Found and closed in this run
Every item below is closed before the run ends (CLAUDE.md, "No TODO leaves a
run"). This section records what was done; it is never a list for a person.
- Client figures used, and the /work page each one is on (anything not on a
  case page was cut):
- Territory hand-offs (TheRedScroll / ChinaWebFoundry) and the anchor text used:
- Brief or master plan corrections made (what was wrong, what the master plan
  now says, briefs regenerated):
- Published pages fixed because this piece contradicted them (file, locale,
  updatedDate moved):
- Missing link targets and how they were resolved (created, nearest page,
  master plan corrected):
- Future dates registered in sources/signal-watch-list.md:
- `node scripts/check-no-todo.mjs`: ok

## SEO counts (after the quality pass)
| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | | 52 | |
| Meta description | | 152 | |
| Excerpt | | 25 words | |

## Publish (fill in when step 4 runs)
- Locales created (FR, DE, ES) and slugs added to src/i18n/insight-slugs.mjs:
- Build and astro check:
- Commit hash and push:
- Resend email sent: yes / no (reason)
- Model used for each step (must be the most capable available):
- Runbook substitutions (what the repo could not do, what was used instead):
