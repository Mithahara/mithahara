# Mithahara

Public site for Mithahara: **Ahar**, the vegetarian food venture in Panchkula; **Man'sahara**,
the upcoming non-vegetarian venture; and **Apps**, the Odoo apps and Chrome extensions Mithahara
ships. Built with [Astro](https://astro.build) as a static, multi-page site for SEO (structured
data, sitemap, real routed pages for About/Contact/legal alongside the single-page venture
sections).

## Structure

```text
/
├── public/                # favicon, robots.txt, CNAME
├── src/
│   ├── data/site.js        # menu, contacts, apps, FAQ content
│   ├── components/         # Nav, Footer, FaqAccordion, AppsGrid
│   ├── layouts/Layout.astro # sitewide Organization JSON-LD + meta/OG tags
│   └── pages/               # index (Hero/Ahar/Man'sahara/Apps/CTA), about, contact,
│                             # privacy-policy, terms-conditions, 404
└── astro.config.mjs
```

## Development

```sh
npm install
npm run dev       # localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build
```

## Deployment

Deployed via Cloudflare Pages (Git integration — build command `npm run build`, output directory
`dist`), with `mithahara.com` connected as a custom domain on the same Cloudflare account. The
GitHub Actions workflow deploying to GitHub Pages remains as a fallback until the Cloudflare Pages
custom domain is confirmed live, after which it can be removed.
