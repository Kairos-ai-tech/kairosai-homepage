# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Kairos.ai (優時科技), a Taiwan-based company specializing in AI systems, smart factory solutions, and digital transformation for manufacturing. The site is hosted at www.kairosaitech.com via GitHub Pages.

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

The site supports 4 languages: English (`en`), Traditional Chinese (`zh-TW`), Japanese (`ja`), and Spanish (`es`).

**How it works:**
1. HTML elements use `data-i18n` attributes for text content or `data-i18n-placeholder` for placeholders
2. All translations are stored in the `translations` object in `script.js` (lines 5-430)
3. `setLanguage(lang)` function updates all translatable elements
4. Language preference persists in localStorage

**To add/edit translations:**
1. Add translation keys to the `translations` object in `script.js` for each language
2. Add `data-i18n="your.key"` attribute to HTML elements
3. Update `langLabels` object if adding a new language

### Key JavaScript Modules (in script.js)

| Section | Functionality |
|---------|--------------|
| Lines 5-512 | i18n system with translations and language switching |
| Lines 514-534 | Background image slider (5-second intervals) |
| Lines 536-569 | Mobile hamburger navigation |
| Lines 571-588 | Navbar scroll effect |
| Lines 590-607 | Smooth scroll for anchor links |
| Lines 609-637 | Scroll reveal animations |
| Lines 639-683 | Contact form submission via FormSubmit |
| Lines 685-699 | Hero parallax effect |
| Lines 701-718 | Interactive gradient orbs |
| Lines 720-739 | Performance optimization (debounce) |
| Lines 750-777 | Active navigation highlighting |

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
