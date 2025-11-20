export type Insight = {
  title: string;
  summary: string;
  tag: string;
  date: string;
  url?: string;
};

export const insights: Insight[] = [
  {
    title: 'Designing a service pilot that actually converts',
    summary: 'A simple blueprint for intake, routing, and KPI-readiness so a 4-week pilot lands funding.',
    tag: 'Playbook',
    date: '2024'
  },
  {
    title: 'AI copilots for agents: where to start',
    summary: 'Scope quick wins (summaries + suggested replies) before diving into deep workflow rewrites.',
    tag: 'AI',
    date: '2024'
  },
  {
    title: 'Data signals that improve case routing quality',
    summary: 'Using usage events, product tiers, and entitlements to keep SLAs predictable.',
    tag: 'Data',
    date: '2024'
  }
];
