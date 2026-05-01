import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { FaFlask, FaGithub, FaGitlab, FaHammer, FaStackOverflow } from "react-icons/fa6";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="space-between">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Contact</span>
            <h1 className="h1">Contact</h1>
            <p className="lead">
              If you want to connect about portfolio content or technical
              topics, you can contact me directly by email or through LinkedIn,
              GitHub, GitLab, and StackOverflow.
            </p>
          </div>

          <div className="photo-cutout photo-cutout-wide animate-fade-in-right">
            <div className="photo-frame photo-frame-wide photo-frame-curved">
              <Image
                src="/adam3.jpg"
                alt="Portrait style contact photo of Adam"
                fill
                sizes="(max-width: 900px) 100vw, 620px"
                className="photo-frame-image"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-3 section-tight">
          <a className="card" href="mailto:adam@bicknell.uk">
            <h2>Email</h2>
            <p className="muted">adam@bicknell.uk</p>
          </a>

          <a className="card" href="https://www.linkedin.com/in/adamrbicknell">
            <h2>LinkedIn</h2>
            <p className="muted">
              Professional profile, experience, and wider work history.
            </p>
          </a>

          <a className="card" href="https://github.com/adambicknell">
            <h2>GitHub</h2>
            <p className="muted">
              Public portfolio code, demo projects, README files, and technical
              notes.
            </p>
          </a>

          <a className="card" href={site.gitlab}>
            <h2>GitLab</h2>
            <p className="muted">
              Additional public repositories, pipelines, and platform-side
              project history.
            </p>
          </a>

          <a className="card" href={site.stackoverflow}>
            <h2>StackOverflow</h2>
            <p className="muted">
              Technical Q&A profile covering practical solutions, debugging, and
              development discussions.
            </p>
          </a>
        </div>

        <div className="row" style={{ marginTop: 28 }}>
          <Link className="button primary" href="/case-studies">
            <><FaFlask aria-hidden="true" /> Case Studies</>
          </Link>
          <Link className="button" href="/demo-projects">
            <><FaHammer aria-hidden="true" /> Demo Projects</>
          </Link>
          <a className="button" href={site.github}>
            <><FaGithub aria-hidden="true" /> GitHub</>
          </a>
          <a className="button" href={site.gitlab}>
            <><FaGitlab aria-hidden="true" /> GitLab</>
          </a>
          <a className="button" href={site.stackoverflow}>
            <><FaStackOverflow aria-hidden="true" /> StackOverflow</>
          </a>
        </div>
      </div>
    </section>
  );
}
