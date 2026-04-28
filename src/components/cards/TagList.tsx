export function TagList({ tags }: { tags: string[] }) {
  return <div className="row">{tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>;
}
