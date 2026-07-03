import type { APIRoute } from 'astro';
import { sendCalculatorLead } from '../../lib/resend';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reject the obvious free-inbox providers so the gate collects a real work
// address. Not exhaustive on purpose, it only needs to stop the lazy cases.
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'yahoo.fr',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'protonmail.com',
  'gmx.com',
  'qq.com',
  '163.com',
  '126.com',
]);

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const name = stringField(body.name);
  const email = stringField(body.email).toLowerCase();
  const company = stringField(body.company);
  const inputs = pairArrayField(body.inputs);
  const results = pairArrayField(body.results);

  if (!name || !email) {
    return json({ error: 'Name and email are required.' }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }
  const domain = email.split('@')[1] ?? '';
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return json({ error: 'Please use your work email so we can send the full breakdown.' }, 422);
  }

  try {
    await sendCalculatorLead({ name, email, company, inputs, results });
    return json({ success: true }, 200);
  } catch (err) {
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error('[api/calculator-lead] send failed', { detail });
    return json(
      {
        error:
          "We couldn't save your details right now. Please try again in a moment, or email us at hello@thechinapath.com.",
      },
      500,
    );
  }
};

function stringField(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function pairArrayField(value: unknown): { label: string; value: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((v) => {
      if (v && typeof v === 'object') {
        const label = stringField((v as Record<string, unknown>).label);
        const val = stringField((v as Record<string, unknown>).value);
        if (label) return { label, value: val };
      }
      return null;
    })
    .filter((v): v is { label: string; value: string } => v !== null)
    .slice(0, 40);
}

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
