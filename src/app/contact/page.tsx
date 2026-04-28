import Link from "next/link";
import Image from "next/image";

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
              For professional enquiries, project discussions, technical
              conversations, or collaboration, you can contact me directly by
              email or connect with me through LinkedIn and GitHub.
            </p>
          </div>
          <div className="photo-frame photo-frame-feature animate-fade-in-right">
            <Image
              src="/adam3.jpg"
              alt="Portrait style contact photo of Adam"
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              className="photo-frame-image"
            />
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
        </div>

        <div className="row" style={{ marginTop: 28 }}>
          <Link className="button primary" href="/case-studies">
            View case studies
          </Link>
          <Link className="button" href="/demo-projects">
            View demo projects
          </Link>
        </div>
      </div>
    </section>
  );
}
