export type ExperienceItem = { company: string; role: string; dates: string; summary: string; keyWork: string[]; tags: string[]; related?: string };
export const experience: ExperienceItem[] = [
  {
    company: 'Line Lab',
    role: 'Staff Software Engineer',
    dates: 'Feb 2025 to Present',
    summary: 'Built and supported a proprietary solver platform involving a Python and Flask backend, Electron desktop client, Azure deployment, Terraform infrastructure, licensing, customer-managed deployment, and private cloud considerations.',
    keyWork: ['Delivered Terraform infrastructure for Azure Container Apps, networking, storage, and managed database services','Built and maintained Electron desktop client and installer flows','Worked on licensing and controlled platform access to protect IP','Modernised Python API and modelling code with tests, formatting, and static analysis'],
    tags: ['Python','Flask','Electron','Azure','Terraform','MySQL','Licensing'],
    related: 'Solver and Modelling Platform'
  },
  {
    company: 'Entertainment Partners',
    role: 'Staff Software Engineer',
    dates: 'Jan 2022 to Aug 2024',
    summary: 'Delivered features for a multi-region SaaS casting platform across a Python backend, React TypeScript frontend, Mako server-rendered views, PostgreSQL, database migrations, QA, UAT, monitoring, and production support.',
    keyWork: ['Delivered SmartID single sign-on for a major client','Built React TypeScript features supported by Python services and Node.js components','Worked with PostgreSQL and SQLAlchemy migrations','Shipped through structured QA, product review, and UAT processes'],
    tags: ['React','TypeScript','Python','PostgreSQL','SSO','SaaS'],
    related: 'Multi-region SaaS Platform Features'
  },
  {
    company: 'Fletchers Solicitors',
    role: 'Senior Full Stack Developer',
    dates: 'Feb 2020 to Oct 2021',
    summary: 'Delivered secure Azure based SaaS and internal systems across React, Redux, Azure AD, Azure Functions, data services, workflow automation, search, monitoring, network security, QA, UAT, and CI/CD.',
    keyWork: ['Built React and Redux user interfaces','Integrated Azure Active Directory authentication','Integrated machine learning models through Azure Functions with AI specialists','Delivered through Azure DevOps CI/CD with QA, UAT, and multi-region testing'],
    tags: ['React','Redux','Azure','Azure AD','Azure Functions','CI/CD'],
    related: 'Internal Operations Portal'
  },
  {
    company: 'Fletchers Solicitors',
    role: 'Systems Developer',
    dates: 'Feb 2018 to Feb 2020',
    summary: 'Delivered secure document access, platform security improvements, database support, reporting, authentication work, and operational systems inside a business critical legal environment.',
    keyWork: ['Designed and deployed SOAP based authentication for secure legal document access','Remediated penetration test findings and strengthened access controls','Administered and optimised MS SQL, MySQL, MariaDB, and PostgreSQL databases','Produced BI reporting to support business decision-making'],
    tags: ['Authentication','SOAP','Databases','Security','BI reporting'],
    related: 'Secure Client Document Portal'
  }
];
export const earlierRoles = ['Engage Solutions','Clicky Media','Ditto Music','Paymentshield'];
