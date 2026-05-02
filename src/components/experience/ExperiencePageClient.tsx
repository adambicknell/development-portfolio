"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { experience } from "@/data/experience";
import { TagList } from "@/components/cards/TagList";
import { SharedTaxonomyFilters } from "@/components/common/SharedTaxonomyFilters";
import {
  filterItems,
  groupedSkills,
  type FilterableItem,
} from "@/lib/taxonomy";
import type { ParentFilter } from "@/data/taxonomy";

const skills = groupedSkills();

export function ExperiencePageClient() {
  const [query, setQuery] = useState("");
  const [parent, setParent] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);

  const items = experience.map((e) => ({
    ...e,
    primaryFilters: e.focusAreas as ParentFilter[],
    visibleSkills: e.techStack,
    hiddenSearchAliases: [],
    searchKeywords: [
      e.company,
      e.role,
      e.summary,
      ...e.responsibilities,
      ...(e.technicalDetails ?? []),
      ...(e.deliveryDetails ?? []),
      ...(e.portfolioAngles ?? []),
      ...e.outcomes,
    ],
  })) as ((typeof experience)[number] & FilterableItem)[];

  const filtered = useMemo(
    () => filterItems(items, parent as ParentFilter | null, skill, query),
    [items, parent, skill, query],
  );

  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Commercial experience</span>
            <h1 className="h1">Experience</h1>
            <p className="lead">
              I have worked across full stack product development, internal
              tools, SaaS platforms, secure client systems, modelling platforms,
              cloud infrastructure, databases, authentication, and production
              support.
            </p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>Experience snapshot</strong>
            <p className="muted">
              React, Python, SaaS, internal systems, secure access, cloud,
              CI/CD, databases, auth, and production support.
            </p>
            <p>
              <Link className="text-link" href="/cv">
                Download my CV (PDF)
              </Link>
            </p>
          </div>
        </div>
        <SharedTaxonomyFilters
          query={query}
          onQueryChange={setQuery}
          selectedParent={parent}
          onParentChange={setParent}
          selectedSkill={skill}
          onSkillChange={setSkill}
          groupedSkills={skills}
        />
        <p className="muted">
          Showing {filtered.length} of {experience.length} experience entries.
        </p>
        <div className="grid animate-grid-single experience-groups">
          {filtered.map((item) => (
            <article
              className="card"
              key={item.company + item.role + item.dates}
            >
              <details className="card-accordion experience-accordion" open>
                <summary>
                  <h2>{item.company}</h2>
                  <p className="muted">
                    {item.role} · {item.dates}
                  </p>
                  {item.optional ? (
                    <p className="muted">
                      <small>Early career</small>
                    </p>
                  ) : null}
                </summary>
                <p className="muted">{item.summary}</p>
                <h3>What I worked on</h3>
                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                {item.technicalDetails?.length ? (
                  <>
                    <h3>Technical detail</h3>
                    <ul>
                      {item.technicalDetails.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {item.outcomes.length ? (
                  <>
                    <h3>Delivery and support</h3>
                    <ul>
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {item.portfolioAngles?.length ? (
                  <>
                    <h3>Experience themes</h3>
                    <ul>
                      {item.portfolioAngles.map((angle) => (
                        <li key={angle}>{angle}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <TagList tags={item.techStack} />
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
