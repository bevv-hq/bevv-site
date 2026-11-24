import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { staticPageDates } from "@/lib/lastmod";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    // Landing pages only join the sitemap once their copy is signed off.
    ...landingPages
      .filter((page) => page.indexable)
      .map((page) => `/services/web-development/${page.slug}`),
    "/about",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/blog",
    "/contact",
    "/privacy",
  ];

  const pages = staticPaths.map((path) => {
    const date = staticPageDates[path];
    return {
      url: `${siteUrl}${path}`,
      ...(date && { lastModified: new Date(date) }),
    };
  });

  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [...pages, ...posts];
}
