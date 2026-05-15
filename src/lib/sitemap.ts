/**
 * Sitemap building helpers. Used by the endpoints under src/pages/sitemap-*.xml.ts.
 *
 * Trailing-slash policy: no trailing slash, except root `/`.
 * Hreflang policy: every URL that has a real twin emits xhtml:link alternates
 * for both locales + an x-default pointing at the EN URL.
 */

import { localizePath, defaultLocale } from '../i18n/utils';
import { locales } from '../i18n/ui';
import { SITE_URL } from './seo';

export interface SitemapEntry {
	/** Canonical English path (no locale prefix). Used to compute alternates. */
	enPath: string;
	/** Last-mod date. */
	lastmod: string;
	/** Whether a FR twin exists. When false, only an EN entry is emitted. */
	hasFr?: boolean;
}

function abs(path: string): string {
	if (path === '/' || path === '') return SITE_URL;
	return SITE_URL + path;
}

function xmlEscape(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function buildUrlBlock(entry: SitemapEntry): string {
	const enHref = abs(entry.enPath);
	const lines: string[] = [];
	lines.push('  <url>');
	lines.push(`    <loc>${xmlEscape(enHref)}</loc>`);
	lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
	if (entry.hasFr) {
		for (const l of locales) {
			const mapped = localizePath(entry.enPath, l);
			const href = abs(mapped === '/' ? '/' : mapped);
			lines.push(
				`    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(href)}" />`,
			);
		}
		lines.push(
			`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enHref)}" />`,
		);
	}
	lines.push('  </url>');

	if (entry.hasFr) {
		const frHref = abs(localizePath(entry.enPath, 'fr'));
		lines.push('  <url>');
		lines.push(`    <loc>${xmlEscape(frHref)}</loc>`);
		lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
		for (const l of locales) {
			const mapped = localizePath(entry.enPath, l);
			const href = abs(mapped === '/' ? '/' : mapped);
			lines.push(
				`    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(href)}" />`,
			);
		}
		lines.push(
			`    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enHref)}" />`,
		);
		lines.push('  </url>');
	}

	return lines.join('\n');
}

export function buildUrlSet(entries: SitemapEntry[]): string {
	const body = entries.map(buildUrlBlock).join('\n');
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

export function buildSitemapIndex(sitemaps: { loc: string; lastmod: string }[]): string {
	const body = sitemaps
		.map(
			(s) => `  <sitemap>\n    <loc>${xmlEscape(s.loc)}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`,
		)
		.join('\n');
	return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}

/**
 * Static (non-collection) pages. enPath is canonical English; hasFr signals
 * whether a French twin exists (driven by what's in src/pages/fr/).
 */
export const STATIC_ENTRIES: SitemapEntry[] = [
	{ enPath: '/', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/about', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/contact', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/enter-china', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/enter-china/market-entry-consulting', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/enter-china/cross-border-setup', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/enter-china/distribution', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/enter-china/branding-localisation', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/cross-border-ecommerce', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/social-commerce', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/campaigns', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/media', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/influencers-kols', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/production-studio', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/grow-in-china/website', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/learn-china', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/learn-china/platforms', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/learn-china/masterclass', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/learn-china/learning-expeditions', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/work', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/insights', lastmod: '2026-05-15', hasFr: true },
	{ enPath: '/cookie-policy', lastmod: '2026-05-15', hasFr: false },
	{ enPath: '/privacy-policy', lastmod: '2026-05-15', hasFr: false },
	{ enPath: '/terms-of-service', lastmod: '2026-05-15', hasFr: false },
	{ enPath: '/kol-kit', lastmod: '2026-05-15', hasFr: false },
];

/** Format a Date or ISO string as YYYY-MM-DD for <lastmod>. */
export function fmtLastmod(d?: Date | string): string {
	if (!d) return new Date().toISOString().slice(0, 10);
	const date = typeof d === 'string' ? new Date(d) : d;
	return date.toISOString().slice(0, 10);
}
