/**
 * Channel kit: progressive enhancement for the cost and channel blocks (the
 * cross-border channels guide and the sections that quote it on the service
 * pages, in every locale).
 *
 * The markup stays a real <table> or <ol>, which is what crawlers and screen
 * readers read. An element tagged `data-ck="<kind>"` gets a visual built from
 * that table on top, plus a Visual / Table switch, so nothing is hidden from
 * anyone who prefers the numbers. Kinds:
 *
 *   matrix   two-axis grid (rows x columns), hover lights the row and column
 *   cards    one card per row; header cells become the labels
 *   columns  one card per column, side by side ("A vs B")
 *   layers   a cost stack, one bar per row, a switch between the columns
 *   stack    stacked 100-unit bars per column; the last row is what is kept
 *   bars     horizontal bars from the first number in the second column
 *   choose   "if you need X, go with Y" decision cards
 *   facts    two-column "line: figure" tables as tiles, the figure large
 *   steps    an <ol> drawn as a timeline that fills as you scroll
 *
 * Plus: `data-ck-section` reveals its blocks on scroll, `data-ck-count` counts
 * a figure up when it enters the viewport, and every `.ck-spot` card follows
 * the pointer with a soft light.
 */

type Row = { label: string; cells: string[]; html: string[]; shared: boolean; strong: boolean };
type Table = { corner: string; head: string[]; rows: Row[] };

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lang = (document.documentElement.lang || 'en').slice(0, 2);

const STRINGS: Record<string, Record<string, string>> = {
  en: { visual: 'Visual', table: 'Table', view: 'View', same: 'Same for both', kept: 'Kept', of: 'of' },
  fr: { visual: 'Visuel', table: 'Tableau', view: 'Affichage', same: 'Identique pour les deux', kept: 'Reste', of: 'sur' },
  de: { visual: 'Grafik', table: 'Tabelle', view: 'Ansicht', same: 'Für beide gleich', kept: 'Bleibt', of: 'von' },
  es: { visual: 'Visual', table: 'Tabla', view: 'Vista', same: 'Igual para ambos', kept: 'Queda', of: 'de' },
};
const S = STRINGS[lang] ?? STRINGS.en;

/** Brand accent per platform, matched on the name in a title. */
const ACCENTS: [RegExp, string][] = [
  [/tmall|天猫|alimama|88vip/i, '#ff5000'],
  [/\bjd\b|jingdong|京东/i, '#e1251b'],
  [/douyin|抖音|qianchuan|xingtu/i, '#111111'],
  [/xiaohongshu|rednote|小红书|red\b/i, '#ff2442'],
  [/wechat|weixin|微信|wecom/i, '#07c160'],
  [/weibo|微博/i, '#e6162d'],
  [/bilibili/i, '#00a1d6'],
  [/zhihu/i, '#1772f6'],
  [/baidu/i, '#2932e1'],
];
function accentFor(text: string): string | null {
  for (const [re, color] of ACCENTS) if (re.test(text)) return color;
  return null;
}

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
/** Drop a leading "7. " style prefix: no numbered rows in the visuals. */
const unnumber = (s: string) => s.replace(/^\d+\.\s*/, '');

function readTable(table: HTMLTableElement): Table {
  const headRow = table.tHead?.rows[0] ?? table.rows[0];
  const headCells = Array.from(headRow.cells);
  const corner = clean(headCells[0]?.textContent ?? '');
  const head = headCells.slice(1).map((c) => clean(c.textContent ?? ''));
  const bodyRows = Array.from(table.tBodies[0]?.rows ?? []).filter((r) => r !== headRow);
  const rows: Row[] = bodyRows.map((tr) => {
    const cells = Array.from(tr.cells);
    const first = cells[0];
    const rest = cells.slice(1);
    const shared = rest.length === 1 && head.length > 1;
    return {
      label: unnumber(clean(first?.textContent ?? '')),
      cells: rest.map((c) => clean(c.textContent ?? '')),
      html: rest.map((c) => c.innerHTML.trim()),
      shared,
      strong: !!tr.querySelector('strong, b'),
    };
  });
  return { corner, head, rows };
}

/** First number in a string, decimal comma aware. Prefers a percentage. */
function numberIn(text: string): number {
  const t = text.replace(/[  ]/g, ' ');
  const pct = t.match(/(\d+(?:[.,]\d+)?)\s*%/);
  const any = pct ?? t.match(/\d+(?:[.,]\d+)?/);
  if (!any) return NaN;
  return parseFloat((pct ? any[1] : any[0]).replace(',', '.'));
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, html?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* ------------------------------------------------------------------ */
/* Visual / Table switch                                               */
/* ------------------------------------------------------------------ */

let switchId = 0;
function mountWithSwitch(host: HTMLElement, visual: HTMLElement) {
  const tableBox = el('div', 'ck-tablebox');
  while (host.firstChild) tableBox.appendChild(host.firstChild);
  host.classList.add('ck-host');
  // The wrapper often carries .table-scroll; the visual must not scroll sideways.
  host.classList.remove('table-scroll');
  tableBox.classList.add('table-scroll');

  const bar = el('div', 'ck-switch');
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', S.view);
  const id = ++switchId;
  const mk = (label: string, on: boolean) => {
    const b = el('button', 'ck-switch__btn', label);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(on));
    b.setAttribute('aria-controls', `ck-v-${id} ck-t-${id}`);
    return b;
  };
  const bVisual = mk(S.visual, true);
  const bTable = mk(S.table, false);
  const thumb = el('span', 'ck-switch__thumb');
  bar.append(thumb, bVisual, bTable);

  visual.id = `ck-v-${id}`;
  tableBox.id = `ck-t-${id}`;
  tableBox.hidden = true;
  host.append(bar, visual, tableBox);

  const set = (showTable: boolean) => {
    bVisual.setAttribute('aria-pressed', String(!showTable));
    bTable.setAttribute('aria-pressed', String(showTable));
    bar.classList.toggle('is-table', showTable);
    visual.hidden = showTable;
    tableBox.hidden = !showTable;
    if (!showTable) play(visual);
  };
  bVisual.addEventListener('click', () => set(false));
  bTable.addEventListener('click', () => set(true));
}

/** Re-run entrance animations inside a freshly shown visual. */
function play(root: HTMLElement) {
  root.classList.remove('is-played');
  void root.offsetWidth;
  root.classList.add('is-played');
  root.querySelectorAll<HTMLElement>('[data-ck-count]').forEach(countUp);
}

/* ------------------------------------------------------------------ */
/* Builders                                                            */
/* ------------------------------------------------------------------ */

function spotCard(cls: string, accentSource: string): HTMLElement {
  const card = el('article', `ck-card ck-spot ${cls}`);
  const accent = accentFor(accentSource);
  if (accent) card.style.setProperty('--ck-accent', accent);
  return card;
}

function buildCards(t: Table): HTMLElement {
  const wrap = el('div', 'ck-cards');
  wrap.style.setProperty('--n', String(t.rows.length));
  t.rows.forEach((r, i) => {
    const card = spotCard('ck-cards__card', r.label);
    card.style.setProperty('--i', String(i));
    card.append(el('h4', 'ck-card__title', r.label));
    const dl = el('dl', 'ck-card__list');
    r.html.forEach((h, c) => {
      const row = el('div', 'ck-card__row');
      row.append(el('dt', '', t.head[c] ?? ''), el('dd', '', h));
      dl.append(row);
    });
    card.append(dl);
    wrap.append(card);
  });
  return wrap;
}

function buildColumns(t: Table): HTMLElement {
  const wrap = el('div', 'ck-columns');
  wrap.style.setProperty('--n', String(t.head.length));
  t.head.forEach((h, c) => {
    if (c > 0 && t.head.length === 2) wrap.append(el('div', 'ck-columns__vs', 'vs'));
    const card = spotCard('ck-columns__card', h);
    card.style.setProperty('--i', String(c));
    card.append(el('h4', 'ck-card__title', h));
    const dl = el('dl', 'ck-card__list');
    t.rows.forEach((r) => {
      const row = el('div', 'ck-card__row');
      row.append(el('dt', '', r.label), el('dd', '', r.shared ? r.html[0] : (r.html[c] ?? '')));
      dl.append(row);
    });
    card.append(dl);
    wrap.append(card);
  });
  return wrap;
}

function buildMatrix(t: Table): HTMLElement {
  const grid = el('div', 'ck-matrix');
  grid.style.setProperty('--cols', String(t.head.length));
  grid.append(el('div', 'ck-matrix__corner', t.corner));
  t.head.forEach((h, c) => {
    const head = el('div', 'ck-matrix__col', h);
    head.dataset.col = String(c);
    grid.append(head);
  });
  t.rows.forEach((r, ri) => {
    const rowHead = el('div', 'ck-matrix__row', r.label);
    rowHead.dataset.row = String(ri);
    grid.append(rowHead);
    r.html.forEach((h, c) => {
      const tile = el('div', 'ck-matrix__tile ck-spot', '');
      tile.dataset.row = String(ri);
      tile.dataset.col = String(c);
      tile.style.setProperty('--i', String(ri * t.head.length + c));
      const items = h.split(/,\s*|<br\s*\/?>/i).filter(Boolean);
      const ul = el('ul');
      items.forEach((it) => {
        const li = el('li', '', it.trim());
        const accent = accentFor(li.textContent ?? '');
        if (accent) li.style.setProperty('--ck-accent', accent);
        ul.append(li);
      });
      tile.append(ul);
      grid.append(tile);
    });
  });
  grid.addEventListener('pointerover', (e) => {
    const tile = (e.target as HTMLElement).closest<HTMLElement>('.ck-matrix__tile');
    grid.querySelectorAll('.is-lit').forEach((n) => n.classList.remove('is-lit'));
    if (!tile) return;
    grid
      .querySelectorAll<HTMLElement>(`[data-row="${tile.dataset.row}"], [data-col="${tile.dataset.col}"]`)
      .forEach((n) => {
        if (n.classList.contains('ck-matrix__tile') && n !== tile) return;
        n.classList.add('is-lit');
      });
  });
  grid.addEventListener('pointerleave', () =>
    grid.querySelectorAll('.is-lit').forEach((n) => n.classList.remove('is-lit')),
  );
  return grid;
}

function buildLayers(t: Table): HTMLElement {
  const wrap = el('div', 'ck-layers');
  const tabs = el('div', 'ck-layers__tabs');
  tabs.setAttribute('role', 'tablist');
  const stack = el('ol', 'ck-layers__stack');
  const n = t.rows.length;
  const rows = t.rows.map((r, i) => {
    const li = el('li', 'ck-layer');
    // Widest at the foundation: the stack reads as a pyramid of spend.
    li.style.setProperty('--w', `${62 + (38 * i) / Math.max(1, n - 1)}%`);
    li.style.setProperty('--i', String(i));
    li.style.setProperty('--shade', String(i / Math.max(1, n - 1)));
    if (r.shared) li.classList.add('is-shared');
    const name = el('span', 'ck-layer__name', r.label);
    const desc = el('span', 'ck-layer__desc', r.shared ? r.html[0] : (r.html[0] ?? ''));
    li.append(name, desc);
    if (r.shared) li.append(el('span', 'ck-layer__tag', S.same));
    stack.append(li);
    return { li, desc, r };
  });
  const select = (c: number) => {
    tabs.querySelectorAll('button').forEach((b, bi) => b.setAttribute('aria-selected', String(bi === c)));
    rows.forEach(({ desc, r }) => {
      if (r.shared) return;
      desc.classList.remove('is-swap');
      void desc.offsetWidth;
      desc.innerHTML = r.html[c] ?? '';
      desc.classList.add('is-swap');
    });
    wrap.dataset.col = String(c);
    const accent = accentFor(t.head[c] ?? '');
    if (accent) wrap.style.setProperty('--ck-accent', accent);
  };
  t.head.forEach((h, c) => {
    const b = el('button', 'ck-layers__tab', h);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.addEventListener('click', () => select(c));
    tabs.append(b);
  });
  wrap.append(tabs, stack);
  select(0);
  return wrap;
}

const STACK_COLORS = ['#8a8f98', '#5b6472', '#e8a33d', '#d9603b', '#7b61a8', '#2f7fb6', '#3a9d8f', '#b55d8a'];

function buildStack(t: Table): HTMLElement {
  const wrap = el('div', 'ck-stack');
  const parts = t.rows.slice(0, -1);
  const keptRow = t.rows[t.rows.length - 1];
  const legend = el('ul', 'ck-stack__legend');
  parts.forEach((p, i) => {
    const li = el('li', '', `<i style="--c:${STACK_COLORS[i % STACK_COLORS.length]}"></i>${p.label}`);
    legend.append(li);
  });
  legend.append(el('li', 'is-kept', `<i></i>${keptRow.label}`));
  t.head.forEach((h, c) => {
    const row = el('div', 'ck-stack__row');
    const kept = numberIn(keptRow.cells[c] ?? '');
    const head = el('div', 'ck-stack__head');
    const accent = accentFor(h);
    if (accent) row.style.setProperty('--ck-accent', accent);
    head.append(el('span', 'ck-stack__name', h));
    const keptEl = el('span', 'ck-stack__kept', `<b data-ck-count>${keptRow.cells[c] ?? ''}</b> <small>${S.of} 100</small>`);
    head.append(keptEl);
    const bar = el('div', 'ck-stack__bar');
    let offset = 0;
    parts.forEach((p, i) => {
      const v = numberIn(p.cells[c] ?? '');
      if (!v) return;
      const seg = el('span', 'ck-stack__seg');
      seg.style.setProperty('--c', STACK_COLORS[i % STACK_COLORS.length]);
      seg.style.setProperty('--v', String(v));
      seg.style.setProperty('--o', String(offset));
      seg.style.setProperty('--d', `${i * 70}ms`);
      seg.tabIndex = 0;
      seg.setAttribute('aria-label', `${p.label}: ${p.cells[c]}`);
      seg.dataset.tip = `${p.label} · ${p.cells[c]}`;
      offset += v;
      bar.append(seg);
    });
    const keptSeg = el('span', 'ck-stack__seg is-kept');
    keptSeg.style.setProperty('--v', String(kept || 0));
    keptSeg.style.setProperty('--o', String(offset));
    keptSeg.style.setProperty('--d', `${parts.length * 70}ms`);
    keptSeg.tabIndex = 0;
    keptSeg.dataset.tip = `${keptRow.label} · ${keptRow.cells[c]}`;
    keptSeg.setAttribute('aria-label', `${keptRow.label}: ${keptRow.cells[c]}`);
    bar.append(keptSeg);
    row.append(head, bar);
    wrap.append(row);
  });
  wrap.append(legend);
  return wrap;
}

function buildBars(t: Table): HTMLElement {
  const wrap = el('div', 'ck-bars');
  const values = t.rows.map((r) => numberIn(r.cells[0] ?? ''));
  const max = Math.max(...values.filter((v) => !Number.isNaN(v)), 1);
  t.rows.forEach((r, i) => {
    const row = el('div', 'ck-bars__row');
    row.style.setProperty('--v', String(((values[i] || 0) / max) * 100));
    row.style.setProperty('--d', `${i * 90}ms`);
    row.append(
      el('span', 'ck-bars__label', r.label),
      el('span', 'ck-bars__track', `<span class="ck-bars__fill"></span>`),
      el('span', 'ck-bars__value', r.html[0] ?? ''),
    );
    wrap.append(row);
  });
  return wrap;
}

function buildChoose(t: Table): HTMLElement {
  const wrap = el('div', 'ck-choose');
  t.rows.forEach((r, i) => {
    const card = spotCard('ck-choose__card', r.cells[0] ?? '');
    card.style.setProperty('--i', String(i));
    card.append(
      el('span', 'ck-choose__k', t.corner),
      el('p', 'ck-choose__need', r.label),
      el('span', 'ck-choose__arrow', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
      el('span', 'ck-choose__k', t.head[0] ?? ''),
      el('p', 'ck-choose__go', r.html[0] ?? ''),
    );
    wrap.append(card);
  });
  return wrap;
}

function buildFacts(t: Table): HTMLElement {
  const wrap = el('div', 'ck-facts');
  t.rows.forEach((r, i) => {
    const tile = spotCard('ck-facts__tile', r.label);
    tile.style.setProperty('--i', String(i));
    tile.append(el('span', 'ck-facts__label', r.label), el('span', 'ck-facts__value', r.html[0] ?? ''));
    wrap.append(tile);
  });
  return wrap;
}

function buildSteps(list: HTMLOListElement) {
  list.classList.add('ck-steps');
  Array.from(list.children).forEach((li, i) => {
    (li as HTMLElement).style.setProperty('--i', String(i));
    li.classList.add('ck-steps__item');
  });
  const rail = el('span', 'ck-steps__rail', '<span class="ck-steps__fill"></span>');
  rail.setAttribute('aria-hidden', 'true');
  list.prepend(rail);
  const fill = rail.firstElementChild as HTMLElement;
  const items = Array.from(list.querySelectorAll<HTMLElement>('.ck-steps__item'));
  const update = () => {
    const box = list.getBoundingClientRect();
    const mid = window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (mid - box.top) / box.height));
    fill.style.transform = `scaleY(${p})`;
    items.forEach((it) => {
      const r = it.getBoundingClientRect();
      it.classList.toggle('is-on', r.top < mid);
    });
  };
  onScroll(update);
}

/* ------------------------------------------------------------------ */
/* Effects                                                             */
/* ------------------------------------------------------------------ */

const scrollFns: (() => void)[] = [];
let ticking = false;
function onScroll(fn: () => void) {
  scrollFns.push(fn);
  fn();
}
window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      scrollFns.forEach((f) => f());
      ticking = false;
    });
  },
  { passive: true },
);
window.addEventListener('resize', () => scrollFns.forEach((f) => f()));

function countUp(node: HTMLElement) {
  if (node.dataset.ckDone === '1' && !node.closest('.ck-host')) return;
  const original = node.dataset.ckText ?? node.textContent ?? '';
  node.dataset.ckText = original;
  const m = original.match(/\d[\d.,   ]*\d|\d/);
  if (!m || reduceMotion) return;
  const token = m[0];
  const decSep = /[.,]\d{1,2}$/.test(token) && !/[.,]\d{3}$/.test(token) ? token.slice(-3).match(/[.,]/)?.[0] ?? null : null;
  const decimals = decSep ? token.length - token.lastIndexOf(decSep) - 1 : 0;
  const groupSep = (token.replace(decSep ? token.slice(token.lastIndexOf(decSep)) : '', '').match(/[^\d]/) ?? [''])[0];
  const intPart = decSep ? token.slice(0, token.lastIndexOf(decSep)) : token;
  const target = parseFloat(intPart.replace(/[^\d]/g, '') + (decSep ? '.' + token.slice(token.lastIndexOf(decSep) + 1) : ''));
  const fmt = (v: number) => {
    const fixed = v.toFixed(decimals);
    const [i, d] = fixed.split('.');
    const grouped = groupSep ? i.replace(/\B(?=(\d{3})+(?!\d))/g, groupSep) : i;
    return d ? `${grouped}${decSep}${d}` : grouped;
  };
  const start = performance.now();
  const dur = 1100;
  node.dataset.ckDone = '1';
  const step = (now: number) => {
    const k = Math.min(1, (now - start) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    node.textContent = original.replace(token, fmt(target * e));
    if (k < 1) requestAnimationFrame(step);
    else node.textContent = original;
  };
  requestAnimationFrame(step);
}

function spotlight(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('.ck-spot').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

const pending = new Set<HTMLElement>();
function reveal(target: HTMLElement) {
  target.classList.add('is-in');
  if (target.classList.contains('ck-host')) {
    const visual = target.querySelector<HTMLElement>('.ck-visual');
    if (visual) play(visual);
  }
  if (target.hasAttribute('data-ck-count')) countUp(target);
}
/** Anything whose top has entered the lower 90% of the viewport, or that sits
 *  above it, is revealed once. */
function checkPending() {
  const line = window.innerHeight * 0.9;
  pending.forEach((n) => {
    if (n.getBoundingClientRect().top < line) {
      pending.delete(n);
      reveal(n);
    }
  });
}
let checkerOn = false;
function watch(node: Element) {
  pending.add(node as HTMLElement);
  if (!checkerOn) {
    checkerOn = true;
    onScroll(checkPending);
  } else {
    checkPending();
  }
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

const BUILDERS: Record<string, (t: Table) => HTMLElement> = {
  cards: buildCards,
  columns: buildColumns,
  matrix: buildMatrix,
  layers: buildLayers,
  stack: buildStack,
  bars: buildBars,
  choose: buildChoose,
  facts: buildFacts,
};

function boot() {
  // Hidden-until-revealed styles only apply once this script runs, so a page
  // without JS shows everything.
  document.documentElement.classList.add('ck-js');
  document.querySelectorAll<HTMLElement>('[data-ck]').forEach((host) => {
    if (host.dataset.ckReady) return;
    host.dataset.ckReady = '1';
    const kind = host.dataset.ck ?? '';
    if (kind === 'steps') {
      const list = host.matches('ol') ? (host as HTMLOListElement) : host.querySelector('ol');
      if (list) buildSteps(list);
      watch(host);
      return;
    }
    const table = host.querySelector('table');
    const builder = BUILDERS[kind];
    if (!table || !builder) return;
    const data = readTable(table);
    if (!data.rows.length) return;
    const visual = el('div', `ck-visual ck-visual--${kind}`);
    visual.append(builder(data));
    mountWithSwitch(host, visual);
    spotlight(visual);
    watch(host);
  });

  document.querySelectorAll<HTMLElement>('[data-ck-section]').forEach((section) => {
    const blocks = section.querySelectorAll<HTMLElement>('[data-ck-rv]');
    blocks.forEach((b, i) => {
      b.style.setProperty('--rv-d', `${Math.min(i, 6) * 70}ms`);
      watch(b);
    });
  });
  document.querySelectorAll<HTMLElement>('[data-ck-count]').forEach((n) => {
    if (!n.closest('.ck-visual')) watch(n);
  });
  spotlight(document);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
