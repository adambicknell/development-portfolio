import type { CaseStudy } from '@/data/caseStudies';
import type { ExperienceItem } from '@/data/experience';
import type { DemoProject } from '@/data/projects';
import type { SkillGroup } from '@/data/skills';
import type { FocusOption } from '@/data/site';
import { normalizeFocus } from '@/lib/taxonomy';
import type { ParentFilter } from '@/data/taxonomy';

export function matchesFocus(focusAreas: string[], selectedFocus: FocusOption | null) {
  if (selectedFocus === null || selectedFocus === 'Full Stack Delivery') return true;
  const selected = normalizeFocus(selectedFocus);
  if (!selected) return false;
  const normalized = new Set<ParentFilter>(
    focusAreas.map((focus) => normalizeFocus(focus)).filter((focus): focus is ParentFilter => focus !== null),
  );
  return normalized.has(selected);
}

export function filterCaseStudiesByFocus(items: CaseStudy[], selectedFocus: FocusOption | null) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}

export function filterProjectsByFocus(items: DemoProject[], selectedFocus: FocusOption | null) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}

export function filterSkillGroupsByFocus(items: SkillGroup[], selectedFocus: FocusOption | null) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}

export function filterExperienceByFocus(items: ExperienceItem[], selectedFocus: FocusOption | null) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}
