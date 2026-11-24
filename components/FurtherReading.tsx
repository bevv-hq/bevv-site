import Link from "next/link";
import Container from "@/components/Container";
import { getPost } from "@/lib/blog";

export default function FurtherReading({
  slugs,
  bare = false,
}: {
  slugs: string[];
  // bare: render just the heading and list, so a page can place it in its own layout
  bare?: boolean;
}) {
  const posts = slugs.flatMap((slug) => {
    const post = getPost(slug);
    return post ? [post] : [];
  });

  if (posts.length === 0) return null;

  const list = (
    <>
      <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
        Further reading
      </h2>
      <ul
        className={`mt-8 grid grid-cols-1 border-t border-line ${
          bare ? "" : "gap-x-12 md:grid-cols-2"
        }`}
      >
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-6 py-5"
              >
                <span className="font-display text-2xl leading-tight tracking-wide text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span aria-hidden="true" className="text-accent">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );

  if (bare) return list;

  return (
    <section className="border-t border-line bg-mist">
      <Container className="py-20">{list}</Container>
    </section>
  );
}
