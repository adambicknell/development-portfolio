import Link from "next/link";
import { site } from "@/data/site";
import { FaFlask, FaGithub, FaGitlab, FaHammer, FaStackOverflow } from "react-icons/fa6";

type PortfolioLinksRowProps = {
  marginTop?: number;
  highlightCaseStudies?: boolean;
};

export function PortfolioLinksRow({
  marginTop = 28,
  highlightCaseStudies = false,
}: PortfolioLinksRowProps) {
  return (
    <div className="row" style={{ marginTop }}>
      <Link
        className={highlightCaseStudies ? "button primary" : "button"}
        href="/case-studies"
      >
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
  );
}
