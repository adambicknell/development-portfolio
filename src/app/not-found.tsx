import Link from 'next/link';
export default function NotFound() {
  return <section className="section"><div className="container"><span className="eyebrow">404</span><h1 className="h1">Page not found</h1><p className="lead">This page does not exist, or it has moved.</p><div className="row"><Link className="button primary" href="/">Go home</Link><Link className="button" href="/case-studies">View case studies</Link><Link className="button" href="/demo-projects">View demo projects</Link></div></div></section>;
}
