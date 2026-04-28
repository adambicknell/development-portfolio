'use client';

import { FocusSelector } from '@/components/preferences/FocusSelector';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { CaseStudyFilters } from '@/components/case-studies/CaseStudyFilters';
import { CompareDrawer } from '@/components/case-studies/CompareDrawer';
import { caseStudies } from '@/data/caseStudies';
import { useAppSelector } from '@/store/hooks';
import { joinSearchFields } from '@/lib/filter';
import { filterCaseStudiesByFocus } from '@/lib/focus';

export default function CaseStudiesPage() {
  const { selectedFocus, caseStudyViewMode } = useAppSelector((state) => state.preferences);
  const { caseStudySearch, activeTags } = useAppSelector((state) => state.filters);

  const filtered = filterCaseStudiesByFocus(caseStudies, selectedFocus)
    .filter(
      (item) =>
        activeTags.length === 0 ||
        activeTags.some((tag) => item.tags.includes(tag) || item.techStack.includes(tag))
    )
    .filter((item) =>
      joinSearchFields([
        item.title,
        item.summary,
        item.problem,
        item.role,
        item.techStack,
        item.tags
      ]).includes(caseStudySearch.toLowerCase())
    );

  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Commercial proof</span>
            <h1 className="h1">Case studies</h1>
            <p className="lead">
              Anonymised examples based on private commercial systems, internal
              platforms, SaaS work, secure access, cloud delivery, and production
              support.
            </p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>What these show</strong>
            <p className="muted">
              Secure access, internal tools, SaaS, cloud, authentication, React,
              Python, data, and production support.
            </p>
          </div>
        </div>

        <div className="grid" style={{ margin: '28px 0' }}>
          <FocusSelector compact />
          <CaseStudyFilters />
        </div>

        <p className="muted">
          Showing {filtered.length} of {caseStudies.length} case studies. View mode:{' '}
          {caseStudyViewMode}
        </p>

        <div className={caseStudyViewMode === 'cards' ? 'grid grid-2 animate-grid-2' : 'grid animate-grid-single'}>
          {filtered.map((item) => (
            <CaseStudyCard key={item.slug} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card">
            <h2>No case studies match those filters.</h2>
            <p className="muted">Try removing one filter or switching the hiring focus.</p>
          </div>
        )}
      </div>
      <CompareDrawer />
    </section>
  );
}
