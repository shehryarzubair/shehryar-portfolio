export const projects = [
  {
    title: "Symulate AI",
    tag: "AI-powered assessment platform",
    h: 262,
    points: [
      "Architected the backend and a PostgreSQL schema-per-tenant model for the Super Admin, Client Admin and Candidate portals.",
      "Led the NestJS APIs, live assessment transcripts over WebSockets, queued Python scoring and PDF report integration.",
    ],
    stack: [
      "NestJS",
      "PostgreSQL",
      "Python scoring service",
      "Message queues",
      "WebSockets",
      "React.js",
    ],
  },
  {
    title: "Jippo.io",
    tag: "Event management and ticketing platform, Sweden",
    h: 330,
    points: [
      "Owned the backend for events, groups, ticketing and customer flows, and contributed Next.js account features.",
      "Implemented Stripe Checkout, webhooks, refunds, the Fritidskortet payment integration and dynamic feedback forms.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Fritidskortet"],
  },
  {
    title: "Investment and Portfolio Platform",
    tag: "Individual and pooled investment workflows",
    h: 190,
    points: [
      "Independently built the initial frontend, backend, APIs and database.",
      "Integrated electronic contract signing, post-contract payments, customer tracking and email communications.",
    ],
    stack: ["React.js", "NestJS", "MySQL", "Stripe", "DocuSign", "monday.com", "beehiiv"],
  },
];
