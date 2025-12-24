import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, n as renderScript } from '../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cauy4deL.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-6">Admin Login</h1> <div class="max-w-md"> <label class="block text-sm font-medium text-gray-700">Email</label> <input id="email" type="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"> <label class="block text-sm font-medium text-gray-700 mt-4">Password</label> <input id="password" type="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"> <button id="loginBtn" class="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 mt-6">Login</button> </div> ${renderScript($$result2, "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/login.astro", void 0);

const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
