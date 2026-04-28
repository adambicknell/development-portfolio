import Link from 'next/link';
export const metadata = { title: 'CV' };
export default function Page() {
  return <section className="section"><div className="container"><span className="eyebrow">CV</span><h1 className="h1">CV</h1><p className="lead">Download my current CV or view the portfolio sections that expand on it.</p><div className="row section-tight"><a className="button primary" href="/cv/adam-bicknell-cv.pdf">Download CV PDF</a><Link className="button" href="/experience">View experience</Link></div><div className="row" style={{ marginTop: 28 }}><Link className="button primary" href="/case-studies">View case studies</Link><Link className="button" href="/demo-projects">View demo projects</Link></div></div></section>;
}
