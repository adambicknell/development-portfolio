"use client";

import { useId, useState } from "react";

type TagListProps = {
  tags: string[];
  maxVisible?: number;
  className?: string;
  chipClassName?: string;
  moreLabel?: string;
  groupLabel?: string;
};

export function TagList({
  tags,
  maxVisible = 6,
  className,
  chipClassName,
  moreLabel = "More...",
  groupLabel = "Tags",
}: TagListProps) {
  const [showHidden, setShowHidden] = useState(false);
  const uniqueTags = Array.from(new Set(tags));
  const visibleTags = uniqueTags.slice(0, maxVisible);
  const hiddenTags = uniqueTags.slice(maxVisible);
  const hiddenContainerId = useId();

  return (
    <div
      className={"row" + (className ? ` ${className}` : "")}
      role="group"
      aria-label={groupLabel}
    >
      {visibleTags.map((tag) => (
        <span
          key={tag}
          className={"tag" + (chipClassName ? ` ${chipClassName}` : "")}
        >
          {tag}
        </span>
      ))}
      {hiddenTags.length > 0 && (
        <>
          <button
            type="button"
            className={
              "tag tag-more" + (chipClassName ? ` ${chipClassName}` : "")
            }
            aria-expanded={showHidden}
            aria-controls={hiddenContainerId}
            onClick={() => setShowHidden((current) => !current)}
          >
            {showHidden ? "Show fewer" : moreLabel}
          </button>
          <div
            id={hiddenContainerId}
            hidden={!showHidden}
            className="row"
            aria-label={`More ${groupLabel.toLowerCase()}`}
          >
            {hiddenTags.map((tag) => (
              <span
                key={tag}
                className={"tag" + (chipClassName ? ` ${chipClassName}` : "")}
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
