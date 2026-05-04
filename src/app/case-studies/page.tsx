"use client";
import { pageMetadata } from '@/lib/schema';
import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { SharedTaxonomyFilters } from "@/components/common/SharedTaxonomyFilters";
import {
  filterItems,
  normalizeFocusList,
  resolveSkill,
  type FilterableItem,
} from "@/lib/taxonomy";
import type { ParentFilter } from "@/data/taxonomy";
import { useAppSelector } from "@/store/hooks";
const MIXED_CARD_PATTERN = [
  "mix-span-2",
  "mix-span-2",
  "mix-span-2",
  "mix-span-3",
  "mix-span-3",
  "mix-span-6",
] as const;

export const metadata = pageMetadata({
  title: 'Case Studies',
  description: 'Anonymised case studies covering delivery of full stack products, platforms, and business systems.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const caseStudyViewMode = useAppSelector(
    (state) => state.preferences.caseStudyViewMode,
  );
  const isCompact = caseStudyViewMode === "compact";
  const [parent, setParent] = useState<string | null>(null);
  const items = caseStudies.map((i) => {
    const inferredFilters = [...i.techStack, ...i.tags]
      .map((term) => resolveSkill(term))
      .flatMap((skill) =>
        skill
          ? [skill.primaryCategory, ...(skill.secondaryCategories ?? [])]
          : [],
      );

    const primaryFilters = Array.from(
      new Set([...normalizeFocusList(i.focusAreas), ...inferredFilters]),
    );

    return {
      ...i,
      primaryFilters,
      visibleSkills: i.techStack,
      hiddenSearchAliases: i.tags,
      searchKeywords: [i.title, i.summary, i.problem, i.role],
    };
  }) as ((typeof caseStudies)[number] & FilterableItem)[];
  const filtered = useMemo(
    () => filterItems(items, parent as ParentFilter | null, null, ""),
    [items, parent],
  );
  return (
    <section className="section">
      <div className="container">
        <div className="case-studies-hero-layout page-intro-row">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Commercial proof</span>
            <h1 className="h1">Case studies</h1>
            <p className="lead">
              Anonymised delivery stories from regulated and operationally
              critical systems: enterprise SaaS, incident and claims workflows,
              secure identity and access, cloud migration, AI-assisted
              processing, and production support.
            </p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>What these show</strong>
            <p className="muted">
              End-to-end ownership across discovery, architecture,
              implementation, and live operations.
            </p>
            <p className="muted">
              These case studies show how I approach real software work across
              React and TypeScript frontends, Python and PHP backends, Azure
              services, authentication and authorisation, data and search
              workflows, AI-assisted processing, secure portals, internal tools,
              SaaS features, WordPress platforms, geospatial experiments, and
              production modelling systems
            </p>
          </div>
        </div>
        <SharedTaxonomyFilters
          selectedParent={parent}
          onParentChange={setParent}
          onClear={() => setParent(null)}
        />
        <p className="muted">
          Showing {filtered.length} of {caseStudies.length} case studies.
        </p>
        <div
          className={`grid case-studies-card-grid ${isCompact ? "animate-grid-single" : "case-study-mixed-grid animate-grid-3"}`}
        >
          {filtered.map((item, index) => (
            <div
              className={
                isCompact
                  ? ""
                  : MIXED_CARD_PATTERN[index % MIXED_CARD_PATTERN.length]
              }
              key={item.slug}
            >
              <CaseStudyCard item={item} compact={isCompact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
