import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhiteSpaceExplorer } from "@/components/white-space-explorer";
import { diseasePath, findTargetLandscape } from "@/lib/atlas-indications";

type DiseasePageProps = {
  params: Promise<{ disease: string }>;
};

export async function generateMetadata({
  params,
}: DiseasePageProps): Promise<Metadata> {
  const { disease } = await params;
  const indication = findTargetLandscape(disease);

  if (!indication) return {};

  return {
    title: `${indication.name} | Parasite Target Atlas`,
    description: `Explore ranked targets and parasite molecule evidence for ${indication.name}.`,
    alternates: {
      canonical: diseasePath(indication.id),
    },
  };
}

export default async function DiseasePage({ params }: DiseasePageProps) {
  const { disease } = await params;
  const indication = findTargetLandscape(disease);

  if (!indication) notFound();

  return <WhiteSpaceExplorer initialLandscapeId={indication.id} />;
}
