import { DetailPage } from "@/components/detail/detail-page";
import { mediaAssetFieldGroups } from "../components/step/field-groups";
import { HotelMediaAssetServerService } from "@/services/hotel/hotel-media-asset/server";

type Props = {
  params: Promise<{
    mediaAssetId: string;
  }>;
};

export default async function MediaAssetDetailPage({ params }: Props) {
  const { mediaAssetId } = await params;
  const mediaAssetData =
    await HotelMediaAssetServerService.getOne(mediaAssetId);
  return (
    <DetailPage
      groups={mediaAssetFieldGroups}
      data={mediaAssetData}
      title={`MediaAsset ${mediaAssetData.alt}`}
    />
  );
}
