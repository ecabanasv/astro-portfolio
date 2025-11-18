import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import siteMetadata from '../src/data/site-metadata.json' with { type: 'json' };

const distDir = new URL('../dist/', import.meta.url);
const distPath = fileURLToPath(distDir);

const pages = [
  { pathname: '/', candidates: ['index.html'] },
  { pathname: '/404/', candidates: ['404.html', '404/index.html'] },
];

const findFile = candidates => {
  for (const candidate of candidates) {
    const filePath = join(distPath, candidate);
    if (existsSync(filePath)) {
      return filePath;
    }
  }
  return null;
};

const readCanonical = html => {
  const linkMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
  if (!linkMatch) {
    return null;
  }
  const hrefMatch = linkMatch[0].match(/href=["']([^"']+)["']/i);
  return hrefMatch ? hrefMatch[1] : null;
};

let hasFailure = false;

for (const page of pages) {
  const filePath = findFile(page.candidates);
  if (!filePath) {
    console.error(`Missing built file for ${page.pathname}. Run \`npm run build\` first.`);
    hasFailure = true;
    continue;
  }

  const html = readFileSync(filePath, 'utf-8');
  const canonicalHref = readCanonical(html);
  if (!canonicalHref) {
    console.error(`No canonical link tag found in ${filePath}.`);
    hasFailure = true;
    continue;
  }

  const expected = new URL(page.pathname, siteMetadata.url).toString();
  if (canonicalHref !== expected) {
    console.error(`Canonical mismatch for ${filePath}. Expected ${expected} but found ${canonicalHref}.`);
    hasFailure = true;
  } else {
    console.log(`✔ ${page.pathname} canonical tag OK -> ${canonicalHref}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
} else {
  console.log('All canonical tags verified.');
}
