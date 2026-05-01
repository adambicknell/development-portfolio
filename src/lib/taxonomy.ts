import { parentFilters, searchableSkillTerms, skillsDictionary, type ParentFilter } from '@/data/taxonomy';

export type FilterableItem = {
  primaryFilters: ParentFilter[];
  visibleSkills: string[];
  hiddenSearchAliases?: string[];
  searchKeywords?: string[];
};

const skillLookup = new Map(skillsDictionary.map((s) => [s.canonicalName.toLowerCase(), s]));
for (const skill of skillsDictionary) for (const alias of skill.aliases) skillLookup.set(alias.toLowerCase(), skill);

export function resolveSkill(term: string) {
  return skillLookup.get(term.trim().toLowerCase()) ?? null;
}

export function filterItems<T extends FilterableItem>(items: T[], parentFilter: ParentFilter | null, skill: string | null, q: string) {
  let next = items;
  if (parentFilter) next = next.filter((i) => i.primaryFilters.includes(parentFilter));
  if (skill) {
    const resolved = resolveSkill(skill);
    const exact = next.filter((i) => [...i.visibleSkills, ...(i.hiddenSearchAliases ?? []), ...(i.searchKeywords ?? [])].some((v) => v.toLowerCase() === skill.toLowerCase() || (resolved && v.toLowerCase() === resolved.canonicalName.toLowerCase()) || (resolved && resolved.aliases.map(a=>a.toLowerCase()).includes(v.toLowerCase()))));
    if (exact.length > 0) next = exact;
    else if (resolved) next = next.filter((i) => i.primaryFilters.includes(resolved.primaryCategory) || (resolved.secondaryCategories ?? []).some((c) => i.primaryFilters.includes(c)));
  }
  if (!q.trim()) return next;
  const query = q.toLowerCase();
  return next.filter((i) => [...i.primaryFilters, ...i.visibleSkills, ...(i.hiddenSearchAliases ?? []), ...(i.searchKeywords ?? [])].join(' ').toLowerCase().includes(query));
}

export function groupedSkills() {
  const names = [...new Set(searchableSkillTerms)].sort((a, b) => a.localeCompare(b));
  return names.reduce<Record<string, string[]>>((acc, name) => {
    const k = name[0].toUpperCase();
    acc[k] = acc[k] ?? [];
    acc[k].push(name);
    return acc;
  }, {});
}



const parentSet = new Set(parentFilters);
export function normalizeFocus(value: string): ParentFilter | null {
  if (parentSet.has(value as ParentFilter)) return value as ParentFilter;
  const term = value.trim().toLowerCase();
  if (term === 'security/auth') return 'Security & Identity';
  if (term === 'cloud' || term === 'infra') return 'Cloud & Infrastructure';
  if (term === 'full stack') return 'Full Stack Delivery';
  if (term === 'data' || term === 'data & datastores') return 'Data, Search & Datastores';
  return null;
}
export function normalizeFocusList(values: string[]): ParentFilter[] {
  return [...new Set(values.map(normalizeFocus).filter((v): v is ParentFilter => Boolean(v)))];
}

export { parentFilters };

export { skillsDictionary };
