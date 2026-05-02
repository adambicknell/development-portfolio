import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Diagram } from "@/components/common/Diagram";
import { TagList } from "@/components/cards/TagList";
import { TrackView } from "@/components/history/TrackView";

const STORY_CARD_SPANS = [
  "span-4",
  "span-4",
  "span-4",
  "span-6",
  "span-6",
  "span-4",
  "span-4",
  "span-4",
] as const;

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  return { title: item?.title ?? "Case study", description: item?.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);

  if (!item) notFound();

  const storySections = [
    ["Context", item.context],
    ["The problem", item.problem],
    ["My role", item.role],
    ["Approach", item.approach],
    ...(item.sections?.map(
      (section) => [section.heading, section.content] as const,
    ) ?? []),
  ] as const;

  return (
    <section className="section case-study-page">
      <TrackView
        title={item.title}
        href={"/case-studies/" + item.slug}
        type="Case study"
      />
      <div className="container">
        <Link className="button ghost no-print" href="/case-studies">
          Back to case studies
        </Link>

        <div className="hero-grid" style={{ marginTop: 24 }}>
          <article>
            {item.image && (
              <div className="photo-cutout photo-cutout-wide" style={{ marginBottom: 16 }}>
                <div className="photo-frame photo-frame-wide photo-frame-curved">
                  <Image
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    fill
                    sizes="(max-width: 900px) 100vw, 620px"
                    className="photo-frame-image"
                  />
                </div>
              </div>
            )}
            <span className="eyebrow">Anonymised case study</span>
            <h1 className="h1">{item.title}</h1>
            <p className="lead">{item.summary}</p>
            <p className="muted" style={{ maxWidth: 780 }}>
              {item.context}
            </p>
            <TagList tags={item.tags.concat(item.techStack)} />
            {item.liveUrl && (
              <p style={{ marginTop: 12 }}>
                <a href={item.liveUrl} target="_blank" rel="noreferrer">
                  View live project
                </a>
              </p>
            )}
          </article>

          <aside className="card sticky">
            <h2>At a glance</h2>
            <p>
              <strong>Problem</strong>
            </p>
            <p className="muted">{item.problem}</p>
            <p>
              <strong>My role</strong>
            </p>
            <p className="muted">{item.role}</p>
          </aside>
        </div>

        <div className="case-study-grid" style={{ marginTop: 40 }}>
          {storySections.map(([title, text], index) => (
            <section
              className={`card case-study-story ${STORY_CARD_SPANS[index] ?? "span-6"}`}
              key={title}
            >
              <SectionHeader title={title}>{text}</SectionHeader>
            </section>
          ))}

          <section className="card case-study-wide">
            <SectionHeader title="System shape" />
            <Diagram nodes={item.diagram} />
          </section>

          <section className="card case-study-wide">
            <SectionHeader title="Key decisions" />
            <div className="grid grid-3">
              {item.keyDecisions.map((decision) => (
                <div className="card-soft" key={decision}>
                  <p className="muted">
                    <strong>{decision}</strong>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <SectionHeader title="Technical areas" />
            <TagList tags={item.tags.concat(item.techStack)} />
          </section>

          <section className="card">
            <SectionHeader title="Outcome" />
            <ul>
              {item.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          <section className="card case-study-wide">
            <SectionHeader title="What I would improve next" />
            <ul>
              {item.improvements.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
