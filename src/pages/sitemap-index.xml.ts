import type { APIRoute } from 'astro';
import { buildSitemapIndex, fmtLastmod } from '../lib/sitemap';
import { SITE_URL } from '../lib/seo';

export const GET: APIRoute = () => {
	const today = fmtLastmod();
	const xml = buildSitemapIndex([
		{ loc: `${SITE_URL}/sitemap-static.xml`, lastmod: today },
		{ loc: `${SITE_URL}/sitemap-insights.xml`, lastmod: today },
		{ loc: `${SITE_URL}/sitemap-work.xml`, lastmod: today },
	]);
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
