import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_CINh4aUI.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "http://localhost:3000";
  let categories = [];
  try {
    const res = await fetch(`${API_BASE}/api/categories`);
    categories = await res.json();
  } catch (err) {
    console.error("Failed to load categories:", err);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categories - DevNewsletter", "data-astro-cid-hioekb44": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-hioekb44> <header class="page-header" data-astro-cid-hioekb44> <h1 class="page-title" data-astro-cid-hioekb44>Browse by Category</h1> <p class="page-subtitle" data-astro-cid-hioekb44>Explore articles organized by topic</p> </header> ${categories.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-hioekb44> <p data-astro-cid-hioekb44>No categories yet.</p> </div>` : renderTemplate`<div class="categories-grid" data-astro-cid-hioekb44> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat.slug}`, "href")} class="category-card" data-astro-cid-hioekb44> <div class="category-icon" data-astro-cid-hioekb44>📁</div> <h2 class="category-name" data-astro-cid-hioekb44>${cat.name}</h2> <p class="category-description" data-astro-cid-hioekb44>View all posts in ${cat.name}</p> </a>`)} </div>`} </div> ` })} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/categories.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
