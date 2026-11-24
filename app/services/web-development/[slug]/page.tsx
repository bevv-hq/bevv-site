import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import Container from "@/components/Container";
import FAQItem from "@/components/FAQItem";
import FurtherReading from "@/components/FurtherReading";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, organizationId } from "@/lib/jsonld";
import { landingPages, type LandingItem } from "@/lib/landing-pages";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { steps } from "@/lib/steps";

const linkClass =
  "font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent";

function findPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/web-development/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return { title: "Web Development | BEVV" };

  return {
    ...pageMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/services/web-development/${page.slug}`,
    }),
    // Placeholder-safe: stays out of search until the copy is signed off.
    robots: page.indexable ? undefined : { index: false, follow: true },
  };
}

function ItemList({ items }: { items: LandingItem[] }) {
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

export default async function LandingPage({
  params,
}: PageProps<"/services/web-development/[slug]">) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();

  const path = `/services/web-development/${page.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteUrl}${path}#service`,
          name: page.h1,
          url: `${siteUrl}${path}`,
          description: page.metaDescription,
          serviceType: page.h1,
          provider: { "@id": organizationId },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        }}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
          { name: page.h1, path },
        ])}
      />

      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <div>
            <h1 className="font-display text-[min(120px,max(9vw,min(18vw,4.5rem)))] leading-[0.85] tracking-wide text-ink">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-xl font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
              {page.hook}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="sm" sizeSm="md">
                Start with a free chat
              </Button>
              <Button href="/services/web-development" variant="secondary" size="sm" sizeSm="md">
                All web development
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              First pint&rsquo;s on us: a free 30-minute intro call and health check.
            </p>
          </div>
          <div className="max-w-xl space-y-5 text-ink/70">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[3fr_7fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              {page.needs.title}
            </h2>
            <p className="mt-5 text-muted">{page.needs.intro}</p>
          </div>
          <ItemList items={page.needs.items} />
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[3fr_7fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              {page.build.title}
            </h2>
            <p className="mt-5 text-muted">{page.build.intro}</p>
          </div>
          <ItemList items={page.build.items} />
        </Container>
      </section>

      {page.platforms && (
        <section className="border-t border-line bg-mist">
          <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[3fr_7fr] lg:gap-16">
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              {page.platforms.title}
            </h2>
            <div className="max-w-2xl space-y-5 text-muted">
              {page.platforms.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                {page.platforms.links.map((link) => (
                  <Link key={link.href} href={link.href} className={linkClass}>
                    {link.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <CaseStudyBlock
        text={page.proof.text}
        points={page.proof.points}
        note={page.proof.note}
        showScreenshot
      />

      <section className="bg-ink">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-5xl leading-none tracking-wide text-paper md:text-7xl">
            How it works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-paper/20 pt-6">
                <p className="font-display text-4xl tracking-wide text-accent">{step.number}</p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-paper">{step.title}</h3>
                <p className="mt-4 text-paper/70">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              {page.pricing.title}
            </h2>
            <div className="mt-6 space-y-5 text-muted">
              {page.pricing.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link href={page.pricing.link.href} className={`${linkClass} inline-block`}>
                {page.pricing.link.label} &rarr;
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-6 font-display text-4xl tracking-wide text-ink">
              {page.h1} FAQs
            </h2>
            {page.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="grid grid-cols-1 gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <FurtherReading slugs={page.furtherReading} bare />
          </div>
          <div className="relative mb-16 lg:mb-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink lg:aspect-[4/3]">
              <Image
                src={page.image.src}
                alt={page.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-4 right-4 rounded-2xl bg-ink p-8 shadow-xl sm:left-8 sm:right-auto sm:max-w-sm lg:-left-12 lg:bottom-10">
              <p className="font-display text-3xl tracking-wide text-paper">
                {page.sibling.question}
              </p>
              <p className="mt-3 text-sm text-paper/70">{page.sibling.text}</p>
              <Link
                href={page.sibling.link.href}
                className="mt-5 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-paper underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                {page.sibling.link.label} &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
