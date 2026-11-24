export type SubService = {
  title: string;
  priority?: boolean;
  shortDescription: string;
  longDescription: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  hook?: string;
  subServices: SubService[];
  image?: string;
  // Extra page content - not used by any component yet
  contentIntro?: string[];
  contentSpecialist?: { title: string; paragraphs: string[] };
  contentOfferings?: { title: string; description: string };
  // Optional SEO extras - safe to ignore if your components don't use them yet
  metaTitle?: string;
  metaDescription?: string;
  faqs?: ServiceFaq[];
  // Visible H1 when it should differ from the service title
  h1?: string;
  // Phrases in contentIntro that link out (first match only)
  introLinks?: { phrase: string; href: string }[];
  // Blog post slugs shown in the "Further reading" block
  furtherReading?: string[];
  // Sector landing pages linked from this service page
  landingLinks?: { question: string; href: string; label: string }[];
  // Case study block (links to /work/the-bell-and-bear)
  caseStudy?: boolean;
};
