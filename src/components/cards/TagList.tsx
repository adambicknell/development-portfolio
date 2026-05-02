export function TagList({ tags, maxVisible = tags.length }: { tags: string[]; maxVisible?: number }) {
  const uniqueTags = Array.from(new Set(tags));
  const visibleTags = uniqueTags.slice(0, maxVisible);
  const hiddenTags = uniqueTags.slice(maxVisible);
  const hiddenTagsText = hiddenTags.join(', ');

  return (
    <div className="row">
      {visibleTags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
      {hiddenTags.length > 0 && (
        <span className="tag tag-more" tabIndex={0}>
          More...
          <span className="tag-tooltip" role="tooltip">
            {hiddenTagsText}
          </span>
        </span>
      )}
    </div>
  );
}
