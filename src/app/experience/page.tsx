import Link from 'next/link';
import { experience, earlierRoles } from '@/data/experience';
import { TagList } from '@/components/cards/TagList';

export const metadata = { title: 'Experience' };

export default function ExperiencePage() {
  return <section className="section"><div className="container"><h1 className="h1">Experience</h1><p className="lead">Timeline, responsibilities, stack, and outcomes mapped to portfolio evidence.</p>
  <div className='row' style={{margin:'16px 0'}}>{experience.map((r)=> <a key={r.company+r.role} className='tag' href={`#${r.company.toLowerCase().replace(/\s+/g,'-')}`}>{r.company}</a>)}</div>
  <div className="grid animate-grid-single">{experience.map((item)=><article id={item.company.toLowerCase().replace(/\s+/g,'-')} className="card" key={item.company+item.role}><span className="eyebrow">{item.dates}</span><h2>{item.company}</h2><h3>{item.role}</h3><p className="muted">{item.summary}</p><p><strong>Responsibilities</strong></p><ul>{item.responsibilities.map((r)=><li key={r}>{r}</li>)}</ul><p><strong>Tech stack</strong></p><TagList tags={item.techStack}/><p><strong>Outcomes</strong></p><ul>{item.outcomes.map((o)=><li key={o}>{o}</li>)}</ul>{item.relatedCaseStudySlug && <p><Link className='button' href={`/case-studies/${item.relatedCaseStudySlug}`}>Related case study</Link></p>}</article>)}</div>
  <section className='section-tight'><h2 className='h2'>Career phases</h2><TagList tags={earlierRoles}/></section></div></section>;
}
