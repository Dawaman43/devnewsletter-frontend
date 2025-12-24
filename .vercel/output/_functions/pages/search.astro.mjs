import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_D5fmrAe4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://devnews-nu.vercel.app");
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const API_BASE = "http://localhost:3000";
  const query = Astro2.url.searchParams.get("q") || "";
  const page = parseInt(Astro2.url.searchParams.get("page") || "1");
  const limit = 10;
  const offset = (page - 1) * limit;
  let results = { posts: [], total: 0 };
  let error = null;
  if (query) {
    try {
      const res = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`);
      results = await res.json();
    } catch (err) {
      error = "Failed to fetch search results.";
    }
  }
  const totalPages = Math.ceil(results.total / limit);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search: ${query} — DevNewsletter` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-6 py-16"> <header class="mb-12"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
Search Results
</h1> <p class="text-xl text-gray-600 font-serif italic"> ${query ? `Showing results for "${query}"` : "Enter a search term to find stories, tools, and wisdom."} </p> </header> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-8"> ${error} </div>`} ${!query ? renderTemplate`<div class="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"> <p class="text-gray-500 font-serif text-lg">Type something in the search bar above to start.</p> </div>` : results.posts.length === 0 ? renderTemplate`<div class="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"> <p class="text-gray-500 font-serif text-lg">No results found for "${query}". Try different keywords.</p> </div>` : renderTemplate`<div class="space-y-12"> ${results.posts.map((post) => {
    const image = extractImage(post.content);
    return renderTemplate`<article class="group relative flex flex-col md:flex-row gap-8 items-start"> ${image && renderTemplate`<div class="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"> <img${addAttribute(image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> </div>`} <div class="flex-1"> <div class="flex items-center gap-3 mb-3"> <span class="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Article</span> <time class="text-sm text-gray-400 font-medium"> ${new Date(post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </time> </div> <h2 class="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors"> <a${addAttribute(`/posts/${post.id}`, "href")}>${post.title}</a> </h2> <p class="text-gray-600 font-serif text-lg leading-relaxed mb-6 line-clamp-3"> ${formatExcerpt(post.content)} </p> <a${addAttribute(`/posts/${post.id}`, "href")} class="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all">
Read Full Story
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> </article>`;
  })} ${totalPages > 1 && renderTemplate`<nav class="flex justify-center items-center gap-4 mt-16 pt-12 border-t border-gray-100"> ${page > 1 && renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(query)}&page=${page - 1}`, "href")} class="p-3 rounded-full border border-gray-200 hover:bg-amber-50 hover:border-amber-200 text-gray-600 transition-all"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> </a>`} <div class="flex gap-2"> ${[...Array(totalPages)].map((_, i) => renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(query)}&page=${i + 1}`, "href")}${addAttribute(`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all ${page === i + 1 ? "bg-amber-600 text-white shadow-lg shadow-amber-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"}`, "class")}> ${i + 1} </a>`)} </div> ${page < totalPages && renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(query)}&page=${page + 1}`, "href")} class="p-3 rounded-full border border-gray-200 hover:bg-amber-50 hover:border-amber-200 text-gray-600 transition-all"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </a>`} </nav>`} </div>`} </div> ` })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/search.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
