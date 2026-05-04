'use client';
import { useId, useMemo, useState } from 'react';
import { parentFilters } from '@/lib/taxonomy';

type Props = {
  selectedParent: string | null;
  onParentChange: (v: string | null) => void;
  onClear: () => void;
  visibleCount?: number;
};

export function SharedTaxonomyFilters({ selectedParent, onParentChange, onClear, visibleCount = 4 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const filtersId = useId();
  const hasOverflow = parentFilters.length > visibleCount;

  const visibleFilters = useMemo(() => {
    if (!hasOverflow || isExpanded) return parentFilters;
    return parentFilters.slice(0, visibleCount);
  }, [hasOverflow, isExpanded, visibleCount]);

  return <div className="card">
    <div className="row" style={{ marginTop: 4 }}>
      <button className="button" onClick={onClear} type="button">Clear filters</button>
      <div className="row" id={filtersId} role="group" aria-label="Taxonomy filters">
        {visibleFilters.map((p) => (
          <button
            key={p}
            className={'button ' + (selectedParent === p ? 'primary' : '')}
            onClick={() => onParentChange(selectedParent === p ? null : p)}
            aria-pressed={selectedParent === p}
            type="button"
          >
            {p}
          </button>
        ))}
      </div>
      {hasOverflow ? (
        <button
          aria-controls={filtersId}
          aria-expanded={isExpanded}
          className="button"
          onClick={() => setIsExpanded((current) => !current)}
          type="button"
        >
          {isExpanded ? 'Hide Filters' : 'Show All Filters'}
        </button>
      ) : null}
    </div>
  </div>;
}
