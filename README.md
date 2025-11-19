# Kairos.ai Website

A modern, responsive website for Kairos.ai - innovative AI applications and intelligent systems.

## Overview

Kairos.ai is dedicated to creating solutions that help people work smarter and live better through cutting-edge AI technology and human-centered design.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Multi-language Support**: Full internationalization (i18n) in 4 languages:
  - English
  - Traditional Chinese (繁體中文)
  - Japanese (日本語)
  - Spanish (Español)
- **Dynamic Background Slider**: Rotating hero images featuring company logo and tech/city scenes
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Performance Optimized**: Fast loading times with optimized assets and code
- **Interactive Elements**: Engaging user interactions including parallax effects and scroll animations
- **Working Contact Form**: Email delivery via FormSubmit (no backend required)
- **Service Showcase**: Highlighting our core services:
  - AI Systems Design
  - Backend Systems Development
  - AI Applications
  - Data Analysis
  - Factory Process Optimization
  - Customized Solutions

## Technology Stack

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern CSS with:
  - CSS Grid and Flexbox for layouts
  - CSS Variables for theming
  - Smooth animations and transitions
  - Mobile-first responsive design
- **Vanilla JavaScript**: No dependencies, pure JavaScript for:
  - Mobile navigation
  - Scroll animations
  - Internationalization (i18n) system
  - Background image carousel
  - Form handling with FormSubmit integration
  - Interactive effects
  - Language preference persistence (localStorage)

## Getting Started

### Prerequisites

No build tools or dependencies required! This is a static website that runs directly in any modern browser.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kairosai-homepage
```

2. Open the website:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (if you have http-server installed)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
kairosai-homepage/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── logo.png            # Company logo (used in navbar and background slider)
├── logo.svg            # SVG version of logo
└── README.md           # This file
```

## Customization

### Colors

The website uses a blue color scheme matching the Kairos.ai logo (C85M50Y0K0 = #2680FF).

Edit CSS variables in `styles.css` to customize the color scheme:

```css
:root {
    --primary-color: #2680FF;    /* Logo blue */
    --primary-dark: #1a5acc;     /* Darker shade */
    --primary-light: #5ca3ff;    /* Lighter shade */
    --secondary-color: #06b6d4;
    --accent-color: #4d6aff;     /* Complementary blue */
    /* ... more variables */
}
```

### Content

- **Company Information**: Edit the text content directly in `index.html`
- **Services**: Modify the services section in `index.html`
- **Contact Information**: Update contact details in the contact section

### Language Support

The website includes a custom internationalization system with 4 languages. All translations are in `script.js`:

**To add a new language:**
1. Add language option to the language dropdown in `index.html`
2. Add translations to the `translations` object in `script.js`
3. Add language label to `langLabels` object in `script.js`

**To edit translations:**
- Open `script.js` and find the `translations` object
- Each key corresponds to a `data-i18n` or `data-i18n-placeholder` attribute in the HTML

### Contact Form

The contact form uses [FormSubmit](https://formsubmit.co/) for email delivery - no backend required!

**Current configuration:**
- Emails are sent to: `kairos.ai.tech@gmail.com`
- Custom subject line: "New contact form submission from Kairos.ai"
- Spam protection via honeypot field
- Table format for clean email display

**First-time setup:**
1. Deploy the website to a public URL (FormSubmit doesn't work on localhost)
2. Submit the form once
3. Check kairos.ai.tech@gmail.com for a confirmation email
4. Click the confirmation link to activate
5. All future submissions will be delivered automatically

**To change the email address:**
- Edit the form action in `index.html`: `action="https://formsubmit.co/your-email@example.com"`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance)
- No external dependencies
- Optimized animations using CSS transforms
- Debounced scroll events for better performance

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select your branch and root folder
4. Your site will be available at `https://yourusername.github.io/kairosai-homepage`

### Netlify

1. Connect your GitHub repository to Netlify
2. Deploy with default settings (no build command needed)

### Vercel

1. Import your GitHub repository to Vercel
2. Deploy with default settings

## License

Copyright © 2025 Kairos.ai. All rights reserved.

## Contact

For inquiries, please contact us at kairos.ai.tech@gmail.com
