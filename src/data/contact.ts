export type ContactLink = {
  id: 'email' | 'linkedin' | 'github' | 'download';
  label: string;
  href: string;
  ariaLabel: string;
  variant: 'outline' | 'primary';
  external?: boolean;
  download?: boolean;
};

export type ContactSection = {
  heading: string;
  description: string;
  links: ContactLink[];
};

export const contactSection: ContactSection = {
  heading: 'Contact',
  description: 'Feel free to reach out to discuss opportunities or questions.',
  links: [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:hello@demo-portfolio.example',
      ariaLabel: 'Email Demo Portfolio Team',
      variant: 'outline'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/demo-portfolio',
      ariaLabel: 'Open LinkedIn profile',
      variant: 'outline',
      external: true
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/demo-portfolio',
      ariaLabel: 'View GitHub repos',
      variant: 'outline',
      external: true
    },
    {
      id: 'download',
      label: 'Download CV',
      href: '/cv.pdf',
      ariaLabel: 'Download CV',
      variant: 'primary',
      download: true
    }
  ]
};
