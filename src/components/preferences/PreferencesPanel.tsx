'use client';
import { focusOptions, FocusOption } from '@/data/site';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPreferencesOpen } from '@/store/slices/uiSlice';
import { resetPreferences, setCaseStudyViewMode, setProjectViewMode, setReducedMotion, setSelectedFocus, setTheme, ThemeMode } from '@/store/slices/preferencesSlice';
export function PreferencesPanel() {
  const open = useAppSelector(state => state.ui.preferencesOpen);
  const prefs = useAppSelector(state => state.preferences);
  const dispatch = useAppDispatch();
  if (!open) return null;
  return (
    <div className="overlay" onClick={() => dispatch(setPreferencesOpen(false))}>
      <section className="modal" role="dialog" aria-modal="true" aria-label="Preferences" onClick={event => event.stopPropagation()}>
        <div className="space-between"><h2 className="h2">Preferences</h2><button className="button" onClick={() => dispatch(setPreferencesOpen(false))}>Close</button></div>
        <div className="grid grid-2">
          <div className="card-soft"><h3>Theme</h3><div className="row">{(['light','dark','system'] as ThemeMode[]).map(theme => <button key={theme} className={'button ' + (prefs.theme === theme ? 'primary' : '')} onClick={() => dispatch(setTheme(theme))}>{theme}</button>)}</div></div>
          <div className="card-soft"><h3>Hiring focus</h3><select className="select" value={prefs.selectedFocus} onChange={event => dispatch(setSelectedFocus(event.target.value as FocusOption))}>{focusOptions.map(option => <option key={option}>{option}</option>)}</select></div>
          <div className="card-soft"><h3>Motion</h3><label className="row"><input type="checkbox" checked={prefs.reducedMotion} onChange={event => dispatch(setReducedMotion(event.target.checked))} /> Reduce motion</label></div>
          <div className="card-soft"><h3>View modes</h3><div className="row"><button className={'button ' + (prefs.caseStudyViewMode === 'cards' ? 'primary' : '')} onClick={() => dispatch(setCaseStudyViewMode('cards'))}>Case cards</button><button className={'button ' + (prefs.caseStudyViewMode === 'compact' ? 'primary' : '')} onClick={() => dispatch(setCaseStudyViewMode('compact'))}>Case compact</button><button className={'button ' + (prefs.projectViewMode === 'cards' ? 'primary' : '')} onClick={() => dispatch(setProjectViewMode('cards'))}>Project cards</button><button className={'button ' + (prefs.projectViewMode === 'compact' ? 'primary' : '')} onClick={() => dispatch(setProjectViewMode('compact'))}>Project compact</button></div></div>
        </div>
        <button className="button" onClick={() => dispatch(resetPreferences())}>Reset preferences</button>
      </section>
    </div>
  );
}
