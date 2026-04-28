'use client';

import { FocusSelector } from '@/components/preferences/FocusSelector';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { caseStudies } from '@/data/caseStudies';
import { projects } from '@/data/projects';
import { useAppSelector } from '@/store/hooks';
import { filterCaseStudiesByFocus, filterProjectsByFocus } from '@/lib/focus';

const capabilityCards = [
  {
    title: 'Frontend systems',
    description:
      'React, TypeScript, Redux, Vue, vanilla JavaScript, jQuery, Electron, server-rendered views.'
  },
  {
    title: 'Backend and APIs',
    description:
      'Python, Flask, FastAPI, PHP, Laravel, Node.js, REST APIs, model integration.'
  },
  {
    title: 'Cloud and delivery',
    description:
      'Azure, AWS, Docker, Terraform, CI/CD, monitoring, release processes, production support.'
  },
  {
    title: 'Secure business software',
    description:
      'SSO, OAuth2, SAML, Azure AD, permissions, secure access, pen-test remediation.'
  }
];

export function HomeProofSections() {
  const selectedFocus = useAppSelector((state) => state.preferences.selectedFocus);

  const filteredCaseStudies = filterCaseStudiesByFocus(caseStudies, selectedFocus);

  const filteredProjects = filterProjectsByFocus(projects, selectedFocus);

  return (
    <>
      <section className="section-tight">
        <div className="container grid grid-4">
          {capabilityCards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="muted">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <FocusSelector />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Commercial proof" title="Selected case studies">
            Anonymised examples based on real commercial systems I have built, supported, or helped deliver.
          </SectionHeader>
          <div className="grid grid-2">
            {filteredCaseStudies.map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeader eyebrow="Public proof" title="Demo projects">
            Inspectable public projects that mirror real business workflows.
          </SectionHeader>
          <div className="grid grid-3">
            {filteredProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
