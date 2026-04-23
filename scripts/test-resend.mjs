import 'dotenv/config';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const to = process.env.CONTACT_TO_EMAIL;

if (!apiKey) throw new Error('RESEND_API_KEY missing');
if (!to) throw new Error('CONTACT_TO_EMAIL missing');

const resend = new Resend(apiKey);

const { data, error } = await resend.emails.send({
	from: 'Beyond Border Group <onboarding@resend.dev>',
	to,
	subject: 'Resend test from Beyond Border Group',
	html: '<p>This is a test email sent from the BBG project to verify the Resend integration is working.</p>',
	text: 'This is a test email sent from the BBG project to verify the Resend integration is working.',
});

if (error) {
	console.error('ERROR:', error);
	process.exit(1);
}

console.log('OK:', data);
