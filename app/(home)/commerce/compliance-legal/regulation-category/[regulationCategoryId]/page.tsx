import { DetailPage } from "@/components/detail/detail-page";

import { RegulationCategoryServerService } from "@/services/commerce/compliance-legal/regulation-category/server";

import { regulationCategoryFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    regulationCategoryId: string;
  }>;
};

export default async function RegulationCategoryDetailPage({
  params,
}: Props) {
  const { regulationCategoryId } = await params;

  const regulationCategoryData =
    await RegulationCategoryServerService.getOne(
      regulationCategoryId,
    );

  return (
    <DetailPage
      groups={regulationCategoryFieldGroups}
      data={regulationCategoryData}
      title={`Regulation Category ${regulationCategoryData.name}`}
    />
  );
}