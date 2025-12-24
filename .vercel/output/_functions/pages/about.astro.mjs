import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_D5fmrAe4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About";
  const description = "Learn more about Dawit Worku, the creator behind this newsletter.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="page-header" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>${title}</h1> <p data-astro-cid-kh7btl4r>${description}</p> </header> <section class="about-content" data-astro-cid-kh7btl4r> <div class="about-text" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Hi, I'm <strong data-astro-cid-kh7btl4r>Dawit Worku</strong>, a passionate developer and tech enthusiast. I created this newsletter to share practical tips, tutorials, and insights for fellow developers who love building and shipping great software.
</p> <p data-astro-cid-kh7btl4r>
With years of experience in web development, I focus on modern tools and frameworks that help streamline the development process. Whether it's the latest in JavaScript, backend technologies, or productivity hacks, I aim to provide concise, actionable content that you can use right away.
</p> <p data-astro-cid-kh7btl4r>
When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community. I believe in continuous learning and helping others grow in their tech journeys.
</p> <p data-astro-cid-kh7btl4r>
Thanks for being part of this community! If you have questions, suggestions, or just want to connect, feel free to reach out.
</p> </div> <div class="about-links" data-astro-cid-kh7btl4r> <a href="https://dawitworku.tech" target="_blank" rel="noopener" class="cta-button" data-astro-cid-kh7btl4r>
Visit My Website
</a> <a href="/contact" class="secondary-link" data-astro-cid-kh7btl4r>
Get in Touch
</a> </div> </section>  ` })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/about.astro", void 0);

const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
