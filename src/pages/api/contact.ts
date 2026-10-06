import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../lib/resend';
import {
  isLeadSource,
  LEAD_SOURCE_DETAIL_MAX,
  LEAD_SOURCES_WITH_DETAIL,
} from '../../lib/lead-source';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Forms that ask "How did you hear about us?" and must send an answer. The
 * Compass partner forms do not ask, so they pass without one.
 */
const FORMS_ASKING_SOURCE = new Set(['Contact', 'Compass shortlist']);

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
  // `form` tags which form sent the enquiry; `source` is the visitor's answer
  // to "How did you hear about us?". A page still open from before the split
  // sends no `form` and may carry its tag in `source`: that value is read as
  // the tag, and the missing answer is let through rather than losing the lead.
  const rawSource = stringField(body.source);
  const declaredForm = stringField(body.form);
  const form = declaredForm || (rawSource && !isLeadSource(rawSource) ? rawSource : '');
  const source = isLeadSource(rawSource) ? rawSource : undefined;
  const sourceDetail =
    source && LEAD_SOURCES_WITH_DETAIL.includes(source)
      ? stringField(body.sourceDetail).slice(0, LEAD_SOURCE_DETAIL_MAX)
      : '';
  const wechat = stringField(body.wechat);
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
  if (rawSource && !source && rawSource !== form) {
    return json({ error: 'Unknown answer to "How did you hear about us?".' }, 400);
  }
  if (!source && FORMS_ASKING_SOURCE.has(declaredForm)) {
    return json({ error: 'Please tell us how you heard about us.' }, 400);
  }

  try {
    await sendContactEmail({
      name,
      email,
      company,
      website,
      services,
      budget,
      profile,
      message,
      form,
      source,
      sourceDetail,
      wechat,
    });
    return json({ success: true }, 200);
  } catch (err) {
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error('[api/contact] send failed', { detail, stack });
    return json(
      {
        error:
          "We couldn't send your message right now. Please try again in a moment, or email us at hello@thechinapath.com.",
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
  return value.map((v) => (typeof v === 'string' ? v.trim() : '')).filter((v) => v.length > 0);
}

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
