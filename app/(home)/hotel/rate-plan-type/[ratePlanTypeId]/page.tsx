import { DetailPage } from "@/components/detail/detail-page";
import { ratePlanTypeFieldGroups } from "../components/step/field-groups";
import { HotelRatePlanTypeServerService } from "@/services/hotel/hotel-rate-plan-type/server";

type Props = {
  params: Promise<{
    ratePlanTypeId: string;
  }>;
};

export default async function RatePlanTypeDetailPage({ params }: Props) {
  const { ratePlanTypeId } = await params;
  const ratePlanTypeData =
    await HotelRatePlanTypeServerService.getOne(ratePlanTypeId);
  return (
    <DetailPage
      groups={ratePlanTypeFieldGroups}
      data={ratePlanTypeData}
      title={`RatePlanType ${ratePlanTypeData.name}`}
    />
  );
}
