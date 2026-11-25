# Portfolio – Alica Haunstetter

Personal portfolio website built with Angular. It presents my skills, selected projects and testimonials, and offers a contact form to get in touch.

**Live:** [alica-haunstetter.de](https://alica-haunstetter.de)

## Features

- **Responsive, mobile-first layout** – works from 320px screen width up to large desktops, using fluid sizes (`clamp()`, `min()`) and only a few `min-width` breakpoints
- **Bilingual (DE / EN)** – language switch at runtime with ngx-translate; the `lang` attribute of the page is updated automatically
- **Animated background blobs** – reusable Angular component that generates organic SVG shapes and morphs between them; respects `prefers-reduced-motion`
- **Contact form** – reactive form with validation and privacy-policy consent, sent via a PHP mail script
- **Testimonial slider** – navigation via arrows and dots
- **Legal pages** – legal notice and privacy policy as separate routes

## Tech Stack

- [Angular 22](https://angular.dev) (standalone components, signals, new control flow)
- TypeScript
- SCSS (BEM naming)
- [ngx-translate](https://github.com/ngx-translate/core)
- PHP (mail delivery)

## Getting Started

**Requirements:** Node.js and npm

```bash
# install dependencies
npm install

# start the dev server and open the browser
npm start

# production build (output in dist/)
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/   # sections of the start page (hero, about-me, skills, portfolio, …) and shared components (navbar, footer, blob)
│   ├── pages/        # routed pages (home, legal-notice, privacy-policy)
│   └── services/     # language service
├── styles.scss       # global styles, CSS variables, base typography
└── index.html
public/
├── i18n/             # translation files (de.json, en.json)
├── img/              # images and project screenshots
├── icons/            # logos and icons
├── fonts/            # Poppins
├── sendMail.php      # mail script for the contact form
└── .htaccess         # HTTPS redirect and Angular routing on Apache
```

## Deployment

The site runs on an Apache web server. The `.htaccess` file forces HTTPS and redirects all routes to `index.html`, so Angular routes like `/legal-notice` also work on reload. `sendMail.php` must be deployed together with the build output.

## Contact

Alica Haunstetter – [info@alica-haunstetter.de](mailto:info@alica-haunstetter.de) · [LinkedIn](https://www.linkedin.com/in/alica-haunstetter/) · [GitHub](https://github.com/AlicaHaunstetter)
