// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repoParts = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const githubOwner = repoParts[0];
const githubRepo = repoParts[1];

// Only set absolute URL when deploying to GitHub Pages
const defaultSite = githubOwner && githubRepo
  ? `https://${githubOwner}.github.io/${githubRepo}/`
  : '';  // Empty string allows relative URLs for local development
const site = process.env.GITHUB_PAGES_URL ?? defaultSite;
const base = process.env.ASTRO_BASE ?? (githubRepo ? `/${githubRepo}/` : '/');

// https://astro.build/config
export default defineConfig({
  base,
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});
