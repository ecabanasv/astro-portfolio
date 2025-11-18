// @ts-check
import { defineConfig } from 'astro/config';

import image from '@astrojs/image';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  vite: {
    plugins: [tailwindcss()]
  }
});