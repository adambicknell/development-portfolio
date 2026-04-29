'use client';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { CaseStudyFilters } from '@/components/case-studies/CaseStudyFilters';
import { SectionHeader } from '@/components/common/SectionHeader';
import { projects } from '@/data/projects';
import { focusOptions } from '@/data/site';
import { useAppSelector } from '@/store/hooks';
import { joinSearchFields } from '@/lib/filter';

export function DemoProjectsPageClient() {
  const { projectViewMode } = useAppSelector((state) => state.preferences);
  const { projectSearch, activeTags } = useAppSelector((state) => state.filters);
  const filterTags = Array.from(new Set([...focusOptions, ...projects.flatMap((item) => [...item.tags, ...item.techStack])])).sort();
  const filteredProjects = projects
    .filter(
      (item) =>
        activeTags.length === 0 ||
        activeTags.every((tag) => [...item.tags, ...item.techStack, ...item.focusAreas].includes(tag))
    )
    .filter((item) =>
      joinSearchFields([
        item.title,
        item.summary,
        item.problem,
        item.features,
        item.techStack,
        item.tags
      ]).includes(projectSearch.toLowerCase())
    );

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
          <CaseStudyFilters tags={filterTags} scope="projects" />
        </div>

        <div className="section-tight">
          <SectionHeader title="Featured and planned projects">
            These are focused examples based on portals, dashboards, workflow
            tools, secure access, document handling, and internal operations.
          </SectionHeader>

          <p className="muted">
            Showing {filteredProjects.length} of {projects.length} demo projects. View mode: {projectViewMode}
          </p>

          <div className={projectViewMode === 'cards' ? 'grid grid-3 animate-grid-3' : 'grid animate-grid-single'}>
            {filteredProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} compact={projectViewMode === 'compact'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
