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
  whatThisProves: string[];
  tags: string[];
  focusAreas: string[];
  relatedProject?: string;
  liveUrl?: string;
  imagePlaceholder?: string;
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
    whatThisProves: ['Security-first delivery in regulated workflows','Practical access-control implementation across legacy constraints'],
    tags: ['Security','Authentication','Databases','Production Support'],
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
    whatThisProves: ['Internal tooling that reduces workflow friction','Full-stack delivery with cloud identity integration'],
    tags: ['React','Redux','Azure','Internal Tools','Workflow Automation'],
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
    whatThisProves: ['SaaS feature delivery in mature release pipelines','Ownership across frontend, backend, data, and support'],
    tags: ['React','TypeScript','Python','SaaS','SSO','Production Support'],
    focusAreas: ['React','Full stack','SaaS','Security/auth'],
    diagram: ['User','React TypeScript UI','Server-rendered views','Python services','PostgreSQL','Monitoring']
  },

  {
    slug: 'nwpg-digital-hub',
    title: 'NWPG Digital Hub',
    shortTitle: 'NWPG Hub',
    summary: 'WordPress-led client website delivery for NWPG with service content architecture and accessible marketing pages.',
    context: 'A client-facing business website that needed a clearer information architecture, easier content publishing, and a trustworthy professional presentation.',
    problem: 'The site needed maintainable page templates, structured service content, and an authoring workflow that non-technical users could manage in WordPress.',
    role: 'Owned implementation and delivery across WordPress setup, theme customisation, page structure, and launch support.',
    approach: 'Used practical content modelling and reusable page sections so the site could scale without custom engineering for every update.',
    techStack: ['WordPress','PHP','JavaScript','CSS','SEO','Content strategy'],
    keyDecisions: ['Build around reusable WordPress page patterns','Prioritise content maintainability for non-technical editors','Optimise key landing pages for search and conversions'],
    outcomes: ['Delivered a production WordPress client website','Improved service discoverability and page consistency','Enabled low-friction editorial updates after handover'],
    improvements: ['Add structured schema components per service page','Expand performance budgets for image-heavy content','Add deeper analytics event tracking for lead funnels'],
    whatThisProves: ['Can deliver maintainable WordPress client platforms','Balances technical delivery with content and business outcomes'],
    tags: ['WordPress','Client Website','CMS','SEO','Content Architecture','Responsive Design'],
    focusAreas: ['Full stack','Internal tools','Data'],
    liveUrl: 'https://www.nwpg.uk/',
    imagePlaceholder: 'Add NWPG case-study screenshot here',
    diagram: ['Visitor','Landing page','WordPress templates','Content modules','SEO metadata','Enquiry flow']
  },
  {
    slug: 'bicknell-digital-platform',
    title: 'Bicknell Digital Platform',
    shortTitle: 'Bicknell Digital',
    summary: 'Business website platform for Bicknell Digital on WordPress, focused on service packaging, content publishing, and conversion paths.',
    context: 'A commercial website representing digital and publishing services that required rapid iteration and owner-managed updates.',
    problem: 'The platform needed clear service taxonomy, reusable marketing sections, and reliable publishing workflows without developer bottlenecks.',
    role: 'Designed and implemented the platform structure, service-page flow, and WordPress editing model.',
    approach: 'Applied a service-led information architecture with reusable components and conversion-focused page structure.',
    techStack: ['WordPress','WooCommerce','PHP','JavaScript','CSS','Analytics'],
    keyDecisions: ['Use WordPress for editorial speed','Keep service sections modular and reusable','Design around quote/contact conversion journeys'],
    outcomes: ['Launched a production business website','Improved clarity of digital and publishing offerings','Enabled ongoing in-house content updates'],
    improvements: ['Add deeper CRM integration for lead capture','Expand structured internal linking strategy','Increase template-level Core Web Vitals tuning'],
    whatThisProves: ['Can build and operate commercial WordPress platforms','Strong delivery across UX, CMS architecture, and content ops'],
    tags: ['WordPress','Business Website','CMS','Service Design','Conversion Optimisation','Publishing Workflow'],
    focusAreas: ['Full stack','Data','Internal tools'],
    liveUrl: 'https://digital.bicknell.uk/',
    imagePlaceholder: 'Add Bicknell Digital homepage screenshot here',
    diagram: ['Visitor','Service page','WordPress content blocks','Lead form','Newsletter/CRM','Reporting']
  },
  {
    slug: 'petition-map',
    title: 'Petition Map',
    shortTitle: 'Petition Map',
    summary: 'Interactive geospatial web app visualising petition-related datasets with GeoJSON, map layers, and location-based exploration.',
    context: 'A public-facing map product designed to make geographic petition signals easier to explore than in raw tables or lists.',
    problem: 'Users needed an intuitive way to interpret regional petition patterns, requiring map interaction, data processing, and performant rendering.',
    role: 'Built the mapping experience and data pipeline, including GeoJSON handling, layer logic, and frontend interaction patterns.',
    approach: 'Modelled data for map-first exploration, then implemented layer controls, geographic boundaries, and queryable point/area views.',
    techStack: ['JavaScript','GeoJSON','Leaflet','Data processing','API integration','Responsive UI'],
    keyDecisions: ['Use GeoJSON as the interchange format','Optimise geometry and properties for browser rendering','Expose filters and tooltips for exploratory analysis'],
    outcomes: ['Delivered a working interactive petition map','Improved interpretability of geographically distributed data','Created a reusable baseline for future civic-data maps'],
    improvements: ['Introduce tile/vector caching for larger datasets','Add temporal filtering and playback','Add automated data validation before publish'],
    whatThisProves: ['Can ship geospatial products with production-ready UX','Strong data-to-visualisation workflow design'],
    tags: ['Geospatial','GeoJSON','Leaflet','Data Visualisation','Interactive Map','Civic Tech'],
    focusAreas: ['Data','Full stack','Internal tools'],
    liveUrl: 'https://petition-map.bicknell.uk/',
    imagePlaceholder: 'Add Petition Map screenshot here',
    diagram: ['User','Map UI','Layer controls','GeoJSON dataset','Boundary rendering','Insights']
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
    whatThisProves: ['Platform engineering across app + infra boundaries','Secure commercial product delivery in private-cloud contexts'],
    tags: ['Python','Flask','Electron','Azure','Terraform','Licensing'],
    focusAreas: ['Python/API','Cloud','Full stack','Data'],
    diagram: ['Desktop client','Licence check','Python Flask backend','Solver logic','Azure Container Apps','Database and storage']
  }
];
