import { caseStudies } from '../src/data/caseStudies.ts';
import { projects } from '../src/data/projects.ts';
import { skillGroups } from '../src/data/skills.ts';
import { normalizeFocus } from '../src/lib/taxonomy.ts';

const items = [
  ...caseStudies.flatMap((x) => x.focusAreas),
  ...projects.flatMap((x) => x.focusAreas),
  ...skillGroups.flatMap((x) => x.focusAreas)
];
const unknown = items.filter((x) => !normalizeFocus(x));
if (unknown.length) {
  console.error('Unknown focus areas:', [...new Set(unknown)]);
  process.exit(1);
}
console.log('Taxonomy validation passed.');
