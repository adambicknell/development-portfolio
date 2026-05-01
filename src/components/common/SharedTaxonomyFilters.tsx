'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { parentFilters } from '@/lib/taxonomy';

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  selectedParent: string | null;
  onParentChange: (v: string | null) => void;
  selectedSkill: string | null;
  onSkillChange: (v: string | null) => void;
  groupedSkills: Record<string, string[]>;
};

export function SharedTaxonomyFilters({ query, onQueryChange, selectedParent, onParentChange, selectedSkill, onSkillChange, groupedSkills }: Props) {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groupedSkills;
    return Object.fromEntries(
      Object.entries(groupedSkills)
        .map(([k, v]) => [k, v.filter((s) => s.toLowerCase().includes(q))])
        .filter(([, v]) => v.length > 0)
    );
  }, [groupedSkills, query]);

  useEffect(() => {
    const firstLetter = query.trim().charAt(0).toUpperCase();
    if (!firstLetter || !open || !listRef.current) return;
    const el = letterRefs.current[firstLetter];
    if (!el) return;
    const container = listRef.current;
    container.scrollTop = Math.max(0, el.offsetTop - container.offsetTop - 6);
  }, [query, open]);

  return <div className="card"><div className="grid grid-2"><div style={{position:'relative'}}><input className="input" placeholder={selectedSkill ? `Search skills or terms… (selected: ${selectedSkill})` : 'Search skills or terms...'} value={query} onFocus={()=>setOpen(true)} onBlur={()=>setTimeout(()=>setOpen(false),120)} onChange={(e)=>{onQueryChange(e.target.value); onSkillChange(null);}} />
    {open && <div ref={listRef} style={{position:'absolute', zIndex:30, width:'100%', maxHeight:280, overflow:'auto', marginTop:6, backgroundColor:'var(--bg)', opacity:1, border:'1px solid var(--border)', borderRadius:12, padding:'8px 10px', boxShadow:'0 10px 24px rgba(0,0,0,0.35)'}}>{Object.entries(filtered as Record<string, string[]>).map(([letter, skills]) => <div key={letter} ref={(el)=>{letterRefs.current[letter]=el;}}><p className='muted' style={{margin:'6px 0'}}><strong>{letter}</strong></p><ul style={{listStyle:'none', margin:0, padding:0}}>{skills.map((s)=><li key={s} style={{padding:'6px 4px', cursor:'pointer'}} onMouseDown={(e)=>{e.preventDefault(); onSkillChange(s); onQueryChange(s); setOpen(false);}}>{s}</li>)}</ul></div>)}</div>}
    </div><button className="button" onClick={()=>{onQueryChange('');onParentChange(null);onSkillChange(null);}}>Clear filters</button></div>
  <div className="row" style={{marginTop: 12}}>{parentFilters.map((p)=><button key={p} className={'button ' + (selectedParent===p?'primary':'')} onClick={()=>onParentChange(selectedParent===p?null:p)}>{p}</button>)}</div></div>;
}
