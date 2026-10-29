import { visuals, type Visual } from './visuals';

export const techFilters = ['Astro', 'Next.js', 'React', 'Laravel', 'WordPress', 'Shopify'] as const;
export type Tech = (typeof techFilters)[number];



export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  /** Grey half of the two-tone title. */
  descriptor: string;
  /** Capability + tech label shown on cards and case pages (no employment framing). */
  label: string;
  period: string;
  summary: string;
  role: string;
  filters: Tech[];
  stack: string[];
  /** Desktop + mobile visuals; the first one is used on cards, all are shown on the case page. */
  visuals: Visual[];
  metrics: Metric[];
  background: string[];
  challenges: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  outcome: string[];
  /** `live` links get an external-link icon; `source` links (showcase repos) a GitHub icon. */
  links: { label: string; href: string; kind: 'live' | 'source' }[];
  /** Short honesty note shown on the case-study page. */
  note?: string;
  featured: boolean;
}

export interface ShortEntry {
  id: string;
  name: string;
  what: string;
  /** Capability + tech label. */
  label: string;
  year: string;
  stack: string[];
  filters: Tech[];
  href?: string;
  /** Link label, e.g. "komaki.in". */
  domain?: string;
  visual: Visual;
}

const showcaseNote =
  'Private codebase — walkthrough on request. The public showcase repository has the architecture write-up.';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'young-onion-storefront',
    client: 'Young Onion',
    descriptor: 'a headless Astro storefront to replace a WordPress store',
    label: 'Headless storefront · Astro SSR + Preact',
    period: '2026',
    summary:
      'A server-rendered Astro and Preact storefront that replaces the WordPress store at youngonion.in. Top contributor on the build: 79 of 168 merged pull requests across product pages, cart, checkout, accounts and SEO schema.',
    role: 'Full-stack developer on a team build — top contributor by merged pull requests.',
    filters: ['Astro'],
    stack: ['Astro (SSR)', 'Preact', 'TypeScript', 'ZetStore API (Laravel)', 'Schema.org'],
    visuals: [visuals.youngOnionWoo],
    metrics: [
      { value: '79 / 168', label: 'merged pull requests — top contributor' },
      { value: '5', label: 'core areas: product, cart, checkout, accounts, SEO schema' },
    ],
    background: [
      'Young Onion sells online through a WordPress store at youngonion.in. It is being replaced with a headless storefront: Astro renders pages on the server, Preact handles the interactive parts, and ZetStore — the company’s multi-store Laravel commerce platform — sits behind it.',
      'A team build where I was the top contributor: 79 of 168 merged pull requests.',
    ],
    challenges: [
      { title: 'Commerce flows that cannot regress', body: 'Product pages, cart, checkout and accounts all have to keep working for customers who already know the old store.' },
      { title: 'Search visibility through a platform change', body: 'Moving off WordPress puts existing rankings at risk unless structured data and page semantics are carried over deliberately.' },
      { title: 'A shared codebase moving quickly', body: 'Several developers shipping into one storefront means changes have to be small, reviewable and easy to reason about.' },
    ],
    approach: [
      { title: 'Server-rendered pages, islands where needed', body: 'Astro SSR renders the catalogue and product pages; Preact components carry the interactive pieces, so most pages ship very little JavaScript.' },
      { title: 'Typed from API to UI', body: 'TypeScript across the storefront keeps the contract with the ZetStore API explicit and catches breaking changes at build time.' },
      { title: 'SEO schema as a feature', body: 'Structured data for products and pages was built as part of the storefront, not bolted on after launch.' },
      { title: 'Small pull requests, often', body: '79 merged pull requests across product pages, cart, checkout and accounts — each one reviewable on its own.' },
    ],
    outcome: [
      'Top contributor on the storefront with 79 of 168 merged pull requests.',
      'Product pages, cart, checkout, accounts and SEO schema all carry my code.',
    ],
    links: [],
    note: 'Private codebase — walkthrough on request.',
    featured: true,
  },
  {
    slug: 'zetstore-commerce-platform',
    client: 'ZetStore',
    descriptor: 'GST reporting and inventory hardening on a multi-store Laravel platform',
    label: 'Commerce platform · Laravel 13 · GST',
    period: '2026',
    summary:
      'ZetStore, a multi-store Laravel 13 commerce platform, runs GD Farm Fresh and Young Onion. I added GSTR-1 reporting and GST-aware pricing, and hardened inventory and purchasing across 110 pull requests.',
    role: 'Full-stack developer — back-end features, server-side validation and storefront fixes.',
    filters: ['Laravel', 'Astro'],
    stack: ['Laravel 13', 'PHP', 'Astro', 'Preact', 'Tailwind CSS', 'Cloudflare', 'Playwright'],
    visuals: [visuals.gdFarmFresh, visuals.zetstoreAdmin],
    metrics: [
      { value: '110', label: 'pull requests hardening inventory and purchasing' },
      { value: '8', label: 'GD Farm Fresh storefront fixes covered by Playwright tests' },
    ],
    background: [
      'ZetStore runs more than one store from one Laravel 13 code base. GD Farm Fresh and Young Onion both sell through it, so a bug in stock or tax logic is a bug in two businesses at once.',
    ],
    challenges: [
      { title: 'Indian tax compliance', body: 'GST has to be right when coupons and shipping change the order total, and the accountant needs a GSTR-1 report they can actually file from.' },
      { title: 'Stock that drifts', body: 'Purchase orders, returns, stock transfers, stock counts, warehouses and supplier imports all change inventory — any write path without server-side checks can corrupt it.' },
      { title: 'Customers asking for sold-out items', body: 'Out-of-stock products were dead ends instead of a way to capture demand.' },
    ],
    approach: [
      { title: 'GSTR-1 with CSV export', body: 'A report built from order data, exportable as CSV, with GST calculated correctly when coupons and shipping apply.' },
      { title: 'Server-side checks on every inventory write', body: 'Validation on purchase orders, returns, stock transfers, stock counts, warehouses and supplier imports — enforced on the server, not the form.' },
      { title: 'Back-in-stock waitlist', body: 'Shoppers can register interest in sold-out products instead of leaving.' },
      { title: 'Storefront fixes with tests', body: 'On the live GD Farm Fresh headless storefront (Astro, Preact, Tailwind CSS on Cloudflare, over the ZetStore API) I shipped 8 catalogue, routing and layout fixes, each covered by Playwright tests.' },
    ],
    outcome: [
      '110 pull requests of inventory and purchasing hardening.',
      'GSTR-1 reporting with CSV export, plus coupon- and shipping-aware GST.',
      'A back-in-stock waitlist, and 8 storefront fixes protected by Playwright tests.',
    ],
    links: [],
    note: 'Private codebase — walkthrough on request.',
    featured: true,
  },
  {
    slug: 'mystery-box-woocommerce-plugin',
    client: 'Mystery Box',
    descriptor: 'automatic order fulfilment for a WooCommerce store',
    label: 'WooCommerce plugin · custom tables · 146 tests',
    period: '2026',
    summary:
      'A WooCommerce plugin for Young Onion that fills Mystery Box orders automatically on payment, replacing a manual coupon-and-child-order process. Custom tables, REST endpoints, WP-CLI and 146 automated tests.',
    role: 'Developer — built the plugin end to end.',
    filters: ['WordPress'],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'Custom tables', 'REST API', 'WP-CLI', 'Automated tests'],
    visuals: [visuals.mysteryAdmin, visuals.youngOnionMystery],
    metrics: [
      { value: '146', label: 'automated tests' },
      { value: 'On payment', label: 'orders fill automatically — the manual step is gone' },
    ],
    background: [
      'Young Onion sells Mystery Boxes on its WooCommerce store. Filling them meant a manual process: a coupon, a child order, and someone doing it by hand for every sale.',
    ],
    challenges: [
      { title: 'A manual process per order', body: 'Each paid Mystery Box needed staff to create the follow-up order by hand — slow, and easy to get wrong when orders pile up.' },
      { title: 'Data that doesn’t fit post meta', body: 'Box contents and fulfilment state need to be queried reliably, which WordPress post meta handles poorly.' },
      { title: 'Payment edge cases', body: 'Fulfilment must trigger exactly once, only on a successful payment.' },
    ],
    approach: [
      { title: 'Fulfil on payment', body: 'The plugin hooks into WooCommerce’s payment flow and fills the order automatically once payment succeeds.' },
      { title: 'Custom tables', body: 'Fulfilment data lives in its own tables instead of being stuffed into post meta.' },
      { title: 'REST endpoints and WP-CLI', body: 'Operations staff and scripts can inspect and run fulfilment without touching the database.' },
      { title: '146 automated tests', body: 'The fulfilment rules are covered by tests, so WooCommerce and plugin updates can be checked before they reach the live store.' },
    ],
    outcome: [
      'Mystery Box orders are filled automatically on payment — the manual coupon-and-child-order step is gone.',
      '146 automated tests guard the fulfilment logic.',
    ],
    links: [],
    note: 'Private codebase — walkthrough on request.',
    featured: true,
  },
  {
    slug: 'woocommerce-performance',
    client: 'Young Onion WooCommerce',
    descriptor: 'page caching back on and 251 KB lighter per page',
    label: 'Performance · Cloudflare caching',
    period: '2026',
    summary:
      'A payment plugin had quietly blocked Cloudflare page caching. I re-enabled it, removed 19 unused CSS/JS files (251 KB) from every page, and took ~0.6 s of Meta API calls off each page load.',
    role: 'Developer — diagnosis and fixes.',
    filters: ['WordPress'],
    stack: ['WooCommerce', 'WordPress', 'PHP', 'Cloudflare', 'Meta API'],
    visuals: [visuals.youngOnionWoo, visuals.wooPerf],
    metrics: [
      { value: '−251 KB', label: '19 unused CSS/JS files removed per page' },
      { value: '~0.6 s', label: 'of Meta API calls removed from each page load' },
    ],
    background: [
      'Young Onion’s existing WooCommerce store kept running while the new storefront was being built, so it still had to be fast for the customers using it every day.',
    ],
    challenges: [
      { title: 'Caching that was off without anyone noticing', body: 'A payment plugin was preventing Cloudflare from caching pages, so every visit hit the origin server.' },
      { title: 'Assets loaded everywhere, used nowhere', body: '19 CSS and JavaScript files were loading on every page without being needed there.' },
      { title: 'Third-party calls in the critical path', body: 'Meta API calls were adding roughly 0.6 seconds to each page load.' },
    ],
    approach: [
      { title: 'Trace the cache headers', body: 'Found the plugin behaviour that blocked page caching and re-enabled Cloudflare caching without breaking payments.' },
      { title: 'Prune per page', body: 'Dequeued the 19 files that pages did not use — 251 KB less to download and parse.' },
      { title: 'Move the slow call out of the way', body: 'Removed the Meta API calls from the page-load path, saving about 0.6 s per load.' },
    ],
    outcome: [
      'Cloudflare page caching restored.',
      '251 KB and 19 files fewer on every page.',
      '~0.6 s of blocking Meta API calls removed from each page load.',
    ],
    links: [],
    note: 'Private codebase — walkthrough on request.',
    featured: true,
  },
  {
    slug: 'shopify-conversion-optimisation',
    client: 'Shopify CRO',
    descriptor: 'sticky CTAs, bundles and upsells on three stores',
    label: 'Shopify CRO · Liquid + metafields',
    period: '2023 – 2026',
    summary:
      'Three Shopify stores optimised with Liquid, JavaScript and metafields — sticky add-to-cart, bundles and upsells — raising conversion by about 10% and average order value by 12%, with PageSpeed 85+ on mobile and desktop.',
    role: 'Theme development, CRO features and speed.',
    filters: ['Shopify'],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Metafields', 'Lighthouse'],
    visuals: [visuals.shopifyCro],
    metrics: [
      { value: '~10%', label: 'higher conversion' },
      { value: '+12%', label: 'average order value' },
      { value: '85+', label: 'PageSpeed on mobile and desktop' },
    ],
    background: [
      'Three Shopify stores wanted more from the traffic they already had — without adding another stack of apps that slow the store down.',
    ],
    challenges: [
      { title: 'The buy button scrolls away', body: 'On long mobile product pages the add-to-cart button disappears just when the shopper is convinced.' },
      { title: 'Single-item baskets', body: 'Nothing encouraged shoppers to add a second product, so order value stayed flat.' },
      { title: 'Speed versus features', body: 'Every app-based feature adds scripts; the stores needed new features without losing speed.' },
    ],
    approach: [
      { title: 'Sticky CTAs', body: 'A sticky add-to-cart that stays reachable on mobile product pages.' },
      { title: 'Bundles and upsells from metafields', body: 'Bundle and upsell content driven by metafields and Liquid, editable by the store team, without a heavy app.' },
      { title: 'Lean themes', body: 'Built into the theme with plain JavaScript and checked against PageSpeed on mobile and desktop.' },
    ],
    outcome: ['Conversion up by about 10%.', 'Average order value up 12%.', 'PageSpeed 85+ on mobile and desktop.'],
    links: [],
    note: 'Figures are as reported on my resume across the three stores.',
    featured: true,
  },
  {
    slug: 'fiomis',
    client: 'Fiomis',
    descriptor: 'a headless clothing store built for the Indian market',
    label: 'Headless commerce · Astro + Medusa v2',
    period: '2026 · in development',
    summary:
      'A headless store on Astro and Medusa v2 with Razorpay payments completed by a server-side webhook, an append-only stock ledger, GST-aware invoicing, admin 2FA and Playwright across five viewports.',
    role: 'Architecture, front end, back end and CI.',
    filters: ['Astro', 'React'],
    stack: ['Astro', 'React', 'Nano Stores', 'GSAP', 'Medusa v2', 'Node.js 20', 'TypeScript', 'PostgreSQL 16', 'Redis 7', 'Razorpay', 'Playwright', 'Docker Compose'],
    visuals: [visuals.fiomisStore],
    metrics: [
      { value: '40+', label: 'test files, Playwright across five viewports' },
      { value: '139', label: 'commits so far — not launched yet' },
    ],
    background: [
      'Fiomis — “Choose Better” — is a headless clothing store for the Indian market, built in 2026. It is in active development and not launched yet.',
    ],
    challenges: [
      { title: 'Payments you can trust', body: 'A browser redirect is not proof of payment; orders must only complete when the payment provider confirms it.' },
      { title: 'Stock and tax that add up', body: 'Indian GST on invoices and a stock count that cannot silently drift.' },
      { title: 'Rich motion without losing accessibility', body: 'A scroll-driven 3D brand story that still works with a keyboard, a screen reader and small screens.' },
    ],
    approach: [
      { title: 'Webhook-completed orders', body: 'Razorpay orders are completed by a server-side webhook, not by the client.' },
      { title: 'Append-only stock ledger', body: 'Every stock change is a ledger entry, so the current count is always explainable.' },
      { title: 'GST-aware operations', body: 'Pricing and invoicing are GST-aware, with packing slips and CSV export for the back office.' },
      { title: 'Secure admin', body: 'Admin sign-in with OTP, 2FA and role-based access control.' },
      { title: 'Accessible motion', body: 'A shared motion system with focus trapping, a skip link and 44 px touch targets, tested in CI with Playwright across five viewports.' },
    ],
    outcome: ['In development since June 2026, 139 commits, 40+ test files in CI.', 'Not launched yet — no traffic or sales figures to report.'],
    links: [{ label: 'Case study / Request source access', href: 'https://github.com/MuhammedRiyash/fiomis-showcase', kind: 'source' }],
    note: showcaseNote,
    featured: true,
  },
  {
    slug: '360-home-healthcare',
    client: '360 Home Healthcare (Doc2Home)',
    descriptor: 'a live home-healthcare booking platform for Chennai',
    label: 'Secure booking platform · Next.js · AES-256-GCM',
    period: '2026 · live',
    summary:
      'The Next.js platform behind 360homehealthcare.in: patients request care, a consultant calls back, and a verified provider is matched. A five-step OTP-verified booking wizard, provider KYC with admin verification, and AES-256-GCM encryption at rest with blind-indexed phone and licence numbers.',
    role: 'Application, data model, security and deployment.',
    filters: ['Next.js', 'React'],
    stack: ['Next.js (App Router)', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js v5', 'Tailwind CSS v4', 'Zod', 'Vitest', 'Playwright', 'GitHub Actions', 'Nginx'],
    visuals: [visuals.hh],
    metrics: [
      { value: 'Live', label: 'at 360homehealthcare.in, served from the client’s own Nginx server' },
      { value: '5-step', label: 'OTP-verified booking wizard' },
    ],
    background: [
      '360 Home Healthcare (built under the working name Doc2Home) is a Chennai home-healthcare service: doctors online or at home, physiotherapy, medicine and orthotics, at-home diagnostics, nursing, home care, sports medicine and geriatric care.',
      'A patient sends a request, a care consultant calls back to confirm, and a verified provider is matched to the visit. The platform handles personal and medical-adjacent data, so security was a design input, not a checklist item.',
    ],
    challenges: [
      { title: 'Sensitive personal data', body: 'Phone and licence numbers must be searchable by the system but unreadable if the database leaks.' },
      { title: 'Trusting providers', body: 'Providers need KYC and an admin verification step before patients are matched with them.' },
      { title: 'A booking flow people finish', body: 'Requests have to be verified without becoming a wall of form fields.' },
    ],
    approach: [
      { title: 'Encryption at rest', body: 'AES-256-GCM encryption of personal data with blind indexes for phone and licence numbers, plus encrypted document storage.' },
      { title: 'Verified onboarding', body: 'Provider onboarding with KYC and an admin verification queue.' },
      { title: 'Five-step booking wizard', body: 'OTP-verified, validated with Zod at every step, feeding the consultant callback flow.' },
      { title: 'An admin console that runs the business', body: 'Bookings, verification, lead matching, calendar, payments and reports.' },
    ],
    outcome: [
      'Live at 360homehealthcare.in, a Next.js app served from the client’s own Nginx server.',
      'Built across 142 commits, with Vitest and Playwright in GitHub Actions.',
    ],
    links: [
      { label: 'Visit live site', href: 'https://360homehealthcare.in/', kind: 'live' },
      { label: 'Case study / Request source access', href: 'https://github.com/MuhammedRiyash/doc2home-showcase', kind: 'source' },
    ],
    note: showcaseNote,
    featured: true,
  },
  {
    slug: 'inventra',
    client: 'Inventra',
    descriptor: 'an inventory and procure-to-bill dashboard',
    label: 'Inventory SaaS · Next.js 16 · RBAC',
    period: '2026',
    summary:
      'A Next.js 16 app covering vendors, purchase orders, warehouses, JIT and billing, with 15+ effectiveness ratios, an EOQ widget and four roles — tested from core maths to an end-to-end login → vendor → PO → bill flow.',
    role: 'Sole developer on the build.',
    filters: ['Next.js', 'React'],
    stack: ['Next.js 16', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Tailwind CSS v4', 'shadcn/ui', 'Recharts', 'Zod', 'Vitest', 'Playwright', 'Vercel'],
    visuals: [visuals.inventra],
    metrics: [
      { value: '15+', label: 'inventory effectiveness ratios' },
      { value: '4', label: 'roles: admin, manager, clerk, accountant' },
    ],
    background: ['Inventra — “Inventory That Compounds” — is a procure-to-bill inventory tool built in 2026, designed so the maths behind stock decisions is visible and testable. It has no public URL.'],
    challenges: [
      { title: 'One flow, many hands', body: 'Vendors, purchase orders, warehouses and bills touch different people with different permissions.' },
      { title: 'Numbers that drive decisions', body: 'Ratios and order quantities are only useful if the calculations are right.' },
    ],
    approach: [
      { title: 'Procure-to-bill in one place', body: 'Vendors, POs, warehouses, JIT and billing as one connected flow.' },
      { title: 'Role-based access', body: 'NextAuth v5 with JWT sessions and four roles: admin, manager, clerk and accountant.' },
      { title: 'Tested maths', body: '15+ effectiveness ratios and an EOQ widget with unit tests on the core calculations, plus an end-to-end login → vendor → PO → bill test.' },
    ],
    outcome: ['Built in 2026 (15 commits) with Vitest and Playwright coverage of the core flow.'],
    links: [{ label: 'Case study / Request source access', href: 'https://github.com/MuhammedRiyash/inventra-showcase', kind: 'source' }],
    note: showcaseNote,
    featured: false,
  },
];

export const shortEntries: ShortEntry[] = [
  {
    id: 'taskify',
    name: 'Taskify',
    what: 'A task-management web app built over six months as a full-stack intern.',
    label: 'Task app · React + Laravel',
    year: '2023',
    stack: ['React', 'Material UI', 'Redux Toolkit', 'Laravel REST APIs'],
    filters: ['React', 'Laravel'],
    visual: visuals.taskify,
  },
  {
    id: 'ai-content-saas',
    name: 'AI content repurposing SaaS',
    what: 'Unreleased: a one-click micro-SaaS that turns blog posts and videos into X threads and LinkedIn carousels.',
    label: 'AI product · Claude + GPT APIs',
    year: '2026',
    stack: ['Next.js', 'Claude API', 'OpenAI GPT API'],
    filters: ['Next.js'],
    visual: visuals.aiSaas,
  },
  {
    id: 'komaki',
    name: 'KOMAKI Electric Vehicles',
    what: 'A custom WordPress plugin for campaign lead capture, with an admin dashboard to manage and track leads.',
    label: 'WordPress · lead-capture plugin',
    year: '2023 – 25',
    stack: ['WordPress', 'PHP', 'Custom plugin'],
    filters: ['WordPress'],
    href: 'https://komaki.in/',
    domain: 'komaki.in',
    visual: visuals.komaki,
  },
  {
    id: 'sgr777',
    name: 'SGR777 Foods',
    what: 'A WooCommerce referral plugin with tracking and analytics, plus a phone-verified first-order discount.',
    label: 'WooCommerce · referral plugin',
    year: '2023 – 25',
    stack: ['WooCommerce', 'PHP', 'Custom plugin'],
    filters: ['WordPress'],
    href: 'https://www.sgr777foods.com/',
    domain: 'sgr777foods.com',
    visual: visuals.sgr777,
  },
  {
    id: 'taabi',
    name: 'TAABI AI',
    what: 'Responsive, animated front-end interfaces for an AI SaaS platform.',
    label: 'React · SaaS front end',
    year: '2023 – 25',
    stack: ['React'],
    filters: ['React'],
    href: 'https://taabi.ai/',
    domain: 'taabi.ai',
    visual: visuals.taabi,
  },
  {
    id: 'eleenova',
    name: 'Eleenova',
    what: 'A custom Shopify storefront in Liquid and metafields, focused on performance, a clean UI and conversion-ready layouts.',
    label: 'Shopify · Liquid + metafields',
    year: '2023 – 25',
    stack: ['Shopify', 'Liquid', 'Metafields'],
    filters: ['Shopify'],
    href: 'https://eleenova.com/',
    domain: 'eleenova.com',
    visual: visuals.eleenova,
  },
  {
    id: 'transworld-academy',
    name: 'Transworld Academy',
    what: 'An educational website with structured course content and listings for a logistics and supply-chain academy.',
    label: 'Education website · course listings',
    year: '2023 – 25',
    stack: ['Responsive website', 'Course listings'],
    filters: [],
    href: 'https://transworldacademy.com/',
    domain: 'transworldacademy.com',
    visual: visuals.transworld,
  },
  {
    id: 'hmj-developers',
    name: 'HMJ Developers',
    what: 'A real-estate corporate website with conversion-focused layouts and project showcases.',
    label: 'WordPress · real-estate website',
    year: '2023 – 25',
    stack: ['WordPress'],
    filters: ['WordPress'],
    href: 'https://hmjdevelopers.com/',
    domain: 'hmjdevelopers.com',
    visual: visuals.hmj,
  },
];
