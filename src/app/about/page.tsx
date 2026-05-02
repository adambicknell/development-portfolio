import Image from "next/image";
import Link from "next/link";
import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";

export const metadata = {
  title: "About Adam Bicknell | Full Stack React Developer",
  description:
    "UK based Full Stack React Developer working across React, TypeScript, Python, APIs, cloud systems, internal tools, SaaS platforms, secure business workflows and production software.",
};

type AboutCard = {
  title: string;
  copy: string;
  chips?: string[];
  link?: { href: string; label: string };
};

const favouriteTechnologies = [
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "JavaScript",
  "PHP",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "FastAPI",
  "Flask",
  "Docker",
];

const nowItems = [
  { status: "Done", title: "Portfolio site" },
  { status: "In development", title: "Client Document Portal Demo" },
  { status: "In development", title: "Support Triage Dashboard" },
];

const cardSections: AboutCard[][] = [
  [
    {
      title: "What I build",
      copy: "I build portals, dashboards, APIs, automation tools, secure internal systems, client document workflows, SaaS features, data-heavy interfaces, modelling tools and cloud based applications.",
      chips: [
        "Portals",
        "Dashboards",
        "REST APIs",
        "Internal tools",
        "SaaS",
        "Data systems",
      ],
    },
    {
      title: "Why case studies",
      copy: "Most of my best work is private, internal, client-facing or under NDA. The case studies explain the problem, my role, the system shape, the key decisions, the outcome and what I would improve next without exposing confidential details.",
      link: { href: "/case-studies", label: "View case studies" },
    },
    {
      title: "Frontend range",
      copy: "React and TypeScript are the focus of this portfolio, but my frontend experience also includes Redux, Vue, vanilla JavaScript, jQuery, server-rendered views, Mako templates, Electron interfaces and older legacy screens that still support real business workflows.",
      chips: [
        "React",
        "TypeScript",
        "Redux",
        "Vue",
        "Electron",
        "jQuery",
        "Mako",
      ],
    },
  ],
  [
    {
      title: "Backend and API work",
      copy: "I have worked across Python, Flask, FastAPI, PHP, Laravel, Lumen, CakePHP, Node.js, REST APIs, SOAP services, authentication endpoints, document access APIs, business rules and integrations between internal and external systems.",
      chips: [
        "Python",
        "Flask",
        "FastAPI",
        "PHP",
        "REST APIs",
        "SOAP",
        "Node.js",
      ],
    },
    {
      title: "Cloud and delivery",
      copy: "I have delivered and supported systems across Azure, AWS, Terraform, Docker, Azure Container Apps, Azure Functions, Azure DevOps, Buildkite, GitHub, GitLab, CI/CD pipelines, hosted web platforms and customer-managed deployments.",
      chips: [
        "Azure",
        "AWS",
        "Terraform",
        "Docker",
        "CI/CD",
        "GitLab",
        "Buildkite",
      ],
    },
  ],
  [
    {
      title: "Business systems mindset",
      copy: "A lot of my work sits inside real business operations rather than isolated product demos. I have worked on legal document workflows, casting platform features, solver and modelling tools, reporting systems, client portals, internal dashboards, workflow automation and support tooling.",
      link: { href: "/experience", label: "Explore my experience" },
    },
  ],
  [
    {
      title: "Security and identity",
      copy: "I have worked with authentication, authorisation, SSO, SAML, OAuth2, Azure Active Directory, Microsoft Entra ID, SmartID, role-based permissions, secure document access, SOAP authentication, secrets management and penetration test remediation.",
      chips: [
        "SSO",
        "SAML",
        "OAuth2",
        "Azure Active Directory",
        "SmartID",
        "Role-based access",
        "Security",
      ],
    },
    {
      title: "Data, search and modelling",
      copy: "I have worked with PostgreSQL, MySQL, MariaDB, Microsoft SQL Server, MongoDB, Cosmos DB, SQLAlchemy, Elasticsearch, Azure Search, reporting workflows, data validation, model inputs, model outputs, currency conversion logic and numerical modelling systems.",
      chips: [
        "PostgreSQL",
        "MySQL",
        "SQLAlchemy",
        "Elasticsearch",
        "Cosmos DB",
        "Modelling",
        "Reporting",
      ],
    },
    {
      title: "Production and support experience",
      copy: "My early career in application support and infrastructure support still shapes how I build software. I think about monitoring, release risk, backups, incidents, user support, documentation, handover, permissions, server behaviour and what happens when a system is live.",
      chips: [
        "Production support",
        "Monitoring",
        "Incident management",
        "Documentation",
        "Handover",
        "Infrastructure support",
      ],
    },
  ],
  [
    {
      title: "SaaS and platform work",
      copy: "I have worked on multi-region SaaS platforms, multi-tenant systems, secure Azure SaaS products, customer-managed deployments, commercial platforms, release governance, regional UAT, production support and platform modernisation.",
      chips: [
        "SaaS",
        "Multi-region SaaS",
        "Multi-tenant architecture",
        "Platform engineering",
        "UAT",
        "Release governance",
      ],
    },
    {
      title: "Generative AI and automation",
      copy: "I use generative AI and automation in a practical way: summarisation, research support, local LLM workflows, prompt workflows, content processing, RAG concepts, embeddings, human review and AI features that can support real business processes.",
      chips: [
        "Generative AI",
        "LLMs",
        "Ollama",
        "RAG",
        "Embeddings",
        "Document summarisation",
        "Automation",
      ],
    },
  ],
  [
    {
      title: "Freelance and client work",
      copy: "Alongside employed roles, I have also delivered freelance and client work through Bicknell Digital. That work adds another layer to my experience with client communication, hosting, WordPress, website support, handover, small business workflows and practical delivery.",
      chips: [
        "Bicknell Digital",
        "Client work",
        "WordPress",
        "Hosting",
        "Handover",
        "Support",
      ],
    },
    {
      title: "How I work",
      copy: "I care about understanding the problem, choosing practical technical options, reviewing the trade-offs, communicating clearly, testing the risky parts and leaving systems easier to support than I found them.",
      chips: [
        "Technical judgement",
        "Communication",
        "Testing",
        "Refactoring",
        "Documentation",
        "Ownership",
      ],
    },
  ],
];

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="profile-hero-layout-two-column">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Professional profile</span>
            <h1 className="h1">About Adam</h1>
            <p className="lead">
              I’m a UK based Full Stack React Developer with experience across
              React, TypeScript, Python, PHP, APIs, cloud systems,
              authentication, databases, CI/CD and secure business applications.
            </p>
            <p>
              I build practical full stack software for real business workflows.
              That usually means portals, dashboards, APIs, automation tools,
              data systems, modelling platforms, secure internal systems, SaaS
              features and cloud based applications.
            </p>
            <p>
              Most of my commercial work has been private company software,
              client-facing systems or work delivered under NDA. This portfolio
              explains that work through anonymised case studies, selected
              public demos and a fuller breakdown of the systems, decisions and
              trade-offs behind them.
            </p>
            <p>
              My background is broader than a single frontend stack. I have
              worked across React and TypeScript interfaces, Python services,
              PHP systems, identity and SSO, SQL and document databases, Azure
              and AWS infrastructure, CI/CD pipelines, production support,
              legacy modernisation and internal tools used by real teams.
            </p>
            <p>
              That mix is why I am strongest where frontend, backend, data,
              cloud and business process meet. I am comfortable working through
              the messy middle of a system: unclear requirements, old code,
              permissions, data flows, release risk, support issues, user
              workflows and the decisions needed to make software useful in
              production.
            </p>

            <p className="muted">
              You can see the full role-by-role breakdown on the{" "}
              <Link className="text-link" href="/experience">
                Experience page
              </Link>
              .
            </p>
          </div>

          <div className="animate-fade-in-up">
            <div className="photo-cutout photo-cutout-wide">
              <div className="photo-frame photo-frame-wide photo-frame-curved">
                <Image
                  src="/adam2.jpg"
                  alt="Portrait of Adam"
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  className="photo-frame-image"
                />
              </div>
            </div>
            <aside className="card about-card" style={{ marginTop: 18 }}>
              <h2>What I do</h2>
              <p className="muted">
                I work across full stack React, TypeScript, Python, APIs,
                internal tools, SaaS platforms and business systems, with wider
                experience in Azure and AWS cloud infrastructure, databases,
                authentication, CI/CD, legacy systems, modelling tools and
                production support.
              </p>
              <p className="muted">
                For a more detailed breakdown of the technologies and practices
                behind this work, see the{" "}
                <Link className="text-link" href="/skills">
                  Skills page
                </Link>
                .
              </p>

              <div className="row">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "APIs",
                  "Cloud",
                  "Business systems",
                ].map((chip) => (
                  <span className="tag" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="about-card-sections">
          {cardSections.map((section, sectionIndex) => (
            <div
              className={`grid ${section.length === 1 ? "" : section.length === 2 ? "grid-2" : "grid-3"} about-card-grid`}
              key={sectionIndex}
            >
              {section.map((card) => (
                <article className="card about-card" key={card.title}>
                  <h2>{card.title}</h2>
                  <p className="muted">{card.copy}</p>
                  {card.chips?.length ? (
                    <div className="row">
                      {card.chips.map((chip) => (
                        <span className="tag" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {card.link ? (
                    <p>
                      <Link className="text-link" href={card.link.href}>
                        {card.link.label}
                      </Link>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          ))}
        </div>

        <div className="about-full-width-cards">
          <div className="card section-tight about-card">
            <h2>Favourite technologies</h2>
            <p className="muted">
              These are the technologies I reach for most often in day-to-day
              delivery across product engineering, internal tools and secure
              business systems.
            </p>
            <div className="row">
              {favouriteTechnologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="card section-tight about-card">
            <h2>What I am working on now</h2>
            <p className="muted">
              I am focused on practical demos, clear documentation and
              architecture decisions that are easy to inspect.
            </p>
            <div className="grid grid-3">
              {nowItems.map((item) => (
                <div className="card-soft" key={item.title}>
                  <span className="badge">{item.status}</span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="card section-tight about-card">
            <h2>Where this portfolio fits</h2>
            <p className="muted">
              This portfolio brings together work delivered through Bicknell
              Digital alongside selected examples from private company systems,
              including public demos, anonymised case studies, a detailed
              experience timeline and a technical skills index. It is designed
              to clearly show the kinds of systems I have built, supported and
              improved.
            </p>
            <div className="row">
              <Link className="text-link" href="/experience">
                View experience
              </Link>
              <Link className="text-link" href="/skills">
                View skills
              </Link>
              <Link className="text-link" href="/case-studies">
                View case studies
              </Link>
            </div>
          </div>
        </div>

        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
