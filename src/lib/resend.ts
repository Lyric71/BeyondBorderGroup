import { Resend } from 'resend';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  website?: string;
  services?: string[];
  budget?: string;
  profile?: string;
  message: string;
  /**
   * Which form the enquiry came from. Optional so the main contact form is
   * unchanged; the Compass shortlist brief sets it so the same inbox can tell
   * a partner-search brief from a general enquiry at a glance.
   */
  source?: string;
  /**
   * WeChat ID. Optional, and only collected by the Compass partner form:
   * China-domestic distributors answer on WeChat far more reliably than on
   * email, so the inbox needs somewhere to put it.
   */
  wechat?: string;
}

const FROM_ADDRESS = 'TheChinaPath <onboarding@resend.dev>';

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;

  if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');
  if (!to) throw new Error('CONTACT_TO_EMAIL is not configured.');

  const { name, email, company, website, services, budget, profile, message, source, wechat } =
    payload;
  const resend = new Resend(apiKey);

  const servicesList = services && services.length > 0 ? services : null;
  const servicesHtml = servicesList
    ? `<ul style="margin: 0; padding-left: 18px;">${servicesList.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
    : '-';
  const servicesText = servicesList ? servicesList.map((s) => `  - ${s}`).join('\n') : '-';

  const row = (label: string, valueHtml: string) => `
		<tr style="border-top: 1px solid #E5E5E5;">
			<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B; width: 120px; vertical-align: top;">${label}</td>
			<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A; line-height: 1.6;">${valueHtml}</td>
		</tr>
	`;

  const html = `
		<div style="font-family: -apple-system, 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F7F9FB; padding: 32px;">
			<div style="background: #C8102E; border-radius: 8px; padding: 24px 28px; margin-bottom: 20px;">
				<h1 style="color: #ffffff; font-size: 20px; margin: 0;">New contact form submission</h1>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px;">
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B; width: 120px;">Name</td>
						<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</td>
					</tr>
					${source ? row('Source', escapeHtml(source)) : ''}
					${wechat ? row('WeChat', escapeHtml(wechat)) : ''}
					${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color: #C8102E;">${escapeHtml(email)}</a>`)}
					${row('Company', escapeHtml(company ?? '-'))}
					${row('Website', website ? `<a href="${escapeHtml(website)}" style="color: #C8102E;">${escapeHtml(website)}</a>` : '-')}
					${row('Profile', escapeHtml(profile ?? '-') || '-')}
					${row('Budget', escapeHtml(budget ?? '-') || '-')}
					${row('Services', servicesHtml)}
					${row('Message', escapeHtml(message).replace(/\n/g, '<br/>'))}
				</table>
			</div>
		</div>
	`;

  const text = [
    source ? `Source: ${source}` : null,
    `Name: ${name}`,
    `Email: ${email}`,
    wechat ? `WeChat: ${wechat}` : null,
    `Company: ${company || '-'}`,
    `Website: ${website || '-'}`,
    `Profile: ${profile || '-'}`,
    `Budget: ${budget || '-'}`,
    `Services:\n${servicesText}`,
    '',
    message,
  ].join('\n');

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: email,
    subject: `${source ? `[${source}] ` : ''}New enquiry from ${name}${company ? ` - ${company}` : ''}`,
    html,
    text,
  });

  if (error) {
    console.error('[resend] send failed', { from: FROM_ADDRESS, to, error });
    throw new Error(error.message ?? 'Resend send failed.');
  }
  return data;
}

export interface CalculatorLeadPayload {
  name: string;
  email: string;
  company?: string;
  /** Human-readable summary of the inputs the visitor entered. */
  inputs: { label: string; value: string }[];
  /** Human-readable summary of the results they unlocked. */
  results: { label: string; value: string }[];
}

export async function sendCalculatorLead(payload: CalculatorLeadPayload) {
  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;

  if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');
  if (!to) throw new Error('CONTACT_TO_EMAIL is not configured.');

  const { name, email, company, inputs, results } = payload;
  const resend = new Resend(apiKey);

  const rows = (pairs: { label: string; value: string }[]) =>
    pairs
      .map(
        (p) => `
			<tr style="border-top: 1px solid #E5E5E5;">
				<td style="padding: 8px 0; font-size: 13px; color: #6B6B6B; width: 60%; vertical-align: top;">${escapeHtml(p.label)}</td>
				<td style="padding: 8px 0; font-size: 14px; color: #1A1A1A; font-weight: 600; text-align: right;">${escapeHtml(p.value)}</td>
			</tr>`,
      )
      .join('');

  const html = `
		<div style="font-family: -apple-system, 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #F7F9FB; padding: 32px;">
			<div style="background: #C8102E; border-radius: 8px; padding: 24px 28px; margin-bottom: 20px;">
				<h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Douyin cost calculator lead</h1>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px; margin-bottom: 16px;">
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 8px 0; font-size: 13px; color: #6B6B6B; width: 120px;">Name</td>
						<td style="padding: 8px 0; font-size: 14px; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</td>
					</tr>
					<tr style="border-top: 1px solid #E5E5E5;">
						<td style="padding: 8px 0; font-size: 13px; color: #6B6B6B;">Email</td>
						<td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #C8102E;">${escapeHtml(email)}</a></td>
					</tr>
					<tr style="border-top: 1px solid #E5E5E5;">
						<td style="padding: 8px 0; font-size: 13px; color: #6B6B6B;">Company</td>
						<td style="padding: 8px 0; font-size: 14px; color: #1A1A1A;">${escapeHtml(company ?? '-') || '-'}</td>
					</tr>
				</table>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px; margin-bottom: 16px;">
				<h2 style="font-size: 14px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 8px;">Inputs</h2>
				<table style="width: 100%; border-collapse: collapse;">${rows(inputs)}</table>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px;">
				<h2 style="font-size: 14px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 8px;">Results unlocked</h2>
				<table style="width: 100%; border-collapse: collapse;">${rows(results)}</table>
			</div>
		</div>
	`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    '',
    'INPUTS',
    ...inputs.map((p) => `  ${p.label}: ${p.value}`),
    '',
    'RESULTS',
    ...results.map((p) => `  ${p.label}: ${p.value}`),
  ].join('\n');

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: email,
    subject: `Douyin calculator lead - ${name}${company ? ` (${company})` : ''}`,
    html,
    text,
  });

  if (error) {
    console.error('[resend] calculator lead send failed', { from: FROM_ADDRESS, to, error });
    throw new Error(error.message ?? 'Resend send failed.');
  }
  return data;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
