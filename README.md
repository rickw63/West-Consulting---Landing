# West Consulting LLC website

Static, dependency-free marketing site for West Consulting LLC, a construction safety and claims management consultancy.

## Structure

```
index.html          Single-page site (services, approach, industries, about, deliverables, contact)
404.html            Not-found page
css/styles.css      All styles (navy/white brand, responsive, reduced-motion aware)
js/main.js          Mobile menu, scroll reveal, active nav, contact form
assets/logo.svg     Primary logo (navy) / logo-white.svg for dark backgrounds
assets/favicon.svg  Shield mark; PNG icons and og-image.png for social sharing
assets/img/         Custom SVG illustrations
robots.txt, sitemap.xml, site.webmanifest
```

## Publish

The site is plain HTML/CSS/JS, so no build step is needed. Upload the folder to any static host:

- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root. Add a `CNAME` file containing `westconsultingllc.net` to use the custom domain.
- **Netlify / Cloudflare Pages / Vercel:** connect the repo, leave the build command empty and set the publish directory to `/`.

## Before going live

- **Email:** the site uses `info@westconsultingllc.net` (in `index.html`, 3 places). Change it if you use a different inbox.
- **Domain:** canonical, Open Graph, sitemap and robots URLs assume `https://westconsultingllc.net/`.
- **Contact form:** opens the visitor's email app with the message filled in, so no backend is required. To collect submissions without email apps, point the form `action` at a service such as Formspree and remove the submit handler in `js/main.js`.
- **Photos:** the graphics are custom SVG illustrations. To use real jobsite photos, drop them in `assets/img/` and swap the `src` of the hero or approach image.
