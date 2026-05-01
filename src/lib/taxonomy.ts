import { canonicalFocusAreas, type CanonicalFocusArea, focusAliases } from '@/data/taxonomy';

const canonicalSet = new Set(canonicalFocusAreas);

export function normalizeFocus(value: string): CanonicalFocusArea | null {
  if (canonicalSet.has(value as CanonicalFocusArea)) return value as CanonicalFocusArea;
  return focusAliases[value.trim().toLowerCase()] ?? null;
}

export function normalizeFocusList(values: string[]): CanonicalFocusArea[] {
  return [...new Set(values.map(normalizeFocus).filter((v): v is CanonicalFocusArea => Boolean(v)))];
}
