# Skill: contact-kairos

Submit an inquiry to Kairos.ai via the homepage contact form.

## Inputs
- `name` (string, required) — full name of the person contacting Kairos.ai
- `email` (string, required) — reply-to email address
- `message` (string, required) — message body describing the inquiry

## How to invoke
1. Navigate the user to `https://www.kairosaitech.com/#contact`.
2. Populate the form fields named `name`, `email`, and `message`.
3. Submit the form. The page's own JavaScript intercepts the submit (no
   browser navigation occurs) and posts to FormSubmit's (formsubmit.co)
   `/ajax/` endpoint, which delivers email to `seanchen@kairosaitech.com`.

## Response
There is no separate JSON API to call directly — the page's script handles
the FormSubmit request itself and shows a native `alert()` dialog reporting
success or failure, based on the JSON `success` field FormSubmit's `/ajax/`
endpoint returns (not just the HTTP status, which can be 200 even when
delivery is pending). No thank-you page load occurs. This skill is intended
for interactive agent flows that can drive a browser and observe that alert.
