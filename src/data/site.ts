export const site = {
  name: 'Adam Bicknell',
  role: 'Full Stack React Developer',
  url: 'https://adam.bicknell.uk',
  email: 'adam@bicknell.uk',
  location: 'Southport, UK',
  github: 'https://github.com/adambicknell',
  gitlab: 'https://gitlab.com/adamb-linelab',
  linkedin: 'https://www.linkedin.com/in/adamrbicknell',
  description: 'Full Stack React Developer working across React, TypeScript, Python, APIs, cloud systems, secure internal tools, SaaS platforms, and business systems.',
  headline: 'React | TypeScript | Python | APIs | Cloud | Business Systems'
};
export const focusOptions = ['React','Full stack','Python/API','Cloud','Internal tools','SaaS','Security/auth','Data'] as const;
export type FocusOption = typeof focusOptions[number];
export const navItems = [
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/demo-projects', label: 'Demo Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/now', label: 'Now' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' }
];
