import { skillsDictionary } from '@/data/taxonomy';

type SkillGroup = {
  letter: string;
  skills: string[];
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const groupedSkills: SkillGroup[] = LETTERS.map((letter) => ({
  letter,
  skills: skillsDictionary
    .map((skill) => skill.canonicalName)
    .filter((name) => name.toUpperCase().startsWith(letter))
    .sort((a, b) => a.localeCompare(b)),
}));

export function SkillsAZPageClient() {
  return (
    <section className="section">
      <div className="container">
        <div className="space-between page-intro-row">
          <div className="animate-fade-in-left">
            <span className="eyebrow">Technical range</span>
            <h1 className="h1">A-Z technical skills index</h1>
            <p className="lead">Browse every skill alphabetically to quickly find what you need.</p>
          </div>
          <div className="card animate-fade-in-right">
            <strong>Index overview</strong>
            <p className="muted">
              This page is an easy A–Z scan of the toolkit I use, so you can jump straight to the
              skills most relevant to you.
            </p>
          </div>
        </div>

        <div className="grid animate-grid-single skills-az-groups">
          {groupedSkills.map((group) => (
            <article className="card" id={group.letter} key={group.letter}>
              <details className="card-accordion">
                <summary>
                  <h2>{group.letter}</h2>
                </summary>
                {group.skills.length > 0 ? (
                  <ul className="card-list card-list-3">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">No skills listed.</p>
                )}
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
