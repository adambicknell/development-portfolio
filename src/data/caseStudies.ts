export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  approach: string;
  techStack: string[];
  keyDecisions: string[];
  outcomes: string[];
  improvements: string[];
  tags: string[];
  focusAreas: string[];
  relatedProject?: string;
  diagram: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'secure-client-document-portal',
    title: 'Secure Client Document Portal',
    shortTitle: 'Document Portal',
    summary: 'Secure document access for sensitive client workflows.',
    context: 'A business critical environment where document access, user identity, permissions, and data handling all mattered.',
    problem: 'Users needed controlled access to sensitive documents without relying on manual workarounds or exposing private information.',
    role: 'Worked across authentication, secure access, database support, platform security, and production changes.',
    approach: 'Treated the work as a secure workflow problem, with clear access rules, supportable behaviour, and production constraints in mind.',
    techStack: ['Authentication','SOAP','Databases','Access control','Security remediation'],
    keyDecisions: ['Keep access rules explicit','Work with the existing platform','Treat support as part of the product'],
    outcomes: ['Improved controlled access to sensitive documents','Strengthened authentication and access handling','Reduced risky manual workarounds'],
    improvements: ['Deeper audit visibility','Clearer admin tooling','Structured role based access management'],
    tags: ['Security','Auth','Databases','Production support'],
    focusAreas: ['Security/auth','Internal tools','Data'],
    relatedProject: 'client-document-portal-demo',
    diagram: ['User','Authentication','Access checks','Backend logic','Database lookup','Document access']
  },
  {
    slug: 'internal-operations-portal',
    title: 'Internal Operations Portal',
    shortTitle: 'Operations Portal',
    summary: 'Internal tools for managing workflows, data, permissions, reporting, and operational tasks.',
    context: 'Internal business systems where staff needed reliable tools for operational workflows and data-heavy tasks.',
    problem: 'Teams needed better tools to manage business processes, reduce manual effort, and access operational data safely.',
    role: 'Built React and Redux interfaces, integrated backend and cloud services, supported Azure AD authentication, and helped deliver production features through CI/CD.',
    approach: 'Focused on practical workflows, secure access, useful dashboards, and delivery through existing QA, UAT, and deployment processes.',
    techStack: ['React','Redux','Azure','Azure AD','Azure Functions','CI/CD'],
    keyDecisions: ['Keep the UI focused on staff workflows','Use cloud services where they reduced operational friction','Make release and support part of the delivery plan'],
    outcomes: ['Improved internal workflow support','Delivered secure cloud based features','Supported operational visibility and automation'],
    improvements: ['More structured analytics','Reusable component documentation','Expanded admin self-service'],
    tags: ['React','Redux','Azure','Internal tools','Workflow automation'],
    focusAreas: ['React','Full stack','Cloud','Internal tools'],
    diagram: ['Staff user','Azure AD','React and Redux UI','API services','Business data','Monitoring']
  },
  {
    slug: 'multi-region-saas-platform-features',
    title: 'Multi-region SaaS Platform Features',
    shortTitle: 'SaaS Platform',
    summary: 'Feature delivery inside a mature SaaS platform with React, TypeScript, Python, SSO, QA, UAT, and production support.',
    context: 'A mature SaaS platform with regional concerns, release processes, monitoring, and real production users.',
    problem: 'The platform needed feature delivery across frontend, backend, identity, database changes, QA, release processes, and regional considerations.',
    role: 'Built and supported React TypeScript features, Python services, server-rendered views, SSO changes, database migrations, and production support workflows.',
    approach: 'Worked within established product, QA, UAT, release, and monitoring processes while delivering changes across the stack.',
    techStack: ['React','TypeScript','Python','PostgreSQL','SQLAlchemy','SmartID','Sentry'],
    keyDecisions: ['Coordinate identity changes across areas','Respect regional release constraints','Keep migrations and QA visible'],
    outcomes: ['Delivered SmartID SSO support','Shipped React TypeScript features','Supported production release processes'],
    improvements: ['More reusable release notes','Extra automated checks around identity flows','More explicit documentation around regional behaviour'],
    tags: ['React','TypeScript','Python','SaaS','SSO','Production support'],
    focusAreas: ['React','Full stack','SaaS','Security/auth'],
    diagram: ['User','React TypeScript UI','Server-rendered views','Python services','PostgreSQL','Monitoring']
  },
  {
    slug: 'solver-and-modelling-platform',
    title: 'Solver and Modelling Platform',
    shortTitle: 'Solver Platform',
    summary: 'A proprietary platform involving Python backend services, Electron client delivery, Azure infrastructure, Terraform, licensing, and private cloud deployment.',
    context: 'A technical platform where backend modelling logic, desktop delivery, licensing, cloud infrastructure, and customer deployment constraints all connected.',
    problem: 'Users needed controlled access to complex modelling capability while protecting intellectual property and supporting customer-managed deployments.',
    role: 'Worked across Python backend services, Electron client delivery, installer flows, Azure infrastructure, Terraform, licensing, testing, and deployment discussions.',
    approach: 'Connected backend services, client delivery, infrastructure, licensing, and platform constraints into a controlled delivery model.',
    techStack: ['Python','Flask','Electron','Node.js','Azure','Terraform','MySQL'],
    keyDecisions: ['Protect IP through licensing','Support customer managed deployment','Make infrastructure repeatable with Terraform'],
    outcomes: ['Delivered Azure infrastructure','Supported controlled private cloud execution','Improved backend quality checks'],
    improvements: ['More self-service deployment diagnostics','Expanded architecture documentation','Richer platform observability'],
    tags: ['Python','Flask','Electron','Azure','Terraform','Licensing'],
    focusAreas: ['Python/API','Cloud','Full stack','Data'],
    diagram: ['Desktop client','Licence check','Python Flask backend','Solver logic','Azure Container Apps','Database and storage']
  }
];
