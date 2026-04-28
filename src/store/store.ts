import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from './slices/preferencesSlice';
import filtersReducer from './slices/filtersSlice';
import uiReducer from './slices/uiSlice';
import historyReducer from './slices/historySlice';
import compareReducer from './slices/compareSlice';

export const makeStore = () => configureStore({
  reducer: {
    preferences: preferencesReducer,
    filters: filtersReducer,
    ui: uiReducer,
    history: historyReducer,
    compare: compareReducer
  }
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
