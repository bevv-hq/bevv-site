import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FAQItem from "@/components/FAQItem";
import LinkedParagraphs from "@/components/LinkedParagraphs";
import FurtherReading from "@/components/FurtherReading";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import SubServiceItem from "@/components/SubServiceItem";
import MoreServicesModal from "@/components/MoreServicesModal";
import { services } from "@/lib/services";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service | BEVV" };
  }

  const title = service.metaTitle ?? service.title;

  return pageMetadata({
    title: title.includes("BEVV") ? title : `${title} | BEVV`,
    description: service.metaDescription ?? service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const hasSubServices = service.subServices.length > 0;
  const maxVisible = 8;
  const priority = service.subServices.filter((item) => item.priority);
  const visibleSubServices =
    service.subServices.length <= maxVisible
      ? service.subServices
      : (priority.length > 0 ? priority : service.subServices).slice(0, maxVisible);
  const moreSubServices = service.subServices.filter(
    (item) => !visibleSubServices.includes(item),
  );

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      {service.faqs && service.faqs.length > 0 && (
        <JsonLd data={faqJsonLd(service.faqs)} />
      )}
      <section className="w-full bg-paper">
        <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:py-28">
          <div>
            <h1 className="font-display text-[min(120px,max(9vw,min(18vw,4.5rem)))] leading-[0.85] tracking-wide text-ink">
             {service.h1 ?? service.title}
            </h1>
            {service.hook && (
              <p className="mt-6 max-w-xl font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
                {service.hook}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" size="sm" sizeSm="md">
                  Enquire about {service.title}
                </Button>
                <Button href="/services" variant="secondary" size="sm" sizeSm="md">
                  Other Services
                </Button>
              </div>
            <p className="mt-4 text-sm text-muted">
              First pint&rsquo;s on us: a free 30-minute intro call and health
              check.
            </p>
          </div>

          <div className="max-w-xl">
            <div className="space-y-5 text-ink/70">
              <LinkedParagraphs
                paragraphs={service.contentIntro ?? service.longDescription.split("\n\n")}
                links={service.introLinks}
              />
            </div>
          </div>
        </Container>
      </section>


      {hasSubServices && (
        <section className="border-t border-line bg-mist">
          <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[3fr_7fr] lg:gap-16">
            <div>
              <SectionHeading>
                {service.contentOfferings?.title ?? "The detail"}
              </SectionHeading>
              {service.contentOfferings && (
                <p className="mt-5 text-muted">{service.contentOfferings.description}</p>
              )}
            </div>
            <div>
              <div className="border-t border-line">
                {visibleSubServices.map((subService) => (
                  <SubServiceItem key={subService.title} subService={subService} />
                ))}
              </div>
              {moreSubServices.length > 0 && (
                <div className="mt-8">
                  <MoreServicesModal
                    label={`View ${moreSubServices.length} more`}
                    title={`More ${service.title}`}
                  >
                    {moreSubServices.map((subService) => (
                      <SubServiceItem key={subService.title} subService={subService} />
                    ))}
                  </MoreServicesModal>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {(service.contentSpecialist || (service.faqs && service.faqs.length > 0)) && (
        <section className="border-t border-line bg-paper">
          <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[40fr_60fr] lg:gap-16">
            <div>
              {service.contentSpecialist && (
                <>
                  <SectionHeading>{service.contentSpecialist.title}</SectionHeading>
                  <div className="mt-6 space-y-5 text-muted">
                    {service.contentSpecialist.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div>
              {service.faqs && service.faqs.length > 0 && (
                <>
                  <h3 className="mb-6 font-display text-4xl tracking-wide text-ink">
                    {service.title} FAQs
                  </h3>
                  {service.faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </>
              )}
            </div>
          </Container>
        </section>
      )}

      {service.landingLinks && (
        <section className="border-t border-line bg-paper">
          <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
            {service.landingLinks.map((item) => (
              <div key={item.href} className="border-t border-ink pt-6">
                <p className="font-display text-3xl tracking-wide text-ink">{item.question}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                >
                  {item.label} &rarr;
                </Link>
              </div>
            ))}
          </Container>
        </section>
      )}

      {service.caseStudy && (
        <CaseStudyBlock
          text={service.caseStudy.text}
          showScreenshot={service.caseStudy.showScreenshot}
        />
      )}

      {service.furtherReading && service.furtherReading.length > 0 && (
        <FurtherReading slugs={service.furtherReading} />
      )}
    </>
  );
}
