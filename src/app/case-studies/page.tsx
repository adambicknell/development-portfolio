'use client';
import { useMemo, useState } from 'react';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { CompareDrawer } from '@/components/case-studies/CompareDrawer';
import { caseStudies } from '@/data/caseStudies';
import { SharedTaxonomyFilters } from '@/components/common/SharedTaxonomyFilters';
import { filterItems, groupedSkills, type FilterableItem } from '@/lib/taxonomy';
import type { ParentFilter } from '@/data/taxonomy';
import { useAppSelector } from '@/store/hooks';
const skills = groupedSkills();

export default function CaseStudiesPage() {
  const caseStudyViewMode = useAppSelector((state) => state.preferences.caseStudyViewMode);
  const isCompact = caseStudyViewMode === 'compact';
  const [query, setQuery] = useState('');
  const [parent, setParent] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const items = caseStudies.map((i) => ({ ...i, primaryFilters: i.focusAreas, visibleSkills: i.techStack, hiddenSearchAliases: i.tags, searchKeywords: [i.title, i.summary, i.problem, i.role] })) as (typeof caseStudies[number] & FilterableItem)[];
  const filtered = useMemo(() => filterItems(items, parent as ParentFilter | null, skill, query), [items, parent, skill, query]);
  return <section className="section"><div className="container"><div className="space-between"><div className="animate-fade-in-left"><span className="eyebrow">Commercial proof</span><h1 className="h1">Case studies</h1><p className="lead">Anonymised examples based on private commercial systems, internal platforms, SaaS work, secure access, cloud delivery, and production support.</p></div><div className="card animate-fade-in-right"><strong>What these show</strong><p className="muted">Secure access, internal tools, SaaS, cloud, authentication, React, Python, data, and production support.</p></div></div><SharedTaxonomyFilters query={query} onQueryChange={setQuery} selectedParent={parent} onParentChange={setParent} selectedSkill={skill} onSkillChange={setSkill} groupedSkills={skills} /><p className="muted">Showing {filtered.length} of {caseStudies.length} case studies.</p><div className={`grid ${isCompact ? 'animate-grid-single' : 'grid-2 animate-grid-2'}`}>{filtered.map((item)=><CaseStudyCard key={item.slug} item={item} compact={isCompact} />)}</div></div><CompareDrawer /></section>;
}
