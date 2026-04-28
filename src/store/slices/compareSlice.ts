import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type CompareState = { selectedSlugs: string[]; drawerOpen: boolean };
const initialState: CompareState = { selectedSlugs: [], drawerOpen: false };
const slice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    toggleCompare: (state, action: PayloadAction<string>) => {
      if (state.selectedSlugs.includes(action.payload)) {
        state.selectedSlugs = state.selectedSlugs.filter(slug => slug !== action.payload);
      } else if (state.selectedSlugs.length < 2) {
        state.selectedSlugs.push(action.payload);
      }
      state.drawerOpen = state.selectedSlugs.length === 2;
    },
    clearCompare: (state) => { state.selectedSlugs = []; state.drawerOpen = false; },
    setCompareOpen: (state, action: PayloadAction<boolean>) => { state.drawerOpen = action.payload; }
  }
});
export const { toggleCompare, clearCompare, setCompareOpen } = slice.actions;
export default slice.reducer;
