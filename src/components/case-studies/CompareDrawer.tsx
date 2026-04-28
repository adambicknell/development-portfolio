'use client';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCompare, setCompareOpen } from '@/store/slices/compareSlice';
export function CompareDrawer() {
  const dispatch = useAppDispatch();
  const { drawerOpen, selectedSlugs } = useAppSelector(state => state.compare);
  const selected = caseStudies.filter(item => selectedSlugs.includes(item.slug));
  if (!drawerOpen || selected.length !== 2) return null;
  return (
    <div className="overlay" onClick={() => dispatch(setCompareOpen(false))}>
      <section className="modal" role="dialog" aria-modal="true" aria-label="Compare case studies" onClick={event => event.stopPropagation()}>
        <div className="space-between"><h2 className="h2">Compare case studies</h2><button className="button" onClick={() => dispatch(setCompareOpen(false))}>Close</button></div>
        <div className="grid grid-2">
          {selected.map(item => <div key={item.slug} className="card-soft"><h3>{item.title}</h3><p>{item.summary}</p><p><strong>Role</strong></p><p className="muted">{item.role}</p><p><strong>Stack</strong></p><p className="muted">{item.techStack.join(', ')}</p><Link className="button primary" href={'/case-studies/' + item.slug}>Open</Link></div>)}
        </div>
        <button className="button" style={{ marginTop: 16 }} onClick={() => dispatch(clearCompare())}>Clear comparison</button>
      </section>
    </div>
  );
}
