import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type UiState = { mobileMenuOpen: boolean; preferencesOpen: boolean };
const initialState: UiState = { mobileMenuOpen: false, preferencesOpen: false };
const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => { state.mobileMenuOpen = action.payload; },
    setPreferencesOpen: (state, action: PayloadAction<boolean>) => { state.preferencesOpen = action.payload; }
  }
});
export const { setMobileMenuOpen, setPreferencesOpen } = slice.actions;
export default slice.reducer;
