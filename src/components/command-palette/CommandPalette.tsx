'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '@/data/site';
import { caseStudies } from '@/data/caseStudies';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCommandPaletteOpen } from '@/store/slices/uiSlice';
import {
  filterCaseStudiesByFocus,
  filterProjectsByFocus,
  filterSkillGroupsByFocus
} from '@/lib/focus';

export function CommandPalette() {
  const open = useAppSelector((state) => state.ui.commandPaletteOpen);
  const recent = useAppSelector((state) => state.history.recentlyViewed);
  const selectedFocus = useAppSelector((state) => state.preferences.selectedFocus);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        dispatch(setCommandPaletteOpen(!open));
      }
      if (event.key === 'Escape') dispatch(setCommandPaletteOpen(false));
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [dispatch, open]);

  const items = useMemo(
    () => [
      ...navItems.map((item) => ({ label: item.label, href: item.href, type: 'Page' })),
      ...filterCaseStudiesByFocus(caseStudies, selectedFocus).map((item) => ({
        label: item.title,
        href: '/case-studies/' + item.slug,
        type: 'Case study'
      })),
      ...filterProjectsByFocus(projects, selectedFocus).map((item) => ({
        label: item.title,
        href: '/demo-projects/' + item.slug,
        type: 'Project'
      })),
      ...filterSkillGroupsByFocus(skillGroups, selectedFocus).map((item) => ({
        label: item.title,
        href: '/skills#' + item.slug,
        type: 'Skill'
      }))
    ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query, selectedFocus]
  );

  if (!open) return null;

  return (
    <div className="overlay" onClick={() => dispatch(setCommandPaletteOpen(false))}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          className="input"
          placeholder="Search or type a command..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <p className="muted" style={{ marginTop: 10 }}>
          Focus filter active: {selectedFocus}
        </p>
        <div className="grid" style={{ marginTop: 18 }}>
          {items.slice(0, 12).map((item) => (
            <Link
              key={item.type + item.href}
              className="card-soft space-between"
              href={item.href}
              onClick={() => dispatch(setCommandPaletteOpen(false))}
            >
              <span>{item.label}</span>
              <span className="tag">{item.type}</span>
            </Link>
          ))}
          {items.length === 0 && (
            <div className="card-soft">
              <strong>No results</strong>
              <p className="muted">Try React, Python, Cloud, Authentication, SaaS, or Documents.</p>
            </div>
          )}
          {recent.length > 0 && (
            <div className="card-soft">
              <h3>Recently viewed</h3>
              {recent.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => dispatch(setCommandPaletteOpen(false))}
                  className="row"
                >
                  <span>{item.title}</span>
                  <span className="tag">{item.type}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
