import { PortfolioLinksRow } from "@/components/PortfolioLinksRow";
import Link from "next/link";
export const metadata = pageMetadata({
  title: 'CV',
  description: "View Adam Bicknell's CV with experience across full stack React development, APIs, cloud systems, and secure platforms.",
  path: '/cv',
});
export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">CV</span>
        <h1 className="h1">CV</h1>
        <p className="lead">
          Download my current CV or view the portfolio sections that expand on
          it.
        </p>
        <div className="row section-tight">
          <a className="button primary" href="/cv/adam-bicknell-cv.pdf">
            Download CV
          </a>
          <Link className="button" href="/experience">
            View experience
          </Link>
        </div>
        <PortfolioLinksRow highlightCaseStudies />
      </div>
    </section>
  );
}
