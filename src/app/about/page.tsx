import Image from "next/image";
import Link from "next/link";
import { TagList } from "@/components/cards/TagList";
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

const coreTools = [
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
  "WordPress",
];

const currentFocusItems = [
  {
    status: "Live",
    title: "Portfolio site",
    copy: "A content-driven portfolio for case studies, experience, skills and public demos.",
  },
  {
    status: "In development",
    title: "Client Document Portal Demo",
    copy: "A public demo based on the kind of secure document workflows I have built commercially.",
  },
  {
    status: "In development",
    title: "Support Triage Dashboard",
    copy: "A practical internal tools demo focused on issue handling, workflow visibility and useful admin views.",
  },
];

const technicalRangeCards: AboutCard[] = [
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
  {
    title: "Backend and API work",
    copy: "I have worked across Python, Flask, FastAPI, PHP, Laravel, Lumen, CakePHP, Node.js, REST APIs, SOAP services, authentication flows, document access APIs, business rules and integrations between internal and external systems.",
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
];

const businessPlatformCards: AboutCard[] = [
  {
    title: "Business systems mindset",
    copy: "A lot of my work sits inside real business operations rather than isolated product demos. I have worked on legal document workflows, casting platform features, solver and modelling tools, reporting systems, client portals, internal dashboards, workflow automation and support tooling.",
    link: { href: "/experience", label: "Explore my experience" },
  },
  {
    title: "Commercial domains",
    copy: "I have worked across legal technology, HR and workforce-related systems, music technology, film, TV and casting platforms, manufacturing and modelling software, agency websites, client portals and internal business systems. That range has given me experience with different users, workflows, data needs, security concerns and release environments.",
    chips: [
      "Legal tech",
      "HR systems",
      "Music tech",
      "Film, TV and casting",
      "Manufacturing",
      "Agency work",
      "Client portals",
      "Internal systems",
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
];

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="profile-hero-layout-two-column page-intro-row">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Professional profile</span>
            <h1 className="h1">About Adam</h1>
            <p className="lead">
              I’m a UK based Full Stack React Developer delivering business
              software across React, TypeScript, Python, APIs, cloud systems,
              data, and security.
            </p>
            <p>
              I build and support production systems used by real teams. That
              includes portals, dashboards, APIs, automation tools, modelling
              workflows, and secure internal platforms.
            </p>
            <p>
              Most commercial work I have delivered is private or covered by
              NDA, so this site uses anonymised case studies, selected public
              demos, and freelance client delivery through Bicknell Digital.
            </p>
            <p>
              I work comfortably across frontend, backend, cloud, and data. I
              focus on clear delivery in messy real-world contexts, including
              legacy code, release risk, permissions, support needs, and
              operational handover.
            </p>

            <p className="muted">
              You can see the full role-by-role breakdown on the{" "}
              <Link className="text-link" href="/experience">
                Experience page
              </Link>
              .
            </p>

            <p className="muted">
              For a more detailed breakdown of the technologies behind this
              work, see the{" "}
              <Link className="text-link" href="/skills">
                Skills page
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
              <h2>What I build</h2>
              <p className="muted">
                I work across full stack React, TypeScript, Python, APIs,
                internal tools, SaaS platforms and business systems, with wider
                experience in Azure and AWS cloud infrastructure, databases,
                authentication, CI/CD, legacy systems, modelling tools and
                production support.
              </p>

              <TagList
                tags={[
                  "React",
                  "TypeScript",
                  "Python",
                  "APIs",
                  "Cloud",
                  "Business systems",
                ]}
              />
            </aside>
          </div>
        </div>

        <div className="about-card-sections">
          <div className="grid grid-2 about-card-grid">
            <article className="card about-card">
              <h2>Why case studies</h2>
              <p className="muted">
                Most of my best work is private, internal, client-facing or
                under NDA. The case studies explain the problem, my role, the
                system shape, the key decisions, the outcome and what I would
                improve next without exposing confidential details.
              </p>
              <p>
                <Link className="text-link" href="/case-studies">
                  Case Studies
                </Link>
              </p>
            </article>
            <article className="card about-card">
              <h2>AI and automation</h2>
              <p className="muted">
                I use generative AI and automation in practical ways: research
                support, summarisation, content processing, local LLM workflows,
                prompt workflows, document workflows and business process
                support.
              </p>
              <p className="muted">
                I use these tools to move faster, but I review, test and
                understand what goes into production.
              </p>
              <TagList
                tags={[
                  "Generative AI",
                  "LLMs",
                  "Ollama",
                  "Document summarisation",
                  "Automation",
                  "Prompt workflows",
                ]}
              />
            </article>
          </div>

          <article className="card about-card section-tight">
            <h2>Technical range</h2>
            <div className="grid grid-2 about-card-grid">
              {technicalRangeCards.map((card) => (
                <div className="card-soft" key={card.title}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.copy}</p>
                  {card.chips?.length ? <TagList tags={card.chips} /> : null}
                </div>
              ))}
            </div>
          </article>

          <article className="card about-card section-tight">
            <h2>Business and platform experience</h2>
            <div className="grid grid-2 about-card-grid">
              {businessPlatformCards.map((card) => (
                <div className="card-soft" key={card.title}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.copy}</p>
                  {card.chips?.length ? <TagList tags={card.chips} /> : null}
                  {card.link ? (
                    <p>
                      <Link className="text-link" href={card.link.href}>
                        {card.link.label}
                      </Link>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="card about-card">
            <h2>How I work</h2>
            <p className="muted">
              I care about understanding the problem, choosing practical
              technical options, reviewing the trade-offs, communicating
              clearly, testing the risky parts and leaving systems easier to
              support than I found them.
            </p>
            <p className="muted">
              I think about what happens after release: permissions, monitoring,
              handover, support, data quality and whether the system still makes
              sense when real users rely on it.
            </p>
            <TagList
              tags={[
                "Technical judgement",
                "Communication",
                "Testing",
                "Refactoring",
                "Documentation",
                "Ownership",
              ]}
            />
          </article>
        </div>

        <div className="about-full-width-cards">
          <div className="card section-tight about-card">
            <h2>Core tools</h2>
            <p className="muted">
              These are the tools I use most often across product engineering,
              internal systems, client work and secure business software.
            </p>
            <TagList tags={coreTools} maxVisible={coreTools.length} />
          </div>

          <div className="card section-tight about-card">
            <h2>Current focus</h2>
            <p className="muted">
              I am currently focused on keeping this portfolio clear, improving
              the public demos and documenting the decisions behind each
              project.
            </p>
            <div className="grid grid-3">
              {currentFocusItems.map((item) => (
                <div className="card-soft" key={item.title}>
                  <span className="badge">{item.status}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card section-tight about-card">
            <h2>Where this portfolio fits</h2>
            <p className="muted">
              This portfolio brings together selected commercial experience,
              Bicknell Digital client work, anonymised case studies, public
              demos, a detailed experience timeline and a technical skills
              index. It is designed to show the kinds of systems I have built,
              supported and improved without exposing private company or client
              details.
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
