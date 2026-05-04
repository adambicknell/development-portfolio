
import { PortfolioLinksRow } from '@/components/PortfolioLinksRow';

export const metadata = pageMetadata({
  title: 'Uses',
  description: 'Tools, hardware, and software Adam Bicknell uses for development and delivery.',
  path: '/uses',
});

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero-grid">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Tools and workflow</span>
            <h1 className="h1">Uses</h1>
            <p className="lead">
              A practical look at the tools, stack, and workflow I use for modern
              full stack development.
            </p>
          </div>

          <aside className="card animate-fade-in-right" style={{ maxWidth: 360 }}>
            <span className="badge">Workflow</span>
            <h2>Built for delivery</h2>
            <p className="muted">I prioritize maintainability, sensible defaults, and documentation so projects can be shipped and supported confidently.</p>
          </aside>
        </div>

        <div className="grid grid-4 section-tight">
          <div className="card">
            <h2>Frontend</h2>
            <p className="muted">Next.js, React, TypeScript, Redux Toolkit.</p>
          </div>
          <div className="card">
            <h2>Backend</h2>
            <p className="muted">Python, FastAPI or Flask, APIs, auth, validation.</p>
          </div>
          <div className="card">
            <h2>Data</h2>
            <p className="muted">PostgreSQL, migrations, seed data, search, audit logs.</p>
          </div>
          <div className="card">
            <h2>Delivery</h2>
            <p className="muted">Docker, GitHub Actions, deployment notes, clear READMEs.</p>
          </div>
        </div>
        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
