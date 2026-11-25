import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FAQItem from "@/components/FAQItem";
import FurtherReading from "@/components/FurtherReading";
import JsonLd from "@/components/JsonLd";
import SectionContent from "@/components/SectionContent";
import { breadcrumbJsonLd, faqJsonLd, organizationId } from "@/lib/jsonld";
import { sectorPagePath, type SectorPage } from "@/lib/sector-pages";
import { siteUrl } from "@/lib/seo";

export default function SectorLanding({ page }: { page: SectorPage }) {
  const path = sectorPagePath(page);
  const parentPath = `/services/${page.parent.slug}`;

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
          { name: page.parent.title, path: parentPath },
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
                {page.ctaLabel}
              </Button>
              <Button href={parentPath} variant="secondary" size="sm" sizeSm="md">
                All {page.parent.title}
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

      {page.sections.map((section, index) => (
        <section
          key={section.title}
          className={`border-t border-line ${index % 2 === 0 ? "bg-mist" : "bg-paper"}`}
        >
          <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[3fr_7fr] lg:gap-16">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                {section.title}
              </h2>
              {section.intro && <p className="mt-5 text-muted">{section.intro}</p>}
            </div>
            <SectionContent
              paragraphs={section.paragraphs}
              bullets={section.bullets}
              items={section.items}
              outro={section.outro}
              link={section.link}
            />
          </Container>
        </section>
      ))}

      <section className="bg-ink">
        <Container className="py-20 lg:py-28">
          <h2 className="font-display text-5xl leading-none tracking-wide text-paper md:text-7xl">
            How it works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {page.steps.map((step) => (
              <div key={step.number} className="border-t border-paper/20 pt-6">
                <p className="font-display text-4xl tracking-wide text-accent">{step.number}</p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-paper">
                  {step.title}
                </h3>
                <p className="mt-4 text-paper/70">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
        <Container
          className={`grid grid-cols-1 gap-10 py-20 lg:gap-16 ${
            page.pricing ? "lg:grid-cols-[40fr_60fr]" : ""
          }`}
        >
          {page.pricing && (
            <div>
              <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
                {page.pricing.title}
              </h2>
              <ul className="mt-6 space-y-4 text-muted">
                {page.pricing.bullets.map((bullet) => (
                  <li key={bullet} className="border-t border-line pt-4">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={page.pricing ? "" : "max-w-3xl"}>
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
        <Container className="flex flex-col items-start gap-6 py-20">
          <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
            {page.closing.title}
          </h2>
          <p className="max-w-xl text-lg font-semibold text-ink">{page.closing.text}</p>
          <Button href="/contact" size="sm" sizeSm="md">
            {page.closing.ctaLabel}
          </Button>
        </Container>
      </section>

      <section className="border-t border-line bg-paper">
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
                {page.related.question}
              </p>
              <p className="mt-3 text-sm text-paper/70">{page.related.text}</p>
              <Link
                href={page.related.link.href}
                className="mt-5 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-paper underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                {page.related.link.label} &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
