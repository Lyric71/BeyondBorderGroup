#!/usr/bin/env node
/**
 * Generates the per-slot brief files and schedule.csv from the master plan in
 * public/content/editorial-briefs.md. Idempotent: rerun it after editing the
 * master document. Existing status, dates and notes in schedule.csv are kept
 * per brief_id; everything else is regenerated.
 *
 *   node editorial/scripts/build-briefs.mjs [--start 2026-09-07] [--dry]
 *
 * Output:
 *   editorial/briefs/PREAMBLE.md            Part 0, the standing context
 *   editorial/briefs/templates/*.md         Part 4 slot templates (+ anchor)
 *   editorial/briefs/YYYY-MM-DD-<slug>.md   one file per Anchor and Ledger
 *   editorial/schedule.csv                  four rows a week, 52 weeks
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? def : args[i + 1];
};
const DRY = args.includes('--dry');
const START = new Date(`${flag('start', '2026-09-07')}T00:00:00`);
if (START.getDay() !== 1) {
  console.error('--start must be a Monday (week 01 opens on a Monday).');
  process.exit(2);
}

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '..');
const MASTER = path.join(ROOT, 'public', 'content', 'editorial-briefs.md');
const ED = path.join(ROOT, 'editorial');
const BRIEFS = path.join(ED, 'briefs');
const TEMPLATES = path.join(BRIEFS, 'templates');
const SCHEDULE = path.join(ED, 'schedule.csv');

const md = readFileSync(MASTER, 'utf8').replace(/\r\n/g, '\n');
const lines = md.split('\n');

// ---------- helpers ----------
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
// Local-date formatter. toISOString() would shift a local midnight to the
// previous UTC day on a UTC+8 machine.
const fmt = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const addDays = (d, n) => new Date(d.getTime() + n * 86400000);
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const csvCell = (v) => {
  const s = v == null ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const write = (file, content) => {
  if (DRY) { console.log(`[dry] ${path.relative(ROOT, file)}`); return; }
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
};

// ---------- Part 0: preamble ----------
const part0Start = lines.findIndex((l) => /^# Part 0/.test(l));
const fenceOpen = lines.findIndex((l, i) => i > part0Start && l.startsWith('```'));
const fenceClose = lines.findIndex((l, i) => i > fenceOpen && l.startsWith('```'));
const preamble = lines.slice(fenceOpen + 1, fenceClose).join('\n').trim();

// ---------- Part 2: the tables ----------
function table(headingRe) {
  const h = lines.findIndex((l) => headingRe.test(l));
  if (h === -1) throw new Error(`heading not found: ${headingRe}`);
  const rows = [];
  let started = false;
  for (let i = h + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^\|\s*\d+\s*\|/.test(l)) {
      started = true;
      rows.push(l.split('|').slice(1, -1).map((c) => c.trim()));
    } else if (started && !l.startsWith('|')) break;
  }
  return rows;
}
const anchors = Object.fromEntries(
  table(/^## The 52 Anchors/).map(([wk, title, query, diff]) => [+wk, { title, query, diff }]),
);
const ledgers = Object.fromEntries(
  table(/^## The 52 Ledgers/).map(([wk, variant, title, proof]) => [+wk, { variant, title, proof }]),
);
const extras = {};
for (const [wk, type, title, format] of table(/^## The 12 Assets and Reports/)) {
  extras[+wk] = { type, title, format };
}

// ---------- Part 3: the full briefs ----------
const sections = {};
const headRe = /^## W(\d\d) · (TUE|WED) · (.+)$/;
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(headRe);
  if (!m) continue;
  let j = i + 1;
  while (j < lines.length && !headRe.test(lines[j]) && !/^# Part 4/.test(lines[j])) j++;
  let body = lines.slice(i + 1, j).join('\n').trim();
  body = body.replace(/\n---\s*$/, '').trim();
  sections[`${+m[1]}-${m[2]}`] = { kind: m[3].trim(), body };
}

// ---------- Part 4: the templates ----------
const templates = {};
const tplRe = /^## Template: (.+)$/;
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(tplRe);
  if (!m) continue;
  const open = lines.findIndex((l, k) => k > i && l.startsWith('```'));
  const close = lines.findIndex((l, k) => k > open && l.startsWith('```'));
  templates[m[1].trim()] = lines.slice(open + 1, close).join('\n').trim();
}
const tplFile = { SIGNAL: 'signal', 'LEDGER A': 'ledger-a', 'LEDGER B': 'ledger-b', TEARDOWN: 'teardown', REFRESH: 'refresh' };

// The Anchor spec lives inside the preamble ("Every Anchor must carry" to the
// link list). Pull it out so it ships as a template like the other four.
const anchorSpec = (() => {
  const a = preamble.indexOf('Every Anchor must carry');
  const b = preamble.indexOf('Internal link targets available');
  return a === -1 || b === -1 ? '' : preamble.slice(a, b).trim();
})();

// ---------- field parsing inside a brief section ----------
const field = (body, name) => {
  const m = body.match(new RegExp(`\\*\\*${name}:\\*\\*\\s*([^\\n·]+?)(?:\\s*·|\\n|$)`));
  return m ? m[1].trim().replace(/`/g, '') : '';
};

function ledgerSlug(title) {
  let t = title
    .replace(/\bactually\b/gi, '')
    .replace(/^What it costs to sell\s+/i, 'cost to sell ')
    .replace(/^How\s+/i, 'how ');
  return slugify(t);
}

// ---------- previous schedule (preserve state) ----------
const KEEP = ['status', 'drafted_on', 'reviewed_by', 'published_on', 'quality_passed_on', 'image_generated_on', 'notes'];
const previous = {};
if (existsSync(SCHEDULE)) {
  const text = readFileSync(SCHEDULE, 'utf8').replace(/\r\n/g, '\n');
  const rows = parseCsv(text);
  const header = rows.shift();
  for (const r of rows) {
    const o = Object.fromEntries(header.map((h, i) => [h, r[i] ?? '']));
    previous[o.brief_id] = o;
  }
}
function parseCsv(text) {
  const out = [];
  let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); out.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell.length || row.length) { row.push(cell); out.push(row); }
  return out.filter((r) => r.length > 1);
}

// ---------- build ----------
const HEADER = [
  'publish_date', 'weekday', 'week', 'slot', 'slot_job', 'brief_id', 'brief_file', 'output_file',
  'working_h1', 'primary_query', 'content_type', 'status', 'drafted_on', 'reviewed_by',
  'published_on', 'quality_passed_on', 'image_generated_on', 'notes',
];
const schedule = [];
const usedSlugs = new Map();
let briefCount = 0;

const dod = (outputFile) => `## Definition of done

- [ ] The answer lands inside the first 60 words
- [ ] Every third-party figure carries a dated, linked citation
- [ ] The proprietary number is present and labelled as ours
- [ ] Byline \`TheChinaPath\`, published date and updated date in frontmatter
- [ ] One real table with real figures, in the scrollable wrapper
- [ ] Three to five internal links from the target list, one to a service page and one to a calculator or Compass
- [ ] One CTA, never "learn more"
- [ ] No pricing for TheChinaPath's own services
- [ ] Zero em dashes, no banned vocabulary, no three-item rhetorical lists
- [ ] Territory rule respected, hand-offs use the canonical anchor text
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] New figures appended to \`sources/verified-sources.md\` with both check dates
- [ ] Feature image block appended with the correct slug path
- [ ] File saved as \`${outputFile}\`
`;

function briefFile({ id, date, week, weekday, slotName, slot, section, title, slug, query, diff, wordCount, variant, proof, extra }) {
  const outputFile = `output/${slug}.md`;
  const fm = [
    '---',
    `brief_id: ${id}`,
    `publish_date: ${date}`,
    `week: ${String(week).padStart(2, '0')}`,
    `weekday: ${weekday}`,
    `slot: ${slot}`,
    `slot_name: ${slotName}`,
    `content_type: ${contentType(slotName, variant, extra)}`,
    `title: ${JSON.stringify(title)}`,
    `slug: ${slug}`,
    `primary_query: ${JSON.stringify(query || '')}`,
    diff ? `difficulty: ${diff}` : null,
    wordCount ? `word_count: ${JSON.stringify(wordCount)}` : null,
    variant ? `variant: ${variant}` : null,
    proof ? `proof: ${JSON.stringify(proof)}` : null,
    extra ? `${extra.type.toLowerCase()}: ${JSON.stringify(extra.title)}` : null,
    extra ? `${extra.type.toLowerCase()}_format: ${JSON.stringify(extra.format)}` : null,
    'status: not_started',
    '---',
  ].filter(Boolean).join('\n');

  const target = [
    '| Field | Value |', '|---|---|',
    `| Working H1 | ${title} |`,
    `| Slug | \`/insights/${slug}/\` |`,
    `| Output file | \`${outputFile}\` |`,
    `| Primary query | \`${query || 'derive from the title'}\` |`,
    diff ? `| Difficulty | ${diff} |` : null,
    `| Body length | ${wordCount || (variant === 'B' ? '1,200 to 1,500 words' : variant === 'A' ? '900 to 1,400 words' : 'see brief')} (body only, per the char-count rule) |`,
    variant ? `| Ledger variant | ${variant} |` : null,
    proof ? `| Proof | ${proof} |` : null,
    extra && extra.type === 'Asset' ? `| Asset | \`output/guides/${slug}.md\`, publishes to \`/guides/${slug}/\` (${extra.format}) |` : null,
    extra && extra.type === 'Report' ? `| Report | \`output/reports/${slug}.md\`, gated PDF, assembled by a person (${extra.format}) |` : null,
  ].filter(Boolean).join('\n');

  let template = '';
  if (slotName === 'Anchor') template = anchorSpec;
  else if (variant === 'A') template = templates['LEDGER A'];
  else if (variant === 'B') template = templates['LEDGER B'];

  return `${fm}

# BRIEF ${id}: ${title}

Run with the createarticle skill. Read \`../CLAUDE.md\` and \`../SPEC.md\` first.
They override any conflicting rule inside the skill. The standing preamble in
\`PREAMBLE.md\` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | ${slotName}, ${weekday} of week ${String(week).padStart(2, '0')} |
| brief | this file |

## Target

${target}

## The brief

${section}

## Slot spec

\`\`\`
${template}
\`\`\`

${dod(outputFile)}`;
}

function contentType(slotName, variant, extra) {
  if (slotName === 'Ledger') return `Ledger ${variant}`;
  if (extra) return `Anchor + ${extra.type}`;
  return slotName;
}

function pushRow(o) {
  const prev = previous[o.brief_id] || {};
  const row = {
    ...o,
    status: prev.status || o.status || 'not_started',
    drafted_on: prev.drafted_on || '',
    reviewed_by: prev.reviewed_by || '',
    published_on: prev.published_on || '',
    quality_passed_on: prev.quality_passed_on || '',
    image_generated_on: prev.image_generated_on || '',
    notes: prev.notes || o.notes || '',
  };
  schedule.push(HEADER.map((h) => row[h] ?? ''));
}

for (let week = 1; week <= 52; week++) {
  const mon = addDays(START, (week - 1) * 7);
  const W = String(week).padStart(2, '0');

  // Monday: Signal, template-driven, chosen on the day.
  pushRow({
    publish_date: fmt(mon), weekday: 'Mon', week: W, slot: 'S', slot_job: 'signal', brief_id: `${W}S`,
    brief_file: 'briefs/templates/signal.md', output_file: '', working_h1: '', primary_query: '',
    content_type: 'Signal', status: 'not_started',
    notes: 'Pick from sources/signal-watch-list.md on the day. No operating consequence = skipped.',
  });

  // Tuesday: Anchor.
  const a = anchors[week];
  const aSec = sections[`${week}-TUE`];
  if (a && aSec) {
    const extra = extras[week];
    let slug = slugify(a.query);
    if (usedSlugs.has(slug)) slug = slugify(a.title);
    usedSlugs.set(slug, `${W}A`);
    const date = fmt(addDays(mon, 1));
    const file = `briefs/${date}-${slug}.md`;
    const wordCount = field(aSec.body, 'Word count');
    write(path.join(ED, file), briefFile({
      id: `${W}A`, date, week, weekday: 'Tue', slotName: 'Anchor', slot: 'A', section: aSec.body,
      title: a.title, slug, query: a.query, diff: a.diff, wordCount, extra,
    }));
    briefCount++;
    pushRow({
      publish_date: date, weekday: 'Tue', week: W, slot: 'A', slot_job: 'anchor', brief_id: `${W}A`,
      brief_file: file, output_file: `output/${slug}.md`, working_h1: a.title, primary_query: a.query,
      content_type: contentType('Anchor', null, extra), status: 'not_started',
      notes: extra ? `${extra.type}: ${extra.title} (${extra.format})` : '',
    });
  }

  // Wednesday: Ledger A or B.
  const l = ledgers[week];
  const lSec = sections[`${week}-WED`];
  if (l && lSec) {
    let slug = ledgerSlug(l.title);
    const query = field(lSec.body, 'Query');
    const wordCount = field(lSec.body, 'Word count');
    const date = fmt(addDays(mon, 2));
    let status = 'not_started';
    let notes = '';
    if (usedSlugs.has(slug)) {
      status = 'blocked';
      notes = `Duplicate title of brief ${usedSlugs.get(slug)} in the master plan. Kill condition: merge or replace the category before drafting.`;
      slug = `${slug}-${W}`;
    } else {
      usedSlugs.set(slug, `${W}L`);
    }
    const file = `briefs/${date}-${slug}.md`;
    write(path.join(ED, file), briefFile({
      id: `${W}L`, date, week, weekday: 'Wed', slotName: 'Ledger', slot: 'L', section: lSec.body,
      title: l.title, slug, query, wordCount, variant: l.variant, proof: l.proof,
    }));
    briefCount++;
    pushRow({
      publish_date: date, weekday: 'Wed', week: W, slot: 'L', slot_job: `ledger ${l.variant}`, brief_id: `${W}L`,
      brief_file: file, output_file: `output/${slug}.md`, working_h1: l.title, primary_query: query,
      content_type: `Ledger ${l.variant}`, status, notes,
    });
  }

  // Thursday: Teardown on odd weeks, Refresh on even weeks. Template-driven.
  const odd = week % 2 === 1;
  pushRow({
    publish_date: fmt(addDays(mon, 3)), weekday: 'Thu', week: W, slot: odd ? 'T' : 'R', slot_job: odd ? 'teardown' : 'refresh',
    brief_id: `${W}${odd ? 'T' : 'R'}`, brief_file: odd ? 'briefs/templates/teardown.md' : 'briefs/templates/refresh.md',
    output_file: '', working_h1: '', primary_query: '', content_type: odd ? 'Teardown' : 'Refresh', status: 'not_started',
    notes: odd
      ? 'Pick a brand that passes all four criteria in sources/teardown-criteria.md. Never a client.'
      : 'Oldest insight by updatedDate first (see RUNBOOK). Year-only change = skipped.',
  });
}

// Standing files.
write(path.join(BRIEFS, 'PREAMBLE.md'), `# Standing preamble (Part 0 of the master plan)

Applies to every slot. Source: \`public/content/editorial-briefs.md\`, regenerated
by \`scripts/build-briefs.mjs\`. Edit the master document, not this file.

\`\`\`
${preamble}
\`\`\`
`);
for (const [name, file] of Object.entries(tplFile)) {
  if (!templates[name]) continue;
  write(path.join(TEMPLATES, `${file}.md`), `# Template: ${name}

Source: Part 4 of \`public/content/editorial-briefs.md\`. Read \`../PREAMBLE.md\`,
\`../../CLAUDE.md\` and \`../../SPEC.md\` first.

\`\`\`
${templates[name]}
\`\`\`
`);
}
write(path.join(TEMPLATES, 'anchor.md'), `# Template: ANCHOR

Source: Part 0 of \`public/content/editorial-briefs.md\`. Every Tuesday brief in
\`briefs/\` carries its own outline; this is the acceptance spec they all share.

\`\`\`
${anchorSpec}
\`\`\`
`);

const csv = [HEADER, ...schedule].map((r) => r.map(csvCell).join(',')).join('\n') + '\n';
write(SCHEDULE, csv);

console.log(`${briefCount} brief files, ${schedule.length} schedule rows, week 01 opens ${fmt(START)}, week 52 closes ${fmt(addDays(START, 51 * 7 + 3))}.`);
const blocked = schedule.filter((r) => r[HEADER.indexOf('status')] === 'blocked');
if (blocked.length) console.log(`blocked rows: ${blocked.map((r) => r[HEADER.indexOf('brief_id')]).join(', ')}`);
