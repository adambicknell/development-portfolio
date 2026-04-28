import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { projects } from '@/data/projects';
export const metadata = { title: 'Demo Projects' };
export default function DemoProjectsPage() {
  return <section className="section"><div className="container"><div className="space-between"><div><span className="eyebrow">Public proof</span><h1 className="h1">Demo projects</h1><p className="lead">Public projects built to show practical full stack product work: React interfaces, APIs, authentication, role based permissions, databases, testing, deployment, and business workflows.</p></div><div className="card"><strong>What these prove</strong><p className="muted">Public repos, live demos, React and TypeScript, API design, auth, databases, testing, deployment notes, and readable README files.</p></div></div><div className="section-tight"><SectionHeader title="Featured and planned projects">These are focused examples based on portals, dashboards, workflow tools, secure access, document handling, and internal operations.</SectionHeader><div className="grid grid-3">{projects.map(item => <ProjectCard key={item.slug} item={item} />)}</div></div></div></section>;
}
