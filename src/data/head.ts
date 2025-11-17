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

export const siteMetadata: SiteMetadata = {
  title: 'Demo Portfolio - Salesforce Solutions Specialist',
  description: 'Sample portfolio showcasing Omni-Channel, Agentforce (AI), integrations, and Apex/LWC demos.',
  url: 'https://demo-portfolio.example',
  image: '/og-image.jpg',
  icon: '/favicon.ico',
  fonts: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
  ],
  jsonLdPerson: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Demo Portfolio',
    jobTitle: 'Salesforce Solutions Specialist',
    url: 'https://demo-portfolio.example',
    image: 'https://demo-portfolio.example/og-image.jpg',
    sameAs: [
      'https://www.linkedin.com/in/demo-portfolio',
      'https://github.com/demo-portfolio'
    ],
    knowsAbout: [
      'Salesforce Service Cloud',
      'Omni-Channel',
      'Agentforce',
      'Data Cloud',
      'Integrations',
      'Apex',
      'LWC'
    ]
  }
};
