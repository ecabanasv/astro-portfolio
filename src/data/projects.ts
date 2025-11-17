export type Project = {
  title: string;
  description: string;
  stack: string;
  url?: string;
  ctaLabel?: string;
};

export const projects: Project[] = [
  {
    title: 'Project Aurora',
    description: 'Sample engagement automating support intake with bots and simple routing rules.',
    stack: 'Astro, TypeScript, serverless APIs',
    url: '#',
    ctaLabel: 'View mockup'
  },
  {
    title: 'Project Beacon',
    description: 'Placeholder dashboard aligning KPIs, alerts, and product usage signals.',
    stack: 'Data pipeline, charts, cloud warehouse',
    url: '#',
    ctaLabel: 'View mockup'
  },
  {
    title: 'Project Circuit',
    description: 'Demo AI assistant that classifies requests and drafts suggested replies.',
    stack: 'LLM API, workflow engine, UI kit',
    url: '#',
    ctaLabel: 'View mockup'
  }
];
