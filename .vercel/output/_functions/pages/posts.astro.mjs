import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cauy4deL.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "http://localhost:3000";
  let posts = [];
  let error = null;
  try {
    const res = await fetch(`${API_BASE}/api/posts?limit=100`);
    const data = await res.json();
    posts = data.posts;
  } catch (err) {
    error = err.message;
  }
  const formatExcerpt = (content) => {
    if (!content) return "";
    const text = content.replace(/!\[.*?\]\(.*?\)/g, "").replace(/[#*`]/g, "").replace(/\n+/g, " ").trim();
    return text.length > 0 ? text.substring(0, 200) + "..." : "";
  };
  const extractImage = (content) => {
    if (!content) return null;
    const match = content.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : null;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All Posts - DevNewsletter", "data-astro-cid-fjqfnjxi": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-fjqfnjxi> <header class="page-header" data-astro-cid-fjqfnjxi> <h1 class="page-title" data-astro-cid-fjqfnjxi>All Posts</h1> <p class="page-subtitle" data-astro-cid-fjqfnjxi>Browse all our articles and tutorials</p> </header> ${error ? renderTemplate`<div class="error-message" data-astro-cid-fjqfnjxi>
Failed to load posts. Please try again later.
</div>` : posts.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-fjqfnjxi> <p data-astro-cid-fjqfnjxi>No posts published yet. Check back soon!</p> </div>` : renderTemplate`<div class="posts-list" data-astro-cid-fjqfnjxi> ${posts.map((post) => {
    const image = extractImage(post.content);
    return renderTemplate`<article class="post-item" data-astro-cid-fjqfnjxi> ${image && renderTemplate`<div class="mb-6" data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.id}`, "href")} data-astro-cid-fjqfnjxi> <img${addAttribute(image, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 object-cover rounded-xl" loading="lazy" data-astro-cid-fjqfnjxi> </a> </div>`} <time class="post-date" data-astro-cid-fjqfnjxi> ${new Date(post.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })} </time> <h2 class="post-title" data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.id}`, "href")} data-astro-cid-fjqfnjxi>${post.title}</a> </h2> <p class="post-excerpt" data-astro-cid-fjqfnjxi> ${formatExcerpt(post.content)} </p> <a${addAttribute(`/posts/${post.id}`, "href")} class="read-more" data-astro-cid-fjqfnjxi>
Read Full Article &rarr;
</a> </article>`;
  })} </div>`} </div> ` })} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/posts/index.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
