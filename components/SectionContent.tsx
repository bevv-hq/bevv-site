import Link from "next/link";
import LandingItemList from "@/components/LandingItemList";
import type { LandingItem, LandingLink } from "@/lib/landing-pages";

export type SectionBullet = { lead?: string; text: string };

// Right-hand content for a section: paragraphs, then bullets or items, then a closing line.
export type SectionBody = {
  paragraphs?: string[];
  bullets?: SectionBullet[];
  items?: LandingItem[];
  outro?: string;
  link?: LandingLink;
};

const linkClass =
  "font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent";

export default function SectionContent({
  paragraphs,
  bullets,
  items,
  outro,
  link,
}: SectionBody) {
  return (
    <div className="max-w-2xl">
      {paragraphs && paragraphs.length > 0 && (
        <div className="space-y-5 text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul className={`border-t border-line ${paragraphs?.length ? "mt-8" : ""}`}>
          {bullets.map((bullet) => (
            <li key={bullet.text} className="border-b border-line py-4 text-muted">
              {bullet.lead && (
                <span className="font-semibold text-ink">{bullet.lead} </span>
              )}
              {bullet.text}
            </li>
          ))}
        </ul>
      )}
      {items && items.length > 0 && <LandingItemList items={items} />}
      {outro && <p className="mt-6 text-muted">{outro}</p>}
      {link && (
        <Link href={link.href} className={`${linkClass} mt-6 inline-block`}>
          {link.label} &rarr;
        </Link>
      )}
    </div>
  );
}
