export type SkillGroup = { slug: string; title: string; summary: string; skills: string[]; related: string[]; focusAreas: string[] };
export const skillGroups: SkillGroup[] = [
  {
    slug: 'frontend-engineering',
    title: 'Frontend engineering',
    summary: 'Interfaces for business workflows: dashboards, portals, forms, admin tools, document views, data-heavy screens, and mixed legacy systems.',
    skills: ['React','TypeScript','JavaScript','Vue','Redux','Electron','Vanilla JavaScript','jQuery','Server-rendered views','Mako','Sass/CSS','Webpack','Vite','Jest','React Testing Library'],
    related: ['Internal Operations Portal','Multi-region SaaS Platform Features','Client Document Portal Demo'],
    focusAreas: ['React','Full stack','Internal tools','SaaS']
  },
  {
    slug: 'backend-and-apis',
    title: 'Backend and APIs',
    summary: 'Backend services, API integrations, business logic, model integration, serverless functions, and data workflows.',
    skills: ['Python','Flask','FastAPI','PHP','Laravel','Lumen','CakePHP','Node.js','REST APIs','Serverless functions','Model integration'],
    related: ['Solver and Modelling Platform','Multi-region SaaS Platform Features','Secure Client Document Portal'],
    focusAreas: ['Full stack','Python/API','Data']
  },
  {
    slug: 'cloud-and-delivery',
    title: 'Cloud and delivery',
    summary: 'Cloud deployments, infrastructure, CI/CD, release processes, monitoring, and production support.',
    skills: ['Azure','AWS','Docker','Terraform','Azure Container Apps','Azure Functions','Azure DevOps','GitLab','GitHub Actions','Buildkite','Monitoring','Secrets management'],
    related: ['Solver and Modelling Platform','Internal Operations Portal','Multi-region SaaS Platform Features'],
    focusAreas: ['Cloud','Full stack','SaaS']
  },
  {
    slug: 'data-and-databases',
    title: 'Data and databases',
    summary: 'Relational and document databases, migrations, reporting, search, performance tuning, and data-heavy workflows.',
    skills: ['PostgreSQL','MySQL','MariaDB','MS SQL Server','MongoDB','Cosmos DB','DynamoDB','SQLAlchemy','Migrations','ElasticSearch','Reporting','Performance tuning'],
    related: ['Multi-region SaaS Platform Features','Secure Client Document Portal','Client Document Portal Demo'],
    focusAreas: ['Data','Full stack','Python/API']
  },
  {
    slug: 'authentication-and-security',
    title: 'Authentication and security',
    summary: 'Secure access, identity flows, SSO, permissions, sensitive document workflows, penetration test remediation, and platform hardening.',
    skills: ['SSO','OAuth2','SAML','Azure AD','SmartID','IAM','Role based access','Secure document access','Access controls','Secrets management','Pen-test remediation','Private cloud considerations'],
    related: ['Secure Client Document Portal','Multi-region SaaS Platform Features','Internal Operations Portal'],
    focusAreas: ['Security/auth','SaaS','Internal tools']
  },
  {
    slug: 'testing-quality-production',
    title: 'Testing, quality, and production',
    summary: 'Testing, static analysis, QA, UAT, monitoring, incidents, support, debugging, handover, and production improvement.',
    skills: ['Jest','React Testing Library','Vitest','Playwright','Pytest','black','isort','flake8','Code review','QA','UAT','Sentry','New Relic','Application Insights','Incident workflows'],
    related: ['Developer Portfolio Site','Client Document Portal Demo','Multi-region SaaS Platform Features'],
    focusAreas: ['Full stack','SaaS','Cloud']
  }
];
