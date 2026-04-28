'use client';
import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';
import { TagList } from './TagList';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleCompare } from '@/store/slices/compareSlice';
export function CaseStudyCard({ item }: { item: CaseStudy }) {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.compare.selectedSlugs.includes(item.slug));
  return (
    <article className="card">
      <span className="eyebrow">{item.focusAreas.join(' / ')}</span>
      <h3 className="h3">{item.title}</h3>
      <p className="muted">{item.summary}</p>
      <p><strong>What it shows</strong></p>
      <p className="muted">{item.role}</p>
      <TagList tags={item.tags} />
      <div className="row" style={{ marginTop: 18 }}>
        <Link className="button primary" href={'/case-studies/' + item.slug}>Read case study</Link>
        <button className={'button ' + (selected ? 'primary' : '')} onClick={() => dispatch(toggleCompare(item.slug))}>{selected ? 'Selected' : 'Compare'}</button>
      </div>
    </article>
  );
}
