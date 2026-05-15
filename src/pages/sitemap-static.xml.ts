import type { APIRoute } from 'astro';
import { buildUrlSet, STATIC_ENTRIES } from '../lib/sitemap';

export const GET: APIRoute = () => {
	const xml = buildUrlSet(STATIC_ENTRIES);
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
