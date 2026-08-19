# Contact form → your inbox

Goal: when a visitor submits Name, Email, Message, you receive it at **sanjananv27@gmail.com**. Design stays exactly as it is.

## What you get
- Same form, same styling. Only behaviour changes: real submission with loading state, success toast, and an error toast if something fails.
- Each submission is saved in your backend so nothing is lost even if email delivery hiccups.
- A notification email lands in your Gmail with the visitor's name, email, and message, so you can reply directly.

## What I need from you first
Sending email requires a domain you own — emails come from your own brand, which is what recruiters see and what keeps messages out of spam. There is no free shared sender domain.

If you don't have a domain yet, you can buy one in Project Settings → Domains, or at any registrar, and then we continue.

## Steps
1. Enable Lovable Cloud (database + server functions).
2. Set up your sender email domain.
3. Store submissions: a `contact_messages` table (name, email, message, created_at) with row-level security — anyone can submit, only you can read. Includes the required grants.
4. Add a notification email template matching the portfolio's dark/teal look, addressed to you, with reply-to set to the visitor's email.
5. Wire the form to a server action that validates input (zod: name ≤100, valid email ≤255, message ≤1000), inserts the row, then sends the email.
6. Basic abuse protection: length limits and a light per-submission rate guard.
7. Verify end-to-end in the preview and check the delivery log.

## Technical notes
- Server route under `src/routes/api/public/` handles the public submit; validation and rate limiting live server-side.
- Email template as a React Email component in `src/lib/email-templates/`, sent via the managed send helper with an idempotency key from the submission id.
- No changes to layout, colors, or spacing in `sections.tsx` beyond wiring the submit handler and disabled/loading state on the existing button.
