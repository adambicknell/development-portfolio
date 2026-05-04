import Link from "next/link";
import { navItems, site } from "@/data/site";
import { navIconMap, socialIconMap } from "@/data/navIcons";

const socialLinks = [
  { href: `mailto:${site.email}`, label: "Email", icon: socialIconMap.Email },
  { href: site.github, label: "GitHub", icon: socialIconMap.GitHub },
  { href: site.gitlab, label: "GitLab", icon: socialIconMap.GitLab },
  { href: site.linkedin, label: "LinkedIn", icon: socialIconMap.LinkedIn },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-3">
        <div>
          <strong>{site.name}</strong>
          <p className="muted">{site.role}</p>
          <p className="muted">
            Most of my commercial work has been private company software, so
            this portfolio uses anonymised case studies, selected public demos,
            and freelance client work delivered through Bicknell Digital to show
            how I approach real systems.
          </p>
        </div>
        <div className="grid">
          {navItems.slice(0, 5).map((item) => {
            const Icon = navIconMap[item.label];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="footer-icon-link"
              >
                {Icon ? <Icon aria-hidden="true" /> : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="grid">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className="footer-icon-link">
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
          {(() => {
            const CvIcon = socialIconMap.CV;
            return (
              <Link
                href="/cv/adam-bicknell-cv.pdf"
                className="footer-icon-link"
              >
                <CvIcon aria-hidden="true" />
                <span>Download CV</span>
              </Link>
            );
          })()}
        </div>
      </div>
    </footer>
  );
}
