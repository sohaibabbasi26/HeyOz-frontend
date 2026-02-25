// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://hey-oz-frontend.vercel.app/",
  integrations: [tailwind({ applyBaseStyles: false, configFile: './tailwind.config.mjs' }), sitemap()],
  output: 'static',
});
