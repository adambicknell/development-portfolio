'use client';
import Link from 'next/link';
import { navItems, site } from '@/data/site';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMobileMenuOpen, toggleCommandPalette } from '@/store/slices/uiSlice';
import { ThemeToggle } from '@/components/preferences/ThemeToggle';
import { PreferencesPanel } from '@/components/preferences/PreferencesPanel';

export function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.ui.mobileMenuOpen);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">{site.name}<span>{site.role}</span></Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="row no-print">
          <ThemeToggle />
          <button className="button" onClick={() => dispatch(toggleCommandPalette())}>Cmd K</button>
          <button className="button mobile-menu-button" onClick={() => dispatch(setMobileMenuOpen(!open))}>Menu</button>
        </div>
      </div>
      {open && (
        <div className="container mobile-panel">
          {navItems.map(item => <Link key={item.href} href={item.href} onClick={() => dispatch(setMobileMenuOpen(false))}>{item.label}</Link>)}
          <button className="button" onClick={() => dispatch(toggleCommandPalette())}>Open command palette</button>
        </div>
      )}
      <PreferencesPanel />
    </header>
  );
}
