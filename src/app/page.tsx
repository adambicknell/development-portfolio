import Image from "next/image";
import { JsonLd, personSchema } from "@/lib/schema";
import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <section className="section">
        <div className="container">
          <div className="hero-home-layout">
            <div className="animate-fade-in-left hero-left-stack">
              <span className="eyebrow">Portfolio</span>
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
          <PortfolioLinksRow marginTop={26} />
        </div>
      </section>
    </>
  );
}
