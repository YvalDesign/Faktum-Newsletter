// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://faktum-app.de',

  // Wichtig: Serverseitiger Output aktivieren
  output: 'server',

  // Cloudflare Pages Adapter aktivieren
  adapter: cloudflare(),

  // Optional, kannst du behalten
  outDir: './dist',
});

