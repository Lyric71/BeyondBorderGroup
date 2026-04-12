import { Resend } from 'resend';

export interface ContactPayload {
	name: string;
	email: string;
	company?: string;
	message: string;
}

const FROM_ADDRESS = 'Beyond Border Group <onboarding@resend.dev>';

export async function sendContactEmail(payload: ContactPayload) {
	const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
	const to = import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;

	if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');
	if (!to) throw new Error('CONTACT_TO_EMAIL is not configured.');

	const { name, email, company, message } = payload;
	const resend = new Resend(apiKey);

	const html = `
		<div style="font-family: -apple-system, 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F7F9FB; padding: 32px;">
			<div style="background: #269ADA; border-radius: 8px; padding: 24px 28px; margin-bottom: 20px;">
				<h1 style="color: #ffffff; font-size: 20px; margin: 0;">New contact form submission</h1>
			</div>
			<div style="background: #ffffff; border: 1px solid #E5E5E5; border-radius: 8px; padding: 24px 28px;">
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B; width: 100px;">Name</td>
						<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</td>
					</tr>
					<tr style="border-top: 1px solid #E5E5E5;">
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B;">Email</td>
						<td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #269ADA;">${escapeHtml(email)}</a></td>
					</tr>
					<tr style="border-top: 1px solid #E5E5E5;">
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B;">Company</td>
						<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A;">${escapeHtml(company ?? '-')}</td>
					</tr>
					<tr style="border-top: 1px solid #E5E5E5;">
						<td style="padding: 10px 0; font-size: 13px; color: #6B6B6B; vertical-align: top;">Message</td>
						<td style="padding: 10px 0; font-size: 14px; color: #1A1A1A; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, '<br/>')}</td>
					</tr>
				</table>
			</div>
		</div>
	`;

	const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? '-'}\n\n${message}`;

	const { data, error } = await resend.emails.send({
		from: FROM_ADDRESS,
		to,
		replyTo: email,
		subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
		html,
		text,
	});

	if (error) throw new Error(error.message ?? 'Resend send failed.');
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
