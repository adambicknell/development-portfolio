import Link from 'next/link';
import { FocusSelector } from '@/components/preferences/FocusSelector';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { caseStudies } from '@/data/caseStudies';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { JsonLd, personSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <section className="section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">{site.role}</span>
            <h1 className="h1">Full Stack React Developer</h1>
            <p className="lead">I build practical full stack software for real business workflows: portals, dashboards, APIs, automation tools, modelling platforms, secure internal systems, and cloud based applications.</p>
            <p className="muted">Most of my commercial work has been private company software, so this portfolio uses anonymised case studies and selected public demos to show how I approach real systems.</p>
            <div className="row" style={{ marginTop: 26 }}>
              <Link className="button primary" href="/case-studies">View case studies</Link>
              <Link className="button" href="/demo-projects">View demo projects</Link>
              <a className="button ghost" href={site.github}>Open GitHub</a>
            </div>
          </div>
          <aside className="card">
            <span className="eyebrow">At a glance</span>
            <h2 className="h3">React | TypeScript | Python | APIs | Cloud</h2>
            <div className="grid">
              {['React and TypeScript interfaces','Python and API systems','Cloud deployment','Auth and permissions','Internal tools and SaaS','Production support'].map(item => <div className="card-soft" key={item}>{item}</div>)}
            </div>
          </aside>
        </div>
      </section>
      <section className="section-tight"><div className="container"><FocusSelector /></div></section>
      <section className="section-tight"><div className="container grid grid-4">{['Frontend systems','Backend and APIs','Cloud and delivery','Secure business software'].map((title, index) => <div className="card" key={title}><h3>{title}</h3><p className="muted">{['React, TypeScript, Redux, Vue, vanilla JavaScript, jQuery, Electron, server-rendered views.','Python, Flask, FastAPI, PHP, Laravel, Node.js, REST APIs, model integration.','Azure, AWS, Docker, Terraform, CI/CD, monitoring, release processes, production support.','SSO, OAuth2, SAML, Azure AD, permissions, secure access, pen-test remediation.'][index]}</p></div>)}</div></section>
      <section className="section"><div className="container"><SectionHeader eyebrow="Commercial proof" title="Selected case studies">Anonymised examples based on real commercial systems I have built, supported, or helped deliver.</SectionHeader><div className="grid grid-2">{caseStudies.map(item => <CaseStudyCard key={item.slug} item={item} />)}</div></div></section>
      <section className="section-tight"><div className="container"><SectionHeader eyebrow="Public proof" title="Demo projects">Inspectable public projects that mirror real business workflows.</SectionHeader><div className="grid grid-3">{projects.map(item => <ProjectCard key={item.slug} item={item} />)}</div></div></section>
    </>
  );
}
