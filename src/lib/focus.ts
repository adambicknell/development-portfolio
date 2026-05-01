import type { CaseStudy } from '@/data/caseStudies';
import type { DemoProject } from '@/data/projects';
import type { SkillGroup } from '@/data/skills';
import type { FocusOption } from '@/data/site';
import { normalizeFocus } from '@/lib/taxonomy';

export function matchesFocus(focusAreas: string[], selectedFocus: FocusOption | null) {
  if (selectedFocus === null || selectedFocus === 'Full Stack Delivery') return true;
  const normalized = new Set(focusAreas.map((focus) => normalizeFocus(focus)).filter(Boolean));
  return normalized.has(selectedFocus);
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
