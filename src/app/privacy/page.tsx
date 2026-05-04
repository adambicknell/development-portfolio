import Link from 'next/link';
export const metadata = pageMetadata({
  title: 'Privacy',
  description: 'Privacy policy for adam.bicknell.uk developer portfolio.',
  path: '/privacy',
});
export default function Page() {
  return <section className="section"><div className="container"><span className="eyebrow">Privacy</span><h1 className="h1">Privacy</h1><p className="lead">This site uses local storage to remember display preferences such as theme, portfolio focus, view mode, and recently viewed pages. These preferences stay in your browser and are not stored in a portfolio database.</p><div className="row" style={{ marginTop: 28 }}><Link className="button primary" href="/case-studies">View case studies</Link><Link className="button" href="/demo-projects">View demo projects</Link></div></div></section>;
}
