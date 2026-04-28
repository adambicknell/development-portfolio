import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type FiltersState = { caseStudySearch: string; projectSearch: string; activeTags: string[] };
const initialState: FiltersState = { caseStudySearch: '', projectSearch: '', activeTags: [] };
const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCaseStudySearch: (state, action: PayloadAction<string>) => { state.caseStudySearch = action.payload; },
    setProjectSearch: (state, action: PayloadAction<string>) => { state.projectSearch = action.payload; },
    toggleTag: (state, action: PayloadAction<string>) => {
      state.activeTags = state.activeTags.includes(action.payload) ? state.activeTags.filter(tag => tag !== action.payload) : [...state.activeTags, action.payload];
    },
    clearCaseStudyTagFilters: (state) => { state.activeTags = []; },
    clearFilters: (state) => { state.caseStudySearch = ''; state.projectSearch = ''; state.activeTags = []; }
  }
});
export const { setCaseStudySearch, setProjectSearch, toggleTag, clearCaseStudyTagFilters, clearFilters } = slice.actions;
export default slice.reducer;
