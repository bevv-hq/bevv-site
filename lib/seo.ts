import type { Metadata } from "next";

export const siteUrl = "https://bevv.co.uk";
export const siteName = "BEVV";
export const contactEmail = "hello@bevv.co.uk";
export const socialProfiles = [
  "https://www.linkedin.com/company/bevv",
  "https://www.instagram.com/bevv.agency",
];
export const founderName = "Joe Shipton";
export const founderLinkedIn = "https://www.linkedin.com/in/joe-shipton/";

const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "BEVV: websites and marketing for breweries, taprooms and pubs",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
