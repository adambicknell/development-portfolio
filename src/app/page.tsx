import Image from "next/image";
import Link from "next/link";
import { JsonLd, personSchema } from "@/lib/schema";
import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TagList } from "@/components/cards/TagList";
import { caseStudies } from "@/data/caseStudies";
import { FaCss3Alt, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiApache, SiNextdotjs, SiTypescript } from "react-icons/si";

const featuredCaseStudySlugs = [
  "secure-client-document-portal",
  "solver-and-modelling-platform",
  "multi-region-saas-platform-features",
  "gilston-waste-management-website-portal",
] as const;

const featuredTitleOverrides: Record<string, string> = {
  "gilston-waste-management-website-portal":
    "Gilston Waste Management Website and Portal",
};

const featuredCardTags: Partial<Record<string, string[]>> = {
  "multi-region-saas-platform-features": [
    "React",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "SmartID",
  ],
  "gilston-waste-management-website-portal": [
    "WordPress",
    "Portal",
    "Leaflet",
    "SEO",
    "PHP",
  ],
};

export default function HomePage() {
  const featuredCaseStudies = featuredCaseStudySlugs
    .map((slug) => caseStudies.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudies)[number] => Boolean(item));

  return (
    <>
      <JsonLd data={personSchema} />
      <section className="section">
        <div className="container">
          <div className="hero-home-layout page-intro-row">
            <div className="animate-fade-in-left hero-left-stack">
              <span className="eyebrow">Portfolio</span>
              <h1 className="h1">Full Stack React Developer</h1>
              <p className="lead">
                I build practical full stack software for real business
                workflows: portals, dashboards, APIs, automation tools,
                modelling platforms, secure internal systems, and cloud based
                applications.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <div className="photo-cutout photo-cutout-tall">
                <div className="photo-frame photo-frame-tall photo-frame-curved">
                  <Image
                    src="/adam1.jpg"
                    alt="Portrait photo of Adam"
                    fill
                    sizes="(max-width: 900px) 100vw, 320px"
                    className="photo-frame-image"
                  />
                </div>
              </div>
            </div>
            <aside className="animate-fade-in-right">
              <div className="section-tight">
                <div className="card">
                  <div className="eyebrow">At a glance</div>
                  <br />
                  <div className="grid">
                    {[
                      "React and TypeScript",
                      "Python and APIs",
                      "Cloud and delivery",
                      "Auth, data and business systems",
                    ].map((item) => (
                      <div className="card-soft" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p style={{ marginTop: 14 }}>
                    <Link className="text-link text-center" href="/skills">
                      View all skills
                    </Link>
                  </p>
                </div>
              </div>
            </aside>
          </div>
          <PortfolioLinksRow marginTop={26} />
          <section className="section-tight">
            <SectionHeader title="Featured case studies">
              A few examples of the systems, workflows and client projects
              covered in this portfolio.
            </SectionHeader>
            <div className="grid grid-2">
              {featuredCaseStudies.map((item) => (
                <article className="card" key={item.slug}>
                  <h3 className="h3">
                    {featuredTitleOverrides[item.slug] ?? item.title}
                  </h3>
                  <p className="muted">{item.summary}</p>
                  <TagList
                    tags={featuredCardTags[item.slug] ?? item.tags}
                    maxVisible={5}
                  />
                  <div className="row" style={{ marginTop: 18 }}>
                    <Link
                      className="button primary"
                      href={`/case-studies/${item.slug}`}
                    >
                      Read case study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="made-with" aria-label="Site technology stack">
            <span className="eyebrow">Made with</span>
            <ul className="made-with-grid">
              {[
                { label: "Next.js", icon: <SiNextdotjs aria-hidden="true" /> },
                { label: "React", icon: <FaReact aria-hidden="true" /> },
                {
                  label: "TypeScript",
                  icon: <SiTypescript aria-hidden="true" />,
                },
                { label: "Node.js", icon: <FaNodeJs aria-hidden="true" /> },
                { label: "CSS", icon: <FaCss3Alt aria-hidden="true" /> },
                { label: "JSON data", icon: <FaDatabase aria-hidden="true" /> },
                {
                  label: "Apache",
                  icon: <SiApache aria-hidden="true" />,
                },
              ].map((tech) => (
                <li key={tech.label} className="made-with-item">
                  <span className="made-with-icon">{tech.icon}</span>
                  <span>{tech.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
