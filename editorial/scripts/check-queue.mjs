#!/usr/bin/env node
/**
 * Queue watchdog for the editorial pipeline. run-daily.ps1 calls it after
 * every draft and partner run. It reads editorial/schedule.csv and mails
 * Cyril, through Resend, at most once a day, when the pipeline stops
 * producing:
 *
 *   - stalled: rows are ready to draft in a queue (the four-slot queue or
 *              the partner queue) but that queue has drafted nothing for
 *              --stall-days days. Until 10 October 2026 the runs only took a
 *              row dated today or earlier, so ready briefs sat undrafted
 *              while every run exited 0 with "nothing due". This catches
 *              that, a dead task or an expired login alike.
 *   - stuck:   a finished draft has sat at image_ready for --stall-days days
 *              (06A waited from 4 October behind its 13 October date).
 *   - low:     a week or less of four-slot briefs is left to draft, or none.
 *
 * A row is ready to draft when it is not_started (or stopped at drafted or
 * quality_passed by an interrupted run), is not held and, for a Signal, its
 * publish_date has come: a Signal reports the week before its date. A held
 * row carries "Hold until YYYY-MM-DD" in its notes (time-bound content: a
 * live event read, a results piece). blocked, skipped and drafting rows are
 * never ready; a blocked row already says why in its notes.
 *
 * The mail reports facts, never an open items list (editorial/CLAUDE.md,
 * "No TODO leaves a run").
 *
 *   node editorial/scripts/check-queue.mjs [--low-days 7] [--stall-days 2]
 *        [--dry-run]
 *
 * One mail a day: the marker editorial/logs/runs/<date>-queue.txt records it.
 * Always exits 0, so it never fails the run that calls it.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Same sender and recipient as notify-publish.mjs.
const TO = 'cyril.drouin@outlook.com';
const FROM = 'TheChinaPath <onboarding@resend.dev>';
const DAY = 86_400_000;

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? Number(process.argv[i + 1]) : fallback;
}

/** RFC 4180 CSV: quoted fields, doubled quotes, commas and newlines inside quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((f) => f !== ''));
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.replace(/^﻿/, ''), r[i] ?? ''])));
}

const shanghaiToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);
const addDays = (iso, n) => new Date(Date.parse(iso) + n * DAY).toISOString().slice(0, 10);
const holdOf = (r) => (r.notes.match(/Hold until (\d{4}-\d{2}-\d{2})/) || [])[1] || '';
const isSignal = (r) => r.slot === 'S' || /^Signal/.test(r.content_type);

async function main() {
  loadEnv();
  const lowDays = arg('low-days', 7);
  const stallDays = arg('stall-days', 2);
  const dryRun = process.argv.includes('--dry-run');

  const rows = parseCsv(readFileSync(path.join('editorial', 'schedule.csv'), 'utf8'));
  const today = shanghaiToday();
  const open = (r) => ['not_started', 'drafted', 'quality_passed'].includes(r.status);
  const held = (r) => holdOf(r) > today;
  const ready = (r) => open(r) && !held(r) && !(isSignal(r) && r.status === 'not_started' && r.publish_date > today);

  const queues = [
    { name: 'four-slot', rows: rows.filter((r) => r.slot !== 'P') },
    { name: 'partner', rows: rows.filter((r) => r.slot === 'P') },
  ].map((q) => {
    const lastDrafted = q.rows.map((r) => r.drafted_on).filter(Boolean).sort().pop() || '';
    return {
      ...q,
      ready: q.rows.filter(ready),
      open: q.rows.filter(open),
      held: q.rows.filter((r) => open(r) && held(r)),
      lastDrafted,
      idle: lastDrafted ? daysBetween(lastDrafted, today) : Infinity,
    };
  });
  const [main4, partner] = queues;
  const blocked = rows.filter((r) => r.status === 'blocked');
  const stuck = rows.filter((r) => r.status === 'image_ready' && !held(r)
    && daysBetween(r.image_generated_on || r.drafted_on || today, today) >= stallDays);

  // The four-slot run drafts one row a day. Signals come one a week on their
  // date, so the runway counts the other slots only.
  const runway = main4.open.filter((r) => !isSignal(r) && !held(r)).length;
  const lastDraftDay = addDays(today, runway);

  const status = queues.map((q) => `${q.name}: ${q.ready.length} ready to draft, ${q.held.length} held, last draft ${q.lastDrafted || 'never'}`).join('; ')
    + `; ${blocked.length} blocked`;
  const alerts = [];
  for (const q of queues) {
    if (q.ready.length && q.idle >= stallDays) {
      alerts.push(`Drafting has stalled in the ${q.name} queue: ${q.ready.length} rows are ready to draft (next ${q.ready[0].brief_id}) and the last draft in that queue was made on ${q.lastDrafted}, ${q.idle} days ago. Its run logs are in editorial/logs/runs/.`);
    }
  }
  if (stuck.length) {
    alerts.push(`Publishing has stalled: ${stuck.map((r) => `${r.brief_id} (${r.output_file.replace(/^output\//, '').replace(/\.md$/, '')})`).join(', ')} ${stuck.length === 1 ? 'has' : 'have'} been at image_ready for ${stallDays} days or more.`);
  }
  if (main4.open.length === 0) {
    alerts.push(`The four-slot queue is empty: every row in editorial/schedule.csv outside the partner queue is published, skipped or blocked. No new four-slot article will publish until new briefs and rows are added (public/content/editorial-briefs.md, then build-briefs.mjs).`);
  } else if (runway <= lowDays) {
    alerts.push(`The four-slot queue is running low: ${runway} Anchor, Ledger, Teardown and Refresh briefs are left${main4.held.length ? `, plus ${main4.held.length} held for a date` : ''}. At one draft a day the last one is drafted around ${lastDraftDay}; after that only the weekly Signal drafts until new briefs and rows are added (public/content/editorial-briefs.md, then build-briefs.mjs).`);
  }
  if (blocked.length) {
    alerts.push(`Blocked rows (the reason is in each row's notes): ${blocked.map((r) => r.brief_id).join(', ')}.`);
  }

  // A blocked row alone is not an alert: it already stops and says why.
  if (!alerts.some((a) => !a.startsWith('Blocked rows'))) {
    console.log(`ok: ${status}`);
    return;
  }

  const marker = path.join('editorial', 'logs', 'runs', `${today}-queue.txt`);
  if (existsSync(marker) && !dryRun) {
    console.log(`alert already sent today: ${status}`);
    return;
  }

  const first = alerts[0];
  const subject = first.startsWith('Drafting has stalled') ? 'TheChinaPath editorial drafting stalled'
    : first.startsWith('Publishing has stalled') ? 'TheChinaPath editorial publishing stalled'
    : main4.open.length === 0 ? 'TheChinaPath editorial queue empty'
    : `TheChinaPath editorial queue low: ${runway} briefs left`;
  const text = [subject, '', ...alerts, '', `Schedule: ${status}.`].join('\n');

  if (dryRun) {
    console.log(text);
    console.log(`\n[dry run] would send to ${TO}`);
    return;
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`alert not sent, RESEND_API_KEY missing: ${subject}`);
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], subject, text }),
  });
  if (!res.ok) {
    console.log(`alert not sent, Resend ${res.status}: ${subject}`);
    return;
  }
  writeFileSync(marker, `${new Date().toISOString()} ${text}\n`);
  console.log(`alert sent to ${TO}: ${subject}`);
}

main().catch((err) => {
  console.log(`queue check failed: ${err.message}`);
});
