
import { PortfolioLinksRow } from '@/components/PortfolioLinksRow';

export const metadata = { title: 'Now' };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="animate-fade-in-left">
          <span className="eyebrow">Current focus</span>
          <h1 className="h1">Now</h1>
          <p className="lead">
            I’m currently focused on sharpening my public portfolio around full
            stack React work, practical business systems, and inspectable demo
            projects.
          </p>
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
