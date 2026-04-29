'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearFilters, setCaseStudySearch, setProjectSearch, toggleTag } from '@/store/slices/filtersSlice';

type FilterScope = 'caseStudies' | 'projects';

type CaseStudyFiltersProps = {
  tags: string[];
  scope: FilterScope;
};

export function CaseStudyFilters({ tags, scope }: CaseStudyFiltersProps) {
  const dispatch = useAppDispatch();
  const { caseStudySearch, projectSearch, activeTags } = useAppSelector(state => state.filters);
  const searchValue = scope === 'caseStudies' ? caseStudySearch : projectSearch;

  return (
    <div className="card">
      <div className="grid grid-2">
        <input
          className="input"
          placeholder={scope === 'caseStudies' ? 'Search case studies...' : 'Search demo projects...'}
          value={searchValue}
          onChange={(event) =>
            dispatch(scope === 'caseStudies' ? setCaseStudySearch(event.target.value) : setProjectSearch(event.target.value))
          }
        />
        <button className="button" onClick={() => dispatch(clearFilters())}>Clear filters</button>
      </div>
      <div className="row" style={{ marginTop: 16 }}>
        {tags.map(tag => <button key={tag} className={'button ' + (activeTags.includes(tag) ? 'primary' : '')} onClick={() => dispatch(toggleTag(tag))}>{tag}</button>)}
      </div>
    </div>
  );
}
