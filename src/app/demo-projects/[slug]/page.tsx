import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Diagram } from '@/components/common/Diagram';
import { TagList } from '@/components/cards/TagList';
import { TrackView } from '@/components/history/TrackView';
export function generateStaticParams() { return projects.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((x) => x.slug === slug);
  return { title: item?.title ?? 'Demo project', description: item?.summary };
}
export default async function DemoProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((x) => x.slug === slug);
  if (!item) notFound();
  return <section className="section"><TrackView title={item.title} href={'/demo-projects/' + item.slug} type="Demo project" /><div className="container"><Link className="button ghost" href="/demo-projects">Back to demo projects</Link><div className="hero-grid" style={{ marginTop: 24 }}><article><span className="badge">{item.status}</span><h1 className="h1">{item.title}</h1><p className="lead">{item.summary}</p><div className="row"><a className="button primary" href={item.liveUrl ?? '#'}>View live demo</a><a className="button" href={item.repoUrl ?? '#'}>Open GitHub repo</a></div></article><aside className="card sticky"><h2>What this proves</h2><TagList tags={item.tags} /></aside></div><div className="grid" style={{ marginTop: 40 }}><section className="card"><SectionHeader title="Screenshots and previews" /><div className="grid grid-3">{['Admin dashboard','Client dashboard','Workflow view'].map(label => <div className="preview-panel" key={label}><strong>{label}</strong><p className="muted">Placeholder preview until the app screenshots are added.</p></div>)}</div></section><section className="card"><SectionHeader title="Why I built this">{item.problem}</SectionHeader></section><section className="card"><SectionHeader title="Core features" /><div className="grid grid-4">{item.features.map(feature => <div className="card-soft" key={feature}>{feature}</div>)}</div></section><section className="card"><SectionHeader title="System shape" /><Diagram nodes={item.diagram} /></section><section className="card"><SectionHeader title="Technical decisions" /><div className="grid grid-3">{item.decisions.map(decision => <div className="card-soft" key={decision}><h3>{decision}</h3><p className="muted">Chosen to keep the demo realistic, inspectable, and useful.</p></div>)}</div></section><section className="card"><SectionHeader title="Tech stack" /><TagList tags={item.techStack} /></section><section className="card"><SectionHeader title="What I would improve next" /><ul>{item.improvements.map(value => <li key={value}>{value}</li>)}</ul></section></div></div></section>;
}
