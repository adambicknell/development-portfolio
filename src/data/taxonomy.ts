export const canonicalFocusAreas = [
  'React & Frontend',
  'Full Stack Delivery',
  'Backend & APIs',
  'Cloud & Infrastructure',
  'Security & Identity',
  'Data & Datastores',
  'SaaS & Platform',
  'Internal Tools & Workflows',
  'Quality, Testing & CI/CD',
  'Production Reliability',
  'Legacy Modernisation'
] as const;

export type CanonicalFocusArea = (typeof canonicalFocusAreas)[number];

export const focusAliases: Record<string, CanonicalFocusArea> = {
  react: 'React & Frontend', frontend: 'React & Frontend',
  'full stack': 'Full Stack Delivery', 'full stack delivery': 'Full Stack Delivery',
  'python/api': 'Backend & APIs', backend: 'Backend & APIs', rest: 'Backend & APIs',
  cloud: 'Cloud & Infrastructure', infra: 'Cloud & Infrastructure',
  'security/auth': 'Security & Identity', auth: 'Security & Identity', sso: 'Security & Identity', iam: 'Security & Identity',
  data: 'Data & Datastores', databases: 'Data & Datastores', search: 'Data & Datastores',
  saas: 'SaaS & Platform',
  'internal tools': 'Internal Tools & Workflows',
  qa: 'Quality, Testing & CI/CD', uat: 'Quality, Testing & CI/CD', testing: 'Quality, Testing & CI/CD',
  monitoring: 'Production Reliability', support: 'Production Reliability', incidents: 'Production Reliability',
  legacy: 'Legacy Modernisation'
};
