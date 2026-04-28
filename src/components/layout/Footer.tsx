import Link from 'next/link';
import { navItems, site } from '@/data/site';
import { navIconMap } from '@/data/navIcons';

const socialIconMap: Record<string, string> = {
  Email: '✉️',
  GitHub: '🐙',
  GitLab: '🦊',
  LinkedIn: '🔗',
  CV: '📄',
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-3">
        <div><strong>{site.name}</strong><p className="muted">{site.role}</p><p className="muted">{site.headline}</p></div>
        <div className="grid">
          {navItems.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href} className="footer-icon-link">
              <span aria-hidden="true">{navIconMap[item.label] ?? '•'}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="grid">
          <a href={'mailto:' + site.email} className="footer-icon-link">
            <span aria-hidden="true">{socialIconMap.Email}</span>
            <span>Email</span>
          </a>
          <a href={site.github} className="footer-icon-link">
            <span aria-hidden="true">{socialIconMap.GitHub}</span>
            <span>GitHub</span>
          </a>
          <a href={site.gitlab} className="footer-icon-link">
            <span aria-hidden="true">{socialIconMap.GitLab}</span>
            <span>GitLab</span>
          </a>
          <a href={site.linkedin} className="footer-icon-link">
            <span aria-hidden="true">{socialIconMap.LinkedIn}</span>
            <span>LinkedIn</span>
          </a>
          <Link href="/cv" className="footer-icon-link">
            <span aria-hidden="true">{socialIconMap.CV}</span>
            <span>CV</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
