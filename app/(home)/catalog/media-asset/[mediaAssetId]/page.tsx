import { DetailPage } from "@/components/detail/detail-page";

import { MediaAssetServerService } from "@/services/catalog/media-asset/server";

import { mediaAssetFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    mediaAssetId: string;
  }>;
};

export default async function MediaAssetDetailPage({ params }: Props) {
  const { mediaAssetId } = await params;

    const mediaAssetData =
      await MediaAssetServerService.getOne(mediaAssetId);
  
  return (
    <DetailPage
      groups={mediaAssetFieldGroups}
      data={mediaAssetData}
      title={`Media Asset ${mediaAssetData.id}`}
    />
  );
}
