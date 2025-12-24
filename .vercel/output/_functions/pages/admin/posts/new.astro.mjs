import { f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../../chunks/astro/server_DXpmQ0xB.mjs';
import { $ as $$AdminLayout } from '../../../chunks/AdminLayout_BNdV-RCA.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "http://localhost:3000";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "New Post" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-5xl"> <h1 class="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1> <form id="postForm" class="bg-white rounded-lg shadow p-6 space-y-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label> <input type="text" id="title" name="title" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700 mb-2">\nContent (Markdown)\n<span class="text-xs text-gray-500 ml-2">Supports markdown, code blocks, and images</span> </label> <textarea id="content" name="content" rows="20"></textarea> <input type="file" id="imageUpload" accept="image/*" class="hidden"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label> <div id="categoriesCheckboxes" class="space-y-2"> <div class="text-gray-500">Loading categories...</div> </div> </div> <div class="flex items-center gap-6"> <div class="flex items-center"> <input type="checkbox" id="published" name="published" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> <label for="published" class="ml-2 text-sm font-bold text-gray-700 uppercase tracking-widest leading-none">Publish immediately</label> </div> <div class="flex items-center"> <input type="checkbox" id="isAdminPick" name="isAdminPick" class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"> <label for="isAdminPick" class="ml-2 text-sm font-bold text-amber-700 uppercase tracking-widest leading-none">★ Admin Pick</label> </div> </div> <div class="flex gap-4"> <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">\nCreate Post\n</button> <a href="/admin/posts" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">\nCancel\n</a> </div> </form> <!-- Preview Modal --> <div id="previewModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"> <div class="p-6 border-b border-gray-200 flex items-center justify-between"> <h2 id="previewTitle" class="text-2xl font-bold text-gray-900"></h2> <button id="closePreview" class="text-gray-500 hover:text-gray-700"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="p-8 overflow-auto flex-1"> <article id="previewContent" class="prose prose-lg max-w-none"></article> </div> </div> </div> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"> <script>(function(){', `
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

      // Image upload function
      async function uploadImage(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = async (e) => {
            try {
              const res = await fetch(\`\${API_BASE}/admin/upload\`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: \`Bearer \${token}\`
                },
                body: JSON.stringify({ image: e.target.result })
              });
              const data = await res.json();
              if (data.url) {
                resolve(data.url);
              } else {
                reject(new Error('Upload failed'));
              }
            } catch (err) {
              reject(err);
            }
          };
          reader.readAsDataURL(file);
        });
      }

      // Initialize SimpleMDE with custom image upload
      const simplemde = new SimpleMDE({
        element: document.getElementById("content"),
        spellChecker: false,
        autosave: {
          enabled: true,
          uniqueId: "new-post",
          delay: 1000,
        },
        toolbar: [
          "bold", "italic", "heading", "|",
          "quote", "unordered-list", "ordered-list", "|",
          "link", {
            name: "image",
            action: function(editor) {
              document.getElementById('imageUpload').click();
            },
            className: "fa fa-picture-o",
            title: "Insert Image (Upload to Cloudinary)",
          }, "|",
          "code", "table", "|",
          "preview", "side-by-side", "fullscreen", "|",
          "guide"
        ],
        placeholder: "Write your post content here using Markdown...\\n\\n# Example Heading\\n\\n**Bold text** and *italic text*\\n\\n\`\`\`javascript\\n// Code blocks are supported\\nconst example = 'hello';\\n\`\`\`\\n\\nClick the image button to upload images!",
        renderingConfig: {
          codeSyntaxHighlighting: true,
        }
      });

      // Handle image upload
      document.getElementById('imageUpload').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const cm = simplemde.codemirror;
        const startPos = cm.getCursor();
        
        // Insert uploading placeholder
        cm.replaceSelection('![Uploading...]()');
        const endPos = cm.getCursor();

        try {
          const url = await uploadImage(file);
          const text = file.name.replace(/\\.[^/.]+$/, "");
          
          // Replace the uploading placeholder with actual image
          cm.replaceRange(\`![\${text}](\${url})\`, startPos, endPos);
        } catch (err) {
          alert('Failed to upload image: ' + (err.message || 'Unknown error'));
          // Remove the uploading placeholder on error
          cm.replaceRange('', startPos, endPos);
        }

        // Clear file input
        e.target.value = '';
      });

      let categories = [];

      // Load categories
      try {
        const res = await fetch(\`\${API_BASE}/admin/categories\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        categories = await res.json();

        const container = document.getElementById('categoriesCheckboxes');
        if (categories.length === 0) {
          container.innerHTML = '<div class="text-gray-500">No categories available</div>';
        } else {
          container.innerHTML = categories.map(cat => \`
            <label class="flex items-center">
              <input 
                type="checkbox" 
                name="category" 
                value="\${cat.id}"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-gray-700">\${cat.name}</span>
            </label>
          \`).join('');
        }
      } catch (err) {
        console.error('Failed to load categories', err);
      }

      // Preview functionality
      function showPreview() {
        const modal = document.getElementById('previewModal');
        const content = simplemde.value();
        const title = document.getElementById('title').value || 'Untitled Post';
        
        // Load marked and hljs if not already loaded
        Promise.all([
          loadScript('https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js'),
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js')
        ]).then(() => {
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

          document.getElementById('previewTitle').textContent = title;
          document.getElementById('previewContent').innerHTML = marked.parse(content);
          modal.classList.remove('hidden');
        });
      }

      function loadScript(src) {
        return new Promise((resolve) => {
          if (document.querySelector(\`script[src="\${src}"]\`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // Close preview modal
      document.getElementById('closePreview').addEventListener('click', () => {
        document.getElementById('previewModal').classList.add('hidden');
      });

      // Add preview button to toolbar (using SimpleMDE's built-in preview)
      // The preview is already in the toolbar, we just enhance it

      // Form submission
      document.getElementById('postForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
          .map(cb => parseInt(cb.value));

        // Validate content
        const content = simplemde.value().trim();
        if (!content) {
          alert('Please enter some content for your post');
          return;
        }

        try {
          // Create post
          const postRes = await fetch(\`\${API_BASE}/admin/posts\`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \`Bearer \${token}\`
            },
            body: JSON.stringify({
              title: formData.get('title'),
              content: content,
              published: formData.get('published') === 'on',
              isAdminPick: formData.get('isAdminPick') === 'on'
            })
          });

          const newPost = await postRes.json();

          // Assign categories
          if (selectedCategories.length > 0) {
            await fetch(\`\${API_BASE}/admin/posts/\${newPost.id}/categories\`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: \`Bearer \${token}\`
              },
              body: JSON.stringify({ categoryIds: selectedCategories })
            });
          }

          // Clear autosave
          simplemde.clearAutosavedValue();
          window.location.href = '/admin/posts';
        } catch (err) {
          alert('Failed to create post');
          console.error(err);
        }
      });
    })();
  })();</script> `], [" ", '<div class="max-w-5xl"> <h1 class="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1> <form id="postForm" class="bg-white rounded-lg shadow p-6 space-y-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label> <input type="text" id="title" name="title" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"> </div> <div> <label for="content" class="block text-sm font-medium text-gray-700 mb-2">\nContent (Markdown)\n<span class="text-xs text-gray-500 ml-2">Supports markdown, code blocks, and images</span> </label> <textarea id="content" name="content" rows="20"></textarea> <input type="file" id="imageUpload" accept="image/*" class="hidden"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label> <div id="categoriesCheckboxes" class="space-y-2"> <div class="text-gray-500">Loading categories...</div> </div> </div> <div class="flex items-center gap-6"> <div class="flex items-center"> <input type="checkbox" id="published" name="published" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> <label for="published" class="ml-2 text-sm font-bold text-gray-700 uppercase tracking-widest leading-none">Publish immediately</label> </div> <div class="flex items-center"> <input type="checkbox" id="isAdminPick" name="isAdminPick" class="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"> <label for="isAdminPick" class="ml-2 text-sm font-bold text-amber-700 uppercase tracking-widest leading-none">★ Admin Pick</label> </div> </div> <div class="flex gap-4"> <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">\nCreate Post\n</button> <a href="/admin/posts" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">\nCancel\n</a> </div> </form> <!-- Preview Modal --> <div id="previewModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"> <div class="p-6 border-b border-gray-200 flex items-center justify-between"> <h2 id="previewTitle" class="text-2xl font-bold text-gray-900"></h2> <button id="closePreview" class="text-gray-500 hover:text-gray-700"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="p-8 overflow-auto flex-1"> <article id="previewContent" class="prose prose-lg max-w-none"></article> </div> </div> </div> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"> <script>(function(){', `
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

      // Image upload function
      async function uploadImage(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = async (e) => {
            try {
              const res = await fetch(\\\`\\\${API_BASE}/admin/upload\\\`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: \\\`Bearer \\\${token}\\\`
                },
                body: JSON.stringify({ image: e.target.result })
              });
              const data = await res.json();
              if (data.url) {
                resolve(data.url);
              } else {
                reject(new Error('Upload failed'));
              }
            } catch (err) {
              reject(err);
            }
          };
          reader.readAsDataURL(file);
        });
      }

      // Initialize SimpleMDE with custom image upload
      const simplemde = new SimpleMDE({
        element: document.getElementById("content"),
        spellChecker: false,
        autosave: {
          enabled: true,
          uniqueId: "new-post",
          delay: 1000,
        },
        toolbar: [
          "bold", "italic", "heading", "|",
          "quote", "unordered-list", "ordered-list", "|",
          "link", {
            name: "image",
            action: function(editor) {
              document.getElementById('imageUpload').click();
            },
            className: "fa fa-picture-o",
            title: "Insert Image (Upload to Cloudinary)",
          }, "|",
          "code", "table", "|",
          "preview", "side-by-side", "fullscreen", "|",
          "guide"
        ],
        placeholder: "Write your post content here using Markdown...\\\\n\\\\n# Example Heading\\\\n\\\\n**Bold text** and *italic text*\\\\n\\\\n\\\`\\\`\\\`javascript\\\\n// Code blocks are supported\\\\nconst example = 'hello';\\\\n\\\`\\\`\\\`\\\\n\\\\nClick the image button to upload images!",
        renderingConfig: {
          codeSyntaxHighlighting: true,
        }
      });

      // Handle image upload
      document.getElementById('imageUpload').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const cm = simplemde.codemirror;
        const startPos = cm.getCursor();
        
        // Insert uploading placeholder
        cm.replaceSelection('![Uploading...]()');
        const endPos = cm.getCursor();

        try {
          const url = await uploadImage(file);
          const text = file.name.replace(/\\\\.[^/.]+$/, "");
          
          // Replace the uploading placeholder with actual image
          cm.replaceRange(\\\`![\\\${text}](\\\${url})\\\`, startPos, endPos);
        } catch (err) {
          alert('Failed to upload image: ' + (err.message || 'Unknown error'));
          // Remove the uploading placeholder on error
          cm.replaceRange('', startPos, endPos);
        }

        // Clear file input
        e.target.value = '';
      });

      let categories = [];

      // Load categories
      try {
        const res = await fetch(\\\`\\\${API_BASE}/admin/categories\\\`, {
          headers: { Authorization: \\\`Bearer \\\${token}\\\` }
        });
        categories = await res.json();

        const container = document.getElementById('categoriesCheckboxes');
        if (categories.length === 0) {
          container.innerHTML = '<div class="text-gray-500">No categories available</div>';
        } else {
          container.innerHTML = categories.map(cat => \\\`
            <label class="flex items-center">
              <input 
                type="checkbox" 
                name="category" 
                value="\\\${cat.id}"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span class="ml-2 text-sm text-gray-700">\\\${cat.name}</span>
            </label>
          \\\`).join('');
        }
      } catch (err) {
        console.error('Failed to load categories', err);
      }

      // Preview functionality
      function showPreview() {
        const modal = document.getElementById('previewModal');
        const content = simplemde.value();
        const title = document.getElementById('title').value || 'Untitled Post';
        
        // Load marked and hljs if not already loaded
        Promise.all([
          loadScript('https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js'),
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js')
        ]).then(() => {
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

          document.getElementById('previewTitle').textContent = title;
          document.getElementById('previewContent').innerHTML = marked.parse(content);
          modal.classList.remove('hidden');
        });
      }

      function loadScript(src) {
        return new Promise((resolve) => {
          if (document.querySelector(\\\`script[src="\\\${src}"]\\\`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // Close preview modal
      document.getElementById('closePreview').addEventListener('click', () => {
        document.getElementById('previewModal').classList.add('hidden');
      });

      // Add preview button to toolbar (using SimpleMDE's built-in preview)
      // The preview is already in the toolbar, we just enhance it

      // Form submission
      document.getElementById('postForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
          .map(cb => parseInt(cb.value));

        // Validate content
        const content = simplemde.value().trim();
        if (!content) {
          alert('Please enter some content for your post');
          return;
        }

        try {
          // Create post
          const postRes = await fetch(\\\`\\\${API_BASE}/admin/posts\\\`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: \\\`Bearer \\\${token}\\\`
            },
            body: JSON.stringify({
              title: formData.get('title'),
              content: content,
              published: formData.get('published') === 'on',
              isAdminPick: formData.get('isAdminPick') === 'on'
            })
          });

          const newPost = await postRes.json();

          // Assign categories
          if (selectedCategories.length > 0) {
            await fetch(\\\`\\\${API_BASE}/admin/posts/\\\${newPost.id}/categories\\\`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: \\\`Bearer \\\${token}\\\`
              },
              body: JSON.stringify({ categoryIds: selectedCategories })
            });
          }

          // Clear autosave
          simplemde.clearAutosavedValue();
          window.location.href = '/admin/posts';
        } catch (err) {
          alert('Failed to create post');
          console.error(err);
        }
      });
    })();
  })();</script> `])), maybeRenderHead(), defineScriptVars({ API_BASE })) })}`;
}, "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/new.astro", void 0);
const $$file = "/home/dave/Documents/devnewsletter/newsletter/src/pages/admin/posts/new.astro";
const $$url = "/admin/posts/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
