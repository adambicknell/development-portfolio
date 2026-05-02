'use client';
import { parentFilters } from '@/lib/taxonomy';

type Props = {
  selectedParent: string | null;
  onParentChange: (v: string | null) => void;
  onClear: () => void;
};

export function SharedTaxonomyFilters({ selectedParent, onParentChange, onClear }: Props) {
  return <div className="card">
    <div className="row" style={{ marginTop: 4 }}>
      {parentFilters.map((p) => <button key={p} className={'button ' + (selectedParent === p ? 'primary' : '')} onClick={() => onParentChange(selectedParent === p ? null : p)}>{p}</button>)}
      <button className="button" onClick={onClear}>Clear filters</button>
    </div>
  </div>;
}
