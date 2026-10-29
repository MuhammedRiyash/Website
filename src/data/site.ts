/**
 * Single source of truth for identity, contact details and proof numbers.
 * Every number here is backed by Muhammed's resume — do not add unverified stats.
 */
export const person = {
  name: 'Muhammed Riyash J',
  /** Short brand mark (wordmarks, title suffix). Full name stays in body copy, JSON-LD and copyright. */
  shortName: 'MD Riyash',
  title: 'Senior Full-Stack Developer',
  location: 'Bengaluru, India',
  email: 'thisismd.riyash@gmail.com',
  phone: '+91 70948 36267',
  phoneHref: 'tel:+917094836267',
  whatsapp: 'https://wa.me/917094836267',
  portfolio: 'https://md-riyash-portfolio.vercel.app/',
  resume: 'Muhammed_Riyash_J_Resume.pdf',
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Tamil', level: 'Native' },
    { name: 'Arabic', level: 'Conversational' },
  ],
} as const;

export const socials = [
  { label: 'LinkedIn', handle: 'in/muhammedriyash', href: 'https://www.linkedin.com/in/muhammedriyash' },
  { label: 'GitHub', handle: 'MuhammedRiyash', href: 'https://github.com/MuhammedRiyash' },
  { label: 'X', handle: '@MD_Riyash_46', href: 'https://x.com/MD_Riyash_46' },
  { label: 'WhatsApp', handle: '+91 70948 36267', href: person.whatsapp },
] as const;

export const formEndpoint = 'https://formspree.io/f/xgokrkbd';

export const site = {
  name: 'MD Riyash — Full-Stack Web Development',
  defaultTitle: 'MD Riyash — Full-Stack Web Developer, Bengaluru',
  defaultDescription:
    'Full-stack web developer in Bengaluru. Headless storefronts, Laravel back ends, WooCommerce plugins and Shopify stores — built fast, tested end to end, and measured after launch.',
  locale: 'en_IN',
  twitter: '@MD_Riyash_46',
};

export const nav = [
  { label: 'Services', path: 'services' },
  { label: 'Work', path: 'work' },
  { label: 'About', path: 'about' },
  { label: 'Contact', path: 'contact' },
] as const;

/** Headline proof shown in the hero and reused elsewhere. */
export const proof = [
  { value: '3+', label: 'Years shipping production code' },
  { value: '20+', label: 'Sites shipped to production' },
  { value: '79/168', label: 'Merged PRs on the Young Onion storefront — top contributor' },
  { value: '146', label: 'Automated tests in one WooCommerce plugin' },
] as const;

export const clients = [
  '360 Home Healthcare',
  'Fiomis',
  'Inventra',
  'AI content repurposing SaaS (unreleased)',
  'KOMAKI',
  'SGR777 Foods',
  'TAABI AI',
  'Eleenova',
  'Botticelli',
  'Transworld Academy',
  'HMJ Developers',
  'Srishti Construction',
  'Morca Pumps',
  'JR Builders',
] as const;

export const stack = [
  { group: 'Frontend', items: ['Astro', 'React', 'Preact', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { group: 'Back end & data', items: ['Laravel', 'Node.js', 'Medusa v2', 'REST APIs', 'Prisma', 'PostgreSQL', 'MySQL'] },
  { group: 'Commerce & CMS', items: ['WordPress', 'WooCommerce', 'Shopify (Liquid)', 'WP-CLI'] },
  { group: 'Quality & delivery', items: ['Playwright', 'Vitest', 'PHPUnit', 'axe-core', 'Lighthouse', 'Cloudflare', 'Docker', 'GTM / GA4'] },
] as const;

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'SQL', 'Python (scripting)'] },
  { group: 'Frontend', items: ['React', 'Preact', 'Astro (SSR/SSG)', 'Next.js', 'Tailwind CSS', 'Vite', 'Material UI', 'Redux Toolkit', 'Responsive Design'] },
  { group: 'Backend and data', items: ['Laravel', 'Node.js', 'REST APIs', 'Medusa v2', 'Prisma', 'MySQL', 'PostgreSQL', 'LLM APIs (Claude, OpenAI GPT)'] },
  { group: 'WordPress and e-commerce', items: ['WordPress (plugins, themes)', 'WooCommerce (REST API, WP-CLI)', 'Shopify (Liquid)', 'Elementor'] },
  { group: 'Testing and performance', items: ['Playwright', 'Vitest', 'PHPUnit', 'axe-core', 'Lighthouse', 'Core Web Vitals', 'Cross-browser QA'] },
  { group: 'SEO and tools', items: ['Technical SEO', 'Google Tag Manager', 'GA4', 'OneTrust', 'Git', 'Cloudflare', 'Docker', 'Coolify', 'Jira', 'Agile/Scrum'] },
] as const;

export const experience = [
  {
    company: 'Zethic Technologies LLP',
    role: 'Senior Full-Stack Developer',
    period: 'Feb 2026 – Present',
    place: 'Bengaluru, India',
    points: [
      'Built the new Young Onion storefront (Astro SSR, Preact, TypeScript) that replaces the WordPress store at youngonion.in; top contributor with 79 of 168 merged pull requests across product pages, cart, checkout, accounts and SEO schema.',
      'Extended ZetStore, the company’s multi-store Laravel 13 commerce platform behind GD Farm Fresh and Young Onion: GSTR-1 reports with CSV export, coupon- and shipping-aware GST, and a back-in-stock waitlist.',
      'Hardened ZetStore’s inventory and purchasing with server-side checks on purchase orders, returns, stock transfers, stock counts, warehouses and supplier imports, across 110 pull requests.',
      'Developed the live GD Farm Fresh headless storefront (Astro, Preact, Tailwind CSS on Cloudflare, over the ZetStore API), shipping 8 catalog, routing and layout fixes covered by Playwright tests.',
      'Built a Mystery Box fulfilment plugin for Young Onion’s WooCommerce store that fills orders automatically on payment — custom tables, REST endpoints, WP-CLI and 146 automated tests.',
      'Sped up Young Onion’s WooCommerce store: re-enabled Cloudflare page caching a payment plugin had blocked, dropped 19 unused CSS/JS files (251 KB) per page and took ~0.6 s of Meta API calls off each page load.',
      'Shipped 36 pull requests to zethic.com (Astro, React, Tailwind CSS, Cloudflare): a rebuilt Careers page with a cached LinkedIn feed, 8 multilingual pages, 12 city landing pages, new service and portfolio pages, and sitemap tests.',
      'Implemented OneTrust consent gating for Odessa Inc. (US) on Divi WordPress: 6 Google Tag Manager consent triggers covering 30 tags, GA4 moved from the theme header into GTM.',
      'Owned three Laravel 8 and static marketing websites (190+ commits): reCAPTCHA middleware, a multi-step lead-capture form with source attribution, SEO redirects and a Mailchimp signup fix.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack, WordPress and Shopify Developer',
    period: 'Sep 2023 – Present',
    place: 'Remote',
    points: [
      '2026 client projects: 360 Home Healthcare (Doc2Home), a live Next.js home-healthcare booking platform with AES-256-GCM encryption at rest; Fiomis, a headless Astro + Medusa v2 clothing store (in development); Inventra, a Next.js 16 procure-to-bill inventory app; and an AI content-repurposing SaaS on the Claude and GPT APIs (unreleased).',
      'Delivered 12+ WordPress and Shopify websites for SMEs and startups, lifting organic traffic by 25% on average.',
      'Built 3 custom plugins: a lead-management dashboard with forms, filters, CSV export and user roles; a WooCommerce order-tracking system with notifications; and a WooCommerce referral engine with points and analytics.',
      'Optimised 3 Shopify stores with Liquid, JavaScript and metafields — sticky CTAs, bundles and upsells that raised conversion by about 10% and average order value by 12%, with PageSpeed scores of 85+ on mobile and desktop.',
    ],
  },
  {
    company: 'Besant Technologies',
    role: 'Full-Stack Developer Intern',
    period: 'Jan 2023 – Aug 2023',
    place: 'Chennai, India',
    points: ['Built Taskify, a task-management web app, over 6 months with React, Material UI, Redux Toolkit and Laravel REST APIs.'],
  },
] as const;

export const education = [
  { school: 'SRM University, Sikkim', degree: 'Master of Computer Applications (MCA), Online', period: 'Apr 2025 – Aug 2027 (expected)' },
  { school: 'RDB College of Arts and Science, Papanasam', degree: 'Bachelor of Commerce (B.Com)', period: 'Oct 2019 – Sep 2022' },
] as const;

export const certifications = [
  { name: 'Java Full-Stack Development', issuer: 'Besant Technologies' },
  { name: 'Web Development Masterclass', issuer: 'YouAccel' },
] as const;
