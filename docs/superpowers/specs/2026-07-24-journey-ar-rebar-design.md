# Design: "Our Journey" + iTech AR spec + rebar spec expansion

Date: 2026-07-24

## Context

Site pivoted from a general "Smart Factory / Manufacturing AI / Digital Transformation" positioning (pre-`7c1afb2`) to a single-product focus: iTech, AI rebar estimation for AEC (current `index.html`). User wants the redesigned site to:

1. Include an "old version" section — honest recap of the legacy positioning, not a full restoration.
2. Expand the current rebar-estimation (iTech) content with a proper spec block.
3. Add a new "iTech AR" product — AR overlay of AI-detected rebar onto the physical construction site — as a spec section, since it doesn't exist yet.

Confirmed with user via AskUserQuestion:
- Old version → legacy positioning recap section (not restored product cards, not a separate archive page).
- AR product → AR rebar visualization feature of iTech (camera overlay + discrepancy flagging), not an unrelated product.
- Rebar section → expand the existing iTech section rather than duplicating it.

## Scope

Single-page site (`index.html`, `styles.css`, `script.js`). No new interactive JS components — reuse the existing scroll-reveal pattern and `.product-card` styling. All new copy added to the 4-language `translations` object in `script.js` (en/zh-TW/ja/es).

## 1. "Our Journey" section

Placement: new `<section id="journey">` between Hero and Process sections.

Content: two-column or timeline layout —
- **Then**: original tagline "Make Every Moment Count", legacy mission ("helping traditional manufacturing companies undergo digital transformation..."), tag chips: Smart Factory / Digital Transformation / Factory Process Optimization / Data Analysis — styled muted/desaturated to read as "legacy".
- **Now**: current tagline "AI Rebar Estimation Built for Construction", current mission, tag chips: AI Rebar Estimation / Rebar Takeoff / AEC — styled in brand color to read as "current".
- One connecting sentence explaining the narrowing of focus (from broad manufacturing AI to a concentrated AEC product).

Legacy copy is pulled verbatim/adapted from commit `7c1afb2^:index.html` (real prior copy, not invented).

## 2. iTech rebar spec expansion

No new section — extend the existing `#products` iTech card / a block near the `#process` section with a compact spec list:
- Input: construction drawings (DWG/PDF)
- Output: rebar takeoff + bar bending schedule (BBS), exportable (CSV/Excel)
- Pipeline: matches existing 4-step `#process` section (already implemented)

## 3. iTech AR product card

New card in `#products` grid, alongside the iTech card, same `.product-card` visual style, with an **"In Development"** badge (avoid overclaiming a live product).

Feature list:
- Real-time AR overlay of AI-detected rebar/BBS onto the physical site via phone/tablet camera
- Discrepancy flagging vs. drawing
- Offline capture mode
- Exportable on-site verification report

## i18n

All new strings (`journey.*`, `products.itechAr.*`, spec labels) added to `translations` for `en`, `zh-TW`, `ja`, `es` in `script.js`, following existing key-naming convention. `data-i18n` attributes added to new HTML elements.

## Testing

- Visual check in browser (all 4 languages, mobile + desktop width) via local `python -m http.server`.
- No build step / no automated tests in this repo (static site) — manual verification is the testing strategy, per project conventions.

## Out of scope

- No backend, no real AR implementation (this is marketing copy for an in-development feature).
- No restoration of removed products (vcom, W2E, VoiceSketch).
- Existing uncommitted changes to `index.html`/`sitemap.xml` are unrelated pre-existing work and will be preserved, not reverted.
