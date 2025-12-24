import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, q as Fragment, h as addAttribute } from '../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cauy4deL.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const API_BASE = "http://localhost:3000";
  let data = null;
  let error = null;
  try {
    const res = await fetch(`${API_BASE}/api/categories/${slug}/posts`);
    if (!res.ok) throw new Error("Category not found");
    data = await res.json();
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data?.category?.name ? `${data.category.name} - DevNewsletter` : "Category", "data-astro-cid-dqg6fwsj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-dqg6fwsj> ${error || !data ? renderTemplate`<div class="error-message" data-astro-cid-dqg6fwsj> ${error || "Category not found"} </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-dqg6fwsj": true }, { "default": async ($$result3) => renderTemplate` <header class="page-header" data-astro-cid-dqg6fwsj> <a href="/categories" class="back-link" data-astro-cid-dqg6fwsj>&larr; All Categories</a> <h1 class="page-title" data-astro-cid-dqg6fwsj>${data.category.name}</h1> <p class="page-subtitle" data-astro-cid-dqg6fwsj>${data.posts.length} ${data.posts.length === 1 ? "post" : "posts"}</p> </header> ${data.posts.length === 0 ? renderTemplate`<div class="empty-state" data-astro-cid-dqg6fwsj> <p data-astro-cid-dqg6fwsj>No posts in this category yet.</p> </div>` : renderTemplate`<div class="posts-list" data-astro-cid-dqg6fwsj> ${data.posts.map((post) => {
    const image = extractImage(post.content);
    return renderTemplate`<article class="post-item" data-astro-cid-dqg6fwsj> ${image && renderTemplate`<div class="mb-6" data-astro-cid-dqg6fwsj> <a${addAttribute(`/posts/${post.id}`, "href")} data-astro-cid-dqg6fwsj> <img${addAttribute(image, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 object-cover rounded-xl" loading="lazy" data-astro-cid-dqg6fwsj> </a> </div>`} <time class="post-date" data-astro-cid-dqg6fwsj> ${new Date(post.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })} </time> <h2 class="post-title" data-astro-cid-dqg6fwsj> <a${addAttribute(`/posts/${post.id}`, "href")} data-astro-cid-dqg6fwsj>${post.title}</a> </h2> <p class="post-excerpt" data-astro-cid-dqg6fwsj> ${formatExcerpt(post.content)} </p> <a${addAttribute(`/posts/${post.id}`, "href")} class="read-more" data-astro-cid-dqg6fwsj>
Read Full Article &rarr;
</a> </article>`;
  })} </div>`}` })}`} </div> ` })} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/categories/[slug].astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
