import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cauy4deL.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - DevNewsletter", "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="legal-page py-20" data-astro-cid-fb3qbcs3> <div class="container max-w-3xl mx-auto px-6" data-astro-cid-fb3qbcs3> <header class="mb-16 text-center" data-astro-cid-fb3qbcs3> <h1 class="text-4xl md:text-5xl font-serif font-black mb-4" data-astro-cid-fb3qbcs3>Privacy Policy</h1> <p class="text-gray-500 dark:text-zinc-500 font-serif italic" data-astro-cid-fb3qbcs3>Last Updated: December 24, 2025</p> <div class="h-1 w-20 bg-amber-500 mx-auto mt-8 rounded-full" data-astro-cid-fb3qbcs3></div> </header> <div class="prose dark:prose-invert prose-amber max-w-none" data-astro-cid-fb3qbcs3> <section class="mb-12" data-astro-cid-fb3qbcs3> <h2 class="text-2xl font-serif font-bold mb-4" data-astro-cid-fb3qbcs3>1. Information We Collect</h2> <p class="text-lg leading-relaxed mb-4" data-astro-cid-fb3qbcs3>
At DevNewsletter, we value your privacy. We only collect the information necessary to provide you with our weekly newsletter:
</p> <ul class="list-disc pl-6 space-y-2 mb-4" data-astro-cid-fb3qbcs3> <li data-astro-cid-fb3qbcs3><strong data-astro-cid-fb3qbcs3>Email Address:</strong> Primarily for sending the newsletter and identifying your subscription.</li> <li data-astro-cid-fb3qbcs3><strong data-astro-cid-fb3qbcs3>Usage Data:</strong> We track basic interactions (like views) to improve our content.</li> </ul> </section> <section class="mb-12" data-astro-cid-fb3qbcs3> <h2 class="text-2xl font-serif font-bold mb-4" data-astro-cid-fb3qbcs3>2. How We Use Data</h2> <p class="text-lg leading-relaxed mb-4" data-astro-cid-fb3qbcs3>
We use the collected information to:
</p> <ul class="list-disc pl-6 space-y-2 mb-4" data-astro-cid-fb3qbcs3> <li data-astro-cid-fb3qbcs3>Deliver weekly dev notes and insights directly to your inbox.</li> <li data-astro-cid-fb3qbcs3>Analyze trending topics (powering our "Top Stories" section).</li> <li data-astro-cid-fb3qbcs3>Communicate important updates regarding the service.</li> </ul> </section> <section class="mb-12" data-astro-cid-fb3qbcs3> <h2 class="text-2xl font-serif font-bold mb-4" data-astro-cid-fb3qbcs3>3. Data Security</h2> <p class="text-lg leading-relaxed mb-4" data-astro-cid-fb3qbcs3>
We implement security measures to protect your email address. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
</p> </section> <section class="mb-12" data-astro-cid-fb3qbcs3> <h2 class="text-2xl font-serif font-bold mb-4" data-astro-cid-fb3qbcs3>4. Third Parties</h2> <p class="text-lg leading-relaxed mb-4" data-astro-cid-fb3qbcs3>
We may use third-party services like Cloudinary for image hosting or standard analytics tools. These parties have their own privacy policies.
</p> </section> <section class="mb-12" data-astro-cid-fb3qbcs3> <h2 class="text-2xl font-serif font-bold mb-4" data-astro-cid-fb3qbcs3>5. Contact Us</h2> <p class="text-lg leading-relaxed" data-astro-cid-fb3qbcs3>
If you have any questions about this Privacy Policy, please reach out via our social channels.
</p> </section> </div> </div> </div> ` })} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/privacy.astro", void 0);

const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
