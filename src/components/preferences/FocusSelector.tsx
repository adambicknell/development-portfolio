"use client";
import { focusOptions } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedFocus } from "@/store/slices/preferencesSlice";
export function FocusSelector({ compact = false }: { compact?: boolean }) {
  const selected = useAppSelector((state) => state.preferences.selectedFocus);
  const dispatch = useAppDispatch();
  return (
    <div className="card">
      {!compact && (
        <>
          <span className="eyebrow">View portfolio by focus</span>
          <h2 className="h3">What are you looking for?</h2>
          <p className="muted">
            Choose an area and the site highlights related proof.
          </p>
        </>
      )}
      <div className="row" role="group" aria-label="Portfolio focus">
        {focusOptions.map((option) => (
          <button
            key={option}
            className={"button " + (selected === option ? "primary" : "")}
            onClick={() => dispatch(setSelectedFocus(selected === option ? null : option))}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="muted">Selected: {selected ?? 'All'}</p>
    </div>
  );
}
