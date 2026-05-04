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
  image?: string;
  sections?: { heading: string; content: string }[];
  diagram: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "secure-client-document-portal",
    title: "Secure Client Document Portal",
    shortTitle: "Document Portal",
    summary:
      "An anonymised legal-tech SaaS platform for medical document pagination and AI-assisted triage in secure, regulated case assessment workflows.",
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
    focusAreas: ["Security/auth", "Full stack", "Cloud", "Data", "Project Leadership & Delivery"],
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
      "Feature delivery across an anonymised multi-region SaaS platform spanning React, TypeScript, Python, SmartID SSO, PostgreSQL, and release operations.",
    context:
      "This case study reflects work on an anonymised long-running SaaS platform used across the US, Canada, UK, and Ireland. Delivery was fully remote, with engineering, product, and QA collaboration managed through Slack communication, daily standups, and project tracking that started in Trello before consolidating in Jira. The platform had real production load, region-specific release concerns, and a mixed architecture combining newer React screens with established Mako-rendered server-side views.",
    problem:
      "The product needed continuous feature delivery without breaking existing regional workflows or slowing release confidence. Work regularly touched identity, backend services, database changes, QA gates, UAT environments, and cross-region validation, all while balancing modernisation with legacy product constraints.",
    role: "I delivered full-stack features across React + TypeScript interfaces, Python services, Mako-rendered pages, SQLAlchemy-backed data changes, SmartID SSO integration, and production support workflows. I worked closely with QA and product to ensure changes were validated through mature release and regional UAT processes.",
    approach:
      "I approached delivery as practical platform stewardship: ship incremental value, preserve release safety, and keep system behaviour observable across regions. That meant coordinating schema and model changes in Buildkite pipelines, maintaining compatibility across legacy and modern UI layers, validating identity flows through QA/UAT, and using Sentry-led triage to support stable post-release operations. Team execution was coordinated through remote-first ceremonies and tooling, with daily standups, Slack-based collaboration, Jira planning, and a rotating on-call pattern supported through a dedicated Slack support channel for one week roughly every 5-6 weeks.",
    techStack: [
      "React",
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
        heading:
          "Balancing modern React with established server-rendered views",
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
      "End-to-end redesign and build of the NWPG marketing site, focused on local-service discoverability, trust signals, and a maintainable WordPress publishing workflow.",
    context:
      "NWPG needed a practical digital front door for a local property and handyman audience in Preston. The public site had to communicate service breadth clearly, reduce friction for calls/messages, and stay easy to update without developer support each time content changed.",
    problem:
      "The experience mixed multiple user intents (urgent repairs, planned home improvements, pricing checks, and credibility checks via reviews), but the original structure made those journeys harder than they needed to be. The project required clearer page hierarchy, faster path-to-contact, and stronger local SEO fundamentals.",
    role: "I led discovery-to-launch delivery: restructuring information architecture, implementing the WordPress build, shaping the service and pricing content model, and supporting go-live tuning for mobile usability and enquiry conversion.",
    approach:
      "I treated this as both a UX and operations task. The build used reusable page patterns for service sections, prominent contact CTAs, and consistent trust components (coverage area, assurances, reviews, FAQs) so future edits remained straightforward for non-technical editors.",
    sections: [
      {
        heading: "Highlights",
        content:
          "I prioritised three execution tracks in parallel: intent-led navigation for urgent and planned jobs, conversion consistency through repeated call/message prompts, and editor-safe templates so pricing/service updates could be published quickly without fragile one-off page edits.",
      },
    ],
    techStack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS",
      "SEO",
      "Content strategy",
      "On-page conversion design",
    ],
    keyDecisions: [
      "Designed navigation around high-intent routes: Services, Pricing, FAQ, Reviews, and Contact",
      "Prioritised phone-first and message-first CTAs for local trade enquiries",
      "Used reusable WordPress content patterns so service updates did not need code changes",
      "Standardised local-service copy and metadata to strengthen Preston-area search relevance",
      "Kept component complexity low to preserve long-term maintainability and handover simplicity",
    ],
    outcomes: [
      "Launched a stable production WordPress platform for NWPG",
      "Improved service discoverability through clearer structure and stronger navigation signposting",
      "Reduced contact friction by surfacing phone and contact pathways consistently across key pages",
      "Enabled reliable self-service content updates post-handover",
      "Created a better base for future campaigns, service expansion, and proof/testimonial growth",
    ],
    improvements: [
      "Add structured data (LocalBusiness + Service schema) across service and pricing pages",
      "Introduce event-level analytics for click-to-call, form-start, and form-submit conversion funnels",
      "Extend review ingestion and testimonial layouts to support richer social proof",
      "Apply tighter image/performance budgets as visual content volume scales",
      "Add A/B testing on hero messaging and CTA placement for higher lead conversion",
    ],
    whatThisProves: [
      "Can deliver practical local-business web platforms that balance trust, discoverability, and conversion",
      "Strong implementation across WordPress architecture, content operations, and launch hardening",
      "Able to translate real-world service workflows into clear, maintainable digital journeys",
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
    image: "/nwpg.jpg",
    diagram: [
      "Visitor",
      "High-intent service/pricing path",
      "WordPress page templates",
      "Reusable trust + service modules",
      "Local SEO metadata",
      "Phone + message enquiry conversion",
    ],
  },
  {
    slug: "bicknell-digital-platform",
    title: "Bicknell Digital Platform",
    shortTitle: "Bicknell Digital",
    summary:
      "Multi-service WordPress platform for Bicknell Digital, designed to unify digital and publishing offers, support high-frequency content updates, and create clearer quote-generation pathways.",
    context:
      "Bicknell Digital spans two distinct commercial domains (digital services and publishing services), each with separate customer journeys and content depth. The platform needed to present both clearly under one brand while preserving editorial speed and operational control.",
    problem:
      "The previous shape made service discovery and internal content management harder than necessary. The rebuild had to improve taxonomy, reduce cognitive load in navigation, and support frequent additions across services, posts, and promotional content without recurring engineering overhead.",
    role: "I designed and implemented the site architecture, WordPress content model, service hierarchy, navigation structure, and conversion-oriented page layouts, then iterated post-launch as offerings evolved.",
    approach:
      "I used a service-led IA with clear top-level separation between Digital and Publishing, reusable section patterns, and consistent quote/contact prompts. The delivery model prioritised editor autonomy, allowing rapid launch of new service pages and content campaigns.",
    sections: [
      {
        heading: "Highlights",
        content:
          "The implementation focused on reducing decision friction for visitors while reducing publishing friction for the business: clearer route choice between service domains, reusable landing-page structures for fast offer rollout, and quote pathways that stayed predictable across the whole site.",
      },
    ],
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "CSS",
      "Analytics",
      "SEO",
      "Content operations",
    ],
    keyDecisions: [
      "Split navigation around two primary commercial pillars: Digital and Publishing",
      "Implemented reusable page sections to speed up new service-page creation",
      "Established consistent quote capture patterns across key landing pages",
      "Designed taxonomy and menu structure to reduce click depth for core offerings",
      "Built for iterative publishing, including news content and product/service updates",
    ],
    outcomes: [
      "Launched a production business platform with clearer service positioning",
      "Improved user understanding of digital vs publishing offer sets",
      "Enabled ongoing in-house publishing without developer dependency",
      "Provided scalable structure for content marketing and offer expansion",
      "Created stronger conversion continuity from service discovery to quote request",
    ],
    improvements: [
      "Integrate CRM pipeline stages directly with quote/form submissions",
      "Expand structured internal linking between related services and supporting articles",
      "Improve Core Web Vitals through template-level asset strategy and media controls",
      "Add richer attribution tracking to identify highest-converting service pathways",
      "Evolve conversion UX with segmented lead forms by intent and budget profile",
    ],
    whatThisProves: [
      "Can design and run multi-domain commercial websites with clear information architecture",
      "Strong execution across CMS strategy, conversion UX, and long-term content operations",
      "Comfortable balancing brand presentation, technical maintainability, and business outcomes",
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
    image: "/bicknell-digital.jpg",
    diagram: [
      "Visitor",
      "Digital/Publishing route selection",
      "Service detail templates",
      "WordPress reusable content blocks",
      "Quote + newsletter conversion points",
      "Content + analytics feedback loop",
    ],
  },
  {
    slug: "petition-map",
    title: "Petition Map",
    shortTitle: "Petition Map",
    summary:
      "A hobby geospatial experiment built to explore GeoJSON modelling and Leaflet.js deeply, turning petition data into an interactive, map-first exploration tool.",
    context:
      "This was a self-directed side project rather than client work. The goal was to learn geospatial frontend architecture in depth by building a usable public map interface for petition data, not just a static demo.",
    problem:
      "Raw petition datasets are difficult to reason about geographically. I needed a way to transform tabular/location-linked data into an interactive experience that supports spatial comparison, discovery, and lightweight analysis while running smoothly in-browser.",
    role: "I built the project end-to-end: data shaping decisions, GeoJSON preparation, Leaflet layer implementation, interaction design, and responsive behaviour tuning for desktop and mobile map usage.",
    approach:
      "I approached it as a learning laboratory for geospatial web engineering: normalise location-linked records, represent them in GeoJSON structures, render boundaries/points with Leaflet, and iterate on interaction patterns (popups, zoom behaviour, layer toggles) until exploration felt intuitive.",
    sections: [
      {
        heading: "Highlights",
        content:
          "I worked in tight data-to-UI loops: clean and reshape petition records, test geometry correctness in GeoJSON, profile map rendering behaviour, and refine interaction affordances so users could quickly understand spatial differences without specialist GIS knowledge.",
      },
    ],
    techStack: [
      "JavaScript",
      "GeoJSON",
      "Leaflet",
      "Data processing",
      "API integration",
      "Responsive UI",
      "Geospatial UX",
    ],
    keyDecisions: [
      "Use GeoJSON as the interchange format",
      "Keep data structures explicit so geometry and metadata remain easy to inspect and debug",
      "Optimise feature payloads to improve browser render performance",
      "Use Leaflet layer strategy that supports iterative feature growth",
      "Design interactions for exploration first (hover/click context, zoom-to-area, and readable labels)",
      "Treat the project as a reusable baseline for future civic/geospatial experiments",
    ],
    outcomes: [
      "Delivered a live interactive petition map as a functional public demo",
      "Built stronger practical understanding of GeoJSON structures and Leaflet internals",
      "Improved the readability of geographically distributed petition patterns compared with flat data views",
      "Established a reusable technical foundation for future map-based side projects",
      "Validated a full data-to-visual interface workflow in a solo experimental setting",
    ],
    improvements: [
      "Add richer filter controls (region, threshold, and category views)",
      "Introduce temporal playback to inspect change over time where data allows",
      "Expand dataset validation and transformation automation before publish",
      "Evaluate vector-tile or clustering approaches for larger-scale datasets",
      "Add richer explanatory overlays for non-technical users interpreting map patterns",
    ],
    whatThisProves: [
      "Can self-direct advanced technical learning through a complete shipped side project",
      "Strong grasp of data-to-map transformation and interactive geospatial UX fundamentals",
      "Able to convert exploratory prototypes into polished, publicly accessible web experiences",
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
    image: "/petition-map.jpg",
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
    slug: "gilston-waste-management-website-portal",
    title: "Gilston Waste Management Website and Customer Portal",
    shortTitle: "Gilston Website and Portal",
    summary:
      "A WordPress redesign and secure customer portal for a waste management provider with custom theme work, SEO, mapping, and protected access.",
    context:
      "I led this Bicknell Digital client delivery for Gilston Waste Management. The project moved from early v1 ideas into a clearer v2 scope that combined a full public website redesign with a focused customer portal MVP on a separate subdomain.",
    problem:
      "Gilston had a broad service offer across waste management, specialist cleaning, property maintenance, infrastructure support, environmental services, support services, and telecoms and IT support. The public website needed clearer service navigation, stronger quote and callback journeys, better service-led SEO, and a more useful location experience. In parallel, customers needed secure access to reports and documents without exposing files publicly or creating heavy manual admin.",
    role: "I led discovery, scope refinement, Figma wireframes and mockups, WordPress architecture direction, custom theme and plugin planning, CMS component design, Leaflet.js map delivery, image treatment, forms, SEO setup, and phased implementation planning. I produced five rounds of Figma wireframes and mockups with client feedback and reshaped the original v1 plan into a more focused v2 delivery scope.",
    approach:
      "I reviewed the full service structure and journeys, then planned delivery in phases across portal MVP, public redesign, SEO content, and launch polish. The portal was designed as a separate secure product area using WordPress authentication, token-based API access, guarded routes, and protected downloads. The public website was redesigned with reusable templates, CTA bands, callback panels, service and region page structures, and a custom Leaflet.js Areas We Cover map that connected homepage interaction to region SEO journeys. Earlier scope ideas including Signable integration, portal-native chat, service toggles, and per-customer document stores were explored and then removed from v2 to reduce integration risk and keep the first release focused.",
    techStack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Bootstrap",
      "Font Awesome",
      "Figma",
      "Leaflet.js",
      "WP JSON API",
      "JWT/OAuth",
      "SEO",
      "JSON-LD",
      "Responsive images",
    ],
    keyDecisions: [
      "Split the public website and customer portal so secure access workflows could be handled as a separate product area",
      "Use WordPress as the authentication source for portal access rather than introducing a second identity store",
      "Focus v2 on secure login, reports, protected downloads, and API hardening instead of carrying high-risk v1 integrations into first release",
      "Use a custom Leaflet.js Areas We Cover map instead of a static visual so location coverage linked directly into region content journeys",
      "Build reusable CMS components for CTA bands, callback panels, service cards, testimonials, FAQs, and region content blocks",
      "Remove Instagram feed embeds from v2 to keep performance overhead lower and reduce avoidable frontend bloat",
    ],
    outcomes: [
      "Set a clearer delivery direction for Gilston's website and customer portal with a practical v2 scope",
      "Strengthened service navigation and content architecture across public pages covering healthcare and commercial waste workflows",
      "Connected nationwide coverage messaging to an interactive Areas We Cover map and region page structure",
      "Focused portal delivery on secure document and report access with protected API and download handling",
      "Delivered practical WordPress engineering planning across theme, plugin, CMS components, forms, SEO, accessibility, and launch readiness",
    ],
    improvements: [
      "Add deeper portal audit logging once the MVP is stable in production",
      "Add customer notification preferences for new reports and documents",
      "Expand region and service content based on Search Console and analytics data",
      "Track quote starts, quote submits, callback clicks, download activity, and map interactions with clearer event models",
      "Review live map interaction behaviour to refine hover states, region links, and fallback journeys",
    ],
    whatThisProves: [
      "Can deliver practical WordPress platform work that combines design, CMS structure, secure access, and SEO execution",
      "Can control scope and de-risk client delivery by trimming non-essential integrations while keeping technical quality high",
    ],
    tags: [
      "Client Website",
      "WordPress",
      "PHP",
      "JavaScript",
      "Bootstrap",
      "Font Awesome",
      "Leaflet.js",
      "Interactive Map",
      "Areas We Cover",
      "Region SEO",
      "Custom WordPress Theme",
      "Custom WordPress Plugin",
      "Customer Portal",
      "Document Portal",
      "Secure Downloads",
      "WP JSON API",
      "JWT/OAuth",
      "API Hardening",
      "Forms",
      "SEO",
      "Content Architecture",
      "Responsive Design",
      "Image Optimisation",
      "Shutterstock",
      "Healthcare Waste",
      "Waste Management",
      "CMS",
      "Quote Forms",
      "Callback Journeys",
      "Reusable CMS Components",
    ],
    focusAreas: [
      "CMS & Legacy Web",
      "Security & Identity",
      "Full Stack Delivery",
      "Project Leadership & Delivery",
    ],
    liveUrl: "https://www.gilstonwastemanagement.co.uk/",
    image: "/gwm.jpg",
    sections: [
      {
        heading: "Phasing and scope control",
        content:
          "Delivery was organised across five phases from wireframes and specification to portal MVP, public redesign, content and SEO, then launch polish. Five rounds of Figma wireframes and mockups were produced and iterated with client feedback before final build direction was signed off.",
      },
      {
        heading: "Customer portal MVP",
        content:
          "The portal was scoped for a separate subdomain and designed around WordPress-authenticated access, token handling, role mapping, guarded routes, reports tables, protected document downloads, API hardening, and practical QA and handover. File access was planned through secured proxy paths or short-lived signed URLs instead of direct public file exposure.",
      },
      {
        heading: "Public website redesign and map UX",
        content:
          "The website was treated as a full redesign with refreshed visual system, reusable WordPress templates, stronger form journeys, and service-led page structures. A custom Leaflet.js Areas We Cover map on the homepage gave users an interactive coverage view and linked directly to location and region content journeys.",
      },
      {
        heading: "Imagery, SEO, and performance",
        content:
          "Imagery used Shutterstock-led sourcing and treatment with responsive crops, WebP and JPEG outputs, lazy loading, and brand overlays. SEO work covered service and region architecture, internal linking, metadata, breadcrumbs, JSON-LD, sitemap and robots setup, and accessibility and performance checks.",
      },
    ],
    diagram: [
      "Client discovery and v2 scope refinement",
      "Figma wireframes and mockup iterations",
      "Custom WordPress theme and plugin direction",
      "Reusable CMS components and content structures",
      "Leaflet.js Areas We Cover interactive map",
      "Service and region SEO architecture",
      "Separate customer portal subdomain",
      "WP JSON API and token-based auth",
      "Guarded routes and protected downloads",
    ],
  },
  {
    slug: "solver-and-modelling-platform",
    title: "Solver and Modelling Platform",
    shortTitle: "Solver Platform",
    summary:
      "A proprietary modelling platform combining optimisation solvers, protected desktop delivery, and Azure-backed deployment workflows for international engineering organisations.",
    context:
      "I worked on a commercial modelling product focused on production-system modelling, throughput/capacity trade studies, and optimisation-driven decision support. Delivery spanned solver-backed Python services, licensing and IP protection, desktop packaging, and customer-specific cloud deployment constraints, with day-to-day delivery through GitLab branches, merge requests, and review workflows.",
    problem:
      "Customers needed to run high-value modelling and optimisation workflows securely in environments they controlled, while still getting reliable releases, clear licence enforcement, and consistent solver behaviour across local development, hosted services, and restricted private-cloud contexts.",
    role: "I owned backend-heavy delivery across Python APIs, solver integration, build/test/deploy automation, and cloud execution paths. I led a major refactor across API and modelling layers, including factory-based patterns to improve composability and testability. I contributed to Electron-client integration where needed, but my core impact was around modelling services, licensing flows, and production-grade deployment reliability.",
    approach:
      "I treated the platform as one connected system: model formulation and solver execution (GPkit/CVXOPT/MOSEK), secure runtime licensing (Thales Sentinel SDK, RTE, ScriptEnvelope, V2C/ACC patterns), automated quality gates, and repeatable Azure infrastructure. I focused on reducing operational friction while preserving IP protection and deterministic analytical outputs.",
    techStack: [
      "Python",
      "Flask",
      "GPkit",
      "CVXOPT",
      "MOSEK",
      "Electron",
      "Node.js",
      "Thales Sentinel SDK",
      "Azure Container Apps",
      "Azure Container Registry",
      "Terraform",
      "Docker",
      "GitLab",
      "mypy",
      "flake8",
      "isort",
      "black",
      "Prettier",
      "Paver/Pavement",
      "Factory patterns",
    ],
    keyDecisions: [
      "Use solver-layer separation so GPkit model definitions, CVXOPT pathways, and MOSEK-backed optimisation runs stayed testable and swappable",
      "Implement licensing as a first-class runtime concern using Sentinel SDK capabilities (including RTE and ScriptEnvelope) to protect commercial IP",
      "Standardise local and CI execution with Docker-backed build and test scripts to reduce environment drift",
      "Use Terraform-managed Azure foundations (including container image workflows) for repeatable customer-targeted deployments",
      "Prioritise deploy scripts and validation checks so restricted/private-cloud rollouts remained predictable under NDA constraints",
      "Keep backend contracts stable for Electron integration while allowing deeper solver and model refactors behind the API",
    ],
    outcomes: [
      "Improved confidence in solver-backed API behaviour through stronger automated tests around modelling and optimisation flows",
      "Reduced release friction by introducing and hardening build/deploy scripting for containerised Azure paths",
      "Strengthened software protection and entitlement control with production licensing workflows",
      "Supported customer-managed and restricted-cloud deployment scenarios without exposing core modelling IP",
      "Enabled complex modelling work to be consumed in a practical product workflow rather than remaining a research-only capability",
      "Contributed to a platform used by major international companies making high-cost production and scale-up decisions",
    ],
    improvements: [
      "Expand solver diagnostics surfaced to users when optimisation constraints are infeasible or under-specified",
      "Add deeper telemetry across solve time, licence handshakes, and deployment lifecycle events",
      "Increase self-service environment verification tooling for customer-hosted installs",
    ],
    whatThisProves: [
      "Can productionise advanced optimisation and modelling technology, not just build CRUD applications",
      "Can operate confidently across backend engineering, licensing security, and cloud deployment automation",
    ],
    tags: [
      "Python",
      "Flask",
      "GPkit",
      "CVXOPT",
      "MOSEK",
      "Azure",
      "Terraform",
      "Docker",
      "GitLab",
      "mypy",
      "flake8",
      "isort",
      "black",
      "Prettier",
      "Thales Sentinel SDK",
      "Paver/Pavement",
      "Factory patterns",
    ],
    focusAreas: [
      "Modelling & Numerical Systems",
      "Backend & APIs",
      "Cloud & Infrastructure",
      "DevOps, Testing & Delivery",
    ],
    sections: [
      {
        heading: "Product context",
        content:
          "The company delivers production-modelling and optimisation capability used to evaluate throughput, capacity, cost, and risk trade-offs in complex manufacturing/system design decisions. My work focused on making that analytical core reliable, protected, and deployable in real customer environments.",
      },
      {
        heading: "Solver and model execution engineering",
        content:
          "I worked deeply in Python services that orchestrated model inputs, constraint handling, and optimisation runs using GPkit/CVXOPT/MOSEK pathways. This included refactoring model and API code for readability and testability, and tightening behaviour around solver outputs and validation logic.",
      },
      {
        heading: "Licensing, protection, and controlled runtime",
        content:
          "Commercial delivery required robust entitlement controls, so licensing was treated as part of system architecture rather than an afterthought. I worked across Sentinel-based runtime and packaging concerns (including RTE and ScriptEnvelope patterns), plus customer provisioning flows such as V2C/ACC for pooled and controlled licence usage.",
      },
      {
        heading: "Deployment and delivery at platform depth",
        content:
          "Beyond application code, I built and maintained build/test/deploy scripts and infrastructure paths for Azure compute and image-based releases, with Docker for local consistency and Terraform for repeatable environments. This supported customer-managed deployments, including restricted private-cloud contexts, without sacrificing release discipline.",
      },
    ],
    diagram: [
      "Custom or Terraform deployment",
      "Azure compute + container image registry",
      "Docker build/runtime parity",
      "Customer-managed/private-cloud execution",
      "Electron desktop workflow",
      "Licence enforcement (Sentinel)",
      "Python + Flask API layer",
      "GPkit/CVXOPT/MOSEK solver paths",
      "Model validation + automated tests",
    ],
  },
];
