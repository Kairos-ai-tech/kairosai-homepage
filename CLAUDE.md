# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Kairos.ai (優時科技), a Taiwan-based company building iTech — an AI rebar estimation system for the AEC/construction industry — plus custom AI systems, backend infrastructure, and data platforms. The site is hosted at www.kairosaitech.com via GitHub Pages.

## Development Commands

```bash
# Run local development server (no build step required)
python -m http.server 8000
# or
npx http-server

# Then visit http://localhost:8000
```

No build tools, package managers, or dependencies required - this is a pure static site.

## Architecture

### File Structure
- `index.html` - Single-page application with all HTML content and SEO metadata
- `styles.css` - All styling with CSS variables for theming at `:root`
- `script.js` - All JavaScript functionality (vanilla JS, no frameworks)
- `logo.png`, `logo_title.png` - Brand assets

### Internationalization (i18n) System

The site supports 8 languages: English (`en`, default), Traditional Chinese (`zh-TW`), Japanese (`ja`), Spanish (`es`), Italian (`it`), French (`fr`), Korean (`ko`), and German (`de`).

**How it works:**
1. HTML elements use `data-i18n` attributes for text content or `data-i18n-placeholder` for placeholders
2. All translations are stored in the `translations` object in `script.js` (lines 5-742), merged at runtime with `extraI18n` (lines 877-1045, for sections added after the initial i18n pass)
3. `setLanguage(lang)` function updates all translatable elements
4. Language preference persists in localStorage

**To add/edit translations:**
1. Add translation keys to the `translations` object in `script.js` for each language
2. Add `data-i18n="your.key"` attribute to HTML elements
3. Update `langLabels` object if adding a new language

### Key JavaScript Modules (in script.js)

| Section | Functionality |
|---------|--------------|
| Lines 5-745 | i18n translations object (8 languages) |
| Lines 746-875 | `langLabels`, `setLanguage()`, language dropdown/selector |
| Lines 876-1078 | `extraI18n` — translations for sections added after the initial i18n pass, merged into `translations` at load |
| Lines 1079-1087 | Performance optimization (debounce) |
| Lines 1088-1119 | Mobile hamburger navigation |
| Lines 1120-1125 | Navbar scroll effect |
| Lines 1126-1139 | Smooth scroll for anchor links |
| Lines 1140-1157 | Scroll reveal animations (IntersectionObserver) |
| Lines 1158-1186 | Animated stat counters |
| Lines 1187-1202 | Active navigation highlighting (IntersectionObserver) |
| Lines 1203-1223 | Scroll engine: progress rail + spine draw + grid parallax |
| Lines 1224-1233 | Pointer-reactive blueprint glow (desktop) |
| Lines 1234-1276 | Contact form submission via FormSubmit |
| Lines 1277-1390 | WebMCP — tools exposed to AI agents via `navigator.modelContext` |

### CSS Theming

Primary brand color: `#2680FF` (matches logo). All colors defined as CSS variables in `:root`.

### Contact Form

Uses FormSubmit (formsubmit.co) for email delivery - no backend required. Emails go to kairos.ai.tech@gmail.com.

### SEO

- Schema.org structured data in `index.html`
- Open Graph and Twitter card meta tags
- Google Analytics (G-N7Z66L7WBR)
- Sitemap at `sitemap.xml`
- Robots.txt configured

## Deployment

Hosted on GitHub Pages with custom domain (configured in `CNAME` file). Push to `main` branch to deploy.
