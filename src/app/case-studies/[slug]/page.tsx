import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Diagram } from '@/components/common/Diagram';
import { TagList } from '@/components/cards/TagList';
import { TrackView } from '@/components/history/TrackView';
export function generateStaticParams() { return caseStudies.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  return { title: item?.title ?? 'Case study', description: item?.summary };
}
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  if (!item) notFound();
  return <section className="section"><TrackView title={item.title} href={'/case-studies/' + item.slug} type="Case study" /><div className="container"><Link className="button ghost no-print" href="/case-studies">Back to case studies</Link><div className="hero-grid" style={{ marginTop: 24 }}><article><div className="card-soft" style={{ marginBottom: 16, minHeight: 180, display: 'grid', placeItems: 'center' }}><p className="muted">{item.imagePlaceholder ?? 'Add case study image here'}</p></div><span className="eyebrow">Anonymised case study</span><h1 className="h1">{item.title}</h1><p className="lead">{item.summary}</p><TagList tags={item.tags} />{item.liveUrl && <p style={{ marginTop: 12 }}><a href={item.liveUrl} target="_blank" rel="noreferrer">View live project</a></p>}</article><aside className="card sticky"><h2>At a glance</h2><p><strong>Problem</strong></p><p className="muted">{item.problem}</p><p><strong>My role</strong></p><p className="muted">{item.role}</p></aside></div><div className="grid" style={{ marginTop: 40 }}>{[['Context',item.context],['The problem',item.problem],['My role',item.role],['Approach',item.approach]].map(([title,text]) => <section className="card" key={title}><SectionHeader title={title}>{text}</SectionHeader></section>)}<section className="card"><SectionHeader title="System shape" /><Diagram nodes={item.diagram} /></section><section className="card"><SectionHeader title="Key decisions" /><div className="grid grid-3">{item.keyDecisions.map(decision => <div className="card-soft" key={decision}><h3>{decision}</h3><p className="muted">A practical decision shaped by the system, users, and production constraints.</p></div>)}</div></section><section className="card"><SectionHeader title="Technical areas" /><TagList tags={item.techStack} /></section><section className="card"><SectionHeader title="Outcome" /><ul>{item.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul></section><section className="card"><SectionHeader title="What I would improve next" /><ul>{item.improvements.map(value => <li key={value}>{value}</li>)}</ul></section></div></div></section>;
}
