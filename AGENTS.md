# AGENTS.md — MD Riyash · Full-Stack Web Development site

Handoff notes for anyone (human or agent) picking up this repo. Keep this file current when the structure changes.

## What this is

- Full-stack web-development services site for **Muhammed Riyash J** (Senior Full-Stack Developer, Bengaluru). It's aimed at businesses that want a fast, tested website or online store.
- Live: https://muhammedriyash.github.io/Website/. It deploys to **GitHub Pages under `/Website/`** through `.github/workflows/deploy.yml` on every push to `main`. The workflow builds with Astro and uploads `dist/` only.
- Sister repo: the personal portfolio (`Portfolio`), deployed on **Vercel** at https://md-riyash-portfolio.vercel.app (`vercel.json` framework `astro`). Keep that URL. The resume and showcase READMEs link to it.

## Stack and commands

- Astro 7 (static output), TypeScript (strict), Tailwind CSS v4 via `@tailwindcss/vite`, `@astrojs/sitemap`, `sharp` for `astro:assets`.
- Fonts: Geist and Geist Mono, self-hosted via `@fontsource-variable/*`. The latin Geist face is preloaded in `Base.astro`.
- No UI framework or animation library. All interactivity is small inline `<script>` modules.
- Node: version in `.nvmrc` (24). `package.json` `engines` requires ≥ 22.23.4.

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run dev` | dev server at http://localhost:4321/Website/ |
| `npm run build` | static build to `dist/` |
| `npm run check` | `astro check` (types and diagnostics); must report 0 errors, 0 warnings |
| `npm run preview` | serves `dist/` at http://localhost:4321/Website/ (Astro 7 runs it detached; stop it with `npx astro preview stop`) |

URL shape: `astro.config.mjs` sets `base: '/Website'` and `build.format: 'file'`, so pages are `/Website/about.html` etc. These match the old static site's URLs. `/blog.html` (the old Projects page) is an Astro `redirects` entry to `/work.html`. Always build internal links with `href()` from `src/lib/url.ts`. Never hard-code `/Website`.

## Folder map

```
src/
  pages/            index, services, services/[slug], work, work/[slug], about, contact, 404
  layouts/Base.astro   <head> SEO (title, description, canonical, OG/Twitter, JSON-LD), header/footer, reveal script
  components/       Header (sticky, condenses; mobile <dialog> menu), Footer, Button (fill-sweep), Eyebrow/SectionHead
                    (mono section labels), PageHero, ServiceGrid, CaseStack/CaseCard (sticky stacked cards),
                    TechFilter, DevicePair (desktop + phone pair), BrowserFrame, Mockup + MockupPhone (coded renders), HeroLog,
                    ProcessSteps, Faq, RelatedWork, ContactForm, ContactSection, Icon, Wordmark, ThemeToggle, LeadPopup
  data/             site.ts (identity, socials, proof, clients, stack, skills, experience, education)
                    visuals.ts (every screenshot/render), services.ts (services + serviceVisual), work.ts (case studies + short entries), home.ts (process, standards, FAQ)
  lib/url.ts        href(), asset(), absolute(), isActive()
  scripts/          lead-popup-trigger.ts (intent detection), lead-popup.ts (lazy dialog), lead-popup-keys.ts
  styles/global.css Tailwind import, @theme tokens, base styles, primitives (.wrap .section .eyebrow .chip .card …), reveal CSS
  assets/           portrait.jpg, work/*.webp live-site captures + taskify.png (served through astro:assets)
public/             favicons, site.webmanifest, robots.txt, og.png, Muhammed_Riyash_J_Resume.pdf
scripts/og-image.html  source for public/og.png (instructions inside)
```

## Content rules (non-negotiable)

- **Source of truth is the resume.** Every number on the site comes from it: 3+ years, 20+ production sites, 79/168 PRs, 110 PRs, 146 tests, 251 KB / 19 files / ~0.6 s, 36 PRs, 30 tags / 6 triggers, 12+ freelance sites, +25% organic, ~10% conversion, +12% AOV, PageSpeed 85+.
- **Never invent** testimonials, client logos, ratings, awards, prices, stats, durations or blog posts. The budget field in the form deliberately has no numbers.
- **Employer name rule:** "Zethic Technologies" / "Zethic" appears **only in the Experience timeline** on the About page (the `experience` data in `site.ts`). Nowhere else: no case-study labels, hero log, proof lines, body copy, FAQ, footer, meta, OG image, JSON-LD (no `worksFor`), manifest, alt text or screenshots of zethic.com.
- **Skills-first framing, no employment labels.** Work is never labelled by employment type: no "full-time role", "freelance client", "client project", "for clients" or "each one says which it is". Cards, case pages and related-work cards show a **capability + tech label** (`label` in `work.ts`, e.g. "Headless storefront · Astro SSR + Preact", "Secure booking platform · Next.js · AES-256-GCM") plus the year. Never claim employer work as freelance or vice versa — just don't label it. Only the About Experience timeline carries employment history (Zethic / Freelance / Besant, with dates). The site/service descriptor is **"Full-stack web development"** (hero eyebrow, footer, wordmark descriptor, meta, manifest, OG image, JSON-LD) — never "freelance web development". Private code is noted as "Private codebase — walkthrough on request."
- **Stack evolution** strip (`StackEvolution.astro`, on About): 2023 React + Laravel → 2023–25 WordPress · WooCommerce · Shopify → 2026 Astro · Preact · headless → Laravel 13 platforms → Next.js 16 · Prisma · encryption → Medusa v2 → AI agents · Claude/GPT APIs. Update it when the stack grows.
- **2026 builds**: 360 Home Healthcare (Doc2Home, live at https://360homehealthcare.in/), Fiomis (in development, no live URL), Inventra (no live URL) and an AI content repurposing SaaS (unreleased, no public name, no link). They are not "own products"; never describe them as built "on my own time".
- Their code is private. Fiomis, 360 Home Healthcare and Inventra link to the public showcase repos `github.com/MuhammedRiyash/<name>-showcase` (`fiomis-`, `doc2home-`, `inventra-showcase`), labelled "Case study / Request source access". 360 Home Healthcare also gets a "Visit live site" link. Never link the private repos.
- Don't copy client marketing claims into our copy (e.g. 360 Home Healthcare's review counts or ratings).
- Client work runs **Sep 2023 – Present**.
- Availability copy never mentions the employer (no "alongside my job", no employer name).
- Selected-clients order (`clients` in `site.ts`): 360 Home Healthcare, Fiomis, Inventra, the AI SaaS description, then KOMAKI, SGR777 Foods, TAABI AI, Eleenova, Botticelli, Transworld Academy, HMJ Developers, Srishti Construction, Morca Pumps and JR Builders. These appear as plain text only.
- **Images: no placeholders, ever.** Every project visual is a desktop + mobile pair (`DevicePair.astro`), built from `src/data/visuals.ts`:
  - **Real screenshots** are allowed only for live public sites. They come from captures of the live site (desktop 1440×900 and mobile 390×844, banners closed, forms never submitted), are stored as WebP in `src/assets/work/` and served through `astro:assets`. They carry a "Live site" badge and a caption with the domain and capture date.
  - **Private or unreleased work** (ZetStore admin, the Mystery Box admin, Fiomis, Inventra, the AI SaaS, Shopify CRO, test runs, network panels) uses high-fidelity coded renders: `Mockup.astro` for desktop and `MockupPhone.astro` for mobile. They show realistic sample data, are badged "Sample data" and captioned "Illustrative · sample data". Never screenshot unreleased client work such as Fiomis, or the employer's internal tools.
  - **No** grey skeleton bars, blank boxes or lorem ipsum. Don't invent results inside renders; sample tables and labels are fine.
  - The new Astro Young Onion store is auth-walled, so the Young Onion cases use youngonion.in, captioned "the WooCommerce store before the rebuild".
  - Taskify (an internship build) has a desktop screenshot only. JR Builders has no verifiable URL, so it appears in the clients strip only.
  - Capture into a scratch folder outside the repo with the naming `<slug>-desktop[-n].png` / `<slug>-mobile[-n].png`, then convert the frames you use to WebP in `src/assets/work/`.
- Canonical identity: **Muhammed Riyash J · Senior Full-Stack Developer · Bengaluru, India** · thisismd.riyash@gmail.com · +91 70948 36267 · linkedin.com/in/muhammedriyash · github.com/MuhammedRiyash · X @MD_Riyash_46 · WhatsApp https://wa.me/917094836267. Edit these in `src/data/site.ts` only.
- **Short brand mark is "MD Riyash"** (`person.shortName`). Use it in the header, mobile-menu and footer wordmarks (with the "Full-Stack Web Development" descriptor), the page-title suffix, `og:site_name`, the web manifest and the OG image. Keep the full name "Muhammed Riyash J" in body copy, About, JSON-LD `name`, meta author and copyright.
- The repo is public. No secrets, tokens, private-repo contents or personal data beyond the contact details above.

## Design system

- Colours (`@theme` in `global.css`): paper `#F7F7F5`, surface `#FFFFFF`, ink `#0E1014`, muted `#5B6270`, hairline ink at 12% (`--color-line`), one accent emerald `#0F8A6A` (hover/text `#0B6E55`, tint `#E7F4EF`), dark footer/bands `#0E1014`. Use `#0B6E55` for small accent text; `#0F8A6A` with white text fails AA at body size.
- **Themes: light (default) and dark.**
  - **Defaults:** light for every visitor, whatever their OS setting. Dark appears only after the visitor picks it with the toggle, and the choice is saved in `localStorage` as `theme`.
  - **Pre-paint script:** the inline script at the top of `<head>` in `Base.astro` sets `data-theme`, `color-scheme` and `<meta name="theme-color">` before first paint, so there is no flash. There is no `prefers-color-scheme` mapping and no listener for system changes.
  - **Tokens:** `@theme` holds the light palette. `:root[data-theme='dark']` in `global.css` overrides it: bg `#0E1014`, surface `#151821`, text `#ECEEF2`, muted `#9AA1AE`, hairlines white 11%, accent `#2FBF94` (hover `#5AD3AC`, tint 12%), footer `#080A0D`.
  - **Semantic extras** that both themes define: `--color-on-accent`, `--color-on-night` and `--color-night-ink` (for the always-dark footer and bands), `--color-header-bg`, `--color-frame-bar`, the ok/error/invalid form colours, `--color-backdrop`, `--color-terminal`, `--color-cta-card`, `--shadow-lift` and `--shadow-deep`.
  - **Using colours:** components use these tokens, never hard-coded colours. The exception is the coded renders: they depict light UIs and keep their own palettes. In dark, browser frames get a stronger edge and screenshots are dimmed slightly (`brightness(.93)`).
  - **Toggle:** `ThemeToggle.astro` is a sun/moon button with `aria-label="Dark theme"` and `aria-pressed`, at least 44 px. It shows in the header from 768 px and in the mobile menu, and every toggle on the page stays in sync.
- Type: Geist for body and headings (weight ~560, tight negative tracking). Geist Mono is for labels, chips and numbers. Scale classes: `.t-display .t-h1 .t-h2 .t-h3 .t-lead`.
- Layout: `.wrap` (max content 1280 px plus `clamp(20px, 5vw, 40px)` gutters) and `.section` (`clamp(72px, 9vw, 128px)` vertical). Spacing is on an 8-pt rhythm. Radius is 12 px for cards (`--radius-card`) and 10 px for buttons and inputs.
- Signature pieces:
  - mono `Eyebrow` label: emerald tick, label and `/ aside`
  - `{ 01 }` numbering
  - split CTA button with a fill-sweep hover (0.45 s `cubic-bezier(.62,.01,.21,1)`)
  - coded browser-frame mockups
- Motion: `[data-reveal]` fade-up through IntersectionObserver (0.7 s, stagger `--d` × 80 ms), header condense on scroll, hero log line stagger, hover sweeps. Nothing else.
- Reduced motion: under `prefers-reduced-motion: reduce` the reveal CSS never hides anything, transitions and animations are effectively off, and smooth scroll is off.
- No-JS: content only hides when `html.js` is set, so all content stays visible. Without JS:
  - the tech filters stay hidden
  - the FAQ uses native `<details>`
  - the form posts straight to Formspree
  - a `<noscript>` style shows the desktop nav on mobile
- Responsive widths checked: 360, 390, 768, 1024, 1280, 1440, 1920. There must be no horizontal scroll at any of them, and tap targets must be ≥ 44 px.
- The sticky stacked case cards only stick at ≥ 1024 px wide and ≥ 800 px tall. Smaller screens get a normal list.

## How to…

### Add a case study
1. Add its visual(s) to `src/data/visuals.ts`. For a live public site, use `shot()` with the desktop and mobile captures imported from `src/assets/work/`. For private work, use `render()` with a `RenderVariant`; add the variant to both `Mockup.astro` and `MockupPhone.astro` with realistic sample data.
2. Append an object to `caseStudies` in `src/data/work.ts`. Fill in `slug`, `client`, `descriptor`, `label` (capability + tech, no employment type), `filters`, `stack`, `visuals` (the first one appears on cards), `metrics` (resume-backed or client-confirmed only), `background`, `challenges`, `approach`, `outcome`, `links` (each `kind: 'live' | 'source'`) and `note`.
3. Set `featured: true` to show it on the home page. The page `/work/<slug>.html`, sitemap entry and filters are generated automatically.
4. To list it under a service, add the slug to that service's `related` array.

### Add a short project entry
Append to `shortEntries` in `work.ts` with a `label` (capability + tech), a `year` and a `visual` from `visuals.ts`. Every entry needs a visual; a project with no verifiable live site or render goes in the clients strip instead.

### Add a service
1. Append to `services` in `src/data/services.ts`. Every field is required, including 3 `problems`, 6 `deliverables`, 4 `process` lines, `related` slugs and `faq`.
2. Add a `serviceVisual` entry for the slug.
3. The page `/services/<slug>.html`, the footer link, the form's project-type option and the JSON-LD offer catalogue update automatically.

### Change FAQ, process or standards
Edit `src/data/home.ts`.

## SEO

- Every page passes `title`, `description` and `path` to `Base.astro`. The title becomes `"<title> | Muhammed Riyash"`; the home page uses `site.defaultTitle`.
- `Base.astro` emits the canonical URL, OG/Twitter tags (image `public/og.png`, 1200×630) and a JSON-LD `@graph`: `Person`, `ProfessionalService` (areaServed India + remote, offer catalogue from services), `WebSite`, `WebPage`, plus `BreadcrumbList` when breadcrumbs are given. Pages add more nodes through the `schema` prop:
  - home: `FAQPage`
  - services: `Service` and `FAQPage`
  - work: `CollectionPage`
  - case studies: `CreativeWork`
- The sitemap comes from `@astrojs/sitemap`. Its `serialize` hook rewrites URLs to the `.html` form so they match the canonicals. `blog` and `404` are excluded. `robots.txt` points to `sitemap-index.xml`.
- OG image: edit `scripts/og-image.html` and re-capture it (steps are in the file).

## Contact form

Formspree endpoint `https://formspree.io/f/xgokrkbd` lives in `src/data/site.ts`. The form is a plain POST with a `_gotcha` honeypot. With JS it submits via `fetch` and shows an inline success or error message (`ContactForm.astro`).

### Lead-capture pop-up

`LeadPopup.astro` is rendered by `Base.astro` on every page except contact and 404 (`leadPopup={false}`). It puts only a small JSON config (`#lead-popup-config`) and the trigger script (~3 KB) on the page. The dialog itself, `src/scripts/lead-popup.ts` (markup, CSS and logic, ~8 KB), is loaded with a dynamic `import()` only when a trigger fires.

- **Triggers** (first one wins):
  - Scrolled past 50% of the page after ≥ 8 s on the page.
  - Desktop exit intent (`mouseout` with `relatedTarget === null`, `clientY <= 0`) after ≥ 8 s.
  - Touch exit intent: an upward scroll of ≥ 25% of the viewport within 300 ms, after passing 40% of the page.
- **Frequency:** once per session (`sessionStorage` key `mr-lead-popup-shown`). Never for 30 days after a successful pop-up submit (`localStorage` key `mr-lead-popup-submitted`).
- **Never shows:**
  - while the inline contact form is focused, or after it has been focused or submitted
  - while the mobile menu or another dialog is open
  - for bots, `navigator.webdriver` or headless user agents
  - without JS
- **Dialog:**
  - native modal `<dialog aria-labelledby>`; the close button, Esc and a backdrop click all close it
  - Tab is trapped inside, and focus returns to where it was on close
  - body scroll is locked with scrollbar compensation, so there is no layout shift
  - becomes a bottom sheet with safe-area padding at ≤ 640 px; no animation under reduced motion
- **Form:** posts to the same Formspree endpoint with `_source=popup`, a `page` field and the `_gotcha` honeypot. The "email or WhatsApp" field is validated loosely (an email address, or 8+ digits).
- **Testing in headless Chrome:** override `navigator.webdriver` and the user agent first, or the trigger stays silent. Clear the two storage keys between runs.

## Verify before shipping

1. `npm run check` reports 0 errors, 0 warnings, 0 hints. `npm run build` is clean.
2. Run `npm run preview` and load every page at 360, 390, 768, 1024, 1440 and 1920 px:
   - `document.documentElement.scrollWidth <= innerWidth` holds
   - each page has exactly one `<h1>`
   - the console has zero errors
3. Mobile menu: opens, Tab stays inside, Esc closes and returns focus to the toggle.
4. The tech filter works on home and on `/work.html`.
5. The form shows its inline success and error states.
6. With `prefers-reduced-motion: reduce` emulated, all content is visible without scrolling interactions.
7. Old URLs resolve: `/Website/about.html`, `/services.html`, `/contact.html`, and `/blog.html` (redirects to `/work.html`).

## Git rules

- Branch from `main` for every change (e.g. `git switch -c <topic>`). Commit in small logical steps.
- Remote is `git@github-coding:MuhammedRiyash/Website.git`. The `github-coding` SSH alias carries Muhammed's personal identity, and the repo-local git config holds his name and email. Don't change global git config or `~/.ssh`.
- **Never push, merge to `main` or trigger a deploy without Muhammed's explicit OK.** Pushing to `main` deploys to production.
