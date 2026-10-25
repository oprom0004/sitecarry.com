// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sitecarry.com',
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ja: 'ja',
          'zh-tw': 'zh-TW',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
