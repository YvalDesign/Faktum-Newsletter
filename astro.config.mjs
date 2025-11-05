import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://faktum-app.de',
  output: 'server',
  adapter: cloudflare(),
});
