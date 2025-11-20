export type TimelineItem = {
  period: string;
  title: string;
  description: string;
  highlights: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: 'Now',
    title: 'Solution prototyping',
    description: 'Crafting guided demos for service teams: omni-channel intake, AI assist, and insight dashboards.',
    highlights: ['Salesforce + AI plays', 'Stakeholder-ready decks', 'Pilot runbooks']
  },
  {
    period: 'Previous',
    title: 'Automation & integrations',
    description: 'Built proof-of-value flows connecting CRMs, knowledge bases, and messaging channels.',
    highlights: ['Routing rules', 'Knowledge surfacing', 'Webhook + API bridges']
  },
  {
    period: 'Earlier',
    title: 'Product enablement',
    description: 'Partnered with go-to-market teams to package demos, data stories, and adoption workshops.',
    highlights: ['Launch playbooks', 'Hands-on labs', 'Health dashboards']
  }
];
