import {
  contactEmail,
  founderLinkedIn,
  founderName,
  siteName,
  siteUrl,
  socialProfiles,
} from "@/lib/seo";
import type { Service } from "@/lib/services";
import type { FAQ } from "@/lib/faqs";
import type { Post } from "@/lib/blog";

export const organizationId = `${siteUrl}/#organization`;
export const personId = `${siteUrl}/#joe`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      image: `${siteUrl}/og-image.jpg`,
      email: contactEmail,
      description:
        "Websites, digital marketing and AI search for breweries, taprooms and pubs.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      founder: { "@id": personId },
      sameAs: socialProfiles,
      knowsAbout: [
        "Pub website design",
        "Brewery website design",
        "Local SEO",
        "Generative engine optimisation",
        "Shopify",
        "WordPress",
      ],
    },
    {
      "@type": "Person",
      "@id": personId,
      name: founderName,
      jobTitle: "Founder",
      worksFor: { "@id": organizationId },
      sameAs: [founderLinkedIn],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "en-GB",
      publisher: { "@id": organizationId },
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: Pick<FAQ, "question" | "answer">[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.metaDescription ?? service.shortDescription,
    serviceType: service.title,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: {
      "@type": "Audience",
      audienceType: "Breweries, taprooms and pubs",
    },
    ...(service.subServices.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} services`,
        itemListElement: service.subServices.map((subService) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: subService.title,
            description: subService.shortDescription,
          },
        })),
      },
    }),
  };
}

// Frontmatter dates are date-only; schema.org validators want a full
// date-time with a time zone (e.g. 2026-10-09T00:00:00.000Z).
function toIsoDateTime(date: string) {
  return new Date(date).toISOString();
}

export function articleJsonLd(post: Post) {
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: toIsoDateTime(post.date),
    dateModified: toIsoDateTime(post.updated ?? post.date),
    inLanguage: "en-GB",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${siteUrl}/og-image.jpg`,
    keywords: post.targetKeyword,
    author: { "@id": personId },
    publisher: { "@id": organizationId },
  };
}
