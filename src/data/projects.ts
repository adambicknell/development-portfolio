export type ProjectStatus = 'Planned' | 'In development' | 'Live' | 'Maintained' | 'Archived';
export type DemoProject = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  features: string[];
  techStack: string[];
  decisions: string[];
  improvements: string[];
  tags: string[];
  focusAreas: string[];
  repoUrl?: string;
  liveUrl?: string;
  relatedCaseStudy?: string;
  diagram: string[];
};

export const projects: DemoProject[] = [
  {
    slug: 'client-document-portal-demo',
    title: 'Client Document Portal Demo',
    status: 'Planned',
    summary: 'A full stack demo for secure document workflows, role based access, client dashboards, admin uploads, search, audit logs, and production-style error states.',
    problem: 'A business needs to share documents with clients in a controlled way. Admin users need to manage clients, users, documents, and activity. Client users need a simple secure place to view their assigned documents.',
    features: ['Authentication','Role based permissions','Document upload','Client dashboard','Admin dashboard','Search and filtering','Audit log','Error states'],
    techStack: ['React','TypeScript','API layer','PostgreSQL','Authentication','File uploads','Testing'],
    decisions: ['Keep permissions explicit','Use seed data','Design for support','Keep the demo realistic but focused'],
    improvements: ['Virus scanning for uploads','Email notifications','Document expiry rules','Stronger observability'],
    tags: ['Full Stack','Authentication','Documents','Database','Testing'],
    focusAreas: ['Full stack','Security/auth','Data','React'],
    relatedCaseStudy: 'secure-client-document-portal',
    diagram: ['User','React UI','Protected routes','API layer','Database','File storage']
  },
  {
    slug: 'internal-support-triage-dashboard',
    title: 'Internal Support Triage Dashboard',
    status: 'Planned',
    summary: 'A workflow dashboard demo for issue intake, support triage, priority handling, status changes, comments, admin review, and dashboard metrics.',
    problem: 'Internal teams need a structured way to capture issues, categorise work, prioritise requests, assign ownership, and track status without relying on scattered messages.',
    features: ['Issue intake','Status workflow','Priority and category','Admin dashboard','Comments','Search and filters','Dashboard metrics','Optional AI suggestions'],
    techStack: ['React','TypeScript','API layer','Database','Role based access','Dashboard UI'],
    decisions: ['Keep AI suggestions human approved','Make workflow states explicit','Track actions for supportability'],
    improvements: ['Notification rules','Team assignment analytics','SLA reporting','More granular permissions'],
    tags: ['Internal Tools','Workflow','Dashboard','AI Assisted','Authentication'],
    focusAreas: ['Internal tools','Full stack','React','Security/auth'],
    diagram: ['User','Issue intake','Triage rules','Admin dashboard','Status workflow','Metrics']
  },
  {
    slug: 'developer-portfolio-site',
    title: 'Developer Portfolio Site',
    status: 'Live',
    summary: 'A public Next.js portfolio built as a small frontend product using TypeScript, Redux Toolkit, persisted preferences, structured content, filtering, search, compare mode, command palette navigation, accessibility, SEO, and schema.',
    problem: 'The portfolio needs to present private commercial experience clearly while also proving current frontend quality through inspectable public code.',
    features: ['Next.js routing','Redux Toolkit state','Persisted preferences','Portfolio focus selector','Case study filters','Command palette','Search','Compare mode','SEO and schema'],
    techStack: ['Next.js','React','TypeScript','Redux Toolkit','Structured content','Testing'],
    decisions: ['Do not use a database for static content','Use Redux for real UI state','Make the portfolio itself a small product'],
    improvements: ['Generated Open Graph images','Expanded test coverage','More polished screenshot assets'],
    tags: ['Frontend','Next.js','Redux','SEO','Accessibility'],
    focusAreas: ['React','Full stack','SaaS'],
    diagram: ['Visitor','Next.js app','Redux preferences','Structured content','SEO metadata','GitHub repo']
  }
];
