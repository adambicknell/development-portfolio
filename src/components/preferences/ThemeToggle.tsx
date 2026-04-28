'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPreferencesOpen } from '@/store/slices/uiSlice';
export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.preferences.theme);
  return <button className="button ghost" onClick={() => dispatch(setPreferencesOpen(true))} aria-label="Open preferences">{theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System'}</button>;
}
