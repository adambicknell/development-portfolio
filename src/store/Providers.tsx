'use client';
import { Provider } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { makeStore } from './store';
import { hydratePreferences, persistPreferences, applyTheme } from './slices/preferencesSlice';
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
    });
    applyTheme(store.getState().preferences.theme);
    return unsubscribe;
  }, [store]);
  return <Provider store={store}>{children}</Provider>;
}
