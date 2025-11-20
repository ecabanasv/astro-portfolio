export type Stat = {
  label: string;
  value: string;
  hint: string;
};

export const stats: Stat[] = [
  {
    label: 'Pilot readiness',
    value: '2–4 weeks',
    hint: 'Typical time to prep a themed demo org and walkthrough assets.'
  },
  {
    label: 'Automation coverage',
    value: '60–80%',
    hint: 'Intake, routing, knowledge surfacing, and agent UI protos.'
  },
  {
    label: 'AI copilots',
    value: '3 tracks',
    hint: 'Triage, summarize, and draft flows ready to plug into your stack.'
  },
  {
    label: 'Stakeholders served',
    value: 'CX · Ops · IT',
    hint: 'Reusable templates for cross‑team reviews and sign-off.'
  }
];
