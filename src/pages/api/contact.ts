import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../lib/resend';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid JSON body.' }, 400);
	}

	const name = stringField(body.name);
	const email = stringField(body.email);
	const company = stringField(body.company);
	const message = stringField(body.message);

	if (!name || !email || !message) {
		return json({ error: 'Name, email, and message are required.' }, 400);
	}
	if (!EMAIL_RE.test(email)) {
		return json({ error: 'Invalid email address.' }, 400);
	}

	try {
		await sendContactEmail({ name, email, company, message });
		return json({ success: true }, 200);
	} catch (err) {
		const m = err instanceof Error ? err.message : 'Unknown error.';
		return json({ error: m }, 500);
	}
};

function stringField(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

function json(payload: unknown, status: number) {
	return new Response(JSON.stringify(payload), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}
