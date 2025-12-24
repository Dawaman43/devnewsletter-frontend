import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BFt6wXvG.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const API_BASE = "http://localhost:3000";
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Post" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-5xl"> <h1 class="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1> <div id="loadingState" class="text-gray-500">Loading post...</div> <form id="postForm" class="bg-white rounded-lg shadow p-6 space-y-6 hidden"> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label> <input type="text" id="title" name="title" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700 mb-2">\nContent (Markdown)\n<span class="text-xs text-gray-500 ml-2">Supports markdown, code blocks, and more</span> </label> <textarea id="content" name="content" rows="20"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label> <div id="categoriesCheckboxes" class="space-y-2"> <div class="text-gray-500">Loading categories...</div> </div> </div> <div class="flex items-center gap-6"> <div class="flex items-center"> <input type="checkbox" id="published" name="published" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> <label for="published" class="ml-2 text-sm font-bold text-gray-700 uppercase tracking-widest">Published</label> </div> <div class="flex items-center"> <input type="checkbox" id="isAdminPick" name="isAdminPick" class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"> <label for="isAdminPick" class="ml-2 text-sm font-bold text-amber-700 uppercase tracking-widest">★ Admin Pick</label> </div> </div> <div class="flex gap-4"> <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">\nUpdate Post\n</button> <a href="/admin/posts" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">\nCancel\n</a> </div> </form> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"> <script>(function(){', `
    (async function(){
      const getToken = () => {
        try { const t = localStorage.getItem('token'); if (t) return t; } catch(e) {}
        const m = document.cookie.match(/(?:^|; )token=([^;]+)/);
        if (m) return decodeURIComponent(m[1]);
        return null;
      };

      const token = getToken();
      if (!token) return;

      // Wait for SimpleMDE to load
      function waitForSimpleMDE() {
        return new Promise((resolve) => {
          if (typeof SimpleMDE !== 'undefined') {
            resolve();
          } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
          }
        });
      }

      await waitForSimpleMDE();

      let simplemde;
      let categories = [];
      let postCategories = [];

      try {
        // Load post
        const postRes = await fetch(\`\${API_BASE}/admin/posts\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        const posts = await postRes.json();
        const post = posts.find(p => p.id === parseInt(id));

        if (!post) {
          document.getElementById('loadingState').textContent = 'Post not found';
          return;
        }

        // Load categories
        const catsRes = await fetch(\`\${API_BASE}/admin/categories\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        categories = await catsRes.json();

        // Load post categories
        const postCatsRes = await fetch(\`\${API_BASE}/admin/posts/\${id}/categories\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        postCategories = await postCatsRes.json();

        // Populate form
        document.getElementById('title').value = post.title;
        document.getElementById('content').value = post.content;
        document.getElementById('published').checked = post.published;
        document.getElementById('isAdminPick').checked = post.isAdminPick;

        // Initialize SimpleMDE after setting content
        simplemde = new SimpleMDE({
          element: document.getElementById("content"),
          spellChecker: false,
          initialValue: post.content,
          toolbar: [
            "bold", "italic", "heading", "|",
            "quote", "unordered-list", "ordered-list", "|",
            "link", "image", "|",
            "code", "table", "|",
            "preview", "side-by-side", "fullscreen", "|",
            "guide"
          ],
          renderingConfig: {
            codeSyntaxHighlighting: true,
          }
        });

        // Render categories
        const container = document.getElementById('categoriesCheckboxes');
        if (categories.length === 0) {
          container.innerHTML = '<div class="text-gray-500">No categories available</div>';
        } else {
          const postCatIds = postCategories.map(pc => pc.id);
          container.innerHTML = categories.map(cat => \`
            <label class="flex items-center">
              <input 
                type="checkbox" 
                name="category" 
                value="\${cat.id}"
                \${postCatIds.includes(cat.id) ? 'checked' : ''}
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-gray-700">\${cat.name}</span>
            </label>
          \`).join('');
        }

        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('postForm').classList.remove('hidden');
      } catch (err) {
        console.error('Failed to load post', err);
        document.getElementById('loadingState').textContent = 'Failed to load post';
      }

      // Form submission
      document.getElementById('postForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
          .map(cb => parseInt(cb.value));

        try {
          // Update post
          await fetch(\`\${API_BASE}/admin/posts/\${id}\`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \`Bearer \${token}\`
            },
            body: JSON.stringify({
              title: formData.get('title'),
              content: simplemde.value(),
              published: formData.get('published') === 'on',
              isAdminPick: formData.get('isAdminPick') === 'on'
            })
          });

          // Update categories
          await fetch(\`\${API_BASE}/admin/posts/\${id}/categories\`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \`Bearer \${token}\`
            },
            body: JSON.stringify({ categoryIds: selectedCategories })
          });

          window.location.href = '/admin/posts';
        } catch (err) {
          alert('Failed to update post');
          console.error(err);
        }
      });
    })();
  })();</script> `], [" ", '<div class="max-w-5xl"> <h1 class="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1> <div id="loadingState" class="text-gray-500">Loading post...</div> <form id="postForm" class="bg-white rounded-lg shadow p-6 space-y-6 hidden"> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label> <input type="text" id="title" name="title" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700 mb-2">\nContent (Markdown)\n<span class="text-xs text-gray-500 ml-2">Supports markdown, code blocks, and more</span> </label> <textarea id="content" name="content" rows="20"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label> <div id="categoriesCheckboxes" class="space-y-2"> <div class="text-gray-500">Loading categories...</div> </div> </div> <div class="flex items-center gap-6"> <div class="flex items-center"> <input type="checkbox" id="published" name="published" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> <label for="published" class="ml-2 text-sm font-bold text-gray-700 uppercase tracking-widest">Published</label> </div> <div class="flex items-center"> <input type="checkbox" id="isAdminPick" name="isAdminPick" class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"> <label for="isAdminPick" class="ml-2 text-sm font-bold text-amber-700 uppercase tracking-widest">★ Admin Pick</label> </div> </div> <div class="flex gap-4"> <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">\nUpdate Post\n</button> <a href="/admin/posts" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">\nCancel\n</a> </div> </form> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"> <script>(function(){', `
    (async function(){
      const getToken = () => {
        try { const t = localStorage.getItem('token'); if (t) return t; } catch(e) {}
        const m = document.cookie.match(/(?:^|; )token=([^;]+)/);
        if (m) return decodeURIComponent(m[1]);
        return null;
      };

      const token = getToken();
      if (!token) return;

      // Wait for SimpleMDE to load
      function waitForSimpleMDE() {
        return new Promise((resolve) => {
          if (typeof SimpleMDE !== 'undefined') {
            resolve();
          } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
          }
        });
      }

      await waitForSimpleMDE();

      let simplemde;
      let categories = [];
      let postCategories = [];

      try {
        // Load post
        const postRes = await fetch(\\\`\\\${API_BASE}/admin/posts\\\`, {
          headers: { Authorization: \\\`Bearer \\\${token}\\\` }
        });
        const posts = await postRes.json();
        const post = posts.find(p => p.id === parseInt(id));

        if (!post) {
          document.getElementById('loadingState').textContent = 'Post not found';
          return;
        }

        // Load categories
        const catsRes = await fetch(\\\`\\\${API_BASE}/admin/categories\\\`, {
          headers: { Authorization: \\\`Bearer \\\${token}\\\` }
        });
        categories = await catsRes.json();

        // Load post categories
        const postCatsRes = await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${id}/categories\\\`, {
          headers: { Authorization: \\\`Bearer \\\${token}\\\` }
        });
        postCategories = await postCatsRes.json();

        // Populate form
        document.getElementById('title').value = post.title;
        document.getElementById('content').value = post.content;
        document.getElementById('published').checked = post.published;
        document.getElementById('isAdminPick').checked = post.isAdminPick;

        // Initialize SimpleMDE after setting content
        simplemde = new SimpleMDE({
          element: document.getElementById("content"),
          spellChecker: false,
          initialValue: post.content,
          toolbar: [
            "bold", "italic", "heading", "|",
            "quote", "unordered-list", "ordered-list", "|",
            "link", "image", "|",
            "code", "table", "|",
            "preview", "side-by-side", "fullscreen", "|",
            "guide"
          ],
          renderingConfig: {
            codeSyntaxHighlighting: true,
          }
        });

        // Render categories
        const container = document.getElementById('categoriesCheckboxes');
        if (categories.length === 0) {
          container.innerHTML = '<div class="text-gray-500">No categories available</div>';
        } else {
          const postCatIds = postCategories.map(pc => pc.id);
          container.innerHTML = categories.map(cat => \\\`
            <label class="flex items-center">
              <input 
                type="checkbox" 
                name="category" 
                value="\\\${cat.id}"
                \\\${postCatIds.includes(cat.id) ? 'checked' : ''}
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-gray-700">\\\${cat.name}</span>
            </label>
          \\\`).join('');
        }

        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('postForm').classList.remove('hidden');
      } catch (err) {
        console.error('Failed to load post', err);
        document.getElementById('loadingState').textContent = 'Failed to load post';
      }

      // Form submission
      document.getElementById('postForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
          .map(cb => parseInt(cb.value));

        try {
          // Update post
          await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${id}\\\`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \\\`Bearer \\\${token}\\\`
            },
            body: JSON.stringify({
              title: formData.get('title'),
              content: simplemde.value(),
              published: formData.get('published') === 'on',
              isAdminPick: formData.get('isAdminPick') === 'on'
            })
          });

          // Update categories
          await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${id}/categories\\\`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \\\`Bearer \\\${token}\\\`
            },
            body: JSON.stringify({ categoryIds: selectedCategories })
          });

          window.location.href = '/admin/posts';
        } catch (err) {
          alert('Failed to update post');
          console.error(err);
        }
      });
    })();
  })();</script> `])), maybeRenderHead(), defineScriptVars({ API_BASE, id })) })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/[id].astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/[id].astro";
const $$url = "/admin/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
