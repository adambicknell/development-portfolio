export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return <div style={{ marginBottom: 28 }}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2 className="h2">{title}</h2>{children && <div className="lead">{children}</div>}</div>;
}
