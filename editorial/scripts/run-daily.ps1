<#
.SYNOPSIS
  Runs the TheChinaPath editorial pipeline through the local Claude Code CLI.

.DESCRIPTION
  Local by design: this machine has the user-level skills (createarticle,
  content-quality-us, generate-image-openai, createblogarticle,
  deep-translate), the .env keys and the full model. A cloud routine has
  none of those.

  Modes:
    draft    "Draft today's slot."  Steps 0 to 3 of the pipeline. Stops at
             image_ready. Runs Mon (Signal), Tue (Anchor), Wed (Ledger),
             Thu (Teardown or Refresh).
    publish  Publishes every row in editorial/schedule.csv whose status is
             image_ready and whose publish_date is today or earlier, then
             sends the Resend email. Runs daily, two and a half hours after
             the draft. That gap is the review window.

  Output of each run is written to editorial/logs/runs/<date>-<mode>.txt.
  Register with editorial/scripts/register-tasks.ps1.

.PARAMETER Mode
  draft (default) or publish.
#>
param(
  [ValidateSet('draft', 'publish')]
  [string]$Mode = 'draft',
  # Manual test run: ignore the plan-start date, the weekday guard and, in
  # publish mode, the publish_date filter.
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

# No draft on Friday or the weekend. The schedule has no rows there.
if ($Mode -eq 'draft' -and -not $Force) {
  $Dow = (Get-Date).DayOfWeek
  if ($Dow -in 'Friday', 'Saturday', 'Sunday') {
    "$(Get-Date -Format s) no draft on $Dow" | Out-File $RunLog -Encoding utf8
    exit 0
  }
}

# Always pull the best available model. Never a faster or smaller mode.
$Model = 'claude-fable-5-1'

if ($Mode -eq 'draft') {
  $Prompt = @'
Draft today's slot.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first and
follow them exactly. Find today's row in editorial/schedule.csv (Signal on
Monday, Anchor on Tuesday, Ledger on Wednesday, Teardown or Refresh on
Thursday). Run steps 0 to 3 of the pipeline: Chinese deep research with every
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
'@
} else {
  $Prompt = @'
Publish every reviewed draft that is due.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first.
In editorial/schedule.csv, find every row whose status is image_ready and
whose publish_date is today or earlier. For each one, in date order, run the
publish step: /createblogarticle on the output file, into
src/content/insights/ (guides go to src/content/guides/, English only). For
insights this includes, without exception, the propagation to every live
locale (insights-fr, insights-de, insights-es, with the native slug added to
src/i18n/insight-slugs.mjs for each locale) followed by /deep-translate on
each localized file, all three passes, in this order: FR, DE, ES. Follow the
translation rules in .claude/CLAUDE.md section 6 (euros in FR, DE and ES, no
em dashes, native slugs). Do not stop after the humanized translation; the
native rewrite is mandatory. For a Refresh, update the existing files in
place in every locale and set updatedDate. Then run npm run build and npx
astro check; this scheduled publish run is the explicit request for a build
that .claude/CLAUDE.md section 19 requires. When both pass: set the row to
published with published_on, then git add everything the article touched
(the content files in every locale, the hero image, src/i18n/insight-slugs.mjs,
editorial/output, editorial/logs, editorial/schedule.csv, editorial/sources)
and commit on main with a conventional commit message
(feat(insights): publish <slug>), then git push origin main. Only after the
push succeeds, run node editorial/scripts/notify-publish.mjs with the slug,
title, section, build result, log path and the commit hash in --note.
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
  $Prompt += "`n`nMANUAL TEST RUN: ignore the publish_date. Process every row whose status is image_ready (publish mode) or take the oldest not_started row that has a brief file (draft mode). Say in the run log that this was a forced test run."
  $RunLog = Join-Path $RunLogDir "$Stamp-$Mode-forced.txt"
}

"$(Get-Date -Format s) start $Mode (model $Model)" | Out-File $RunLog -Encoding utf8

# The prompt goes in through stdin from a file, and both output streams go
# straight to the log through cmd.exe. PowerShell 5.1 turns native stderr into
# terminating errors under Stop, which killed earlier runs before they logged.
$PromptFile = Join-Path $RunLogDir "$Stamp-$Mode.prompt.txt"
[System.IO.File]::WriteAllText($PromptFile, $Prompt, (New-Object System.Text.UTF8Encoding($false)))
$Claude = (Get-Command claude).Source
$Cmd = "type `"$PromptFile`" | `"$Claude`" -p --model $Model --dangerously-skip-permissions --output-format text >> `"$RunLog`" 2>&1"
# Retry on transient API failures (overloaded, rate limited, 5xx). Up to
# three attempts, five minutes apart. Never fall back to a smaller model.
$MaxAttempts = 3
$Attempt = 0
do {
  $Attempt++
  if ($Attempt -gt 1) {
    "$(Get-Date -Format s) retry $Attempt of $MaxAttempts after a transient API error, waiting 5 minutes" | Out-File $RunLog -Append -Encoding utf8
    Start-Sleep -Seconds 300
  }
  $ErrorActionPreference = 'Continue'
  & cmd.exe /d /c $Cmd
  $Code = $LASTEXITCODE
  $ErrorActionPreference = 'Stop'
  $Tail = (Get-Content $RunLog -Tail 5 -ErrorAction SilentlyContinue) -join "`n"
  $Transient = $Code -ne 0 -and $Tail -match 'API Error: (529|500|502|503|504|429)|Overloaded|overloaded_error|rate limit'
} while ($Transient -and $Attempt -lt $MaxAttempts)

"$(Get-Date -Format s) end $Mode exit $Code" | Out-File $RunLog -Append -Encoding utf8
exit $Code
