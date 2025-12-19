# GEMINI.md

## Project Overview

This project is a modern, responsive, and multi-language static website for a company called **Kairos.ai**. The website showcases the company's services, which include AI systems design, backend systems development, AI applications, data analysis, factory process optimization, and customized solutions.

The website is built with a focus on performance and user experience, featuring a clean design, smooth animations, and a dynamic background slider. It also includes a working contact form that uses FormSubmit for email delivery, so no backend is required.

## Building and Running

This is a static website and does not require any build tools or dependencies.

To run the website locally, you can either:

1.  Open the `index.html` file directly in your web browser.
2.  Use a local server. For example, with Python 3:

    ```bash
    python -m http.server 8000
    ```

    Then, open `http://localhost:8000` in your browser.

## Development Conventions

### Technologies

*   **HTML5**: The project uses semantic HTML5 for better accessibility and SEO.
*   **CSS3**: The styling is done using modern CSS3 features like CSS Grid, Flexbox, and CSS Variables for theming. It follows a mobile-first responsive design approach.
*   **Vanilla JavaScript**: The project uses pure JavaScript with no external dependencies for all its interactive features.

### Internationalization (i18n)

The website supports four languages: English, Traditional Chinese (繁體中文), Japanese (日本語), and Spanish (Español). The translations are stored in a `translations` object in the `script.js` file.

To add a new language or edit existing translations, you need to modify the `translations` object and the `langLabels` object in `script.js`. The HTML elements that need translation have a `data-i18n` attribute with a key that corresponds to a key in the `translations` object.

### Customization

The website is designed to be easily customizable:

*   **Colors**: The color scheme can be changed by editing the CSS variables in the `:root` of the `styles.css` file.
*   **Content**: The text content can be edited directly in the `index.html` file. For multi-language content, you need to edit the `translations` object in `script.js`.
*   **Contact Form**: The email address for the contact form can be changed by editing the `action` attribute of the form in `index.html`.

### Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── logo.png            # Company logo
├── logo_title.png      # Company logo with title
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```