// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'server',
  
  site: 'https://strivex.dev',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto'
  },

  adapter: vercel(),

  integrations: [sitemap()],

  devToolbar: {
    enabled: false
  }
});