<#
.SYNOPSIS
  Runs the TheChinaPath editorial pipeline through the local Claude Code CLI.

.DESCRIPTION
  Local by design: this machine has the user-level skills (createarticle,
  content-quality-us, generate-image-openai, createblogarticle,
  deep-translate), the .env keys and the full model. A cloud routine has
  none of those.

  Modes:
    draft    "Draft the next slot."  Steps 0 to 3 of the pipeline on the
             next four-slot row (S, A, L, T, R) in publish_date order,
             whatever its date. Stops at image_ready. Runs every day.
    publish  Publishes every row in editorial/schedule.csv whose status is
             image_ready, whatever its publish_date, then sends the Resend
             email. Runs daily, three and a half hours after the draft.
             That gap is the review window.
    partner  Drafts the next "Finding a partner" row (slot P) in
             publish_date order, whatever its date. Same steps 0 to 3,
             stops at image_ready. Runs daily.

  publish_date orders the queue. It never gates a run, in any mode. Until
  10 October 2026 the runs only took rows dated today or earlier (draft and
  publish) or within two days (partner), so a finished draft and 168 ready
  briefs sat idle behind their dates while every run exited 0. Two narrow
  exceptions, both about real-world timing, never the calendar: a Signal
  reports the week before its date, so it is drafted on or after that date;
  a row whose notes say "Hold until YYYY-MM-DD" (a live event read, a
  results piece) is neither drafted nor published before that date.
  After each draft and partner run, check-queue.mjs mails Cyril when
  drafting or publishing stalls or a week of briefs is left.

  Output of each run is written to editorial/logs/runs/<date>-<mode>.txt.
  Register with editorial/scripts/register-tasks.ps1.

.PARAMETER Mode
  draft (default), publish or partner.
#>
param(
  [ValidateSet('draft', 'publish', 'partner')]
  [string]$Mode = 'draft',
  # Manual test run: ignore the plan-start date.
  [switch]$Force,
  # Optional extra instructions appended to the prompt (for example a resume
  # note after an interrupted run, or "Draft brief 04A").
  [string]$Extra = ''
)

$ErrorActionPreference = 'Stop'
$Repo = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $Repo

$Stamp = Get-Date -Format 'yyyy-MM-dd'
$RunLogDir = Join-Path $Repo 'editorial\logs\runs'
New-Item -ItemType Directory -Force $RunLogDir | Out-Null
$RunLog = Join-Path $RunLogDir "$Stamp-$Mode.txt"

# The plan starts Monday Sept 7, 2026 (week 01). Nothing runs before that.
$PlanStart = Get-Date '2026-09-07'
if (-not $Force -and (Get-Date).Date -lt $PlanStart) {
  "$(Get-Date -Format s) before plan start, nothing to do" | Out-File $RunLog -Encoding utf8
  exit 0
}

# The shared runner uses: Opus 5.5, then Fable, GPT-6 Astra and GPT-5.6 Sol as fallbacks.
$Model = 'claude-opus-5-5'

if ($Mode -eq 'draft') {
  $Prompt = @'
Draft the next slot.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first and
follow them exactly. Take ONE row from editorial/schedule.csv, ignoring rows
with slot P (the partner run drafts those). If a row stopped at drafted or
quality_passed (an interrupted run), finish that one. Otherwise take the
earliest row in publish_date order whose status is not_started, WHATEVER ITS
PUBLISH_DATE: that column orders the queue, it is not a release date, and a
future date is never a reason to skip a row or end the run. Pass over only:
a row that is blocked, skipped or drafting; a Signal whose publish_date is
after today (a Signal reports the week before its date, so it is drafted on
or after that date); a row whose notes say "Hold until YYYY-MM-DD" with that
date after today (time-bound content). If no row is left to take, record
that the queue is empty (or holds only rows waiting for a date) and end.
Run steps 0 to 3 of the pipeline: Chinese deep research with every
source validated twice, /createarticle from the brief (or from the slot
template for a Signal, Teardown or Refresh), /content-quality-us on the
finished draft, /generate-image-openai for the hero image. For an Anchor +
Asset week, also write the asset file into editorial/output/guides/. Apply
the kill conditions: a Signal with no operating consequence, a Ledger whose
fee table duplicates a published one, a Refresh whose only change is the
year, or a Teardown that fails the four criteria is set to skipped with the
reason in notes, and nothing is drafted. Update editorial/schedule.csv and
write the run log. Stop at image_ready. Do not publish. Do not build. Do not
commit. This run is unattended: never ask a question, decide from the specs
and note the decision in the run log.
No TODO leaves this run (editorial/CLAUDE.md, "No TODO leaves a run"): no
TODO, FIXME or TBD marker in the draft, its comment blocks or the ledger, and
no open items or "for a person" list in the log. Research a missing fact or
cut the claim; apply the settled fallback for a missing proprietary number;
fix a published page the draft contradicts, in every locale, with its
updatedDate moved; correct a wrong brief in public/content/editorial-briefs.md
and rerun node editorial/scripts/build-briefs.mjs; register a future date in
editorial/sources/signal-watch-list.md. Only something Cyril alone can decide
sets the row to blocked. Run node scripts/check-no-todo.mjs before you finish.
'@
} elseif ($Mode -eq 'partner') {
  $Prompt = @'
Draft the next partner piece.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first and
follow them exactly. In editorial/schedule.csv, among the rows with slot P
(the "Finding a partner" queue, Part 5 of public/content/editorial-briefs.md),
take ONE: a row stopped at drafted or quality_passed by an interrupted run,
else the earliest in publish_date order whose status is not_started,
WHATEVER ITS PUBLISH_DATE. That column orders the queue; a future date is
never a reason to skip a row or end the run. Pass over only a row that is
blocked, skipped or drafting, or whose notes say "Hold until YYYY-MM-DD"
with that date after today. If no P row is left to take, record that the
partner queue is empty and end. For that row, run
steps 0 to 3 of the pipeline from its brief file: Chinese deep research with
every source validated twice, /createarticle, /content-quality-us on the
finished draft (always, every piece), /generate-image-openai for the hero
image. Asset and Report pieces also write their file under editorial/output/.
Follow the partner template in the brief: frontmatter tags include
"Finding a partner" plus the brief's topic tags; never cite or name a
competitor (the list is in Part 5); use the Compass figure from
editorial/sources/compass-stats.md when it exists, else the settled fallback
in editorial/CLAUDE.md ("The proprietary number"), stated in one line of the
log. Update editorial/schedule.csv and append
to the run log (never overwrite it). Stop at image_ready. Do not publish. Do
not build. Do not commit. This run is unattended: never ask a question,
decide from the specs and note the decision in the run log.
No TODO leaves this run (editorial/CLAUDE.md, "No TODO leaves a run"): no
TODO, FIXME or TBD marker in the draft, its comment blocks or the ledger, and
no open items or "for a person" list in the log. Close every item in the run;
only something Cyril alone can decide sets the row to blocked. Run node
scripts/check-no-todo.mjs before you finish.
'@
} else {
  $Prompt = @'
Publish every reviewed draft.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first.
In editorial/schedule.csv, find every row whose status is image_ready,
WHATEVER ITS PUBLISH_DATE: that column orders the queue, it is not a release
date, and a finished draft goes live at the next publish run. The only
exception is a row whose notes say "Hold until YYYY-MM-DD" with that date
after today (time-bound content): leave it at image_ready. Publish at most
six rows in one run, the earliest by publish_date first; the next run takes
the rest. For each one, in publish_date order, run the publish step: /createblogarticle on the output file, into
src/content/insights/ (guides go to src/content/guides/, English only). For
insights this includes, without exception, the propagation to every live
locale (insights-fr, insights-de, insights-es, with the native slug added to
src/i18n/insight-slugs.mjs for each locale) followed by /deep-translate on
each localized file, all three passes, in this order: FR, DE, ES. Follow the
translation rules in .claude/CLAUDE.md section 6 (euros in FR, DE and ES, no
em dashes, native slugs). Do not stop after the humanized translation; the
native rewrite is mandatory. For a Refresh, update the existing files in
place in every locale and set updatedDate. Every locale file keeps its
title at 60 characters or fewer (else add a seoTitle of at most 60) and its
description between 120 and 155 characters. Then run node
scripts/check-no-todo.mjs (a marker means an item is still open: close it,
never just delete the marker), node scripts/check-insight-links.mjs and node
scripts/generate-llms-full.mjs, then
npm run build and npx astro check; this scheduled publish run is the explicit request for a build
that .claude/CLAUDE.md section 19 requires. When both pass: set the row to
published with published_on, then git add everything the article touched
(the content files in every locale, the hero image, src/i18n/insight-slugs.mjs,
editorial/output, editorial/logs, editorial/schedule.csv, editorial/sources)
and commit on main with a conventional commit message
(feat(insights): publish <slug>), then git push origin main. Only after the
push succeeds, run node editorial/scripts/notify-publish.mjs with the slug,
title, section, build result, log path and the commit hash in --note; it
also pings IndexNow with the live URLs. There is no --todo option and the
email has no open items: everything this run found (a contradicted page, a
wrong brief, a missing link, a future date) is closed before the commit, per
editorial/CLAUDE.md "No TODO leaves a run". If something only Cyril can
decide stands in the way, set the row to blocked and do not publish it.
This run is unattended: never ask a question. If the build or the check
fails, do not commit, do not push, leave the row at image_ready, put the
error in the run log and send the email with --build failed and the error in
--note.
'@
}

if ($Extra) {
  $Prompt += "`n`nADDITIONAL INSTRUCTIONS FROM THE OPERATOR: $Extra"
}

if ($Force) {
  $Prompt += "`n`nMANUAL TEST RUN: say in the run log that this was a forced test run."
  $RunLog = Join-Path $RunLogDir "$Stamp-$Mode-forced.txt"
}

"$(Get-Date -Format s) start $Mode (model $Model)" | Out-File $RunLog -Encoding utf8

# The prompt goes in through stdin from a file, and both output streams go
# straight to the log through cmd.exe. PowerShell 5.1 turns native stderr into
# terminating errors under Stop, which killed earlier runs before they logged.
$PromptFile = Join-Path $RunLogDir "$Stamp-$Mode.prompt.txt"
[System.IO.File]::WriteAllText($PromptFile, $Prompt, (New-Object System.Text.UTF8Encoding($false)))
$AgentRunner = 'C:\Users\cyril\Project\automation\scripts\Invoke-ProjectAgent.ps1'
$Code = & $AgentRunner -Repo $Repo -PromptFile $PromptFile -RunLog $RunLog -RunName "TheChinaPath $Mode"

"$(Get-Date -Format s) end $Mode exit $Code" | Out-File $RunLog -Append -Encoding utf8

# The runner, not the model, says when the pipeline stops producing: a mail
# at most once a day when a queue has not drafted for two days with rows
# ready, a draft sits at image_ready, or a week or less of briefs is left.
# Never fails the run.
if ($Mode -in 'draft', 'partner') {
  $Queue = & cmd.exe /c "node editorial\scripts\check-queue.mjs 2>&1"
  "$(Get-Date -Format s) queue: $($Queue -join ' ')" | Out-File $RunLog -Append -Encoding utf8
}

exit $Code
