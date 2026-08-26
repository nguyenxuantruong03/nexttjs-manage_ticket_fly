"use client";

import { useProviderBookingUpdateFormData } from "@/hooks/provider-booking/useProviderBookingUpdateFormData";
import { useParams } from "next/navigation";
import ProviderBookingForm from "../../components/ProviderBookingForm.tsx";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function ProviderBookingEditPage() {
  const params = useParams();

  const providerbookingId = params.providerbookingId as string;

  const { data, isLoading, error } =
    useProviderBookingUpdateFormData(providerbookingId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ProviderBookingForm
      initialData={data.initialData}
      userDatas={data.userDatas}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
