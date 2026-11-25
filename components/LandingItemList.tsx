import Link from "next/link";
import type { LandingItem } from "@/lib/landing-pages";

const linkClass =
  "font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent";

export default function LandingItemList({ items }: { items: LandingItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <div key={item.title} className="border-b border-line py-6">
          <h3 className="font-display text-2xl tracking-wide text-ink sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-2xl text-muted">{item.text}</p>
          {item.link && (
            <Link href={item.link.href} className={`${linkClass} mt-4 inline-block`}>
              {item.link.label} &rarr;
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
