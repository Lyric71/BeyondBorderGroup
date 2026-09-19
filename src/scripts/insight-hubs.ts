/**
 * Motion shared by the two insight hubs (Trends and Industry Insights).
 * Everything here is progressive: without JS, or with reduced motion, the
 * page is complete and static.
 */

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds `is-in` to every [data-ix-reveal] once it scrolls into view. */
export function initReveal(root: ParentNode) {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-ix-reveal]'));
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
  return io;
}

/** Watches elements added later (filtered or "show more" cards). */
export function revealNow(el: HTMLElement) {
  el.classList.add('is-in');
}

/** Counts [data-count] numbers up from zero on load. */
export function initCountUp(root: ParentNode) {
  if (reducedMotion()) return;
  root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count || '0', 10);
    if (!target) return;
    let start: number | null = null;
    el.textContent = '0';
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / 1100);
      el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 350);
  });
}

/** Cursor spotlight on [data-ix-spot], plus a light 3D tilt on [data-ix-tilt]. */
export function initSpotlight(root: ParentNode) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const reduced = reducedMotion();
  root.addEventListener('pointermove', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-ix-spot]');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e as PointerEvent).clientX - r.left;
    const y = (e as PointerEvent).clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (!reduced && el.hasAttribute('data-ix-tilt')) {
      el.style.setProperty('--rx', `${(((y / r.height) - 0.5) * -5).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(((x / r.width) - 0.5) * 5).toFixed(2)}deg`);
    }
  });
  root.addEventListener(
    'pointerout',
    (e) => {
      const el = (e.target as Element).closest<HTMLElement>('[data-ix-tilt]');
      if (el && !el.contains((e as PointerEvent).relatedTarget as Node)) {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      }
    },
    true,
  );
}

/**
 * Keeps a sticky element right under the site header. The header tucks away on
 * scroll-down and returns on scroll-up, except below 1181px where global.css
 * cancels the tuck. Writes `--ix-top` on the element.
 */
export function followHeader(el: HTMLElement | null) {
  const nav = document.querySelector<HTMLElement>('.nav');
  if (!el || !nav) return () => {};
  const sync = () => {
    const shown = !nav.classList.contains('nav--tucked') || window.matchMedia('(max-width: 1180px)').matches;
    el.style.setProperty('--ix-top', shown ? `${nav.offsetHeight}px` : '0px');
  };
  if ('MutationObserver' in window) {
    new MutationObserver(sync).observe(nav, { attributes: true, attributeFilter: ['class'] });
  }
  window.addEventListener('resize', sync);
  sync();
  return sync;
}

/** Lowercase, accents stripped, punctuation to spaces. Used by both searches. */
export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
