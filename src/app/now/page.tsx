
import { PortfolioLinksRow } from '@/components/PortfolioLinksRow';

export const metadata = pageMetadata({
  title: 'Now',
  description: 'What Adam Bicknell is currently focusing on across development, portfolio work, and learning.',
  path: '/now',
});

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero-grid">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Current focus</span>
            <h1 className="h1">Now</h1>
            <p className="lead">
              I’m currently focused on sharpening my public portfolio around full
              stack React work, practical business systems, and inspectable demo
              projects.
            </p>
          </div>

          <aside className="card animate-fade-in-right" style={{ maxWidth: 360 }}>
            <span className="badge">Right now</span>
            <h2>Building with clarity</h2>
            <p className="muted">I am focused on practical demos, clear documentation, and architecture decisions that are easy to inspect.</p>
          </aside>
        </div>

        <div className="grid grid-3 section-tight">
          <div className="card">
            <span className="badge">In development</span>
            <h2>Portfolio site</h2>
          </div>
          <div className="card">
            <span className="badge">Planned</span>
            <h2>Client Document Portal Demo</h2>
          </div>
          <div className="card">
            <span className="badge">Planned</span>
            <h2>Support Triage Dashboard</h2>
          </div>
        </div>
        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
