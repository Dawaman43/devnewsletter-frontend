import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cauy4deL.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Newsletters = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "http://localhost:3000";
  let posts = [];
  try {
    const res = await fetch(`${API_BASE}/posts`);
    if (res.ok) posts = await res.json();
    else posts = [];
  } catch (e) {
    posts = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "showHero": false }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 py-16"> <header class="mb-12 text-center"> <h1 class="text-4xl font-serif font-medium text-gray-900">All Newsletters</h1> <p class="text-gray-600 mt-3">Browse every edition — short, practical notes for builders.</p> </header> ${posts && posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"> <a${addAttribute(`/posts/${post.id}`, "href")} class="no-underline"> <h2 class="text-xl font-serif text-gray-900 mb-2">${post.title}</h2> </a> <div class="text-sm text-gray-500 mb-4">${new Date(post.created_at).toLocaleDateString()}</div> <p class="text-gray-700 mb-6">${post.excerpt ?? "Short summary not available."}</p> <div class="flex items-center justify-between"> <a${addAttribute(`/posts/${post.id}`, "href")} class="text-sm text-amber-600 font-medium hover:underline">Read</a> <div class="text-xs text-gray-400">${post.readTime ?? "5 min"}</div> </div> </article>`)} </div>` : renderTemplate`<div class="text-center text-gray-600">No newsletters found.</div>`} </section> ` })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/newsletters.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/newsletters.astro";
const $$url = "/newsletters";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Newsletters,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
