import { visuals, type Visual } from './visuals';

export interface Service {
  slug: string;
  name: string;
  /** One-line card copy. */
  short: string;
  /** H1 on the detail page. */
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  problems: { title: string; fix: string }[];
  deliverables: { title: string; body: string }[];
  stack: string[];
  /** One line per process step: Discover, Plan, Build, Launch & measure. */
  process: [string, string, string, string];
  /** Case-study slugs. */
  related: string[];
  /** Proof line(s) shown in the hero — resume-backed only. */
  proof: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'headless-commerce-development',
    name: 'Headless commerce storefronts',
    short: 'Astro or Next.js storefronts over your commerce back end — server-rendered, light on JavaScript, tested against the real checkout.',
    headline: 'Headless storefronts that stay fast after the tenth feature',
    intro:
      'I build storefronts on Astro (SSR/SSG) with Preact or React islands, or on Next.js, over an API such as Laravel, Medusa v2 or WooCommerce. Pages render on the server, JavaScript ships only where someone clicks, and the checkout path is covered by Playwright before it goes live.',
    metaTitle: 'Headless Commerce Development — Astro & Next.js Storefronts',
    metaDescription:
      'Headless storefronts on Astro or Next.js over Laravel, Medusa or WooCommerce. Server-rendered, fast on mobile, with Playwright-tested checkout flows.',
    tags: ['Astro SSR', 'Next.js', 'Preact / React', 'Cloudflare'],
    problems: [
      { title: 'The rebuild ships slower than the old site', fix: 'Server-render by default and hydrate only the parts people interact with — cart, search, account.' },
      { title: 'Checkout breaks in ways nobody clicked through', fix: 'Playwright tests that walk product → cart → checkout and run on every pull request.' },
      { title: 'Rankings drop at launch', fix: 'URL mapping, redirects, product schema and a sitemap planned before the first route is written.' },
    ],
    deliverables: [
      { title: 'Catalogue and product pages', body: 'Server-rendered listing and product detail pages with structured data.' },
      { title: 'Cart, checkout and accounts', body: 'Interactive islands for the flows that make money, wired to your back end.' },
      { title: 'API integration', body: 'A typed client for your commerce API — Laravel, Medusa v2, WooCommerce or similar.' },
      { title: 'SEO foundations', body: 'Canonical URLs, schema, sitemaps and the redirect map from the old site.' },
      { title: 'Edge deployment', body: 'Cloudflare hosting and caching rules that match how each route behaves.' },
      { title: 'End-to-end tests', body: 'Playwright suites for browsing, cart and checkout, wired into CI.' },
    ],
    stack: ['Astro', 'Preact', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
    process: [
      'Audit the current store, its traffic and its back-end API; agree which pages must keep their URLs.',
      'Choose Astro or Next.js for the job, map routes and redirects, and define the API contract.',
      'Build page by page on a staging URL, with checkout tests running from the first week of work.',
      'Switch over with redirects verified, then compare Core Web Vitals and conversions with the old store.',
    ],
    related: ['young-onion-storefront', 'fiomis', 'zetstore-commerce-platform'],
    proof: ['Top contributor on the Young Onion storefront: 79 of 168 merged PRs.'],
    faq: [
      { q: 'Do I need to replace my back end?', a: 'Usually not. A headless storefront can sit on top of WooCommerce, Shopify, Medusa or a Laravel API you already run. Discovery tells us whether your current back end exposes what the storefront needs.' },
      { q: 'Astro or Next.js?', a: 'Astro when most pages are catalogue and content with interactive pockets; Next.js when the app is interactive throughout, such as dashboards and logged-in flows. I have shipped production work in both and will recommend one in the written scope.' },
      { q: 'Will my search rankings survive the move?', a: 'That is planned, not hoped for: a URL map, 301 redirects, structured data and a sitemap check before launch, then a watch on Search Console afterwards.' },
    ],
  },
  {
    slug: 'laravel-backend-development',
    name: 'Laravel & Node back ends',
    short: 'Commerce back ends, admin tools and REST APIs in Laravel or Node — with business rules enforced on the server, not the form.',
    headline: 'Back ends that enforce the rules your business runs on',
    intro:
      'Inventory, tax, purchasing, permissions — the parts of a business that break quietly when validation lives only in the browser. I build and extend Laravel and Node.js back ends, REST APIs, admin panels and reports, with server-side checks and tests around the maths.',
    metaTitle: 'Laravel & Node.js Back-End Development — APIs, Admin, Commerce',
    metaDescription:
      'Laravel and Node.js back ends for commerce and operations: REST APIs, admin dashboards, inventory, GST reporting and role-based access, with automated tests.',
    tags: ['Laravel', 'Node.js', 'REST APIs', 'PostgreSQL / MySQL'],
    problems: [
      { title: 'The rules live in the UI', fix: 'Server-side validation on every write path — purchase orders, returns, transfers, imports.' },
      { title: 'Reports nobody trusts', fix: 'Reports generated from one source of truth and exportable as CSV, such as GSTR-1.' },
      { title: 'Nobody dares change the code', fix: 'Tests around the core calculations and small, reviewed pull requests.' },
    ],
    deliverables: [
      { title: 'REST APIs', body: 'Documented endpoints your storefront, app or partners can rely on.' },
      { title: 'Admin and roles', body: 'Admin dashboards with role-based access control and two-factor sign-in where it matters.' },
      { title: 'Inventory and purchasing', body: 'Purchase orders, returns, transfers, stock counts and warehouses with server-side checks.' },
      { title: 'Tax and reporting', body: 'GST-aware pricing, invoices and CSV exports your accountant can use.' },
      { title: 'Integrations', body: 'Payments, email and webhooks — completed server-side, not trusted from the browser.' },
      { title: 'Automated tests', body: 'PHPUnit or Vitest around the business logic, run in CI.' },
    ],
    stack: ['Laravel', 'PHP', 'Node.js', 'Medusa v2', 'Prisma', 'PostgreSQL', 'MySQL', 'PHPUnit', 'Vitest'],
    process: [
      'Read the existing code, schema and tests; list the business rules that must never break.',
      'Write the data model and API changes down before coding, including how they will be tested.',
      'Ship in small pull requests with server-side validation and tests alongside each change.',
      'Deploy with migrations rehearsed, then watch logs and reports for anything that does not add up.',
    ],
    related: ['zetstore-commerce-platform', '360-home-healthcare', 'inventra'],
    proof: ['110 pull requests hardening inventory and purchasing on a multi-store Laravel 13 platform.'],
    faq: [
      { q: 'Can you work on an existing Laravel code base?', a: 'Yes. Most of my ZetStore work was extending and hardening an existing Laravel 13 platform. I start by reading the code and the tests, then propose changes in small pull requests.' },
      { q: 'Laravel or Node?', a: 'Laravel when you want queues, auth and admin tooling out of the box on a PHP host; Node — Medusa v2, or Next.js with Prisma — when the team is TypeScript end to end.' },
      { q: 'Do you handle Indian GST requirements?', a: 'I have built GST-aware pricing and GSTR-1 reporting with CSV export. Your accountant still owns the rules; I make sure the software applies them consistently.' },
    ],
  },
  {
    slug: 'woocommerce-plugin-development',
    name: 'WordPress & WooCommerce plugins',
    short: 'Custom plugins for the jobs your store still does by hand — custom tables, REST endpoints, WP-CLI and real test coverage.',
    headline: 'WooCommerce without the plugin soup',
    intro:
      'When an off-the-shelf plugin almost fits, stores end up stacking three of them plus a manual workaround. I write focused custom plugins that do one job properly — fulfilment, referrals, order tracking, lead capture — with custom tables where the data needs them and automated tests so updates stop being emergencies.',
    metaTitle: 'WooCommerce & WordPress Plugin Development — Custom, Tested',
    metaDescription:
      'Custom WordPress and WooCommerce plugins: automated fulfilment, referral engines, order tracking and lead capture, with custom tables, REST endpoints, WP-CLI and tests.',
    tags: ['WooCommerce', 'Custom plugins', 'REST + WP-CLI', 'PHPUnit'],
    problems: [
      { title: 'A manual process disguised as a plugin', fix: 'Automate on the right WooCommerce hook — on payment, on status change — not on a cron and a prayer.' },
      { title: 'Everything stuffed into post meta', fix: 'Custom tables and indexes for data that gets queried and reported on.' },
      { title: 'Every update is a gamble', fix: 'Automated tests you run before updating WordPress, WooCommerce or the plugin itself.' },
    ],
    deliverables: [
      { title: 'Custom WooCommerce logic', body: 'Fulfilment, bundles and order rules that run automatically.' },
      { title: 'Referrals and discounts', body: 'Referral engines with points and analytics, verified first-order discounts.' },
      { title: 'Order tracking', body: 'Status tracking with customer notifications.' },
      { title: 'Lead capture', body: 'Forms with an admin dashboard, filters, CSV export and user roles.' },
      { title: 'REST and WP-CLI', body: 'Endpoints and commands so your team and scripts can operate the plugin.' },
      { title: 'Tests', body: 'A suite that covers the rules, so updates can be checked before they go live.' },
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'REST API', 'WP-CLI', 'PHPUnit'],
    process: [
      'Walk through the manual process as it happens today and note every edge case staff already handle.',
      'Specify the plugin: hooks, data model, admin screens and what the tests must prove.',
      'Build it as a standalone plugin — no theme edits, no core patches — with tests alongside.',
      'Roll out on staging first, then live, and confirm the manual step has actually disappeared.',
    ],
    related: ['mystery-box-woocommerce-plugin', 'woocommerce-performance'],
    proof: ['146 automated tests on a WooCommerce fulfilment plugin; 3 more custom plugins for lead management, order tracking and referrals.'],
    faq: [
      { q: 'Will a custom plugin survive WooCommerce updates?', a: 'It uses WooCommerce’s public hooks and APIs rather than patching core, and it ships with tests you can run before each update.' },
      { q: 'Can you fix a plugin someone else wrote?', a: 'Yes. I read it, write tests around its current behaviour first, and only then change it.' },
      { q: 'Do you build themes and page-builder sites too?', a: 'I have, Elementor included. Where I add the most value is custom functionality, performance and integrations.' },
    ],
  },
  {
    slug: 'shopify-development',
    name: 'Shopify development & CRO',
    short: 'Liquid theme work, metafields, bundles and upsells — judged by conversion and order value, not only by looks.',
    headline: 'Shopify without the theme bloat',
    intro:
      'Most Shopify stores do not need a new theme; they need the product page to do its job. I work in Liquid, JavaScript and metafields to add sticky add-to-cart, bundles and upsells, and keep the theme lean enough to stay fast.',
    metaTitle: 'Shopify Development & Conversion Optimisation — Liquid, Metafields',
    metaDescription:
      'Shopify theme development and conversion work in Liquid and metafields: sticky CTAs, bundles and upsells. Across three stores: ~10% more conversion, +12% AOV, PageSpeed 85+.',
    tags: ['Liquid', 'Metafields', 'Bundles & upsells', 'Speed'],
    problems: [
      { title: 'An app for everything', fix: 'Each app adds scripts. Simple features belong in the theme, built once and kept light.' },
      { title: 'Changes nobody measures', fix: 'Record a baseline first, then compare conversion and order value after release.' },
      { title: 'Product details trapped in descriptions', fix: 'Structured content in metafields that the theme can lay out consistently.' },
    ],
    deliverables: [
      { title: 'Theme development', body: 'Liquid sections and templates your team can edit in the theme editor.' },
      { title: 'Sticky add-to-cart', body: 'A buy button that stays reachable on long mobile product pages.' },
      { title: 'Bundles and upsells', body: 'Driven by metafields, editable by the store team.' },
      { title: 'Metafield content', body: 'Specs, sizing and care information as structured data.' },
      { title: 'Store migrations', body: 'Moving an existing store onto Shopify with products and redirects handled.' },
      { title: 'Speed pass', body: 'App and script review against PageSpeed on mobile and desktop.' },
    ],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Metafields', 'Google Tag Manager', 'GA4', 'Lighthouse'],
    process: [
      'Review analytics and the product page on a real phone; record a conversion and speed baseline.',
      'Prioritise the changes most likely to move conversion or order value, and agree how we will measure them.',
      'Build in a duplicate theme so the live store is untouched until you approve.',
      'Publish, then compare against the baseline and adjust what the numbers point to.',
    ],
    related: ['shopify-conversion-optimisation'],
    proof: ['Across three stores: about 10% higher conversion, +12% average order value, PageSpeed 85+.'],
    faq: [
      { q: 'Will my store see the same numbers?', a: 'No promises on numbers. About 10% conversion and 12% order value are what three stores saw; yours depends on traffic, products and pricing. We measure a baseline first so you see the real effect.' },
      { q: 'Do I need Shopify Plus?', a: 'None of the work described here needs Plus.' },
      { q: 'Can you migrate my store to Shopify?', a: 'Yes — products, redirects and theme setup, scoped during discovery so nothing is left for launch week.' },
    ],
  },
  {
    slug: 'website-performance-optimisation',
    name: 'Performance & Core Web Vitals',
    short: 'Find what is actually slow — caching, unused assets, blocking third-party calls — and remove it. Before and after numbers.',
    headline: 'From slow pages to a site that loads before people give up',
    intro:
      'Speed problems are rarely one big thing. On one WooCommerce store it was a payment plugin quietly disabling Cloudflare page caching, 19 unused CSS/JS files (251 KB) on every page, and about 0.6 s of Meta API calls blocking each load. I find those, fix them, and show you the before and after.',
    metaTitle: 'Website Performance Optimisation — Core Web Vitals, WooCommerce Speed',
    metaDescription:
      'Core Web Vitals and speed work for WordPress, WooCommerce, Shopify and modern stacks: caching, asset pruning and third-party clean-up, with before/after measurements.',
    tags: ['Core Web Vitals', 'Caching', 'Asset pruning', 'Cloudflare'],
    problems: [
      { title: 'Caching that is quietly off', fix: 'Check cache headers route by route; plugins and cookies often disable caching without telling anyone.' },
      { title: 'Assets every page loads and no page uses', fix: 'Prune per template so each page downloads only what it renders.' },
      { title: 'Third-party calls in the critical path', fix: 'Defer them, move them server-side, or drop them.' },
    ],
    deliverables: [
      { title: 'Core Web Vitals audit', body: 'LCP, INP and CLS on real pages, with the cause behind each problem.' },
      { title: 'Caching and CDN', body: 'Cloudflare rules that cache what can be cached and bypass what cannot.' },
      { title: 'Asset pruning', body: 'Unused CSS and JavaScript removed per page; images resized and modernised.' },
      { title: 'Third-party review', body: 'Every tag and pixel justified, deferred or removed.' },
      { title: 'Fonts and render-blocking', body: 'Self-hosted fonts and a critical path without blocking requests.' },
      { title: 'Before/after report', body: 'The same measurements before and after, so the change is visible.' },
    ],
    stack: ['Lighthouse', 'Chrome DevTools', 'Core Web Vitals', 'Cloudflare', 'WordPress', 'Shopify', 'Astro'],
    process: [
      'Measure key templates on mobile and desktop and record the baseline.',
      'Trace each slow metric to a cause and rank fixes by impact and risk.',
      'Fix on staging, re-measure, and check checkout and forms still work.',
      'Deploy, re-measure in production, and hand over a short report with the numbers.',
    ],
    related: ['woocommerce-performance', 'shopify-conversion-optimisation'],
    proof: ['251 KB and ~0.6 s removed from every page load on a WooCommerce store.'],
    faq: [
      { q: 'Do you guarantee a Lighthouse score?', a: 'No. Scores depend on hosting, third parties and content you control. I report real before and after numbers; on the Shopify stores I optimised, PageSpeed landed at 85+ on mobile and desktop.' },
      { q: 'Will the site look different?', a: 'Usually not. Most speed work is invisible: caching, loading order and removing what is not used.' },
      { q: 'Which platforms do you work on?', a: 'WordPress and WooCommerce, Shopify, Astro, Next.js and Laravel sites.' },
    ],
  },
  {
    slug: 'technical-seo-analytics',
    name: 'Technical SEO, analytics & consent',
    short: 'Schema, sitemaps, redirects, multilingual and city pages, plus GTM and GA4 with consent that actually blocks tags.',
    headline: 'Technical SEO and tracking you can trust',
    intro:
      'The SEO work that needs a developer: structured data, sitemaps, redirects, multilingual and location pages, and analytics wired through Google Tag Manager with consent respected. WordPress and Shopify sites I delivered saw organic traffic rise by 25% on average.',
    metaTitle: 'Technical SEO, GTM/GA4 & Consent Setup — Developer-Led',
    metaDescription:
      'Developer-led technical SEO and analytics: structured data, sitemaps, redirects, multilingual and city pages, Google Tag Manager, GA4 and OneTrust consent gating.',
    tags: ['Schema', 'Sitemaps', 'GTM / GA4', 'OneTrust'],
    problems: [
      { title: 'Tags fire before consent', fix: 'Consent triggers in Google Tag Manager wired to your consent platform, so tags wait for permission.' },
      { title: 'Pages search engines misread', fix: 'Structured data, canonical URLs and sitemaps generated from the same data as the pages — with tests.' },
      { title: 'Landing pages made by copy-paste', fix: 'Multilingual and city pages generated from data, so they stay consistent and maintainable.' },
    ],
    deliverables: [
      { title: 'Structured data', body: 'Product, organisation, breadcrumb and FAQ schema where it applies.' },
      { title: 'Sitemaps and redirects', body: 'Generated sitemaps, canonical URLs and redirect maps, with tests.' },
      { title: 'Location and language pages', body: 'City and multilingual landing pages built from data.' },
      { title: 'GTM and GA4', body: 'A clean tag container with GA4 moved out of theme code.' },
      { title: 'Consent management', body: 'OneTrust (or similar) gating with consent triggers per tag.' },
      { title: 'Crawl fixes', body: 'SSL, robots and crawler-blocking issues traced and resolved.' },
    ],
    stack: ['Google Tag Manager', 'GA4', 'OneTrust', 'Schema.org', 'Astro', 'WordPress', 'Playwright'],
    process: [
      'Crawl the site, read Search Console and audit the tag container and consent setup.',
      'List fixes by impact: indexing first, then structured data, then tracking accuracy.',
      'Implement in code and in GTM, with sitemap and schema tests where the stack allows.',
      'Verify in Search Console and GA4 debug view, then monitor indexing and traffic after release.',
    ],
    related: ['young-onion-storefront', 'woocommerce-performance'],
    proof: ['6 GTM consent triggers covering 30 tags; 8 multilingual and 12 city pages with sitemap tests on a company website.'],
    faq: [
      { q: 'Do you write content or build links?', a: 'No. I handle the technical side and work alongside whoever writes your content.' },
      { q: 'Can you fix tracking that ignores consent or double-counts?', a: 'Yes. I audit the container, move hard-coded tags into GTM and gate them behind consent triggers.' },
      { q: 'How soon will rankings change?', a: 'Technical fixes remove obstacles; how fast rankings move depends on your content and competition. I will not promise a position.' },
    ],
  },
  {
    slug: 'automated-testing-qa',
    name: 'End-to-end testing & QA',
    short: 'Playwright, Vitest and PHPUnit suites around the flows that make money, so every release is checked before customers see it.',
    headline: 'Releases you don’t have to babysit',
    intro:
      'I add automated tests to the paths that make money: browse, add to cart, check out, sign in, get paid. Playwright for the browser, Vitest for logic, PHPUnit for Laravel and WordPress, axe-core for accessibility — run in CI on every pull request.',
    metaTitle: 'Automated Testing & QA — Playwright, Vitest, PHPUnit',
    metaDescription:
      'End-to-end and unit test suites for websites and stores: Playwright, Vitest, PHPUnit and axe-core in CI, covering checkout, sign-in and the logic behind them.',
    tags: ['Playwright', 'Vitest', 'PHPUnit', 'axe-core'],
    problems: [
      { title: 'Only the happy path, tested by hand', fix: 'Scripted end-to-end flows across viewports, including the awkward paths.' },
      { title: 'Core calculations with no tests', fix: 'Unit tests for tax, stock and pricing maths.' },
      { title: 'Tests that nobody runs', fix: 'A CI pipeline that runs them on every pull request and blocks the merge when they fail.' },
    ],
    deliverables: [
      { title: 'End-to-end suites', body: 'Playwright tests for browse, cart, checkout, sign-in and forms.' },
      { title: 'Unit tests', body: 'Vitest or PHPUnit around business logic.' },
      { title: 'Accessibility checks', body: 'axe-core scans on key templates.' },
      { title: 'Multi-viewport runs', body: 'The same flows on phone, tablet and desktop sizes.' },
      { title: 'CI pipeline', body: 'GitHub Actions running the suite on every pull request.' },
      { title: 'A test plan', body: 'What is covered, what is not, and why — in plain language.' },
    ],
    stack: ['Playwright', 'Vitest', 'PHPUnit', 'axe-core', 'GitHub Actions'],
    process: [
      'List the flows that make or lose money and the bugs that have already reached customers.',
      'Agree a test plan: which flows, which viewports, what runs on each pull request.',
      'Write the suites against a staging environment and wire them into CI.',
      'Hand over with docs on running and extending them, and fix the first failures together.',
    ],
    related: ['mystery-box-woocommerce-plugin', 'fiomis', 'inventra'],
    proof: ['146 automated tests on one WooCommerce plugin; Playwright across five viewports on Fiomis.'],
    faq: [
      { q: 'Can you add tests to an existing site?', a: 'Yes. I start with the flows that make money and work outwards, so the first week already protects checkout.' },
      { q: 'Do the tests run against the live site?', a: 'Mostly against staging. Read-only smoke tests against production are useful after each deploy.' },
      { q: 'Who maintains the tests afterwards?', a: 'Your team or me. Either way, they are written to be readable and come with instructions.' },
    ],
  },
];

/** Desktop + mobile visual shown in each service page hero: real work where it is public, renders otherwise. */
export const serviceVisual: Record<string, Visual> = {
  'headless-commerce-development': visuals.gdFarmFresh,
  'laravel-backend-development': visuals.zetstoreAdmin,
  'woocommerce-plugin-development': visuals.mysteryAdmin,
  'shopify-development': visuals.shopifyCro,
  'website-performance-optimisation': visuals.wooPerf,
  'technical-seo-analytics': visuals.youngOnionWoo,
  'automated-testing-qa': visuals.tests,
};
