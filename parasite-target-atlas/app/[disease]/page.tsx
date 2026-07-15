import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConvokeChrome } from "@/components/convoke-chrome";
import { TargetExplorerPanel } from "@/components/disease-target-explorer";
import { atlasIndications, findTargetLandscape } from "@/lib/atlas-indications";
import { diseasePath } from "@/lib/disease-routes";

type DiseasePageProps = {
  params: Promise<{ disease: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return atlasIndications.map((indication) => ({ disease: indication.id }));
}

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

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-page)] text-[var(--color-text)]">
      <ConvokeChrome />
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-3 pb-4 pt-3 sm:px-4 lg:px-5">
        <TargetExplorerPanel
          diseaseName={indication.name}
          explorer={indication.targetExplorer}
          key={indication.id}
        />
      </div>
    </main>
  );
}
