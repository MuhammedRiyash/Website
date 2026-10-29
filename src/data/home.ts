export const processSteps = [
  {
    name: 'Discover',
    body: 'We talk through what the site has to do for the business, who uses it and what already exists. I read the current code, analytics and hosting before suggesting anything — most surprises are sitting in plain sight.',
    tags: ['Goals', 'Existing code', 'Analytics baseline'],
  },
  {
    name: 'Plan',
    body: 'You get a written scope: pages and features, the stack and why, what is in and out, the risks I can see, and how we will know it worked. Timeline and cost are agreed against that document, not guessed on a call.',
    tags: ['Written scope', 'Stack choice', 'Success measures'],
  },
  {
    name: 'Build',
    body: 'Work lands in small, reviewable pieces on a staging URL you can click through. Tests cover the flows that earn money — checkout, forms, sign-in — before any of it reaches production.',
    tags: ['Staging URL', 'Small pull requests', 'Automated tests'],
  },
  {
    name: 'Launch & measure',
    body: 'Redirects, analytics and Search Console are checked on launch day. Afterwards I compare Core Web Vitals and conversions with the baseline from discovery and fix what the numbers point to.',
    tags: ['Redirects', 'Core Web Vitals', 'Before / after'],
  },
] as const;

export const standards = [
  {
    title: 'Core Web Vitals',
    body: 'Performance is a budget set at the start, not a final pass. Server rendering, lean assets and caching that is verified, not assumed.',
    proof: '251 KB and ~0.6 s removed from every page of a WooCommerce store; PageSpeed 85+ on optimised Shopify stores.',
  },
  {
    title: 'Automated tests',
    body: 'Playwright for user flows, Vitest for TypeScript logic, PHPUnit for Laravel and WordPress — running in CI on every pull request.',
    proof: '146 automated tests on one WooCommerce plugin; Playwright across five viewports on Fiomis.',
  },
  {
    title: 'Accessibility',
    body: 'Semantic HTML, full keyboard paths, managed focus, readable contrast and 44 px touch targets, checked with axe-core.',
    proof: 'Focus trapping, a skip link and 44 px targets built into Fiomis — and into this site.',
  },
  {
    title: 'Technical SEO',
    body: 'Structured data, canonical URLs, sitemaps and redirects generated from the same data as the pages, so they cannot drift apart.',
    proof: '8 multilingual and 12 city landing pages with sitemap tests on a company website; +25% organic traffic on average across 12+ WordPress and Shopify sites.',
  },
] as const;

export const faqs = [
  {
    q: 'Are you available for new projects?',
    a: 'Yes — I take on a limited number of projects at a time so each one gets proper attention. Share your timeline in your first message and I’ll tell you honestly whether I can meet it.',
  },
  {
    q: 'How do you scope a project?',
    a: 'A short call or an email thread about what the site needs to do, then a written scope covering features, stack, what is excluded, risks and how we measure success. The quote is based on that document, so we are both agreeing to the same thing.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on scope, so I discuss timelines per project rather than quote a standard number. A focused fix — a speed pass or a single plugin — is very different from a new storefront. The written scope includes a timeline we both agree to.',
  },
  {
    q: 'Which tools and platforms do you work with?',
    a: 'Astro, React, Preact and Next.js on the front end; Laravel, Node.js and Medusa v2 on the back end; WordPress, WooCommerce and Shopify for commerce; Playwright, Vitest and PHPUnit for testing. I will recommend the simplest stack that does the job, including your current one.',
  },
  {
    q: 'Where will my site be hosted, and who owns it?',
    a: 'Wherever suits the project — Cloudflare, Vercel, a managed WordPress host or Shopify. I prefer setting hosting, domains and repositories up in your accounts so you keep control after the project ends.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. I am based in Bengaluru and work remotely with clients elsewhere, in English. We agree on overlapping hours for calls.',
  },
  {
    q: 'Can you take over or fix an existing site?',
    a: 'Often, yes. Much of my work is extending and hardening existing code bases. I start by reading the code and adding tests around what already works, then change things.',
  },
] as const;
