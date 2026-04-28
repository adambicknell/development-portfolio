'use client';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { FocusSelector } from '@/components/preferences/FocusSelector';
import { projects } from '@/data/projects';
import { useAppSelector } from '@/store/hooks';
import { filterProjectsByFocus } from '@/lib/focus';

export function DemoProjectsPageClient() {
  const selectedFocus = useAppSelector((state) => state.preferences.selectedFocus);
  const filteredProjects = filterProjectsByFocus(projects, selectedFocus);

  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Public proof</span>
            <h1 className="h1">Demo projects</h1>
            <p className="lead">
              Public projects built to show practical full stack product work:
              React interfaces, APIs, authentication, role based permissions,
              databases, testing, deployment, and business workflows.
            </p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>What these prove</strong>
            <p className="muted">
              Public repos, live demos, React and TypeScript, API design, auth,
              databases, testing, deployment notes, and readable README files.
            </p>
          </div>
        </div>

        <div style={{ margin: '30px 0' }}>
          <FocusSelector compact />
        </div>

        <div className="section-tight">
          <SectionHeader title="Featured and planned projects">
            These are focused examples based on portals, dashboards, workflow
            tools, secure access, document handling, and internal operations.
          </SectionHeader>

          <p className="muted">Showing {filteredProjects.length} of {projects.length} demo projects.</p>

          <div className="grid grid-3 animate-grid-3">
            {filteredProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
