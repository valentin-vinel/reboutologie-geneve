import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site: 'https://reboutologie-geneve.ch',
  vite: {
    plugins: [tailwindcss()],
  },
});