"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPreferencesOpen } from "@/store/slices/uiSlice";
import {
  resetPreferences,
  setCaseStudyViewMode,
  setProjectViewMode,
  setReducedMotion,
  setTheme,
  ThemeMode,
} from "@/store/slices/preferencesSlice";

export function PreferencesPanel() {
  const open = useAppSelector((state) => state.ui.preferencesOpen);
  const prefs = useAppSelector((state) => state.preferences);
  const dispatch = useAppDispatch();
  if (!open) return null;
  return (
    <div
      className="overlay"
      onClick={() => dispatch(setPreferencesOpen(false))}
    >
      <section
        className="modal modal-settings"
        role="dialog"
        aria-modal="true"
        aria-label="Preferences"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-between">
          <h2 className="h2">Preferences</h2>
          <button
            className="button"
            onClick={() => dispatch(setPreferencesOpen(false))}
          >
            Close
          </button>
        </div>
        <div className="preferences-layout">
          <div className="preferences-section">
            <h3>Theme</h3>
            <div className="row">
              {(["light", "dark", "system"] as ThemeMode[]).map((theme) => (
                <button
                  key={theme}
                  className={
                    "button " + (prefs.theme === theme ? "primary" : "")
                  }
                  onClick={() => dispatch(setTheme(theme))}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
          <div className="preferences-section">
            <h3>Animation</h3>
            <label className="row">
              <input
                type="checkbox"
                checked={prefs.reducedMotion}
                onChange={(event) =>
                  dispatch(setReducedMotion(event.target.checked))
                }
              />{" "}
              Turn off animations
            </label>
          </div>
          <div className="preferences-section">
            <h3>Case studies page view</h3>
            <div className="row">
              <button
                className={
                  "button " +
                  (prefs.caseStudyViewMode === "cards" ? "primary" : "")
                }
                onClick={() => dispatch(setCaseStudyViewMode("cards"))}
              >
                Cards
              </button>
              <button
                className={
                  "button " +
                  (prefs.caseStudyViewMode === "compact" ? "primary" : "")
                }
                onClick={() => dispatch(setCaseStudyViewMode("compact"))}
              >
                Compact
              </button>
            </div>
          </div>
          <div className="preferences-section">
            <h3>Demo projects page view</h3>
            <div className="row">
              <button
                className={
                  "button " +
                  (prefs.projectViewMode === "cards" ? "primary" : "")
                }
                onClick={() => dispatch(setProjectViewMode("cards"))}
              >
                Projects
              </button>
              <button
                className={
                  "button " +
                  (prefs.projectViewMode === "compact" ? "primary" : "")
                }
                onClick={() => dispatch(setProjectViewMode("compact"))}
              >
                Compact
              </button>
            </div>
          </div>
        </div>
        <br />
        <button className="button" onClick={() => dispatch(resetPreferences())}>
          Reset preferences
        </button>
      </section>
    </div>
  );
}
