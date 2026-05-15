import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildUrlSet, fmtLastmod, type SitemapEntry } from '../lib/sitemap';

export const GET: APIRoute = async () => {
	const en = await getCollection('insights', ({ data }) => !data.draft);
	const fr = await getCollection('insightsFr', ({ data }) => !data.draft);
	const frIds = new Set(fr.map((p) => p.id));
	const entries: SitemapEntry[] = en.map((p) => ({
		enPath: `/insights/${p.id}`,
		lastmod: fmtLastmod(p.data.updatedDate ?? p.data.pubDate),
		hasFr: frIds.has(p.id),
	}));
	entries.sort((a, b) => a.enPath.localeCompare(b.enPath));
	const xml = buildUrlSet(entries);
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
