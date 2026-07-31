import { DetailPage } from "@/components/detail/detail-page";
import { mediaCategoryFieldGroups } from "../components/step/field-groups";
import { HotelMediaCategoryServerService } from "@/services/hotel/hotel-media-category/server";

type Props = {
  params: Promise<{
    mediaCategoryId: string;
  }>;
};

export default async function MediaCategoryDetailPage({ params }: Props) {
  const { mediaCategoryId } = await params;
  const mediaCategoryData =
    await HotelMediaCategoryServerService.getOne(mediaCategoryId);
  return (
    <DetailPage
      groups={mediaCategoryFieldGroups}
      data={mediaCategoryData}
      title={`MediaCategory ${mediaCategoryData.name}`}
    />
  );
}
