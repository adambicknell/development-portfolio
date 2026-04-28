import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type ViewedItem = { title: string; href: string; type: string };
type HistoryState = { recentlyViewed: ViewedItem[] };
const initialState: HistoryState = { recentlyViewed: [] };
const storageKey = 'adam-portfolio-history';
export function persistHistory(state: HistoryState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}
const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    hydrateHistory: (state) => {
      if (typeof window === 'undefined') return;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      try { Object.assign(state, JSON.parse(raw)); } catch {}
    },
    addRecentlyViewed: (state, action: PayloadAction<ViewedItem>) => {
      state.recentlyViewed = [action.payload, ...state.recentlyViewed.filter(item => item.href !== action.payload.href)].slice(0, 5);
    },
    clearHistory: (state) => { state.recentlyViewed = []; }
  }
});
export const { hydrateHistory, addRecentlyViewed, clearHistory } = slice.actions;
export default slice.reducer;
