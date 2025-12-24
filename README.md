# DevNewsletter 🚀

**DevNewsletter** is a premium, weekly newsletter platform designed for developers who ship. It features curated dev notes, practical tutorials, and industry insights, all wrapped in a stunning, high-performance web experience.

## ✨ Features

-   **High-Impact Hero**: A beautifully centered and animated hero section to welcome readers.
-   **Curated Content**:
    -   **Top Stories**: Automatically highlights the most-read posts this week.
    -   **Admin Picks**: Hand-curated content selected by editors.
    -   **Latest Stories**: Real-time updates on the newest developer notes.
-   **Modern UI/UX**:
    -   **Elite Dark Mode**: Seamless theme switching with persistent settings.
    -   **Glassmorphism**: Elegant, semi-transparent components for a premium feel.
    -   **Advanced Animations**: Subtle micro-interactions and intersection-based scroll animations.
-   **Powerful Search**: Instant search suggestions with keyboard shortcuts (⌘K).
-   **Admin Dashboard**: Fully functional CMS for managing posts, categories, and "Admin Pick" status.
-   **Theme-Aware Legal Pages**: Custom-designed Privacy and Terms pages.

## 🛠 Tech Stack

-   **Frontend**: Built with **Astro**, **Tailwind CSS**, and **Lucide Icons**.
-   **Backend**: Powered by **ElysiaJS** (for blazing fast API performance) and **Bun**.
-   **Database**: **PostgreSQL** with **Drizzle ORM**.
-   **Images**: Cloudinary for optimized image delivery.

## 🚀 Getting Started

### Prerequisites

-   [Bun](https://bun.sh/) installed.
-   PostgreSQL database instance.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/devnewsletter.git
    cd devnewsletter
    ```

2.  **Setup the Backend**:
    ```bash
    cd devnewsletter
    npm install
    # Copy .env.example to .env and fill in your DATABASE_URL and CLOUDINARY credentials
    bun run src/index.ts
    ```

3.  **Setup the Frontend**:
    ```bash
    cd newsletter
    pnpm install
    # Copy .env.example to .env and set VITE_API_BASE_URL
    pnpm dev
    ```

##  Genie Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build your production site to `./dist/` |
| `pnpm preview` | Preview your build locally |

---
Made with ❤️ by creators.

## Analytics & Security Notes

- To enable Google Analytics, set `PUBLIC_GA_ID` in `newsletter/.env` (see `.env.example`). The site includes a non-blocking loader that only runs when `PUBLIC_GA_ID` is present.
- To improve email deliverability, add an SPF TXT record to your domain DNS. See `SECURITY.md` for an example SPF entry.
- A favicon is included at `public/favicon.svg` and referenced from the layout.
