import { DetailPage } from "@/components/detail/detail-page";
import { facilityCategoryFieldGroups } from "../components/step/field-groups";
import { HotelFacilityCategoryServerService } from "@/services/hotel/hotel-facility-category/server";

type Props = {
  params: Promise<{
    facilityCategoryId: string;
  }>;
};

export default async function FacilityCategoryDetailPage({ params }: Props) {
  const { facilityCategoryId } = await params;
  const facilityCategoryData =
    await HotelFacilityCategoryServerService.getOne(facilityCategoryId);
  return (
    <DetailPage
      groups={facilityCategoryFieldGroups}
      data={facilityCategoryData}
      title={`FacilityCategory ${facilityCategoryData.name}`}
    />
  );
}
