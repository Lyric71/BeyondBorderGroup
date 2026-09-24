<#
.SYNOPSIS
  Registers (or re-registers) the two Windows scheduled tasks that run the
  TheChinaPath editorial pipeline on this machine.

  TheChinaPath Editorial Draft    Mon, Tue, Wed, Thu at 01:00 local (Shanghai, night)
  TheChinaPath Editorial Publish  every day at 04:30 local
  TheChinaPath Editorial Partner  every day at 14:00 local ("Finding a
                                  partner" queue, drafts P rows due within
                                  two days; the publish task ships them)

  The hours sit after the TheRedScroll tasks (00:30 draft, 04:00 publish) so
  the two pipelines never run the Claude CLI at the same time on this machine.

  Run from any PowerShell prompt:
    powershell -ExecutionPolicy Bypass -File editorial\scripts\register-tasks.ps1

  To pause unattended publishing:
    Disable-ScheduledTask -TaskName 'TheChinaPath Editorial Publish'

  Change the hour by editing $DraftTime / $PublishTime and rerunning.
#>
param(
  [string]$DraftTime = '01:00',
  [string]$PublishTime = '04:30',
  [string]$PartnerTime = '14:00'
)

$ErrorActionPreference = 'Stop'
$Runner = Join-Path $PSScriptRoot 'run-daily.ps1'
$Pwsh = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"

function Register([string]$Name, [string]$Mode, $Trigger, [bool]$Enabled) {
  $Action = New-ScheduledTaskAction -Execute $Pwsh `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`" -Mode $Mode"
  $Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 6) `
    -StartWhenAvailable `
    -WakeToRun `
    -MultipleInstances IgnoreNew
  Register-ScheduledTask -TaskName $Name -Action $Action -Trigger $Trigger `
    -Settings $Settings -Description "TheChinaPath editorial pipeline ($Mode)" -Force | Out-Null
  if (-not $Enabled) { Disable-ScheduledTask -TaskName $Name | Out-Null }
  Write-Host "$Name registered ($(if ($Enabled) {'enabled'} else {'disabled'}))"
}

# Four slots a week: Signal (Mon), Anchor (Tue), Ledger (Wed), Teardown or
# Refresh (Thu). Friday is review only.
$DraftTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday, Tuesday, Wednesday, Thursday -At $DraftTime
Register 'TheChinaPath Editorial Draft' 'draft' $DraftTrigger $true

$PublishTrigger = New-ScheduledTaskTrigger -Daily -At $PublishTime
Register 'TheChinaPath Editorial Publish' 'publish' $PublishTrigger $true

# The partner queue publishes every other day, weekends included, so its
# draft run is daily. 14:00 keeps it clear of both night pipelines.
$PartnerTrigger = New-ScheduledTaskTrigger -Daily -At $PartnerTime
Register 'TheChinaPath Editorial Partner' 'partner' $PartnerTrigger $true

Get-ScheduledTask -TaskName 'TheChinaPath Editorial *' | Format-Table TaskName, State -AutoSize
