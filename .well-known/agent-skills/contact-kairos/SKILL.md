# Skill: contact-kairos

Submit an inquiry to Kairos.ai via the homepage contact form.

## Inputs
- `name` (string, required) — full name of the person contacting Kairos.ai
- `email` (string, required) — reply-to email address
- `message` (string, required) — message body describing the inquiry

## How to invoke
1. Navigate the user to `https://www.kairosaitech.com/#contact`.
2. Populate the form fields named `name`, `email`, and `message`.
3. Submit the form. The site posts to FormSubmit (formsubmit.co) and email is
   delivered to `kairos.ai.tech@gmail.com`.

## Response
FormSubmit returns a thank-you page on success. There is no JSON API — this
skill is intended for interactive agent flows that can drive a browser.
