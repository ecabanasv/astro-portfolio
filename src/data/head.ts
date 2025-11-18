import rawSiteMetadata from './site-metadata.json';

export type JsonLd = Record<string, unknown>;

export type SiteMetadata = {
  title: string;
  description: string;
  url: string;
  image: string;
  icon: string;
  fonts: Array<{
    rel: string;
    href: string;
    crossorigin?: string;
  }>;
  jsonLdPerson: JsonLd;
};

export const siteMetadata = rawSiteMetadata as SiteMetadata;
