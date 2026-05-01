"use client";

import Link from "next/link";
import { TagList } from "@/components/cards/TagList";
import { skillsPageIntro, skillsPageSections } from "@/data/skillsPage";

const sectionAnchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export function SkillsPageClient() {
  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left">
            <span className="eyebrow">{skillsPageIntro.eyebrow}</span>
            <h1 className="h1">{skillsPageIntro.title}</h1>
            <p className="lead">{skillsPageIntro.lead}</p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>Capability overview</strong>
            <p className="muted">
              15 parent categories aligned to the shared taxonomy for quick
              scrolling and scanning.
            </p>
            <p>
              View my full&nbsp;
              <Link className="text-link" href={skillsPageIntro.azHref}>
                {skillsPageIntro.azPrompt}
              </Link>{" "}
              index.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <strong>Jump to:</strong>
          <div className="row" style={{ marginTop: 12 }}>
            {skillsPageSections.map((section) => {
              const anchor = sectionAnchor(section.title);
              return (
                <a key={section.title} className="button" href={`#${anchor}`}>
                  {section.title}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid animate-grid-single">
          {skillsPageSections.map((section) => {
            const anchor = sectionAnchor(section.title);
            return (
              <article className="card" id={anchor} key={section.title}>
                <h2>{section.title}</h2>
                <p className="muted">{section.description}</p>
                <TagList tags={section.skills} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
