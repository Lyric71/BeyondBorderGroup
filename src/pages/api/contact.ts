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
	const website = stringField(body.website);
	const services = stringArrayField(body.services);
	const budget = stringField(body.budget);
	const profile = stringField(body.profile);
	const message = stringField(body.message);
	const captcha = stringField(body.captcha);
	const captchaExpected = stringField(body.captchaExpected);

	const captchaNum = Number.parseInt(captcha, 10);
	const expectedNum = Number.parseInt(captchaExpected, 10);
	if (
		!Number.isFinite(captchaNum) ||
		!Number.isFinite(expectedNum) ||
		expectedNum < 2 ||
		expectedNum > 18 ||
		captchaNum !== expectedNum
	) {
		return json({ error: 'Quick check failed. Please refresh and try again.' }, 400);
	}

	if (!name || !email || !message) {
		return json({ error: 'Name, email, and message are required.' }, 400);
	}
	if (!EMAIL_RE.test(email)) {
		return json({ error: 'Invalid email address.' }, 400);
	}

	try {
		await sendContactEmail({ name, email, company, website, services, budget, profile, message });
		return json({ success: true }, 200);
	} catch (err) {
		const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
		const stack = err instanceof Error ? err.stack : undefined;
		console.error('[api/contact] send failed', { detail, stack });
		return json(
			{
				error:
					"We couldn't send your message right now. Please try again in a moment, or email us at hello@beyondbordergroup.com.",
			},
			500,
		);
	}
};

function stringField(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

function stringArrayField(value: unknown): string[] {
	if (!Array.isArray(value)) return [];
	return value
		.map((v) => (typeof v === 'string' ? v.trim() : ''))
		.filter((v) => v.length > 0);
}

function json(payload: unknown, status: number) {
	return new Response(JSON.stringify(payload), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}
