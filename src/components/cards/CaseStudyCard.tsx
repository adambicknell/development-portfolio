'use client';
import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';
import { TagList } from './TagList';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleCompare } from '@/store/slices/compareSlice';
export function CaseStudyCard({ item, compact = false }: { item: CaseStudy; compact?: boolean }) {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.compare.selectedSlugs.includes(item.slug));
  return (
    <article className={"card " + (compact ? 'card-compact' : '')}>
      <span className="eyebrow">{item.focusAreas.join(' / ')}</span>
      <h3 className="h3">{item.title}</h3>
      <p className="muted">{item.summary}</p>
      {!compact && <p><strong>What it shows</strong></p>}
      <p className="muted">{item.role}</p>
      <TagList tags={compact ? item.tags.slice(0, 5) : item.tags} />
      <div className="row" style={{ marginTop: 18 }}>
        <Link className="button primary" href={'/case-studies/' + item.slug}>Read case study</Link>
        <button className={'button ' + (selected ? 'primary' : '')} onClick={() => dispatch(toggleCompare(item.slug))}>{selected ? 'Selected' : 'Compare'}</button>
      </div>
    </article>
  );
}
