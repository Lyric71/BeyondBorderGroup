import type { APIRoute } from 'astro';
import { generateImage } from '../../lib/wavespeed';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const apiKey = import.meta.env.WAVESPEED_API_KEY ?? process.env.WAVESPEED_API_KEY;
	if (!apiKey) {
		return json({ error: 'WAVESPEED_API_KEY is not configured.' }, 500);
	}

	let body: { prompt?: unknown };
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid JSON body.' }, 400);
	}

	const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';
	if (!prompt) {
		return json({ error: 'Prompt is required.' }, 400);
	}

	try {
		const result = await generateImage({ prompt, apiKey });
		return json({ success: true, ...result }, 200);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Unknown error.';
		return json({ error: message }, 502);
	}
};

function json(payload: unknown, status: number) {
	return new Response(JSON.stringify(payload), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}
