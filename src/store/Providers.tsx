'use client';
import { Provider } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { makeStore } from './store';
import { hydratePreferences, persistPreferences, applyReducedMotionPreference, applyTheme } from './slices/preferencesSlice';
import { hydrateHistory, persistHistory } from './slices/historySlice';

export function Providers({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => makeStore(), []);
  useEffect(() => {
    store.dispatch(hydratePreferences());
    store.dispatch(hydrateHistory());
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      persistPreferences(state.preferences);
      persistHistory(state.history);
      applyTheme(state.preferences.theme);
      applyReducedMotionPreference(state.preferences.reducedMotion);
    });
    applyTheme(store.getState().preferences.theme);
    applyReducedMotionPreference(store.getState().preferences.reducedMotion);
    return unsubscribe;
  }, [store]);
  return <Provider store={store}>{children}</Provider>;
}
