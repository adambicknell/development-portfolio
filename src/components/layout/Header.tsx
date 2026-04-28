"use client";
import Link from "next/link";
import { navItems, site } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/slices/uiSlice";
import { ThemeToggle } from "@/components/preferences/ThemeToggle";
import { PreferencesPanel } from "@/components/preferences/PreferencesPanel";
import { navIconMap } from "@/data/navIcons";

export function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img
            className="logo-avatar"
            src="/adam.jpg"
            alt="Adam Bicknell profile photo"
            width={44}
            height={44}
          />
          <span>
            {site.name}
            <span>{site.role}</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-icon-link">
              {navIconMap[item.label] && <span aria-hidden="true">{navIconMap[item.label]}</span>}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="row no-print">
          <ThemeToggle />
          <button
            className="button mobile-menu-button icon-button"
            onClick={() => dispatch(setMobileMenuOpen(!open))}
            aria-label={open ? "Close menu" : "Open menu"}
            title={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="container mobile-panel">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="nav-icon-link"
            >
              {navIconMap[item.label] && <span aria-hidden="true">{navIconMap[item.label]}</span>}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
      <PreferencesPanel />
    </header>
  );
}
