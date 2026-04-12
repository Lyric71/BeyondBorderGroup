# Resend API - Integration Guide

## 1. Get your API key

Sign up at [resend.com](https://resend.com) and grab your API key. Add it to your `.env`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 2. Install the SDK

```bash
npm install resend
```

---

## 3. Basic usage pattern

Every Resend call follows this pattern:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Your App <onboarding@resend.dev>',    // free tier sender
  to: 'recipient@example.com',
  replyTo: 'actual-reply@example.com',          // optional
  subject: 'Email subject',
  html: '<h1>Hello</h1>',                       // HTML body
  text: 'Hello',                                // plain text fallback (optional)
  headers: {},                                   // custom headers (optional)
});

if (error) {
  console.error('Resend error:', error);
}
```

---

## 4. Sender address

- **Free tier:** You must use `onboarding@resend.dev` as the sender domain
- **Custom domain:** After verifying your domain in the Resend dashboard, use `noreply@yourdomain.com`
- **Display name:** Include it in the `from` field: `"Your App <noreply@yourdomain.com>"`

---

## 5. Use case: Contact form

Sends form submissions to your inbox.

```typescript
import { Resend } from 'resend';

async function handleContactForm(formData: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const { name, email, company, message } = formData;

  // Validate
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message) throw new Error('Missing required fields.');
  if (!emailRegex.test(email)) throw new Error('Invalid email address.');

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #001840 0%, #0A66C2 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New contact form submission</h1>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="mailto:${email}" style="color: #0A66C2;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #56687A; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1A1F2E; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: 'Your App <onboarding@resend.dev>',
    to: 'you@yourdomain.com',
    replyTo: email,
    subject: `New enquiry from ${name} - ${company}`,
    html,
  });

  if (error) throw new Error('Failed to send email.');
  return { success: true };
}
```

---

## 6. Use case: Internal lead notification

Notify your team when a new lead comes in.

```typescript
import { Resend } from 'resend';

async function notifyLead(lead: {
  name: string;
  company: string;
  position?: string;
  email: string;
  country?: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, company, position, email, country } = lead;

  await resend.emails.send({
    from: 'Your App <onboarding@resend.dev>',
    to: 'team@yourdomain.com',
    replyTo: email,
    subject: `New Lead: ${name} - ${company}`,
    text: `Name: ${name}\nCompany: ${company}\nPosition: ${position || '-'}\nEmail: ${email}\nCountry: ${country || '-'}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 16px;">
        <div style="background: linear-gradient(135deg, #0F172A, #1E293B); border-radius: 12px; padding: 24px 28px; margin-bottom: 20px;">
          <h1 style="color: white; font-size: 18px; margin: 0;">New Lead</h1>
        </div>
        <div style="background: white; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px 28px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #64748B; width: 100px;">Name</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0F172A; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; font-size: 13px; color: #64748B;">Company</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0F172A;">${company}</td>
            </tr>
            <tr style="border-top: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; font-size: 13px; color: #64748B;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0EA5E9;">${email}</a></td>
            </tr>
            <tr style="border-top: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; font-size: 13px; color: #64748B;">Position</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0F172A;">${position || '-'}</td>
            </tr>
            <tr style="border-top: 1px solid #F1F5F9;">
              <td style="padding: 10px 0; font-size: 13px; color: #64748B;">Country</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0F172A;">${country || '-'}</td>
            </tr>
          </table>
        </div>
      </div>
    `,
  });
}
```

---

## 7. Use case: Transactional email to user

Send a report or confirmation email to the user with custom headers.

```typescript
import { Resend } from 'resend';

async function sendReportEmail(userEmail: string, reportHtml: string, subject: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Your App <onboarding@resend.dev>',
    to: userEmail,
    replyTo: 'support@yourdomain.com',
    subject,
    html: reportHtml,
    text: 'Plain text fallback for email clients that do not support HTML.',
    headers: {
      'List-Unsubscribe': '<mailto:support@yourdomain.com?subject=Unsubscribe>',
    },
  });

  if (error) throw new Error('Failed to send report.');
}
```

---

## 8. Express.js example route

```typescript
import express from 'express';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to: 'you@yourdomain.com',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `<p><b>${name}</b> (${email}) from ${company}:</p><p>${message}</p>`,
    });

    if (error) return res.status(500).json({ error: 'Failed to send.' });
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Unexpected error.' });
  }
});
```

---

## 9. Next.js App Router example

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: 'Your App <onboarding@resend.dev>',
    to: 'you@yourdomain.com',
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `<p>${message}</p>`,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
```

---

## 10. Email validation helper

```typescript
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

---

## 11. Error handling cheat sheet

| Scenario | HTTP Status | Check |
|----------|-------------|-------|
| Missing API key | 500 | `!process.env.RESEND_API_KEY` |
| Invalid request body | 400 | JSON parse / missing fields |
| Invalid email format | 400 | Regex test fails |
| Resend API error | 500 | `error` returned from `resend.emails.send()` |
| Unexpected error | 500 | Catch block |

---

## 12. Key notes

- **Free tier:** 100 emails/day, must use `onboarding@resend.dev` as sender
- **Custom domain:** Verify in Resend dashboard to use your own sender address
- **SDK version:** `resend ^6.9.4` (latest)
- **HTML emails:** Use inline styles only (no `<style>` blocks) for maximum client compatibility
- **Plain text fallback:** Always include `text` for clients that don't render HTML
- **Reply-To:** Set to the user's email so replies go to them, not the sender address
- **Unsubscribe headers:** Add `List-Unsubscribe` header for transactional emails to improve deliverability
- **Spam protection:** Pair with reCAPTCHA or a honeypot field on public forms
