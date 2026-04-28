import Link from 'next/link';
import { navItems, site } from '@/data/site';
export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-3">
        <div><strong>{site.name}</strong><p className="muted">{site.role}</p><p className="muted">{site.headline}</p></div>
        <div className="grid">{navItems.slice(0,5).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="grid">
          <a href={'mailto:' + site.email}>Email</a>
          <a href={site.github}>GitHub</a>
          <a href={site.linkedin}>LinkedIn</a>
          <Link href="/cv">CV</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
