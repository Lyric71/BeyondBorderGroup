import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildUrlSet, fmtLastmod, type SitemapEntry } from '../lib/sitemap';

export const GET: APIRoute = async () => {
	const en = await getCollection('cases', ({ data }) => !data.draft);
	const fr = await getCollection('casesFr', ({ data }) => !data.draft);
	const frIds = new Set(fr.map((c) => c.id));
	const today = fmtLastmod();
	const entries: SitemapEntry[] = en.map((c) => ({
		enPath: `/work/${c.id}`,
		lastmod: today,
		hasFr: frIds.has(c.id),
	}));
	entries.sort((a, b) => a.enPath.localeCompare(b.enPath));
	const xml = buildUrlSet(entries);
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
