import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type UiState = { mobileMenuOpen: boolean; commandPaletteOpen: boolean; preferencesOpen: boolean };
const initialState: UiState = { mobileMenuOpen: false, commandPaletteOpen: false, preferencesOpen: false };
const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => { state.mobileMenuOpen = action.payload; },
    setCommandPaletteOpen: (state, action: PayloadAction<boolean>) => { state.commandPaletteOpen = action.payload; },
    toggleCommandPalette: (state) => { state.commandPaletteOpen = !state.commandPaletteOpen; },
    setPreferencesOpen: (state, action: PayloadAction<boolean>) => { state.preferencesOpen = action.payload; }
  }
});
export const { setMobileMenuOpen, setCommandPaletteOpen, toggleCommandPalette, setPreferencesOpen } = slice.actions;
export default slice.reducer;
