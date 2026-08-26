import { DetailPage } from "@/components/detail/detail-page";
import { hotelCheckInPolicyFieldGroups } from "../components/step/field-groups";
import { HotelCheckInPolicyServerService } from "@/services/product-types/hotel/hotel-check-in-policy/server";

type Props = {
  params: Promise<{
    checkInPolicyId: string;
  }>;
};

export default async function HotelCheckInPolicyDetailPage({
  params,
}: Props) {
  const { checkInPolicyId } = await params;

  const hotelCheckInPolicyData =
    await HotelCheckInPolicyServerService.getOne(checkInPolicyId);

  return (
    <DetailPage
      groups={hotelCheckInPolicyFieldGroups}
      data={hotelCheckInPolicyData}
      title={`Hotel Check-In Policy`}
    />
  );
}