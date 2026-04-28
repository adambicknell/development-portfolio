import type { CaseStudy } from '@/data/caseStudies';
import type { DemoProject } from '@/data/projects';
import type { SkillGroup } from '@/data/skills';
import type { FocusOption } from '@/data/site';

export function matchesFocus(focusAreas: string[], selectedFocus: FocusOption) {
  return selectedFocus === 'Full stack' || focusAreas.includes(selectedFocus);
}

export function filterCaseStudiesByFocus(items: CaseStudy[], selectedFocus: FocusOption) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}

export function filterProjectsByFocus(items: DemoProject[], selectedFocus: FocusOption) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}

export function filterSkillGroupsByFocus(items: SkillGroup[], selectedFocus: FocusOption) {
  return items.filter((item) => matchesFocus(item.focusAreas, selectedFocus));
}
