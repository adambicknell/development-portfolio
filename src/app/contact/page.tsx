import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";
import {
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaRegFileLines,
  FaStackOverflow,
} from "react-icons/fa6";

export const metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="profile-hero-layout-two-column page-intro-row">
          <div className="animate-fade-in-left" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Get in touch</span>
            <h1 className="h1">Contact</h1>
            <p className="lead">
              If you want to connect about my portfolio, technical work,
              freelance projects, you can contact me directly by email or
              through LinkedIn.
            </p>
            <p className="lead">
              I’m open to conversations around full stack React apps, React plus
              Python systems, internal tools, SaaS platforms, cloud based
              applications and practical business software.
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
              Public portfolio code, demo projects, and practical implementation
              examples.
            </p>
          </a>

          <a className="card" href={site.gitlab}>
            <h2>
              <FaGitlab aria-hidden="true" /> GitLab
            </h2>
            <p className="muted">
              The version control platform I use in my current role, with active
              commit history and day-to-day workflow context.
            </p>
          </a>

          <a className="card" href={site.stackoverflow}>
            <h2>
              <FaStackOverflow aria-hidden="true" /> StackOverflow
            </h2>
            <p className="muted">
              My StackOverflow profile, showing my community contribution
              history and broader developer background.
            </p>
          </a>

          <Link className="card" href="/cv/adam-bicknell-cv.pdf">
            <h2>
              <FaRegFileLines aria-hidden="true" /> CV
            </h2>
            <p className="muted">
              View my CV for a concise summary of experience, skills, and
              project delivery across roles.
            </p>
          </Link>
        </div>

        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
