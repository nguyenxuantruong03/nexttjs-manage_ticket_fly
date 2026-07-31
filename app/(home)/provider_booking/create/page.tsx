"use client";

import { useProviderBookingCreateFormData } from "@/hooks/provider-booking/useProviderBookingCreateFormData";
import ProviderBookingForm from "../components/ProviderBookingForm.tsx";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function ProviderBookingsCreate() {
  const { data, isLoading, error } = useProviderBookingCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ProviderBookingForm
      userDatas={data.userDatas}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
