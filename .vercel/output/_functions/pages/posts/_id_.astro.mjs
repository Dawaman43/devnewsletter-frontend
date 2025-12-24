import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderScript, u as unescapeHTML } from '../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CINh4aUI.mjs';
import { marked } from 'marked';
import hljs from 'highlight.js';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const API_BASE = "http://localhost:3000";
  let post;
  let error = null;
  let htmlContent = "";
  try {
    const res = await fetch(`${API_BASE}/api/posts/${id}`).catch(() => null);
    if (res?.ok) {
      post = await res.json();
      marked.setOptions({
        highlight: function(code, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
      });
      if (post?.content) {
        htmlContent = marked.parse(post.content);
      }
    } else {
      throw new Error("Post not found or API unreachable");
    }
  } catch (e) {
    error = e.message;
  }
  const formattedDate = post?.created_at ? new Date(post.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }) : "";
  const seoDescription = post?.content ? post.content.replace(/[#*`]/g, "").substring(0, 160).trim() + "..." : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post?.title ?? "Post", "description": seoDescription, "data-astro-cid-lvjzyg5v": true }, { "default": async ($$result2) => renderTemplate` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"> ${maybeRenderHead()}<div class="container"${addAttribute(id, "data-post-id")}${addAttribute(API_BASE, "data-api-base")} data-astro-cid-lvjzyg5v> ${error || !post ? renderTemplate`<div class="error-message" data-astro-cid-lvjzyg5v> ${error ?? "This post could not be loaded."} </div>` : renderTemplate`<article class="post" data-astro-cid-lvjzyg5v> <header class="post-header" data-astro-cid-lvjzyg5v> <a href="/" class="back-link" data-astro-cid-lvjzyg5v>&larr; Back to Home</a> ${post.categories?.length > 0 && renderTemplate`<div class="categories" data-astro-cid-lvjzyg5v> ${post.categories.map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat.slug}`, "href")} class="category-tag" data-astro-cid-lvjzyg5v> ${cat.name} </a>`)} </div>`} <h1 class="post-title" data-astro-cid-lvjzyg5v>${post.title}</h1> <div class="post-meta flex items-center gap-4" data-astro-cid-lvjzyg5v> <time data-astro-cid-lvjzyg5v>${formattedDate}</time> <span class="text-gray-300 dark:text-gray-600" data-astro-cid-lvjzyg5v>|</span> <span class="flex items-center gap-1" data-astro-cid-lvjzyg5v> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lvjzyg5v><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-lvjzyg5v></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-lvjzyg5v></path></svg> <span id="view-count" data-astro-cid-lvjzyg5v>${post.views || 0} views</span> </span> </div> </header> <div id="post-content" class="post-content prose" data-astro-cid-lvjzyg5v>${unescapeHTML(htmlContent)}</div> </article>`} </div> ${renderScript($$result2, "/home/dave/Documents/devnewsletter/newsletter/src/pages/posts/[id].astro?astro&type=script&index=0&lang.ts")} ` })} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/posts/[id].astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
