import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

// Use the Vercel adapter for SSR Server output so Vercel runs the correct server function
export default defineConfig({
    site: 'https://devnews-nu.vercel.app',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), sitemap()],
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
