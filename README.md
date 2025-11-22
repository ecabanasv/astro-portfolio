# Astro Portfolio

A modern, high-performance portfolio template built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript.

## Features

- ⚡ **Fast & Lightweight**: Built with Astro for optimal performance.
- 🎨 **Modern Design System**: Tailwind CSS v4 with semantic variables for easy theming.
- 🌗 **Dark Mode**: Fully supported with a toggle switch and system preference detection.
- ♿ **Accessible**: Semantic HTML, ARIA attributes, and keyboard navigation support.
- 📱 **Responsive**: Looks great on all devices, from mobile to desktop.
- 🔍 **SEO Optimized**: Open Graph tags, sitemap, and structured data (JSON-LD).
- 🐳 **Docker Ready**: Includes Dockerfile and Compose setup for consistent environments.
- 🧪 **Tested**: Unit testing setup with Vitest.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4 via `@tailwindcss/vite`)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Icons**: Inline SVGs (Heroicons style)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Testing**: [Vitest](https://vitest.dev) & [Testing Library](https://testing-library.com)

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm (v10 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/astro-portfolio.git
   cd astro-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Docker

You can run the project using Docker to ensure a consistent environment.

```bash
# Build and start the container
docker-compose up --build
```

The site will be available at `http://localhost:4321`.

## Testing

Run unit tests to verify components:

```bash
npm run test
```

## Project Structure

```
src/
├── components/   # UI components (Hero, Navbar, etc.)
│   └── ui/       # Reusable primitives (Button, Card, Badge, Section)
├── data/         # Content data files (TypeScript) - EDIT THESE
├── layouts/      # Page layouts (Layout.astro)
├── pages/        # Astro pages (routes)
├── styles/       # Global styles and Tailwind config (@theme)
└── tests/        # Unit tests
```

## Customization

### 1. Content
Edit the files in `src/data/` to update your portfolio content. This is the primary place for your personal information.
- `hero.ts`: Main headline and introduction.
- `projects.ts`: Your portfolio projects.
- `skills.ts`: Skills and certifications.
- `contact.ts`: Contact info and form settings.

### 2. Styling & Theme
The project uses **Tailwind CSS v4**. The theme configuration is located in `src/styles/global.css` under the `@theme` directive.
- Change the CSS variables in `:root` and `.dark` to update the color palette.
- The system uses semantic names like `--color-primary`, `--color-surface`, etc.

### 3. Icons
The project uses inline SVGs for best performance. You can replace them with your preferred icon set (e.g., `astro-icon` or another library) if desired.

## License

MIT
