'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { TagList } from '@/components/cards/TagList';
import { FocusSelector } from '@/components/preferences/FocusSelector';
import { experience } from '@/data/experience';
import { filterExperienceByFocus } from '@/lib/focus';
import { useAppSelector } from '@/store/hooks';

export function ExperiencePageClient() {
  const selectedFocus = useAppSelector((state) => state.preferences.selectedFocus);
  const [query, setQuery] = useState('');

  const filteredExperience = useMemo(
    () => filterExperienceByFocus(experience, selectedFocus).filter((item) => {
      const q = query.toLowerCase();
      if (!q) return true;
      return [item.company, item.role, item.summary, ...item.responsibilities, ...item.techStack, ...item.outcomes].join(' ').toLowerCase().includes(q);
    }),
    [selectedFocus, query]
  );

  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Experience</h1>
        <p className="lead">Full timeline with detailed responsibilities, stack, and outcomes mapped to portfolio evidence.</p>
        <input className="input" placeholder="Search roles, tools, responsibilities…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div style={{ margin: '20px 0' }}><FocusSelector compact /></div>
        <p className="muted">Showing {filteredExperience.length} of {experience.length} roles.</p>

        <div className="grid animate-grid-single">
          {filteredExperience.map((item) => (
            <article id={`${item.company}-${item.role}`.toLowerCase().replace(/\s+/g, '-')} className="card" key={item.company + item.role}>
              <span className="eyebrow">{item.dates}</span>
              <h2>{item.company}</h2>
              <h3>{item.role}</h3>
              <p className="muted">{item.summary}</p>
              <p><strong>Responsibilities</strong></p><ul>{item.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
              <p><strong>Tech stack</strong></p><TagList tags={item.techStack} />
              <p><strong>Outcomes</strong></p><ul>{item.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
              {item.relatedCaseStudySlug && <p><Link className="button" href={`/case-studies/${item.relatedCaseStudySlug}`}>Related case study</Link></p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
