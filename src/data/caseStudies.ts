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
  sections?: { heading: string; content: string }[];
  diagram: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "secure-client-document-portal",
    title: "Secure Client Document Portal",
    shortTitle: "Document Portal",
    summary:
      "An anonymised SaaS platform for medical negligence document pagination and AI-assisted case triage.",
    context:
      "I led engineering delivery on an anonymised secure legal-tech SaaS platform designed for medical negligence document pagination and AI-assisted early case triage. The product started as a Vue application in AWS with Firebase support, then shifted mid-delivery into a tightly governed Azure estate as part of an organisation-wide platform migration.",
    problem:
      "Clinical review teams were manually reading large medical PDF bundles to decide whether claims were viable. That process was slow, inconsistent, and expensive. The product needed to automate pagination and extraction while maintaining strict confidentiality, role-based access, and auditable processing in a regulated legal workflow.",
    role: "I was the primary engineer delivering across front-end architecture, cloud integration, secure workflow implementation, and AI orchestration. I rebuilt the UI in React and Redux, integrated enterprise authentication, implemented document search, and collaborated with data scientists to operationalise model logic in Azure-based processing functions.",
    approach:
      "I treated delivery as both a technical and governance challenge: re-platform during active migration, redesign the frontend and identity path, and keep shipping value despite constrained tenant controls, tool churn, and changing stakeholder pressure. The delivered system used ADFS-authenticated React workflows, Azure Logic App orchestration, Python Azure Functions for AI/NLP processing, Cosmos DB for application state, and Elasticsearch for fast evidence retrieval.",
    techStack: [
      "React",
      "Redux",
      "Azure Logic Apps",
      "Azure Functions (Python)",
      "Azure Cosmos DB",
      "ADFS",
      "Elasticsearch",
      "PDF processing (Foxit SDK)",
      "AWS (initial phase)",
      "Firebase (initial phase)",
    ],
    keyDecisions: [
      "Rebuild from Vue to React/Redux for predictable front-end state, maintainability, and complex document review interactions",
      "Use ADFS-based enterprise authentication to align with internal security and access governance requirements",
      "Use Logic Apps + Azure Functions to orchestrate auditable, serverless processing stages from ingestion through enrichment",
      "Index extracted signals in Elasticsearch to support full-text, metadata, chronology, and term-based review across high-page-volume bundles",
    ],
    outcomes: [
      "Delivered a meaningful MVP with end-to-end AI-assisted pagination and triage workflow",
      "Enabled faster nurse-led assessment through extraction of dates, terms, chronology signals, and clinical entities",
      "Demonstrated production integration of data-science-authored NLP/ML logic inside regulated legal operations workflows",
      "Established a credible architecture baseline for future productisation despite infrastructure and governance constraints",
    ],
    improvements: [
      "Add model versioning, confidence scoring, drift monitoring, and human-in-the-loop workflows for low-confidence extractions",
      "Introduce chronology auto-build, contradiction/omission detection, specialty extraction packs, and configurable triage rules",
      "Improve observability with stage-level telemetry and event-driven pipeline controls across ingestion and enrichment",
      "Strengthen delivery governance with formal post-signoff change control, clearer acceptance criteria, and stronger UAT ownership",
    ],
    whatThisProves: [
      "Can deliver AI-enabled secure platforms in highly constrained enterprise environments",
      "Can bridge data science outputs into production-grade legal workflow tooling under real delivery pressure",
    ],
    tags: [
      "SaaS",
      "Legal Tech",
      "React",
      "JavaScript",
      "Node.js",
      "Redux",
      "AI/ML Integration",
      "Security",
      "Azure",
      "Elasticsearch",
      "Search",
    ],
    focusAreas: ["Security/auth", "Full stack", "Cloud", "Data"],
    relatedProject: "client-document-portal-demo",
    sections: [
      {
        heading: "Initial architecture (phase 1)",
        content:
          "The first product version was a Vue-based application in AWS, supported by Firebase services. This validated product direction but did not complete full ML workflow integration before strategic platform changes redirected delivery.",
      },
      {
        heading: "Strategic platform shift",
        content:
          "During delivery, core infrastructure moved to Azure under strict external governance. Environment controls, access constraints, and release friction were high, so the solution was re-architected to fit locked-down enterprise tenancy while still progressing MVP outcomes.",
      },
      {
        heading: "Delivery challenges beyond code",
        content:
          "Major delivery friction included rigid environment models not designed for modern SaaS iteration, migration across Jira/Bitbucket and GitHub/Azure DevOps, repeated post-signoff scope expansion, stakeholder pressure mismatch, and leadership shifts that redirected effort toward V2 planning before V1 closure.",
      },
      {
        heading: "Key learnings",
        content:
          "This work reinforced that AI products in regulated domains need equal strength in model capability, operational architecture, and delivery governance. Strong engineering alone is not enough when ownership and decision pathways are unstable.",
      },
    ],
    diagram: [
      "Clinical/legal user",
      "React + Redux frontend",
      "ADFS authentication",
      "Secure upload + case workspace",
      "Logic Apps orchestration",
      "Azure Functions (Python NLP/ML)",
      "Cosmos DB + processing state",
      "Elasticsearch index + evidence search",
      "Nurse-led triage decision support",
    ],
  },
  {
    slug: "internal-systems-reporting-platform",
    title: "Internal Systems and Reporting Platform",
    shortTitle: "Systems Platform",
    summary:
      "An anonymised internal operations platform focused on case workflows, reporting, KPI visibility, and secure staff access in a legal environment.",
    context:
      "This case study reflects systems development work delivered before my senior role, where internal teams depended on browser-based tools for operational processing, management information, and day-to-day support across multiple departments.",
    problem:
      "Operational teams were relying on fragmented workflows, inconsistent reporting extracts, and manual handoffs between systems. The business needed reliable internal tooling, clearer KPI visibility, safer access patterns, and faster reporting outputs for decision-making.",
    role: "I worked as a Systems Developer delivering PHP and jQuery-based internal applications, database-backed workflow improvements, reporting interfaces, and production support. I owned changes end-to-end from schema updates and SQL tuning through to UI behaviour, release coordination, and post-release issue handling.",
    approach:
      "I focused on stabilising core workflows first, then reducing operational friction through targeted automation, better data access patterns, and practical reporting UX. Delivery balanced feature work with support, incident response, and controlled rollout processes using existing team governance.",
    techStack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "AJAX",
      "HTML",
      "CSS",
      "MySQL",
      "MS SQL Server",
      "PostgreSQL",
      "SQL reporting",
      "KPI dashboards",
      "BI reporting",
      "MI reporting",
      "SVN",
      "Git",
      "SOAP integrations",
      "Production support",
    ],
    keyDecisions: [
      "Standardise internal tooling on maintainable PHP modules with jQuery-driven interactions to improve delivery speed and consistency",
      "Model reporting data for operational KPIs so teams could monitor throughput, exceptions, and backlog without manual spreadsheet collation",
      "Support mixed-database environments (MySQL, MS SQL Server, PostgreSQL) with explicit query ownership and performance tuning for critical reports",
      "Treat release and support as first-class work, using controlled deployments, clear change notes, and rapid incident follow-up",
    ],
    outcomes: [
      "Reduced manual effort in core internal workflows through targeted automation and workflow consolidation",
      "Improved reliability and turnaround time of operational and management reporting outputs",
      "Provided clearer KPI visibility for teams tracking case processing, workload distribution, and service performance",
      "Strengthened day-to-day platform support with faster diagnosis and resolution across application and database layers",
    ],
    improvements: [
      "Introduce scheduled report orchestration and alerting to reduce ad-hoc report pull dependency",
      "Expand reusable reporting component patterns for consistent UX across internal modules",
      "Add deeper audit trail visualisation for operational actions and access-sensitive events",
    ],
    whatThisProves: [
      "Can modernise and scale legacy-leaning internal systems without disrupting business-critical operations",
      "Strong ownership across PHP application delivery, SQL/reporting design, and production support in regulated environments",
    ],
    tags: [
      "PHP",
      "JavaScript",
      "jQuery",
      "MySQL",
      "MS SQL Server",
      "PostgreSQL",
      "SQL Reporting",
      "KPI Dashboards",
      "BI/MI Reporting",
      "SVN",
      "Internal Tools",
      "Workflow Automation",
      "Production Support",
    ],
    focusAreas: [
      "Internal Tools & Workflows",
      "Backend & APIs",
      "Data, Search & Datastores",
      "Operations, Infrastructure & Production Support",
    ],
    sections: [
      {
        heading: "Workflow stabilisation first",
        content:
          "I prioritised high-friction internal processes where staff were repeatedly switching tools, manually re-entering data, or waiting on report handoffs. Early iterations focused on dependable PHP-based workflow paths and fast jQuery interactions that reduced repetitive admin effort.",
      },
      {
        heading: "Reporting and KPI visibility",
        content:
          "I joined an established systems team and worked alongside other developers to deliver whatever reporting work was most needed at the time. That ranged from writing new BI/MI reports to modifying existing outputs so they included additional data, changed calculations, or updated operational views. I also built fully new visual report screens for week-end and month-end reporting, giving senior stakeholders clearer KPI snapshots without waiting on manual spreadsheet preparation.",
      },
      {
        heading: "Pragmatic legacy-aware delivery",
        content:
          "The platform estate combined legacy constraints with active business change. I used incremental delivery through SVN-managed releases, clear change communication, and practical rollback planning to keep risk low while still moving the internal tooling forward.",
      },
      {
        heading: "Intranet plugin for operational visibility",
        content:
          "I also created a WordPress plugin for the internal intranet. It was designed as a highly visual, branded entry point using company styling and logo assets, and could be updated dynamically as business information changed. The plugin gave staff immediate access to useful operational links and updates as soon as they landed on the intranet, improving visibility of key information across teams.",
      },
    ],
    diagram: [
      "Operations staff",
      "PHP + jQuery internal UI",
      "Workflow modules",
      "Reporting and KPI views",
      "MySQL / MS SQL Server / PostgreSQL",
      "SVN release flow + production support",
    ],
  },
  {
    slug: "multi-region-saas-platform-features",
    title: "Multi-region SaaS Platform Features",
    shortTitle: "SaaS Platform",
    summary:
      "Feature delivery across an anonymised multi-region SaaS platform spanning React, TypeScript, Python, SmartID SSO, PostgreSQL, release governance, and operational support.",
    context:
      "This case study reflects work on an anonymised long-running SaaS platform used across the US, Canada, UK, and Ireland. Delivery was fully remote, with engineering, product, and QA collaboration managed through Slack communication, daily standups, and project tracking that started in Trello before consolidating in Jira. The platform had real production load, region-specific release concerns, and a mixed architecture combining newer React screens with established Mako-rendered server-side views.",
    problem:
      "The product needed continuous feature delivery without breaking existing regional workflows or slowing release confidence. Work regularly touched identity, backend services, database changes, QA gates, UAT environments, and cross-region validation, all while balancing modernisation with legacy product constraints.",
    role: "I delivered full-stack features across React + TypeScript interfaces, Python services, Mako-rendered pages, SQLAlchemy-backed data changes, SmartID SSO integration, and production support workflows. I worked closely with QA and product to ensure changes were validated through mature release and regional UAT processes.",
    approach:
      "I approached delivery as practical platform stewardship: ship incremental value, preserve release safety, and keep system behaviour observable across regions. That meant coordinating schema and model changes in Buildkite pipelines, maintaining compatibility across legacy and modern UI layers, validating identity flows through QA/UAT, and using Sentry-led triage to support stable post-release operations. Team execution was coordinated through remote-first ceremonies and tooling, with daily standups, Slack-based collaboration, Jira planning, and a rotating on-call pattern supported through a dedicated Slack support channel for one week roughly every 5-6 weeks.",
    techStack: [
      "React",
      "React with TypeScript",
      "TypeScript",
      "JavaScript",
      "Python",
      "Mako",
      "Server-rendered pages",
      "PostgreSQL",
      "SQLAlchemy",
      "SmartID",
      "SSO",
      "Authentication",
      "Buildkite",
      "Sentry",
      "Slack",
      "Jira",
      "Trello",
      "GitHub",
      "Git",
      "Pull requests",
      "Code reviews",
      "Database migrations",
      "Schema changes",
      "UAT",
      "QA",
      "Incident triage",
      "On-call support",
      "Remote collaboration",
      "Production support",
      "Multi-region SaaS",
      "Release validation",
      "Legacy modernisation",
      "Feature ownership",
      "Full stack development",
    ],
    keyDecisions: [
      "Prioritise incremental modernisation by layering new React + TypeScript features alongside existing Mako pages, rather than forcing a risky full rewrite",
      "Treat identity delivery (SmartID SSO) as cross-cutting work, coordinating frontend, backend, and validation checkpoints to reduce authentication regression risk",
      "Run data-model and schema changes through Buildkite pipeline visibility so QA, UAT, and release stakeholders could validate impacts before deployment",
      "Use region-aware UAT and release validation as a hard quality gate to protect country-specific workflows and production confidence",
    ],
    outcomes: [
      "Released features safely across US, Canada, UK, and Ireland operating contexts",
      "Delivered SmartID SSO integration for a major US client while maintaining existing platform stability",
      "Shipped React + TypeScript feature improvements without disrupting legacy server-rendered areas",
      "Improved release confidence through disciplined QA/UAT validation, migration visibility, and production incident triage workflows",
    ],
    improvements: [
      "Expand automated identity regression coverage for SSO edge cases and session lifecycle behaviour",
      "Increase reusable release-readiness templates for feature, migration, and region-specific rollout checks",
      "Add clearer internal documentation around cross-region behavioural differences and validation expectations",
      "Introduce deeper telemetry around auth success/failure patterns to speed post-release diagnostics",
    ],
    whatThisProves: [
      "Can deliver reliable SaaS features inside a mature, high-usage platform with strict QA/UAT and release controls",
      "Comfortable owning change across frontend, backend, data, identity, and production support responsibilities",
    ],
    tags: [
      "React",
      "React with TypeScript",
      "TypeScript",
      "JavaScript",
      "Python",
      "Mako",
      "PostgreSQL",
      "SQLAlchemy",
      "SaaS",
      "Multi-region SaaS",
      "Legacy modernisation",
      "SmartID",
      "SSO",
      "Authentication",
      "Buildkite",
      "Sentry",
      "Slack",
      "Jira",
      "Trello",
      "Database migrations",
      "Schema changes",
      "QA",
      "UAT",
      "Release validation",
      "Incident triage",
      "On-call support",
      "Production Support",
      "Remote Collaboration",
      "Full Stack Development",
      "Feature Ownership",
      "Code Reviews",
    ],
    focusAreas: [
      "React & Frontend",
      "Backend & APIs",
      "SaaS & Platform",
      "Data, Search & Datastores",
      "Security & Identity",
      "DevOps, Testing & Delivery",
      "Operations, Infrastructure & Production Support",
      "Full Stack Delivery",
    ],
    sections: [
      {
        heading: "Multi-region delivery in a live SaaS product",
        content:
          "I worked on a production platform serving users across the US, Canada, UK, and Ireland. Delivery had to respect region-specific rollout expectations while keeping day-to-day product changes moving through established QA and release governance.",
      },
      {
        heading: "Balancing modern React with established server-rendered views",
        content:
          "The platform blended newer React + TypeScript front-end work with legacy Mako-rendered pages. I regularly delivered features across both layers, making pragmatic decisions that improved maintainability and UX without introducing high-risk rewrite behaviour.",
      },
      {
        heading: "Identity and data changes with release discipline",
        content:
          "A major stream was SmartID SSO delivery for a US client. This required coordinated changes across authentication paths, backend logic, and validation flows. Data model updates and schema migrations were managed through Buildkite pipeline controls so QA/UAT had clear visibility before release.",
      },
      {
        heading: "Operational quality and production support",
        content:
          "Beyond feature build-out, I supported release and post-release operations using Sentry for incident triage and production diagnostics. Team communication and issue handling were remote-first via Slack, including a dedicated support channel and an on-call rotation where I covered one week approximately every 5-6 weeks.",
      },
      {
        heading: "Remote collaboration and delivery rhythm",
        content:
          "The team operated fully remotely with daily standups and active async collaboration in Slack. Work tracking began in Trello and later moved into Jira, which improved planning clarity across engineering, QA, and product while keeping delivery visibility high throughout each release cycle.",
      },
      {
        heading: "Workflow tooling and delivery coordination",
        content:
          "Across delivery cycles we used both Trello and Jira extensively, with team workflows gradually moving from one to the other over time. My contribution was as an engineer working within both systems to track feature work, QA/UAT tasks, and release follow-ups. In parallel, authentication work was documented as an auth system stream to keep client-specific implementation details anonymous.",
      },
    ],
    diagram: [
      "Regional users (US / Canada / UK / Ireland)",
      "Buildkite migrations + release pipeline",
      "QA + UAT + regional release validation",
      "SmartID SSO authentication flow",
      "React + TypeScript feature UI",
      "Mako server-rendered product areas",
      "Python backend services",
      "PostgreSQL + SQLAlchemy data layer",
      "Sentry monitoring + incident triage",
    ],
  },

  {
    slug: "nwpg-digital-hub",
    title: "NWPG Digital Hub",
    shortTitle: "NWPG Hub",
    summary:
      "WordPress-led client website delivery for NWPG with service content architecture and accessible marketing pages.",
    context:
      "A client-facing business website that needed a clearer information architecture, easier content publishing, and a trustworthy professional presentation.",
    problem:
      "The site needed maintainable page templates, structured service content, and an authoring workflow that non-technical users could manage in WordPress.",
    role: "Owned implementation and delivery across WordPress setup, theme customisation, page structure, and launch support.",
    approach:
      "Used practical content modelling and reusable page sections so the site could scale without custom engineering for every update.",
    techStack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS",
      "SEO",
      "Content strategy",
    ],
    keyDecisions: [
      "Build around reusable WordPress page patterns",
      "Prioritise content maintainability for non-technical editors",
      "Optimise key landing pages for search and conversions",
    ],
    outcomes: [
      "Delivered a production WordPress client website",
      "Improved service discoverability and page consistency",
      "Enabled low-friction editorial updates after handover",
    ],
    improvements: [
      "Add structured schema components per service page",
      "Expand performance budgets for image-heavy content",
      "Add deeper analytics event tracking for lead funnels",
    ],
    whatThisProves: [
      "Can deliver maintainable WordPress client platforms",
      "Balances technical delivery with content and business outcomes",
    ],
    tags: [
      "WordPress",
      "Client Website",
      "CMS",
      "SEO",
      "Content Architecture",
      "Responsive Design",
    ],
    focusAreas: ["Full stack", "Internal tools", "Data"],
    liveUrl: "https://www.nwpg.uk/",
    imagePlaceholder: "Add NWPG case-study screenshot here",
    diagram: [
      "Visitor",
      "Landing page",
      "WordPress templates",
      "Content modules",
      "SEO metadata",
      "Enquiry flow",
    ],
  },
  {
    slug: "bicknell-digital-platform",
    title: "Bicknell Digital Platform",
    shortTitle: "Bicknell Digital",
    summary:
      "Business website platform for Bicknell Digital on WordPress, focused on service packaging, content publishing, and conversion paths.",
    context:
      "A commercial website representing digital and publishing services that required rapid iteration and owner-managed updates.",
    problem:
      "The platform needed clear service taxonomy, reusable marketing sections, and reliable publishing workflows without developer bottlenecks.",
    role: "Designed and implemented the platform structure, service-page flow, and WordPress editing model.",
    approach:
      "Applied a service-led information architecture with reusable components and conversion-focused page structure.",
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "CSS",
      "Analytics",
    ],
    keyDecisions: [
      "Use WordPress for editorial speed",
      "Keep service sections modular and reusable",
      "Design around quote/contact conversion journeys",
    ],
    outcomes: [
      "Launched a production business website",
      "Improved clarity of digital and publishing offerings",
      "Enabled ongoing in-house content updates",
    ],
    improvements: [
      "Add deeper CRM integration for lead capture",
      "Expand structured internal linking strategy",
      "Increase template-level Core Web Vitals tuning",
    ],
    whatThisProves: [
      "Can build and operate commercial WordPress platforms",
      "Strong delivery across UX, CMS architecture, and content ops",
    ],
    tags: [
      "WordPress",
      "Business Website",
      "CMS",
      "Service Design",
      "Conversion Optimisation",
      "Publishing Workflow",
    ],
    focusAreas: ["Full stack", "Data", "Internal tools"],
    liveUrl: "https://digital.bicknell.uk/",
    imagePlaceholder: "Add Bicknell Digital homepage screenshot here",
    diagram: [
      "Visitor",
      "Service page",
      "WordPress content blocks",
      "Lead form",
      "Newsletter/CRM",
      "Reporting",
    ],
  },
  {
    slug: "petition-map",
    title: "Petition Map",
    shortTitle: "Petition Map",
    summary:
      "Interactive geospatial web app visualising petition-related datasets with GeoJSON, map layers, and location-based exploration.",
    context:
      "A public-facing map product designed to make geographic petition signals easier to explore than in raw tables or lists.",
    problem:
      "Users needed an intuitive way to interpret regional petition patterns, requiring map interaction, data processing, and performant rendering.",
    role: "Built the mapping experience and data pipeline, including GeoJSON handling, layer logic, and frontend interaction patterns.",
    approach:
      "Modelled data for map-first exploration, then implemented layer controls, geographic boundaries, and queryable point/area views.",
    techStack: [
      "JavaScript",
      "GeoJSON",
      "Leaflet",
      "Data processing",
      "API integration",
      "Responsive UI",
    ],
    keyDecisions: [
      "Use GeoJSON as the interchange format",
      "Optimise geometry and properties for browser rendering",
      "Expose filters and tooltips for exploratory analysis",
    ],
    outcomes: [
      "Delivered a working interactive petition map",
      "Improved interpretability of geographically distributed data",
      "Created a reusable baseline for future civic-data maps",
    ],
    improvements: [
      "Introduce tile/vector caching for larger datasets",
      "Add temporal filtering and playback",
      "Add automated data validation before publish",
    ],
    whatThisProves: [
      "Can ship geospatial products with production-ready UX",
      "Strong data-to-visualisation workflow design",
    ],
    tags: [
      "Geospatial",
      "GeoJSON",
      "Leaflet",
      "Data Visualisation",
      "Interactive Map",
      "Civic Tech",
    ],
    focusAreas: ["Data", "Full stack", "Internal tools"],
    liveUrl: "https://petition-map.bicknell.uk/",
    imagePlaceholder: "Add Petition Map screenshot here",
    diagram: [
      "User",
      "Map UI",
      "Layer controls",
      "GeoJSON dataset",
      "Boundary rendering",
      "Insights",
    ],
  },
  {
    slug: "solver-and-modelling-platform",
    title: "Solver and Modelling Platform",
    shortTitle: "Solver Platform",
    summary:
      "A proprietary platform involving Python backend services, Electron client delivery, Azure infrastructure, Terraform, licensing, and private cloud deployment.",
    context:
      "A technical platform where backend modelling logic, desktop delivery, licensing, cloud infrastructure, and customer deployment constraints all connected.",
    problem:
      "Users needed controlled access to complex modelling capability while protecting intellectual property and supporting customer-managed deployments.",
    role: "Worked across Python backend services, Electron client delivery, installer flows, Azure infrastructure, Terraform, licensing, testing, and deployment discussions.",
    approach:
      "Connected backend services, client delivery, infrastructure, licensing, and platform constraints into a controlled delivery model.",
    techStack: [
      "Python",
      "Flask",
      "Electron",
      "Node.js",
      "Azure",
      "Terraform",
      "MySQL",
    ],
    keyDecisions: [
      "Protect IP through licensing",
      "Support customer managed deployment",
      "Make infrastructure repeatable with Terraform",
    ],
    outcomes: [
      "Delivered Azure infrastructure",
      "Supported controlled private cloud execution",
      "Improved backend quality checks",
    ],
    improvements: [
      "More self-service deployment diagnostics",
      "Expanded architecture documentation",
      "Richer platform observability",
    ],
    whatThisProves: [
      "Platform engineering across app + infra boundaries",
      "Secure commercial product delivery in private-cloud contexts",
    ],
    tags: ["Python", "Flask", "Electron", "Azure", "Terraform", "Licensing"],
    focusAreas: ["Python/API", "Cloud", "Full stack", "Data"],
    diagram: [
      "Desktop client",
      "Licence check",
      "Python Flask backend",
      "Solver logic",
      "Azure Container Apps",
      "Database and storage",
    ],
  },
];
