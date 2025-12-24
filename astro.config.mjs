import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

// Build as a static site to avoid serverless runtime mismatches on Vercel
export default defineConfig({
    site: 'https://devnews-nu.vercel.app',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), sitemap()],
    output: 'static',
});
