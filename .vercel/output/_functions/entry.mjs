import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CDpBN3A6.mjs';
import { manifest } from './manifest_CF31cjAI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/categories.astro.mjs');
const _page3 = () => import('./pages/admin/login.astro.mjs');
const _page4 = () => import('./pages/admin/posts/new.astro.mjs');
const _page5 = () => import('./pages/admin/posts/preview/_id_.astro.mjs');
const _page6 = () => import('./pages/admin/posts/_id_.astro.mjs');
const _page7 = () => import('./pages/admin/posts.astro.mjs');
const _page8 = () => import('./pages/admin.astro.mjs');
const _page9 = () => import('./pages/archive.astro.mjs');
const _page10 = () => import('./pages/categories/_slug_.astro.mjs');
const _page11 = () => import('./pages/categories.astro.mjs');
const _page12 = () => import('./pages/contributors.astro.mjs');
const _page13 = () => import('./pages/developer-tools.astro.mjs');
const _page14 = () => import('./pages/newsletters.astro.mjs');
const _page15 = () => import('./pages/posts/_id_.astro.mjs');
const _page16 = () => import('./pages/posts.astro.mjs');
const _page17 = () => import('./pages/privacy.astro.mjs');
const _page18 = () => import('./pages/search.astro.mjs');
const _page19 = () => import('./pages/terms.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/categories/index.astro", _page2],
    ["src/pages/admin/login.astro", _page3],
    ["src/pages/admin/posts/new.astro", _page4],
    ["src/pages/admin/posts/preview/[id].astro", _page5],
    ["src/pages/admin/posts/[id].astro", _page6],
    ["src/pages/admin/posts/index.astro", _page7],
    ["src/pages/admin/index.astro", _page8],
    ["src/pages/archive.astro", _page9],
    ["src/pages/categories/[slug].astro", _page10],
    ["src/pages/categories.astro", _page11],
    ["src/pages/contributors.astro", _page12],
    ["src/pages/developer-tools.astro", _page13],
    ["src/pages/newsletters.astro", _page14],
    ["src/pages/posts/[id].astro", _page15],
    ["src/pages/posts/index.astro", _page16],
    ["src/pages/privacy.astro", _page17],
    ["src/pages/search.astro", _page18],
    ["src/pages/terms.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e8e052c5-7a69-478a-bb7c-ecc9a2a66c27",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
