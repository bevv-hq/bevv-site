import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorLanding from "@/components/SectorLanding";
import { findSectorPage, sectorMetadata, sectorPagesFor } from "@/lib/sector-pages";

const parent = "geo-for-hospitality";

export function generateStaticParams() {
  return sectorPagesFor(parent).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/geo-for-hospitality/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = findSectorPage(parent, slug);
  return page ? sectorMetadata(page) : { title: "Services | BEVV" };
}

export default async function Page({ params }: PageProps<"/services/geo-for-hospitality/[slug]">) {
  const { slug } = await params;
  const page = findSectorPage(parent, slug);
  if (!page) notFound();

  return <SectorLanding page={page} />;
}
