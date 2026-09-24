# West Consulting LLC website

Static, dependency-free marketing site for West Consulting LLC, a construction safety and claims management consultancy.

## Structure

```
index.html          Single-page site (services, when to call, why us, who we work with, about, FAQ, contact)
404.html            Not-found page
css/styles.css      All styles (navy/white brand, responsive, reduced-motion aware)
js/main.js          Mobile menu, scroll reveal, active nav, contact form
assets/logo.png     Primary logo (transparent) / logo-white.png for dark backgrounds
PNG icons (mountain mark) and og-image.png for social sharing
assets/img/         Custom SVG illustrations and the Sierra photo (1200w/2400w)
robots.txt, sitemap.xml, site.webmanifest
```

## Publish

The site is plain HTML/CSS/JS, so no build step is needed. Upload the folder to any static host:

- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root. Add a `CNAME` file containing `westconsultingllc.net` to use the custom domain.
- **Netlify / Cloudflare Pages / Vercel:** connect the repo, leave the build command empty and set the publish directory to `/`.

## Content guardrails

Site copy follows the West Consulting BD Playbook (internal, not in this repo):

- Firm-level voice ("we", "West Consulting"). No personal bio or credentials.
- No client names. The representative engagement is described by shape and scale only.
- No pricing, no guaranteed mod, premium or citation outcomes, no legal advice.
- State plainly that the firm places no coverage and takes no commission.
- Location is Gardnerville, NV. Service area is California and Nevada.

## Before going live

- **Email:** inquiries go to `rick@westconsultingllc.net` (set in `index.html`).
- **Domain:** canonical, Open Graph, sitemap and robots URLs assume `https://westconsultingllc.net/`.
- **Contact form:** opens the visitor's email app with the message filled in, so no backend is required. To collect submissions without email apps, point the form `action` at a service such as Formspree and remove the submit handler in `js/main.js`.
- **Photos:** the About section opens with a full-width mountain photo (`assets/img/sierra-*.jpg`). The other graphics are custom SVG illustrations; to use jobsite photos, drop them in `assets/img/` and swap the `src` of the hero or approach image.
