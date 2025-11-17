export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Platforms & Cloud',
    items: [
      'Sample CRM Platform',
      'Customer Engagement Cloud',
      'Knowledge Base Management',
      'Workflow Automation',
      'API Integrations',
      'Admin Console'
    ]
  },
  {
    title: 'Integrations',
    items: [
      'REST / SOAP',
      'Event-driven messaging',
      'Streaming updates',
      'Webhooks',
      'OAuth flows',
      'Custom connectors'
    ]
  },
  {
    title: 'AI & Data',
    items: [
      'LLM prompt flows',
      'Recommendation engines',
      'Data modeling',
      'Analytics dashboards'
    ]
  },
  {
    title: 'Development',
    items: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'HTML & CSS',
      'SQL',
      'Unit tests',
      'Design systems'
    ]
  },
  {
    title: 'DevOps & Tooling',
    items: [
      'Git / GitHub',
      'CI pipelines',
      'Docker',
      'Linux',
      'Infrastructure scripts'
    ]
  },
  {
    title: 'Professional',
    items: [
      'Stakeholder workshops',
      'Roadmapping',
      'Agile facilitation',
      'Bilingual communication'
    ]
  }
];

export const certifications: string[] = [
  'Cloud Foundations Associate',
  'Automation Specialist I',
  'Solutions Architect Practitioner',
  'Data & AI Essentials',
  'Integration Blueprint Badge',
  'Digital Experience Consultant'
];
