'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearFilters, setCaseStudySearch, toggleTag } from '@/store/slices/filtersSlice';
const tags = ['React','TypeScript','Python','Cloud','Azure','Security','SSO','Databases','Internal tools','SaaS','Production support'];
export function CaseStudyFilters() {
  const dispatch = useAppDispatch();
  const { caseStudySearch, activeTags } = useAppSelector(state => state.filters);
  return (
    <div className="card">
      <div className="grid grid-2">
        <input className="input" placeholder="Search case studies..." value={caseStudySearch} onChange={event => dispatch(setCaseStudySearch(event.target.value))} />
        <button className="button" onClick={() => dispatch(clearFilters())}>Clear filters</button>
      </div>
      <div className="row" style={{ marginTop: 16 }}>
        {tags.map(tag => <button key={tag} className={'button ' + (activeTags.includes(tag) ? 'primary' : '')} onClick={() => dispatch(toggleTag(tag))}>{tag}</button>)}
      </div>
    </div>
  );
}
