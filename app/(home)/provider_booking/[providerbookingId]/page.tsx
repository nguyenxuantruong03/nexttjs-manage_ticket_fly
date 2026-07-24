import { DetailPage } from "@/components/detail/detail-page";
import { ProviderBookingServerService } from "@/services/provider-booking/server";
import { providerBookingFieldGroups } from "../components/steps/field-groups";

type Props = {
  params: Promise<{
    providerbookingId: string;
  }>;
};

export default async function ProviderBookingEditPage({ params }: Props) {
  const { providerbookingId } = await params;

  const providerBookingData =
    await ProviderBookingServerService.getOne(providerbookingId);

  return (
    <DetailPage
      groups={providerBookingFieldGroups}
      data={providerBookingData}
      title={`Provider Booking ${providerBookingData.email}`}
    />
  );
}
