import type { AstroGlobal } from 'astro';
import { siteMetadata, type JsonLd, type SiteMetadata } from '../data/head';

type SeoOverrides = Partial<Pick<SiteMetadata, 'title' | 'description' | 'image'>> & {
  jsonLdPerson?: JsonLd;
};

export type SeoProps = SiteMetadata & {
  canonicalUrl: string;
};

const toAbsoluteUrl = (value: string): string => {
  try {
    return new URL(value, siteMetadata.url).toString();
  } catch {
    return value;
  }
};

export const buildSeoProps = (
  Astro: Readonly<AstroGlobal>,
  overrides: SeoOverrides = {}
): SeoProps => {
  const pathname = Astro.url?.pathname ?? '/';
  const canonicalUrl = new URL(pathname, siteMetadata.url).toString();
  const resolvedImage = toAbsoluteUrl(overrides.image ?? siteMetadata.image);

  return {
    ...siteMetadata,
    ...overrides,
    title: overrides.title ?? siteMetadata.title,
    description: overrides.description ?? siteMetadata.description,
    url: canonicalUrl,
    image: resolvedImage,
    jsonLdPerson: {
      ...siteMetadata.jsonLdPerson,
      ...overrides.jsonLdPerson,
    },
    canonicalUrl,
  };
};
