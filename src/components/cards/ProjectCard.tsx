import Link from 'next/link';
import { DemoProject } from '@/data/projects';
import { TagList } from './TagList';
export function ProjectCard({ item }: { item: DemoProject }) {
  return (
    <article className="card">
      <span className="badge">{item.status}</span>
      <h3 className="h3">{item.title}</h3>
      <p className="muted">{item.summary}</p>
      <TagList tags={item.tags} />
      <div className="row" style={{ marginTop: 18 }}>
        <Link className="button primary" href={'/demo-projects/' + item.slug}>Project notes</Link>
        {item.liveUrl && <a className="button" href={item.liveUrl}>Live demo</a>}
        {item.repoUrl && <a className="button" href={item.repoUrl}>GitHub</a>}
      </div>
    </article>
  );
}
