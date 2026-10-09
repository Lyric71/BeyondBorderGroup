/**
 * Behaviour for the pillar guide layout (src/components/PillarGuide.astro):
 * reading progress, contents scroll-spy and read meter, the mobile contents
 * sheet, quote source cards, figure parallax and section reveal.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const article = document.querySelector<HTMLElement>('[data-pg-article]');

if (article) {
  document.documentElement.classList.add('ck-js');
  const headings = Array.from(article.querySelectorAll<HTMLElement>('h2[id]'));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-pg-link]'));
  const bar = document.querySelector<HTMLElement>('[data-pg-progress]');
  const meter = document.querySelector<HTMLElement>('[data-pg-meter]');
  const pct = document.querySelector<HTMLElement>('[data-pg-pct]');
  const ring = document.querySelector<HTMLElement>('.pg-mtoc__ring');
  const current = document.querySelector<HTMLElement>('[data-pg-current]');
  const mtoc = document.querySelector<HTMLButtonElement>('[data-pg-mtoc]');
  const sheet = document.querySelector<HTMLElement>('[data-pg-sheet]');

  /* Quote cards: split "Source: Publisher, Month Year. https://..." into a
     footer with a short link chip. Works for Source / Quelle / Fuente. */
  article.querySelectorAll('blockquote').forEach((q) => {
    const p = q.querySelector('p:last-child');
    if (!p) return;
    const html = p.innerHTML;
    const m = html.match(/^([\s\S]*?)\s*((?:Source|Quelle|Fuente)\s*:[\s\S]*)$/);
    if (!m) return;
    p.innerHTML = m[1].trim();
    const srcText = m[2];
    const url = srcText.match(/https?:\/\/[^\s<"]+/)?.[0];
    const label = srcText
      .replace(/<[^>]+>/g, '')
      .replace(/https?:\/\/\S+/, '')
      .replace(/[.\s]+$/, '')
      .trim();
    const foot = document.createElement('footer');
    foot.className = 'pg-quote__src';
    const span = document.createElement('span');
    span.textContent = label;
    foot.append(span);
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = new URL(url).hostname.replace(/^www\.|^m\./, '');
      foot.append(a);
    }
    q.append(foot);
  });

  /* Reveal: headings, quotes, figures and visual blocks rise in. */
  const rv = article.querySelectorAll<HTMLElement>(':scope > h2, :scope > h3, :scope > blockquote, :scope > figure, :scope > .ck-host, :scope > [data-ck], :scope > .table-scroll, .pg-cta');
  if (!reduceMotion) {
    const pendingRv = new Set<HTMLElement>(Array.from(rv));
    rv.forEach((n) => n.classList.add('pg-rv'));
    const checkRv = () => {
      const line = window.innerHeight * 0.9;
      pendingRv.forEach((n) => {
        if (n.getBoundingClientRect().top < line) {
          pendingRv.delete(n);
          n.classList.add('is-in');
        }
      });
    };
    checkRv();
    window.addEventListener('scroll', checkRv, { passive: true });
    window.addEventListener('resize', checkRv);
  }

  /* Parallax on the hero and the figures. */
  const parallax = [
    ...Array.from(document.querySelectorAll<HTMLElement>('[data-pg-parallax]')),
    ...Array.from(article.querySelectorAll<HTMLElement>('.pg-figure img')),
  ];

  let active = -1;
  const setActive = (i: number) => {
    if (i === active) return;
    active = i;
    const slug = headings[i]?.id;
    links.forEach((a) => {
      const idx = headings.findIndex((h) => h.id === a.dataset.pgLink);
      a.classList.toggle('is-active', a.dataset.pgLink === slug);
      a.classList.toggle('is-read', idx > -1 && idx < i);
    });
    if (current && headings[i]) current.textContent = headings[i].textContent ?? '';
    // Keep the active entry visible inside a long rail.
    const railLink = document.querySelector<HTMLElement>(`.pg-toc [data-pg-link="${slug}"]`);
    const rail = railLink?.closest<HTMLElement>('.pg-toc__card');
    if (railLink && rail) {
      const top = railLink.offsetTop - rail.clientHeight / 2;
      rail.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  const update = () => {
    const box = article.getBoundingClientRect();
    const total = box.height - window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, -box.top / Math.max(1, total)));
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (meter) meter.style.transform = `scaleX(${p})`;
    if (pct) pct.textContent = `${Math.round(p * 100)}%`;
    if (ring) ring.style.setProperty('--p', String(Math.round(p * 100)));
    if (mtoc) mtoc.classList.toggle('is-shown', box.top < window.innerHeight * 0.4 && box.bottom > window.innerHeight);

    const line = window.innerHeight * 0.3;
    let i = 0;
    headings.forEach((h, idx) => {
      if (h.getBoundingClientRect().top < line) i = idx;
    });
    setActive(i);

    if (!reduceMotion) {
      parallax.forEach((img) => {
        const r = img.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const k = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `translateY(${(-k * 8 - 8).toFixed(2)}%)`;
      });
    }
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* Mobile contents sheet. */
  const closeSheet = () => {
    if (!sheet || !mtoc) return;
    sheet.hidden = true;
    mtoc.setAttribute('aria-expanded', 'false');
  };
  mtoc?.addEventListener('click', () => {
    if (!sheet) return;
    const open = sheet.hidden;
    sheet.hidden = !open;
    mtoc.setAttribute('aria-expanded', String(open));
    if (open) sheet.querySelector<HTMLAnchorElement>('a.is-active, a')?.focus();
  });
  sheet?.addEventListener('click', (e) => {
    if (e.target === sheet || (e.target as HTMLElement).closest('a')) closeSheet();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSheet();
  });

  document.querySelector('[data-pg-print]')?.addEventListener('click', () => {
    // Show every table for print; the visuals are screen-only.
    window.print();
  });
}
