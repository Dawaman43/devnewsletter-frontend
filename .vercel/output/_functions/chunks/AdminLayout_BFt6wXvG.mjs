import { e as createAstro, f as createComponent, o as renderHead, p as renderSlot, n as renderScript, r as renderTemplate } from './astro/server_DXpmQ0xB.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro = createAstro("http://localhost:4321");
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Admin" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-2kanml4j> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} — Newsletter Admin</title>${renderHead()}</head> <body class="bg-gray-50" data-astro-cid-2kanml4j> <div class="flex h-screen" data-astro-cid-2kanml4j> <!-- Sidebar --> <aside class="w-64 bg-white border-r border-gray-200" data-astro-cid-2kanml4j> <div class="p-6 border-b border-gray-200" data-astro-cid-2kanml4j> <h1 class="text-xl font-bold text-gray-900" data-astro-cid-2kanml4j>Admin Panel</h1> </div> <nav class="p-4" data-astro-cid-2kanml4j> <a href="/admin" class="nav-link" data-astro-cid-2kanml4j> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2kanml4j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-2kanml4j></path> </svg>
Dashboard
</a> <a href="/admin/posts" class="nav-link" data-astro-cid-2kanml4j> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2kanml4j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-2kanml4j></path> </svg>
Posts
</a> <a href="/admin/categories" class="nav-link" data-astro-cid-2kanml4j> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2kanml4j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-2kanml4j></path> </svg>
Categories
</a> </nav> <div class="absolute bottom-0 w-64 p-4 border-t border-gray-200" data-astro-cid-2kanml4j> <button id="logoutBtn" class="nav-link text-red-600 hover:bg-red-50" data-astro-cid-2kanml4j> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2kanml4j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-2kanml4j></path> </svg>
Logout
</button> </div> </aside> <!-- Main content --> <main class="flex-1 overflow-auto" data-astro-cid-2kanml4j> <div class="p-8" data-astro-cid-2kanml4j> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> ${renderScript($$result, "/home/dave/Documents/devnewsletter/newsletter/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
