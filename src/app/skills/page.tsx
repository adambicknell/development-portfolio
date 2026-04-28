import { FocusSelector } from "@/components/preferences/FocusSelector";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TagList } from "@/components/cards/TagList";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div>
            <span className="eyebrow">Technical range</span>
            <h1 className="h1">Skills</h1>
            <p className="lead">
              React and TypeScript sit at the centre of my current frontend
              work, supported by broader experience across Vue, vanilla
              JavaScript, jQuery, server-rendered views, Python APIs, PHP
              backends, Azure, AWS, databases, CI/CD, secure access, and legacy
              modernisation.
            </p>
          </div>

          <div className="card">
            <strong>Core focus</strong>
            <p className="muted">
              React, TypeScript, Python, APIs, cloud delivery, and practical
              business systems.
            </p>
          </div>
        </div>

        <div style={{ margin: "30px 0" }}>
          <FocusSelector compact />
        </div>

        <div className="grid">
          {skillGroups.map((group) => (
            <section className="card" id={group.slug} key={group.slug}>
              <SectionHeader title={group.title}>{group.summary}</SectionHeader>

              <TagList tags={group.skills} />

              <p>
                <strong>Related work</strong>
              </p>

              <TagList tags={group.related} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
