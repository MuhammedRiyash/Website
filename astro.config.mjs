// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://muhammedriyash.github.io',
  base: '/Website',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
  // The old static site published its projects page at /blog.html.
  redirects: {
    '/blog': '/Website/work.html',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blog') && !page.includes('/404'),
      // build.format 'file' emits /about.html etc.; keep sitemap URLs identical to the canonical URLs.
      serialize: (item) => {
        const url = new URL(item.url);
        if (!url.pathname.endsWith('/') && !url.pathname.endsWith('.html')) url.pathname += '.html';
        return { ...item, url: url.toString() };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
