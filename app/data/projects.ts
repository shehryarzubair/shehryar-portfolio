export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  points?: string[];
  role?: string;
  url?: string;
  linkNote?: string;
};

export const projects: Project[] = [
  {
    title: "Symulate AI",
    tag: "AI-powered assessment platform",
    description: "An assessment application with Super Admin, Client Admin and Candidate portals.",
    role: "Backend architecture & development",
    url: "https://admin.symulate.ai/",
    points: [
      "Led backend architecture and development, including PostgreSQL schema-per-tenant multi-tenancy.",
      "Developed NestJS APIs for Super Admin, Client Admin and Candidate portals, with real-time assessment transcript updates over WebSockets.",
      "Integrated a separate Python scoring engine through message queues and developed/integrated a separate NestJS service for PDF assessment reports.",
    ],
    stack: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "Python Service Integration",
      "Message Queues",
      "WebSockets",
    ],
  },
  {
    title: "Jippo.io",
    tag: "Events & ticketing platform",
    description:
      "An event platform with ticketing, customer workflows and configurable feedback forms.",
    role: "Backend development & frontend features",
    url: "https://jippo.io/",
    points: [
      "Owned backend development and database design, and developed frontend features with Next.js.",
      "Integrated Stripe Checkout, payment webhooks, refunds and customer workflows, alongside Fritidskortet split payments.",
      "Built configurable feedback forms with dynamic questions and multi-select fields.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
  },
  {
    title: "Investment & Portfolio Management Platform",
    tag: "Investment, syndicate & portfolio workflows",
    description:
      "A platform connecting investment management with contracts, payments and customer communications.",
    role: "Initial full stack development",
    points: [
      "Independently developed the initial frontend, backend, REST APIs and database architecture.",
      "Implemented investment, syndicate and portfolio management workflows.",
      "Integrated DocuSign contracts, Stripe payments, monday.com workflow tracking and beehiiv communications.",
    ],
    stack: ["React.js", "NestJS", "MySQL", "Stripe", "DocuSign", "monday.com", "beehiiv"],
  },
  {
    title: "MeriSehat",
    tag: "Healthcare & telemedicine platform",
    description:
      "A healthcare platform supporting service discovery and remote patient-doctor consultations.",
    role: "Frontend development & API integration",
    url: "https://merisehat.pk/",
    points: [
      "Developed frontend features and integrated backend APIs into patient-facing workflows.",
      "Integrated a third-party video calling solution for remote patient-doctor consultations.",
      "Worked on healthcare service discovery and frontend application functionality.",
    ],
    stack: ["React.js", "CSS", "Laravel Backend APIs", "Video Calling Integration"],
  },
];

export const clientProjects: Project[] = [
  {
    title: "The Groves",
    tag: "Events & ticketing platform",
    role: "Frontend Developer",
    url: "https://www.thegroves-sa.com/",
    description:
      "Next.js frontend development with Laravel API integration, English and Arabic interfaces, event browsing and ticketing-related functionality.",
    stack: ["Next.js", "Laravel Backend", "REST APIs"],
  },
  {
    title: "Servaid",
    tag: "Pharmacy & e-commerce platform",
    role: "Frontend Developer",
    url: "https://www.servaid.com.pk/",
    description:
      "Contributed to frontend development and user-facing interfaces for a pharmacy e-commerce platform.",
    stack: ["HTML", "CSS", "jQuery", "Laravel-based application"],
  },
  {
    title: "Ana Batla",
    tag: "Services website",
    url: "https://www.anabatla.com/",
    description:
      "A website showcasing pampering services, with customer inquiries and job application functionality.",
    stack: ["Next.js", "SCSS", "Node.js"],
  },
  {
    title: "Eat's Official",
    tag: "Food & community website",
    url: "https://www.eatsofficial.com/",
    linkNote: "External website access may be restricted.",
    description:
      "A food-focused website featuring recipes, reviews, opinions and community content.",
    stack: ["Next.js", "SCSS", "Node.js"],
  },
  {
    title: "Medini Watch Company",
    tag: "Watch e-commerce website",
    url: "https://www.mediniwatchcompany.com/",
    description: "An e-commerce website for browsing and purchasing watches.",
    stack: ["HTML", "CSS", "jQuery", "Laravel-based application"],
  },
  {
    title: "Indus Valley School",
    tag: "Education website",
    url: "https://www.indusvalley.edu.pk/",
    description: "An educational institution website.",
    stack: ["HTML", "CSS", "jQuery", "Laravel-based application"],
  },
];

export const wordpressProjects: Project[] = [
  {
    title: "ScrumQueens",
    tag: "Sports & media platform",
    role: "WordPress Developer",
    url: "https://scrumqueens.com/",
    description:
      "A custom WordPress women's rugby media platform featuring news, tournaments, and fixtures, with large-scale content migration from a legacy website into a customized WordPress data structure.",
    stack: ["WordPress", "Custom Development", "Data Migration"],
  },
  {
    title: "Symulate AI - Marketing Website",
    tag: "Marketing website",
    role: "WordPress Developer",
    url: "https://symulate.ai/",
    description:
      "A WordPress marketing website developed for an AI-powered assessment platform, showcasing its solutions, product capabilities, and services.",
    stack: ["WordPress", "Website Development"],
  },
  {
    title: "August Leadership",
    tag: "Corporate website",
    url: "https://www.augustleadership.com/",
    description:
      "A custom WordPress corporate website developed for a global executive search and leadership advisory firm, showcasing its services and expertise.",
    stack: ["WordPress", "Custom Development"],
  },
  {
    title: "WeUno Technologies",
    tag: "Corporate website",
    role: "WordPress Developer",
    url: "https://weuno.com/",
    description:
      "A WordPress corporate website developed to showcase the company's software development services, expertise, and digital solutions.",
    stack: ["WordPress", "Website Development"],
  },
];
