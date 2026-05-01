import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Adam" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Professional profile</span>
            <h1 className="h1">About Adam</h1>
            <p className="lead">
              I’m a UK based full stack React engineer with experience across
              React, TypeScript, Python, PHP, APIs, cloud systems,
              authentication, databases, CI/CD, and secure business
              applications.
            </p>
          </div>

          <div className="photo-cutout photo-cutout-wide animate-fade-in-right">
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
        </div>

        <div className="grid grid-3 section-tight">
          <div className="card">
            <h2>What I build</h2>
            <p className="muted">
              Portals, dashboards, APIs, automation tools, secure internal
              systems, data platforms, modelling tools, and cloud based
              applications.
            </p>
          </div>
          <div className="card">
            <h2>Why case studies</h2>
            <p className="muted">
              Most of my best work is private, internal, client-facing, or under
              NDA, so the portfolio explains the problem, decisions, system
              shape, and outcome.
            </p>
          </div>
          <div className="card">
            <h2>Frontend range</h2>
            <p className="muted">
              React and TypeScript are the focus, with broader experience across
              Vue, vanilla JavaScript, jQuery, server-rendered views, Redux,
              Electron, and legacy interfaces.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: 28 }}>
          <Link className="button primary" href="/case-studies">
            View case studies
          </Link>
          <Link className="button" href="/demo-projects">
            View demo projects
          </Link>
        </div>
      </div>
    </section>
  );
}
