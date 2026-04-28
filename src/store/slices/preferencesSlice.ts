import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FocusOption } from '@/data/site';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ViewMode = 'cards' | 'compact';
export type PreferencesState = { theme: ThemeMode; selectedFocus: FocusOption; reducedMotion: boolean; caseStudyViewMode: ViewMode; projectViewMode: ViewMode };
const initialState: PreferencesState = { theme: 'system', selectedFocus: 'Full stack', reducedMotion: false, caseStudyViewMode: 'cards', projectViewMode: 'cards' };
const storageKey = 'adam-portfolio-preferences';
export function applyTheme(theme: ThemeMode) {
  if (typeof window === 'undefined') return;
  const resolved = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  document.documentElement.dataset.theme = resolved;
}
export function persistPreferences(state: PreferencesState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}
const slice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    hydratePreferences: (state) => {
      if (typeof window === 'undefined') return;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      try { Object.assign(state, JSON.parse(raw)); } catch {}
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => { state.theme = action.payload; },
    setSelectedFocus: (state, action: PayloadAction<FocusOption>) => { state.selectedFocus = action.payload; },
    setReducedMotion: (state, action: PayloadAction<boolean>) => { state.reducedMotion = action.payload; },
    setCaseStudyViewMode: (state, action: PayloadAction<ViewMode>) => { state.caseStudyViewMode = action.payload; },
    setProjectViewMode: (state, action: PayloadAction<ViewMode>) => { state.projectViewMode = action.payload; },
    resetPreferences: () => initialState
  }
});
export const { hydratePreferences, setTheme, setSelectedFocus, setReducedMotion, setCaseStudyViewMode, setProjectViewMode, resetPreferences } = slice.actions;
export default slice.reducer;
