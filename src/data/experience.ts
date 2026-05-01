export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  outcomes: string[];
  focusAreas: string[];
  relatedCaseStudySlug?: string;
};

export const experience: ExperienceItem[] = [
  { company:'Line Lab', role:'Staff Software Engineer', dates:'Feb 2025 to Present', summary:'Built and supported a proprietary solver platform spanning desktop delivery, Python services, licensing, and Azure infrastructure.', responsibilities:['Delivered Terraform infrastructure for Azure Container Apps, networking, storage, and managed database services.','Built and maintained Electron desktop client and installer workflows.','Implemented licensing and controlled runtime access for IP protection and customer-managed environments.','Improved Python code quality with tests, formatting, linting, and static analysis.'], techStack:['Python','Flask','Electron','Azure','Terraform','MySQL'], outcomes:['Improved deployment repeatability and environment consistency.','Increased platform stability and supportability.'], focusAreas:['Backend & APIs','Cloud & Infrastructure','SaaS & Platform'], relatedCaseStudySlug:'solver-and-modelling-platform' },
  { company:'Entertainment Partners', role:'Staff Software Engineer', dates:'Jan 2022 to Aug 2024', summary:'Delivered multi-region SaaS features across React, TypeScript, Python, identity, QA/UAT, and production support.', responsibilities:['Delivered SmartID SSO support for a major client integration.','Implemented full-stack features across React TypeScript UI and Python services.','Managed PostgreSQL/SQLAlchemy migrations through release cycles.','Supported QA, UAT, and production triage workflows.'], techStack:['React','TypeScript','Python','PostgreSQL','SQLAlchemy','SmartID'], outcomes:['Released user-facing features safely across regions.','Improved identity and release reliability.'], focusAreas:['React & Frontend','Full Stack Delivery','Security & Identity','Production Reliability'], relatedCaseStudySlug:'multi-region-saas-platform-features' }
];

export const earlierRoles = ['Fletchers Solicitors — Senior Full Stack Developer — Feb 2020 to Oct 2021','Fletchers Solicitors — Systems Developer — Feb 2018 to Feb 2020','Engage Solutions — Full Stack Developer — Aug 2016 to Feb 2018','Clicky Media — Full Stack Developer — Oct 2015 to Aug 2016','Ditto Music — Full Stack Developer — Feb 2015 to Oct 2015','Paymentshield — Application and Support Engineer — May 2014 to Feb 2015','Paymentshield — Infrastructure Support Analyst — May 2005 to Aug 2006'];
