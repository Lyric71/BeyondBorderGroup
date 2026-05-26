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
}

const FROM_ADDRESS = 'Beyond Border Group <onboarding@resend.dev>';

export async function sendContactEmail(payload: ContactPayload) {
	const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
	const to = import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;

	if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');
	if (!to) throw new Error('CONTACT_TO_EMAIL is not configured.');

	const { name, email, company, website, services, budget, profile, message } = payload;
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
			<div style="background: #269ADA; border-radius: 8px; padding: 24px 28px; margin-bottom: 20px;">
				<h1 style="color: #ffffff; font-size: 20px; margin: 0;">New contact form submission</h1>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px;">
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B; width: 120px;">Name</td>
						<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</td>
					</tr>
					${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color: #269ADA;">${escapeHtml(email)}</a>`)}
					${row('Company', escapeHtml(company ?? '-'))}
					${row('Website', website ? `<a href="${escapeHtml(website)}" style="color: #269ADA;">${escapeHtml(website)}</a>` : '-')}
					${row('Profile', escapeHtml(profile ?? '-') || '-')}
					${row('Budget', escapeHtml(budget ?? '-') || '-')}
					${row('Services', servicesHtml)}
					${row('Message', escapeHtml(message).replace(/\n/g, '<br/>'))}
				</table>
			</div>
		</div>
	`;

	const text = [
		`Name: ${name}`,
		`Email: ${email}`,
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
		subject: `New enquiry from ${name}${company ? ` - ${company}` : ''}`,
		html,
		text,
	});

	if (error) {
		console.error('[resend] send failed', { from: FROM_ADDRESS, to, error });
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
