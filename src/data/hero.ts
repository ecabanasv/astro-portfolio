export type HeroData = {
  heading: string;
  description: string;
  highlights: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const hero: HeroData = {
  heading: 'Salesforce Solutions Strategist',
  description:
    'I build proof-of-concept experiences that mimic enterprise Service Cloud lifecycles—routing, knowledge, AI copilots, and analytics—so teams can visualize how their future stack might operate.',
  highlights: [
    'Sample org with prepared personas',
    'Multi-cloud automation blueprints',
    'Hands-on AI assistant workflows'
  ],
  primaryCta: {
    label: 'Download Sample CV',
    href: 'cv.pdf'
  },
  secondaryCta: {
    label: 'Book a walkthrough',
    href: '#contact'
  },
  portrait: {
    src: 'avatar.png',
    alt: 'Anonymous professional portrait illustration',
    width: 160,
    height: 160
  }
};
