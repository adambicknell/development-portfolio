import Image from "next/image";
import { site } from "@/data/site";
import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";
import {
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa6";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="profile-hero-layout">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Get in touch</span>
            <h1 className="h1">Contact</h1>
            <p className="lead">
              If you want to connect about portfolio content or technical
              topics, you can contact me directly by email or through LinkedIn,
              GitHub, GitLab, and StackOverflow.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <div className="photo-cutout photo-cutout-wide">
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
          <aside className="card animate-fade-in-right">
            <span className="badge">Availability</span>
            <h2>Open to meaningful conversations</h2>
            <p className="muted">I am happy to discuss architecture, frontend engineering, full stack delivery, and portfolio work in more detail.</p>
          </aside>
        </div>

        <div className="grid grid-3 section-tight">
          <a className="card" href="mailto:adam@bicknell.uk">
            <h2>
              <FaEnvelope aria-hidden="true" /> Email
            </h2>
            <p className="muted">adam@bicknell.uk</p>
          </a>

          <a className="card" href="https://www.linkedin.com/in/adamrbicknell">
            <h2>
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </h2>
            <p className="muted">
              Professional profile, experience, and wider work history.
            </p>
          </a>

          <a className="card" href="https://github.com/adambicknell">
            <h2>
              <FaGithub aria-hidden="true" /> GitHub
            </h2>
            <p className="muted">
              Public portfolio code, demo projects, README files, and technical
              notes.
            </p>
          </a>

          <a className="card" href={site.gitlab}>
            <h2>
              <FaGitlab aria-hidden="true" /> GitLab
            </h2>
            <p className="muted">
              Additional public repositories, pipelines, and platform-side
              project history.
            </p>
          </a>

          <a className="card" href={site.stackoverflow}>
            <h2>
              <FaStackOverflow aria-hidden="true" /> StackOverflow
            </h2>
            <p className="muted">
              Technical Q&A profile covering practical solutions, debugging, and
              development discussions.
            </p>
          </a>
        </div>

        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
