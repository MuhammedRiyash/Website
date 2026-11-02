# MD Riyash — Full-Stack Web Development (services site)

Services site of **Muhammed Riyash J**, Full-Stack Developer in Bengaluru: headless storefronts, Laravel and Node.js back ends,
WooCommerce plugins, Shopify CRO, performance, technical SEO and end-to-end testing.

**Live:** https://muhammedriyash.github.io/Website/

## What's on the site

- **7 services** — headless commerce storefronts (Astro / Next.js), Laravel & Node back ends, WordPress & WooCommerce plugins,
  Shopify development & CRO, performance & Core Web Vitals, technical SEO / analytics / consent, and end-to-end testing & QA.
- **7 case studies** with figures from shipped work — e.g. the Young Onion Astro storefront (79 of 168 merged PRs),
  ZetStore GST reporting and inventory hardening (110 PRs), and a WooCommerce Mystery Box plugin with 146 automated tests.
- About, contact form and FAQ.

## Stack

| | |
|---|---|
| **Framework** | Astro 7 (static output), TypeScript (strict) |
| **Styling** | Tailwind CSS v4, self-hosted Geist fonts |
| **SEO** | `@astrojs/sitemap`, canonical/OG/Twitter tags, JSON-LD |
| **Images** | `astro:assets` with `sharp` |
| **Deploy** | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main` |

No UI framework or animation library — interactivity is small inline scripts.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321/Website/
npm run build     # static build into dist/
npm run check     # astro check
npm run preview   # serve the build
```

See [AGENTS.md](AGENTS.md) for the folder map and content rules.

## Contact

[Portfolio](https://md-riyash-portfolio.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/muhammedriyash) ·
[thisismd.riyash@gmail.com](mailto:thisismd.riyash@gmail.com) · [GitHub](https://github.com/MuhammedRiyash)
