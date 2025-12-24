import { f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_BNdV-RCA.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "http://localhost:3000";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Posts", "data-astro-cid-jktp4foz": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div data-astro-cid-jktp4foz> <div class="flex items-center justify-between mb-8" data-astro-cid-jktp4foz> <h1 class="text-3xl font-bold text-gray-900" data-astro-cid-jktp4foz>Posts</h1> <a href="/admin/posts/new" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" data-astro-cid-jktp4foz>\nNew Post\n</a> </div> <div class="bg-white rounded-lg shadow" data-astro-cid-jktp4foz> <div class="p-4 border-b border-gray-200" data-astro-cid-jktp4foz> <div class="flex gap-2" data-astro-cid-jktp4foz> <button class="filter-btn active" data-filter="all" data-astro-cid-jktp4foz>All</button> <button class="filter-btn" data-filter="published" data-astro-cid-jktp4foz>Published</button> <button class="filter-btn" data-filter="draft" data-astro-cid-jktp4foz>Drafts</button> </div> </div> <div id="postsTable" class="divide-y divide-gray-200" data-astro-cid-jktp4foz> <div class="p-6 text-gray-500" data-astro-cid-jktp4foz>Loading...</div> </div> </div> </div> <script>(function(){', `
    (async function(){
      const getToken = () => {
        try { const t = localStorage.getItem('token'); if (t) return t; } catch(e) {}
        const m = document.cookie.match(/(?:^|; )token=([^;]+)/);
        if (m) return decodeURIComponent(m[1]);
        return null;
      };

      const token = getToken();
      if (!token) return;

      let allPosts = [];
      let currentFilter = 'all';

      async function loadPosts() {
        try {
          const res = await fetch(\`\${API_BASE}/admin/posts\`, {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          allPosts = await res.json();
          renderPosts();
        } catch (err) {
          console.error('Failed to load posts', err);
          document.getElementById('postsTable').innerHTML = '<div class="p-6 text-red-500">Failed to load posts</div>';
        }
      }

      function renderPosts() {
        const filtered = currentFilter === 'all' ? allPosts :
          currentFilter === 'published' ? allPosts.filter(p => p.published) :
          allPosts.filter(p => !p.published);

        const table = document.getElementById('postsTable');
        if (filtered.length === 0) {
          table.innerHTML = '<div class="p-6 text-gray-500">No posts found</div>';
          return;
        }

        table.innerHTML = filtered.map(post => \`
          <div class="p-6 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">\${post.title}</h3>
                <p class="text-sm text-gray-500 mt-1">
                  \${new Date(post.created_at).toLocaleDateString()}
                  \${post.published ? '<span class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded font-bold uppercase tracking-wider">Published</span>' : '<span class="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded font-bold uppercase tracking-wider">Draft</span>'}
                  \${post.isAdminPick ? '<span class="ml-2 px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded font-bold uppercase tracking-wider">★ Admin Pick</span>' : ''}
                </p>
              </div>
              <div class="flex items-center gap-4">
                <button class="toggle-pick-btn px-3 py-1 text-xs font-bold uppercase tracking-widest border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors \${post.isAdminPick ? 'text-amber-700 bg-amber-50' : 'text-gray-400 border-gray-200 hover:border-amber-200 hover:text-amber-600'}" data-id="\${post.id}" data-is-pick="\${post.isAdminPick}">
                   \${post.isAdminPick ? 'Unpick' : 'Pick'}
                </button>
                <div class="flex gap-2 border-l border-gray-100 pl-4 ml-2">
                    <a href="/admin/posts/preview/\${post.id}" target="_blank" class="px-3 py-1 text-sm font-bold text-purple-600 hover:text-purple-800 uppercase tracking-widest">Preview</a>
                    <a href="/admin/posts/\${post.id}" class="px-3 py-1 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest">Edit</a>
                    <button class="delete-btn px-3 py-1 text-sm font-bold text-red-600 hover:text-red-800 uppercase tracking-widest" data-id="\${post.id}">Delete</button>
                </div>
              </div>
            </div>
          </div>
        \`).join('');

        // Attach delete handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            const id = e.target.closest('button').dataset.id;
            if (!confirm('Are you sure you want to delete this post?')) return;
            
            try {
              await fetch(\`\${API_BASE}/admin/posts/\${id}\`, {
                method: 'DELETE',
                headers: { Authorization: \`Bearer \${token}\` }
              });
              await loadPosts();
            } catch (err) {
              alert('Failed to delete post');
            }
          });
        });

        // Attach toggle pick handlers
        document.querySelectorAll('.toggle-pick-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const button = e.target.closest('button');
                const id = button.dataset.id;
                const isPick = button.dataset.isPick === 'true';
                
                try {
                    const res = await fetch(\`\${API_BASE}/admin/posts/\${id}\`, {
                        method: 'PATCH',
                        headers: { 
                            'Content-Type': 'application/json',
                            Authorization: \`Bearer \${token}\` 
                        },
                        body: JSON.stringify({ isAdminPick: !isPick })
                    });
                    if (!res.ok) throw new Error('Update failed');
                    await loadPosts();
                } catch (err) {
                    console.error('Failed to toggle pick:', err);
                    alert('Failed to update pick status');
                }
            });
        });
      }

      // Filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          currentFilter = e.target.dataset.filter;
          renderPosts();
        });
      });

      await loadPosts();
    })();
  })();</script>  `], [" ", '<div data-astro-cid-jktp4foz> <div class="flex items-center justify-between mb-8" data-astro-cid-jktp4foz> <h1 class="text-3xl font-bold text-gray-900" data-astro-cid-jktp4foz>Posts</h1> <a href="/admin/posts/new" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" data-astro-cid-jktp4foz>\nNew Post\n</a> </div> <div class="bg-white rounded-lg shadow" data-astro-cid-jktp4foz> <div class="p-4 border-b border-gray-200" data-astro-cid-jktp4foz> <div class="flex gap-2" data-astro-cid-jktp4foz> <button class="filter-btn active" data-filter="all" data-astro-cid-jktp4foz>All</button> <button class="filter-btn" data-filter="published" data-astro-cid-jktp4foz>Published</button> <button class="filter-btn" data-filter="draft" data-astro-cid-jktp4foz>Drafts</button> </div> </div> <div id="postsTable" class="divide-y divide-gray-200" data-astro-cid-jktp4foz> <div class="p-6 text-gray-500" data-astro-cid-jktp4foz>Loading...</div> </div> </div> </div> <script>(function(){', `
    (async function(){
      const getToken = () => {
        try { const t = localStorage.getItem('token'); if (t) return t; } catch(e) {}
        const m = document.cookie.match(/(?:^|; )token=([^;]+)/);
        if (m) return decodeURIComponent(m[1]);
        return null;
      };

      const token = getToken();
      if (!token) return;

      let allPosts = [];
      let currentFilter = 'all';

      async function loadPosts() {
        try {
          const res = await fetch(\\\`\\\${API_BASE}/admin/posts\\\`, {
            headers: { Authorization: \\\`Bearer \\\${token}\\\` }
          });
          allPosts = await res.json();
          renderPosts();
        } catch (err) {
          console.error('Failed to load posts', err);
          document.getElementById('postsTable').innerHTML = '<div class="p-6 text-red-500">Failed to load posts</div>';
        }
      }

      function renderPosts() {
        const filtered = currentFilter === 'all' ? allPosts :
          currentFilter === 'published' ? allPosts.filter(p => p.published) :
          allPosts.filter(p => !p.published);

        const table = document.getElementById('postsTable');
        if (filtered.length === 0) {
          table.innerHTML = '<div class="p-6 text-gray-500">No posts found</div>';
          return;
        }

        table.innerHTML = filtered.map(post => \\\`
          <div class="p-6 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">\\\${post.title}</h3>
                <p class="text-sm text-gray-500 mt-1">
                  \\\${new Date(post.created_at).toLocaleDateString()}
                  \\\${post.published ? '<span class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded font-bold uppercase tracking-wider">Published</span>' : '<span class="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded font-bold uppercase tracking-wider">Draft</span>'}
                  \\\${post.isAdminPick ? '<span class="ml-2 px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded font-bold uppercase tracking-wider">★ Admin Pick</span>' : ''}
                </p>
              </div>
              <div class="flex items-center gap-4">
                <button class="toggle-pick-btn px-3 py-1 text-xs font-bold uppercase tracking-widest border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors \\\${post.isAdminPick ? 'text-amber-700 bg-amber-50' : 'text-gray-400 border-gray-200 hover:border-amber-200 hover:text-amber-600'}" data-id="\\\${post.id}" data-is-pick="\\\${post.isAdminPick}">
                   \\\${post.isAdminPick ? 'Unpick' : 'Pick'}
                </button>
                <div class="flex gap-2 border-l border-gray-100 pl-4 ml-2">
                    <a href="/admin/posts/preview/\\\${post.id}" target="_blank" class="px-3 py-1 text-sm font-bold text-purple-600 hover:text-purple-800 uppercase tracking-widest">Preview</a>
                    <a href="/admin/posts/\\\${post.id}" class="px-3 py-1 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest">Edit</a>
                    <button class="delete-btn px-3 py-1 text-sm font-bold text-red-600 hover:text-red-800 uppercase tracking-widest" data-id="\\\${post.id}">Delete</button>
                </div>
              </div>
            </div>
          </div>
        \\\`).join('');

        // Attach delete handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            const id = e.target.closest('button').dataset.id;
            if (!confirm('Are you sure you want to delete this post?')) return;
            
            try {
              await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${id}\\\`, {
                method: 'DELETE',
                headers: { Authorization: \\\`Bearer \\\${token}\\\` }
              });
              await loadPosts();
            } catch (err) {
              alert('Failed to delete post');
            }
          });
        });

        // Attach toggle pick handlers
        document.querySelectorAll('.toggle-pick-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const button = e.target.closest('button');
                const id = button.dataset.id;
                const isPick = button.dataset.isPick === 'true';
                
                try {
                    const res = await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${id}\\\`, {
                        method: 'PATCH',
                        headers: { 
                            'Content-Type': 'application/json',
                            Authorization: \\\`Bearer \\\${token}\\\` 
                        },
                        body: JSON.stringify({ isAdminPick: !isPick })
                    });
                    if (!res.ok) throw new Error('Update failed');
                    await loadPosts();
                } catch (err) {
                    console.error('Failed to toggle pick:', err);
                    alert('Failed to update pick status');
                }
            });
        });
      }

      // Filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          currentFilter = e.target.dataset.filter;
          renderPosts();
        });
      });

      await loadPosts();
    })();
  })();</script>  `])), maybeRenderHead(), defineScriptVars({ API_BASE })) })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/index.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/index.astro";
const $$url = "/admin/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
