import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  date: string;
  updated?: string;
  related?: string[];
  readingMinutes: number;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

function readPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const showDrafts = process.env.NODE_ENV === "development";

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .flatMap((file) => {
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data, content } = matter(raw);

      if (data.draft && !showDrafts) return [];

      const body = content.replace(/^\s*#\s+.+\n/, "").trim();
      const words = body.split(/\s+/).length;
      const title = String(data.title);

      return [
        {
          slug: String(data.slug ?? file.replace(/^\d+-/, "").replace(/\.md$/, "")),
          title,
          metaTitle: String(data.meta_title ?? `${title} | BEVV`),
          metaDescription: String(data.meta_description ?? ""),
          targetKeyword: String(data.target_keyword ?? ""),
          date: String(data.date),
          updated: data.updated ? String(data.updated) : undefined,
          related: Array.isArray(data.related) ? data.related.map(String) : undefined,
          readingMinutes: Math.max(1, Math.round(words / 220)),
          content: body,
        },
      ];
    });
}

export function getAllPosts(): Post[] {
  return readPosts()
    .map((post, index) => ({ post, index }))
    .sort((a, b) => b.post.date.localeCompare(a.post.date) || a.index - b.index)
    .map(({ post }) => post);
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Used when a post has no `related` frontmatter field.
const fallbackRelated: Record<string, string[]> = {
  "shopify-vs-wordpress-for-breweries": [
    "selling-beer-online-uk-webshop",
    "what-is-a-headless-website-brewery",
    "what-should-a-pub-website-cost",
  ],
  "pub-near-me-local-seo-guide": [
    "will-chatgpt-recommend-your-pub",
    "pdf-menu-costing-you-customers",
  ],
  "will-chatgpt-recommend-your-pub": [
    "pub-near-me-local-seo-guide",
    "pdf-menu-costing-you-customers",
  ],
  "squarespace-wix-or-custom-pub-website": [
    "what-should-a-pub-website-cost",
    "shopify-vs-wordpress-for-breweries",
  ],
  "what-is-a-headless-website-brewery": [
    "shopify-vs-wordpress-for-breweries",
    "what-should-a-pub-website-cost",
  ],
  "selling-beer-online-uk-webshop": [
    "shopify-vs-wordpress-for-breweries",
    "what-should-a-pub-website-cost",
  ],
  "pdf-menu-costing-you-customers": [
    "pub-near-me-local-seo-guide",
    "will-chatgpt-recommend-your-pub",
  ],
  "what-should-a-pub-website-cost": [
    "squarespace-wix-or-custom-pub-website",
    "shopify-vs-wordpress-for-breweries",
  ],
};

export function getRelatedPosts(post: Post): Post[] {
  const slugs = post.related ?? fallbackRelated[post.slug] ?? [];
  return slugs
    .filter((slug) => slug !== post.slug)
    .flatMap((slug) => {
      const found = getPost(slug);
      return found ? [found] : [];
    })
    .slice(0, 3);
}
