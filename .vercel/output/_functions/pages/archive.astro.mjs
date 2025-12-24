import { f as createComponent, o as renderHead, r as renderTemplate, h as addAttribute } from '../chunks/astro/server_DXpmQ0xB.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Archive = createComponent(($$result, $$props, $$slots) => {
  const modules = /* #__PURE__ */ Object.assign({});
  function parsePath(p) {
    const parts = p.split("/");
    const file = parts[parts.length - 1];
    return file.replace(/\.mdx?$/, "");
  }
  const posts = Object.entries(modules).map(([path, mod]) => {
    const fm = mod.frontmatter ?? {};
    return {
      title: fm.title ?? "Untitled",
      date: fm.date ? new Date(fm.date) : /* @__PURE__ */ new Date(0),
      summary: fm.summary ?? "",
      slug: parsePath(path)
    };
  }).sort((a, b) => b.date.getTime() - a.date.getTime());
  function formatDate(d) {
    if (!(d instanceof Date) || Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
  }
  return renderTemplate`<html lang="en" data-astro-cid-qma2cssl> <head><meta charset="utf-8"><title>Archive</title><meta name="viewport" content="width=device-width,initial-scale=1">${renderHead()}</head> <body data-astro-cid-qma2cssl> <header data-astro-cid-qma2cssl> <h1 data-astro-cid-qma2cssl>Archive</h1> <p class="meta" data-astro-cid-qma2cssl>All past newsletters.</p> </header> <main data-astro-cid-qma2cssl> ${posts.length === 0 ? renderTemplate`<p data-astro-cid-qma2cssl>No newsletters found. Place markdown/MDX files in src/content/newsletters/ with frontmatter (title, date, summary).</p>` : renderTemplate`<section data-astro-cid-qma2cssl> ${posts.map((post) => renderTemplate`<article class="post"${addAttribute(post.slug, "data-key")} data-astro-cid-qma2cssl> <h2 data-astro-cid-qma2cssl><a${addAttribute(`/newsletters/${post.slug}`, "href")} data-astro-cid-qma2cssl>${post.title}</a></h2> <div class="meta" data-astro-cid-qma2cssl>${formatDate(post.date)}</div> ${post.summary && renderTemplate`<p data-astro-cid-qma2cssl>${post.summary}</p>`} </article>`)} </section>`} </main> </body></html>`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/archive.astro", void 0);

const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Archive,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
