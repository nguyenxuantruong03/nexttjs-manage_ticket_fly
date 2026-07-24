import { ProviderBookingServerService } from "@/services/provider-booking/server";
import ProviderBookingForm from "../../components/ProviderBookingForm.tsx";

type Props = {
  params: Promise<{
    providerbookingId: string;
  }>;
};

export default async function ProviderBookingEditPage({ params }: Props) {
  const { providerbookingId } = await params;
  const providerBookingData = await ProviderBookingServerService.getOne(providerbookingId);

  return <ProviderBookingForm initialData={providerBookingData} />;
}
