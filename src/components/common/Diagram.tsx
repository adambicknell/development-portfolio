export function Diagram({ nodes }: { nodes: string[] }) {
  return <div className="card-soft"><div className="diagram-row">{nodes.map((node, index) => <span key={node} className="row"><span className="diagram-node">{node}</span>{index < nodes.length - 1 && <span className="arrow">→</span>}</span>)}</div></div>;
}
