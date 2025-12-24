import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321', // Replace with your production domain
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
