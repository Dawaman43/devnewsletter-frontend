import { f as createComponent, e as createAstro, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, p as renderSlot, k as renderComponent, r as renderTemplate, n as renderScript, o as renderHead } from './astro/server_DXpmQ0xB.mjs';
/* empty css                         */
/* empty css                         */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/dave/Documents/devnewsletter/newsletter/node_modules/.pnpm/@lucide+astro@0.562.0_astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6_bba1b6eac2be94c054c05fda5123bb5d/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Coffee = createLucideIcon("coffee", [["path", { "d": "M10 2v2" }], ["path", { "d": "M14 2v2" }], ["path", { "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }], ["path", { "d": "M6 2v2" }]]);

const ExternalLink = createLucideIcon("external-link", [["path", { "d": "M15 3h6v6" }], ["path", { "d": "M10 14 21 3" }], ["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]]);

const Github = createLucideIcon("github", [["path", { "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]]);

const Heart = createLucideIcon("heart", [["path", { "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }]]);

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const Moon = createLucideIcon("moon", [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]]);

const Pen = createLucideIcon("pen", [["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]);

const Search = createLucideIcon("search", [["path", { "d": "m21 21-4.34-4.34" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }]]);

const Sun = createLucideIcon("sun", [["circle", { "cx": "12", "cy": "12", "r": "4" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M12 20v2" }], ["path", { "d": "m4.93 4.93 1.41 1.41" }], ["path", { "d": "m17.66 17.66 1.41 1.41" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "M20 12h2" }], ["path", { "d": "m6.34 17.66-1.41 1.41" }], ["path", { "d": "m19.07 4.93-1.41 1.41" }]]);

let quote = "Talk is cheap. Show me the code.";
let cite = "\u2014 Linus Torvalds \u{1F4BB}";
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 text-center"> <div class="relative inline-block"> <svg class="absolute -top-4 -left-8 w-8 h-8 text-amber-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M8 12 Q4 16 8 20 Q12 24 16 20" fill="none" stroke="currentColor" stroke-width="2"></path> </svg> <svg class="absolute -top-4 -right-8 w-8 h-8 text-amber-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M24 12 Q28 16 24 20 Q20 24 16 20" fill="none" stroke="currentColor" stroke-width="2"></path> </svg> <blockquote class="text-2xl md:text-3xl font-serif italic text-gray-700 max-w-4xl mx-auto leading-relaxed relative z-10" style="font-family: 'Caveat', cursive;"> ${quote} </blockquote> </div> <cite class="text-sm font-medium text-gray-500 mt-4 block font-handwritten" style="font-family: 'Caveat', cursive;"> ${cite} </cite> </div>`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/components/HeaderQuote.astro", void 0);

let showQuote = false;
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative z-50 bg-white/95 dark:bg-zinc-950/95 border-b border-gray-100 dark:border-zinc-800/50 backdrop-blur-md transition-colors duration-300" data-astro-cid-3ef6ksr2> <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none" data-astro-cid-3ef6ksr2> <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <defs data-astro-cid-3ef6ksr2> <pattern id="pencil-texture-header" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" data-astro-cid-3ef6ksr2> <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3" data-astro-cid-3ef6ksr2></circle> <path d="M10 10 Q25 5 40 10 Q25 15 10 10" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4" data-astro-cid-3ef6ksr2></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#pencil-texture-header)" class="text-gray-400 dark:text-zinc-600" data-astro-cid-3ef6ksr2></rect> </svg> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8" data-astro-cid-3ef6ksr2> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12" data-astro-cid-3ef6ksr2> <!-- Logo Section --> <div class="flex items-center justify-between lg:justify-start gap-4" data-astro-cid-3ef6ksr2> <a href="/" class="group flex items-center gap-3 md:gap-4 flex-shrink-0" data-astro-cid-3ef6ksr2> <div class="p-2.5 md:p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30 transition-transform group-hover:rotate-3 duration-300" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Pen", Pen, { "class": "h-7 w-7 md:h-9 md:w-9 text-amber-600 dark:text-amber-500", "data-astro-cid-3ef6ksr2": true })} </div> <div class="flex flex-col" data-astro-cid-3ef6ksr2> <span class="text-2xl md:text-3xl font-serif font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight" data-astro-cid-3ef6ksr2>
DevNewsletter
</span> <span class="text-[10px] md:text-xs font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase" data-astro-cid-3ef6ksr2>
The Creative Developer
</span> </div> </a> <!-- Mobile-only controls? No, we'll keep them in the main flow but maybe reorder --> </div> <!-- Search and Controls --> <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto" data-astro-cid-3ef6ksr2> <div class="relative group w-full sm:flex-1 lg:w-80 z-50" id="search-container"${addAttribute("http://localhost:3000", "data-api-base")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Search", Search, { "class": "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-zinc-500 group-focus-within:text-amber-600 transition-colors z-10", "data-astro-cid-3ef6ksr2": true })} <input type="search" id="header-search" placeholder="Search stories..." class="w-full pl-11 pr-12 py-3
                   bg-gray-50 dark:bg-zinc-900/50 
                   border border-gray-200 dark:border-zinc-700/50
                   rounded-xl 
                   text-gray-900 dark:text-white 
                   placeholder-gray-400 dark:placeholder-zinc-500
                   text-sm font-sans
                   focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500
                   shadow-sm transition-all duration-300" aria-label="Search the newsletter" autocomplete="off" data-astro-cid-3ef6ksr2> <kbd class="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded pointer-events-none" data-astro-cid-3ef6ksr2>
⌘K
</kbd> <div id="search-suggestions" class="absolute top-full left-0 right-0 mt-3 p-2 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden hidden z-[100]" data-astro-cid-3ef6ksr2> <ul class="flex flex-col gap-1" id="suggestions-list" data-astro-cid-3ef6ksr2> <!-- Suggestions --> </ul> </div> </div> <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start" data-astro-cid-3ef6ksr2> <button id="theme-toggle" class="group flex items-center justify-center w-11 h-11 rounded-xl 
                    bg-gray-50 dark:bg-zinc-900/50 
                    border border-gray-200 dark:border-zinc-700/50
                    hover:border-amber-300 dark:hover:border-amber-700
                    hover:bg-white dark:hover:bg-zinc-800
                    shadow-sm transition-all duration-300 cursor-pointer overflow-hidden" aria-label="Toggle Dark Mode" data-astro-cid-3ef6ksr2> <div class="relative w-5 h-5" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Sun", Sun, { "class": "sun-icon absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-500", "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Moon", Moon, { "class": "moon-icon absolute inset-0 h-5 w-5 text-indigo-400 transition-all duration-500", "data-astro-cid-3ef6ksr2": true })} </div> </button> <a href="https://github.com/Dawaman43/devnewsletter-frontend" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl 
                    bg-gray-900 dark:bg-white 
                    text-white dark:text-zinc-950 
                    px-5 py-3 
                    text-sm font-bold 
                    hover:bg-gray-800 dark:hover:bg-zinc-100
                    hover:shadow-lg transition-all duration-300" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Github", Github, { "class": "h-4 w-4", "data-astro-cid-3ef6ksr2": true })} <span data-astro-cid-3ef6ksr2>Star</span> </a> </div> </div> </div> ${showQuote} </div> </header>  ${renderScript($$result, "/home/dave/Documents/devnewsletter/newsletter/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300"> <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none"> <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 dark:from-amber-900/10 dark:to-zinc-900/10"></div> </div> <div class="relative max-w-7xl mx-auto px-6 py-16 md:py-24"> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"> <!-- Logo and Description --> <div class="md:col-span-5"> <a href="/" class="group inline-flex items-center gap-4 mb-8"> <div class="p-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30 transition-transform group-hover:rotate-6 duration-300"> ${renderComponent($$result, "Pen", Pen, { "class": "h-7 w-7 text-amber-600 dark:text-amber-500" })} </div> <span class="text-2xl font-serif font-extrabold text-gray-900 dark:text-white transition-colors">
DevNewsletter
</span> </a> <p class="text-gray-600 dark:text-zinc-400 font-serif text-lg leading-relaxed max-w-md mb-8">
Crafting stories that bridge the gap between technology and creativity—one thoughtful newsletter at a time.
</p> <!-- Socials --> <div class="flex items-center gap-4"> <a href="https://github.com/dawaman43" target="_blank" rel="noopener" class="group p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all duration-300" aria-label="GitHub"> ${renderComponent($$result, "Github", Github, { "class": "w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" })} </a> <a href="https://x.com/dawitcodes" target="_blank" rel="noopener" class="group p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all duration-300" aria-label="X"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a href="mailto:dawitworkujima@gmail.com" class="group p-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all duration-300" aria-label="Email"> ${renderComponent($$result, "Mail", Mail, { "class": "w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" })} </a> </div> </div> <!-- Quick Links --> <div class="md:col-span-3"> <h4 class="text-sm font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-8">Navigation</h4> <nav class="flex flex-col gap-4"> ${["Categories", "Contributors", "Developer Tools", "Subscribe", "About"].map((text) => renderTemplate`<a${addAttribute(`/${text.toLowerCase().replace(" ", "-")}`, "href")} class="text-gray-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"> ${text} </a>`)} </nav> </div> <!-- Subscribe --> <div class="md:col-span-4"> <h4 class="text-sm font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-8">Newsletter</h4> <p class="text-gray-600 dark:text-zinc-400 mb-6 font-serif">
Fresh insights and inspiring stories in your inbox every week.
</p> <form class="flex flex-col gap-3"> <input type="email" placeholder="your@email.com" required class="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"> <button type="submit" class="w-full px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-zinc-950 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
Join Newsletter
</button> </form> <p class="text-[10px] text-gray-400 dark:text-zinc-600 uppercase tracking-widest mt-4 font-bold">Unsubscribe anytime • No spam ever</p> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-gray-100 dark:border-zinc-900 bg-gray-50/50 dark:bg-zinc-950/50 backdrop-blur-sm"> <div class="max-w-7xl mx-auto px-6 py-10"> <div class="flex flex-col md:flex-row justify-between items-center gap-8"> <div class="flex flex-col items-center md:items-start gap-4"> <a href="https://t.me/daw9t" target="_blank" rel="noopener" class="group flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-amber-600 transition-colors"> <span class="font-bold text-sm uppercase tracking-wider">Chat on Telegram</span> ${renderComponent($$result, "ExternalLink", ExternalLink, { "class": "w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" })} </a> <div class="flex items-center gap-1.5 text-xs text-gray-400 dark:text-zinc-600 font-bold uppercase tracking-widest"> <span>© 2025</span> <span class="hidden sm:inline">Made with</span> ${renderComponent($$result, "Heart", Heart, { "class": "w-3.5 h-3.5 text-red-500 fill-current mx-0.5" })} <span>by creators</span> </div> </div> <div class="flex flex-col items-center md:items-end gap-6"> <div class="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full border border-amber-100 dark:border-amber-800/30"> ${renderComponent($$result, "Coffee", Coffee, { "class": "w-4 h-4 text-amber-600 dark:text-amber-500" })} <span class="text-[10px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-widest">Support the craft</span> </div> <nav class="flex gap-8 text-xs font-bold text-gray-400 dark:text-zinc-600 uppercase tracking-widest"> <a href="/privacy" class="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a> <a href="/terms" class="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a> </nav> </div> </div> </div> </div> </footer>`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/components/Footer.astro", void 0);

const $$ConsentBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="consent-banner" class="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[1000] hidden" data-astro-cid-2effgw6e> <div class="glass-morph p-6 rounded-3xl border border-white/20 dark:border-zinc-800/50 shadow-2xl backdrop-blur-xl bg-white/70 dark:bg-zinc-900/80 animate-slide-up" data-astro-cid-2effgw6e> <div class="flex items-start gap-4 mb-6" data-astro-cid-2effgw6e> <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl" data-astro-cid-2effgw6e> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2effgw6e> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2effgw6e></path> </svg> </div> <div data-astro-cid-2effgw6e> <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-1" data-astro-cid-2effgw6e>Caching & Cookies</h3> <p class="text-sm text-gray-600 dark:text-zinc-400 font-serif leading-relaxed" data-astro-cid-2effgw6e>
We use cookies and local storage to personalize your experience, remember your theme, and improve performance.
</p> </div> </div> <div class="flex items-center gap-3" data-astro-cid-2effgw6e> <button id="accept-consent" class="flex-1 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all" data-astro-cid-2effgw6e>
Accept All
</button> <button id="reject-consent" class="flex-1 px-4 py-2.5 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-100 dark:border-zinc-700 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all" data-astro-cid-2effgw6e>
Reject
</button> </div> </div> </div> ${renderScript($$result, "/home/dave/Documents/devnewsletter/newsletter/src/components/ConsentBanner.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/dave/Documents/devnewsletter/newsletter/src/components/ConsentBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "DevNewsletter \u2014 Weekly Dev Notes",
    description = "Weekly newsletter: practical tips, short tutorials, and post-mortems for builders who ship. Join for concise dev notes you can use.",
    image = "/og-image.jpg",
    showHeaderQuote = false,
    showHero = false
  } = Astro2.props;
  const canonicalURL = Astro2.props.canonicalURL || Astro2.url.href;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', `><!-- Structured Data: Temporarily removed due to compiler panic --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico"><script>
        // Dark mode init
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    <\/script>`, '</head> <body class="antialiased" data-astro-cid-sckkx6r4> ', ' <main class="relative" data-astro-cid-sckkx6r4> ', " </main> ", " ", " ", " </body> </html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url).toString(), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "showQuote": showHeaderQuote, "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "ConsentBanner", $$ConsentBanner, { "data-astro-cid-sckkx6r4": true }), renderScript($$result, "/home/dave/Documents/devnewsletter/newsletter/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/dave/Documents/devnewsletter/newsletter/src/layouts/Layout.astro", void 0);

export { $$Layout as $, createLucideIcon as c };
