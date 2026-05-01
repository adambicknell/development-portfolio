'use client';
import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';
import { SharedTaxonomyFilters } from '@/components/common/SharedTaxonomyFilters';
import { filterItems, groupedSkills, type FilterableItem } from '@/lib/taxonomy';
import type { ParentFilter } from '@/data/taxonomy';
const skills = groupedSkills();
export function DemoProjectsPageClient() {
  const [query, setQuery] = useState('');
  const [parent, setParent] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const items = projects.map((i) => ({ ...i, primaryFilters: i.focusAreas as ParentFilter[], visibleSkills: i.techStack, hiddenSearchAliases: i.tags, searchKeywords: [i.title, i.summary, i.problem, ...i.features] })) as (typeof projects[number] & FilterableItem)[];
  const filtered = useMemo(() => filterItems(items, parent as ParentFilter | null, skill, query), [items, parent, skill, query]);
  return <section className="section"><div className="container"><div className="space-between"><div className="animate-fade-in-left"><span className="eyebrow">Public proof</span><h1 className="h1">Demo projects</h1><p className="lead">Public projects built to show practical full stack product work: React interfaces, APIs, authentication, role based permissions, databases, testing, deployment, and business workflows.</p></div><div className="card animate-fade-in-right"><strong>What these prove</strong><p className="muted">Public repos, live demos, React and TypeScript, API design, auth, databases, testing, deployment notes, and readable README files.</p></div></div><SharedTaxonomyFilters query={query} onQueryChange={setQuery} selectedParent={parent} onParentChange={setParent} selectedSkill={skill} onSkillChange={setSkill} groupedSkills={skills} /><p className="muted">Showing {filtered.length} of {projects.length} demo projects.</p><div className='grid grid-3 animate-grid-3'>{filtered.map((item)=><ProjectCard key={item.slug} item={item} />)}</div></div></section>;
}
