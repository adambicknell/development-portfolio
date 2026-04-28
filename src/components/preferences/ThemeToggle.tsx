'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPreferencesOpen } from '@/store/slices/uiSlice';
export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.preferences.theme);
  const isLight = theme === 'light';
  const icon = isLight ? '💡' : theme === 'dark' ? '🌙' : '🌓';
  const label = `Open preferences (current theme: ${theme})`;
  return (
    <button
      className="button ghost icon-button"
      onClick={() => dispatch(setPreferencesOpen(true))}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
