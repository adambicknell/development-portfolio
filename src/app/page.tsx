import Link from "next/link";
import Image from "next/image";
import { HomeProofSections } from "@/components/home/HomeProofSections";
import { site } from "@/data/site";
import { JsonLd, personSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <section className="section">
        <div className="container">
          <div className="space-between">
            <div
              className="animate-fade-in-left hero-left-stack"
              style={{ maxWidth: 760 }}
            >
              <div className="photo-frame photo-frame-feature photo-frame-feature-top">
                <Image
                  src="/adam1.jpg"
                  alt="Portrait photo of Adam"
                  fill
                  sizes="(max-width: 420px) 100vw, 420px"
                  className="photo-frame-image"
                />
              </div>
              <span className="eyebrow">{site.role}</span>
              <h1 className="h1">Full Stack React Developer</h1>
              <p className="lead">
                I build practical full stack software for real business
                workflows: portals, dashboards, APIs, automation tools,
                modelling platforms, secure internal systems, and cloud based
                applications.
              </p>
              <p className="muted">
                Most of my commercial work has been private company software, so
                this portfolio uses anonymised case studies and selected public
                demos to show how I approach real systems.
              </p>
              <div className="row" style={{ marginTop: 26 }}>
                <Link className="button primary" href="/case-studies">
                  View case studies
                </Link>
                <Link className="button" href="/demo-projects">
                  View demo projects
                </Link>
                <a className="button ghost" href={site.github}>
                  Open GitHub
                </a>
              </div>
            </div>
            <aside className="animate-fade-in-right">
              <div className="section-tight">
                <div className="card">
                  <span className="eyebrow">At a glance</span>
                  <h2 className="h3">
                    React | TypeScript | Python | APIs | Cloud
                  </h2>
                  <div className="grid">
                    {[
                      "React and TypeScript interfaces",
                      "Python and API systems",
                      "Cloud deployment",
                      "Auth and permissions",
                      "Internal tools and SaaS",
                      "Production support",
                    ].map((item) => (
                      <div className="card-soft" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <HomeProofSections />
    </>
  );
}
