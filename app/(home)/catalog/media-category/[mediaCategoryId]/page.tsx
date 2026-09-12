import { DetailPage } from "@/components/detail/detail-page";

import { MediaCategoryServerService } from "@/services/catalog/media-category/server";

import { mediaCategoryFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    mediaCategoryId: string;
  }>;
};

export default async function MediaCategoryDetailPage({
  params,
}: Props) {
  const { mediaCategoryId } = await params;

  const mediaCategoryData =
    await MediaCategoryServerService.getOne(mediaCategoryId);

  return (
    <DetailPage
      groups={mediaCategoryFieldGroups}
      data={mediaCategoryData}
      title={`Media Category ${mediaCategoryData.name}`}
    />
  );
}