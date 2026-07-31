import { DetailPage } from "@/components/detail/detail-page";
import { facilityFieldGroups } from "../components/step/field-groups";
import { HotelFacilityServerService } from "@/services/hotel/hotel-facility/server";

type Props = {
  params: Promise<{
    facilityId: string;
  }>;
};

export default async function FacilityDetailPage({ params }: Props) {
  const { facilityId } = await params;
  const facilityData = await HotelFacilityServerService.getOne(facilityId);
  return (
    <DetailPage
      groups={facilityFieldGroups}
      data={facilityData}
      title={`Facility ${facilityData.name}`}
    />
  );
}
