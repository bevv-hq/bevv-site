import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { projects } from "@/lib/projects";

export default function CaseStudyBlock({
  text,
  points,
  note,
  showScreenshot = false,
}: {
  text: string;
  points?: string[];
  note?: string;
  showScreenshot?: boolean;
}) {
  const project = projects.find((item) => item.slug === "the-bell-and-bear");
  if (!project) return null;

  const screenshot = showScreenshot ? project.images?.[0] : undefined;

  return (
    <section className="border-t border-line bg-paper">
      <Container
        className={`grid grid-cols-1 gap-10 py-20 ${
          screenshot ? "lg:grid-cols-2 lg:items-center lg:gap-16" : ""
        }`}
      >
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            Case study
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
            {project.name}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {project.type} &middot; {project.location}
          </p>
          <p className="mt-5 max-w-xl text-muted">{text}</p>
          {points && points.length > 0 && (
            <ul className="mt-6 max-w-xl border-t border-line">
              {points.map((point) => (
                <li key={point} className="border-b border-line py-3 text-muted">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {note && <p className="mt-6 max-w-xl text-muted">{note}</p>}
          <Link
            href={`/work/${project.slug}`}
            className="mt-8 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
          >
            Read the case study: {project.name}
          </Link>
        </div>
        {screenshot && (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-mist ring-1 ring-black/5">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
