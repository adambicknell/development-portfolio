'use client';

import { useMemo, useState } from 'react';
import { FocusSelector } from '@/components/preferences/FocusSelector';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TagList } from '@/components/cards/TagList';
import { skillGroups } from '@/data/skills';
import { useAppSelector } from '@/store/hooks';
import { filterSkillGroupsByFocus } from '@/lib/focus';
import { normalizeFocus } from '@/lib/taxonomy';

export function SkillsPageClient() {
  const selectedFocus = useAppSelector((state) => state.preferences.selectedFocus);
  const [query, setQuery] = useState('');
  const filteredGroups = useMemo(() => filterSkillGroupsByFocus(skillGroups, selectedFocus).filter((group) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return [group.title, group.summary, ...group.skills].join(' ').toLowerCase().includes(q) || Boolean(normalizeFocus(query));
  }), [selectedFocus, query]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Skills</h1>
        <input className='input' placeholder='Search skills or focus areas…' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <div style={{ margin: '20px 0' }}><FocusSelector compact /></div>
        <p className="muted">Showing {filteredGroups.length} of {skillGroups.length} skill groups.</p>
        <div className="grid animate-grid-single">
          {filteredGroups.map((group) => (
            <details className="card" id={group.slug} key={group.slug}>
              <summary><strong>{group.title}</strong></summary>
              <SectionHeader title="Summary">{group.summary}</SectionHeader>
              <p><strong>Core tools</strong></p>
              <TagList tags={group.skills.slice(0,8)} />
              <p><strong>Extended ecosystem</strong></p>
              <TagList tags={group.skills.slice(8)} />
              <p><strong>Related evidence</strong></p>
              <TagList tags={group.related} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
