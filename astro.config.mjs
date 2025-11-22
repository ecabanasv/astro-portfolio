// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repoParts = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const githubOwner = repoParts[0];
const githubRepo = repoParts[1];

const isDev = process.env.NODE_ENV === 'development' || import.meta.env.DEV;
const defaultSite = isDev
  ? 'http://localhost:4321'
  : (githubOwner && githubRepo
    ? `https://${githubOwner}.github.io/${githubRepo}/`
    : 'https://demo-portfolio.example');
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
