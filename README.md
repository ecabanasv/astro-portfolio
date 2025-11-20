# Astro Portfolio Template

Live demo: [link](https://ecabanasv.github.io/astro-portfolio/)

## Overview

This is a modern, fast, and responsive portfolio site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). I'm building it in public as a long-term learning playground—experimenting with layouts, content, and UI patterns while documenting what works. Every section is configurable via simple data files so anyone studying along can tinker freely, suggest improvements, or fork ideas without diving into structural code each time.

## Features

- Modern, responsive layout with sticky nav + scrollspy
- Sections: Hero, About (“What I’m doing”), Resume (experience + education/certs + skills grid), Portfolio, Blog/Insights, Contact (map + form + quick links)
- Data-driven content from `src/data/*.ts` (hero, projects, skills, timeline, contact, head)
- Accessible mobile-first navigation, focus styles, and smooth scrolling
- SEO-ready metadata (OG, Twitter, JSON-LD) and optimized 404 page
- Tailwind utility layer with brand tokens and reusable chips/cards/buttons

## Tech Stack

- [Astro](https://astro.build/) (Static Site Generator)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- TypeScript + modern CSS modules
- Node.js 20+

## Folder Structure

```
astro-portfolio/
|- public/             # Static assets (images, favicon, cv.pdf, 404 illustration, etc.)
|- src/
|   |- components/     # Navbar, Hero, AboutDetails, Resume, Projects (Portfolio), Insights (Blog), Contact, Footer, Head
|   |- data/           # Content: head.ts, hero.ts, projects.ts, skills.ts, timeline.ts, contact.ts
|   |- layouts/        # Main layout wrapper loading global styles & metadata
|   |- pages/          # Astro pages (index, 404)
|   |- styles/         # Global CSS (Tailwind base & custom utilities)
|- astro.config.mjs    # Astro configuration
|- tailwind.config.js  # Tailwind configuration
|- package.json        # Project metadata & scripts
\- tsconfig.json       # TypeScript configuration
```

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Start the development server**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:4321](http://localhost:4321)
3. **Build for production**
   ```sh
   npm run build
   ```
4. **Preview the production build**
   ```sh
   npm run preview
   ```

## Customization

- **Content:** Edit `src/data/*.ts` (hero, projects, skills, timeline, contact, head) to change copy, CTAs, and metadata.
- **Sections:** Adjust structure/copy in `src/components/` (AboutDetails, Resume, Projects, Insights, Contact, etc.).
- **Assets:** Replace `public/cv.pdf`, `public/avatar.png`, `public/og-image.jpg`, and `public/404-llama.svg` as needed.
- **Styling:** Tweak tokens/utilities in `src/styles/global.css` or extend `tailwind.config.js` for colors/spacing.
- **Navigation:** Update links in `src/components/Navbar.astro` to match your sections.

## Scripts

| Command           | Description                                 |
|-------------------|---------------------------------------------|
| `npm run dev`     | Start local dev server                      |
| `npm run build`   | Build for production                        |
| `npm run preview` | Preview production build                    |

## GitHub Pages deployment

- `astro.config.mjs` now derives `base`/`site` from `GITHUB_REPOSITORY` when the build runs inside GitHub Actions. Locally you can override those values with `ASTRO_BASE` (e.g. `ASTRO_BASE=/portfolio-astro/ npm run build`) and `GITHUB_PAGES_URL` if you need a different canonical URL.
- Push the branch you want to publish (usually `main`) and let the workflow at `.github/workflows/gh-pages.yml` install dependencies, run `npm run build`, and deploy `dist/` to the `gh-pages` branch automatically via `peaceiris/actions-gh-pages@v5`. The action uses the `GITHUB_TOKEN` secret supplied by the runner.
- After the first successful deploy, go to the repository’s Settings → Pages and choose `gh-pages` as the source (or set a custom domain there). If you want to serve from a custom domain, also set that value in `GITHUB_PAGES_URL` so metadata tags reference the right origin.

## Roadmap Ideas
- Light/dark mode
- Generate Open Graph images per page
- Add blog/testimonials using `src/content`
- Integrate analytics and Lighthouse CI workflow
- Convert assets to responsive `astro:assets`

## License

This project is open source and available under the [MIT License](LICENSE) unless otherwise specified. It's intentionally early-stage and meant to keep evolving, so any feedback, experiments, or PRs—no matter how small—are appreciated. If you spot a better approach or want to propose a tweak, open an issue or discussion so we can learn and improve together.
