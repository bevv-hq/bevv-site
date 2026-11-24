import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import FurtherReading from "@/components/FurtherReading";
import { projects } from "@/lib/projects";

// Further reading list on the left, case study screenshot on the right with the
// case study summary overlaid on it.
export default function ReadingAndCaseStudy({
  slugs,
}: {
  slugs: string[];
}) {
  const project = projects.find((item) => item.slug === "the-bell-and-bear");
  const screenshot = project?.images?.[0];

  if (!project || !screenshot) return <FurtherReading slugs={slugs} />;

  return (
    <section className="border-t border-line bg-mist">
      <Container className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <FurtherReading slugs={slugs} bare />
        </div>
        <div className="relative mb-16 lg:mb-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-black/5 lg:aspect-auto lg:h-[26rem]">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-10 left-4 right-4 rounded-2xl bg-ink p-8 shadow-xl sm:left-8 sm:right-auto sm:max-w-sm lg:-bottom-8 lg:-left-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
              Case study
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-paper">
              {project.name}
            </h2>
            <p className="mt-2 text-sm text-paper/60">
              {project.type} &middot; {project.location}
            </p>
            <Link
              href={`/work/${project.slug}`}
              className="mt-5 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-paper underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              Read the case study: {project.name} &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
