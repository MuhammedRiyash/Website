/**
 * Every project visual on the site: real screenshots (captured from the public live sites on
 * 2026-10-29, desktop 1440×900 + mobile 390×844) or high-fidelity coded renders for private work.
 * Renders are always captioned "Illustrative · sample data". No placeholders anywhere.
 */
import type { ImageMetadata } from 'astro';
import taskifyDesktop from '../assets/work/taskify.png';
import hhDesktop from '../assets/work/360-home-healthcare-desktop.webp';
import hhMobileBook from '../assets/work/360-home-healthcare-mobile-2.webp';
import gdDesktop from '../assets/work/gd-farm-fresh-desktop.webp';
import gdMobileShop from '../assets/work/gd-farm-fresh-mobile-2.webp';
import yoDesktop from '../assets/work/young-onion-woo-desktop.webp';
import yoMobile from '../assets/work/young-onion-woo-mobile.webp';
import yoMysteryDesktop from '../assets/work/young-onion-woo-desktop-2.webp';
import yoMysteryMobile from '../assets/work/young-onion-woo-mobile-2.webp';
import komakiDesktop from '../assets/work/komaki-desktop.webp';
import komakiMobile from '../assets/work/komaki-mobile-2.webp';
import sgrDesktop from '../assets/work/sgr777-desktop.webp';
import sgrMobile from '../assets/work/sgr777-mobile.webp';
import taabiDesktop from '../assets/work/taabi-desktop.webp';
import taabiMobile from '../assets/work/taabi-mobile-2.webp';
import eleenovaDesktop from '../assets/work/eleenova-desktop.webp';
import eleenovaMobile from '../assets/work/eleenova-mobile-2.webp';
import transworldDesktop from '../assets/work/transworld-academy-desktop.webp';
import transworldMobile from '../assets/work/transworld-academy-mobile.webp';
import hmjDesktop from '../assets/work/hmj-developers-desktop.webp';
import hmjMobile from '../assets/work/hmj-developers-mobile.webp';

export type RenderVariant =
  | 'zetstore-admin'
  | 'mystery-admin'
  | 'tests'
  | 'woo-perf'
  | 'shopify-cro'
  | 'fiomis-store'
  | 'inventra'
  | 'ai-saas';

export type Visual =
  | {
      kind: 'screenshot';
      desktop: ImageMetadata;
      /** Absent only where no mobile UI exists to capture (Taskify, an internship build). */
      mobile?: ImageMetadata;
      domain: string;
      alt: string;
      caption: string;
    }
  | { kind: 'render'; variant: RenderVariant; domain: string; alt: string; caption: string };

const CAPTURED = 'captured 29 Oct 2026';
const SAMPLE = 'Illustrative · sample data';

const shot = (desktop: ImageMetadata, mobile: ImageMetadata | undefined, domain: string, alt: string, caption: string): Visual => ({
  kind: 'screenshot',
  desktop,
  mobile,
  domain,
  alt,
  caption,
});
const render = (variant: RenderVariant, domain: string, alt: string): Visual => ({ kind: 'render', variant, domain, alt, caption: SAMPLE });

export const visuals = {
  // Real screenshots
  hh: shot(hhDesktop, hhMobileBook, '360homehealthcare.in', 'Home page of 360homehealthcare.in, a Chennai home-healthcare service, and its mobile booking step listing doctors and physiotherapy', `Live site — 360homehealthcare.in, ${CAPTURED}`),
  gdFarmFresh: shot(gdDesktop, gdMobileShop, 'gdfarmfresh.com', 'Home page of gdfarmfresh.com, a millet and traditional-foods store, and its mobile product listing', `Live site — gdfarmfresh.com, the headless storefront that runs on ZetStore, ${CAPTURED}`),
  youngOnionWoo: shot(yoDesktop, yoMobile, 'youngonion.in', 'Home page of youngonion.in, a kawaii stationery store, on desktop and mobile', `Live site — youngonion.in, the WooCommerce store before the rebuild, ${CAPTURED}`),
  youngOnionMystery: shot(yoMysteryDesktop, yoMysteryMobile, 'youngonion.in/mystery-box', 'Mystery Box category on youngonion.in showing gift-box products, on desktop and mobile', `Live site — the Mystery Box range on youngonion.in that the plugin fulfils, ${CAPTURED}`),
  komaki: shot(komakiDesktop, komakiMobile, 'komaki.in', 'Home page of komaki.in, an electric-scooter brand, and a mobile product page', `Live site — komaki.in, ${CAPTURED}`),
  sgr777: shot(sgrDesktop, sgrMobile, 'sgr777foods.com', 'Home page of sgr777foods.com, a South Indian foods brand, on desktop and mobile', `Live site — sgr777foods.com, ${CAPTURED}`),
  taabi: shot(taabiDesktop, taabiMobile, 'taabi.ai', 'Home page of taabi.ai, a transport-operations AI platform, and its mobile fleet-tracking page', `Live site — taabi.ai, ${CAPTURED}`),
  eleenova: shot(eleenovaDesktop, eleenovaMobile, 'eleenova.com', 'Home page of eleenova.com, a kitchen-appliance store, and its mobile air-fryer collection', `Live site — eleenova.com, ${CAPTURED}`),
  transworld: shot(transworldDesktop, transworldMobile, 'transworldacademy.com', 'Home page of transworldacademy.com, a logistics and supply-chain academy, on desktop and mobile', `Live site — transworldacademy.com, ${CAPTURED}`),
  hmj: shot(hmjDesktop, hmjMobile, 'hmjdevelopers.com', 'Home page of hmjdevelopers.com, a Chennai property developer, on desktop and mobile', `Live site — hmjdevelopers.com, ${CAPTURED}`),
  taskify: shot(taskifyDesktop, undefined, 'taskify · dashboard', 'Taskify dashboard showing project, task and team-member totals with a recent-activity list', 'Screenshot — Taskify dashboard (internship build)'),

  // High-fidelity renders for private / internal work
  zetstoreAdmin: render('zetstore-admin', 'admin · zetstore', 'ZetStore admin showing a GSTR-1 report table with invoice numbers, GSTINs, HSN codes and GST amounts'),
  mysteryAdmin: render('mystery-admin', 'youngonion.in/wp-admin', 'WooCommerce admin screen listing Mystery Box orders with fulfilment statuses and auto-picked items'),
  tests: render('tests', 'ci · test run', 'Automated test run with passing Playwright and unit tests'),
  wooPerf: render('woo-perf', 'youngonion.in · network', 'Network panel comparing page weight and requests before and after removing unused CSS and JavaScript'),
  shopifyCro: render('shopify-cro', 'store.myshopify.com', 'Shopify product page with a sticky add-to-cart bar, bundle-and-save block and upsell row'),
  fiomisStore: render('fiomis-store', 'fiomis', 'Fiomis storefront with “Choose Better” hero, oversized tees and hoodies with ₹ prices and size pills'),
  inventra: render('inventra', 'inventra · dashboard', 'Inventra dashboard with inventory-turnover, days-of-inventory, fill-rate and EOQ cards, a trend chart and purchase orders'),
  aiSaas: render('ai-saas', 'repurpose · editor', 'AI content tool turning a blog post into an X thread and a LinkedIn carousel slide'),
} satisfies Record<string, Visual>;
