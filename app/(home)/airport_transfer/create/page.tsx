"use client";

import { useAirportTransferCreateFormData } from "@/hooks/airport-transfer/useAirportTransferCreateFormData";
import AirportTransferForm from "../components/AirrportTransferForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AirportTransferCreatePage() {
  const { data, isLoading, error } = useAirportTransferCreateFormData();

  if (isLoading) {
    return <LoadingPage />
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <AirportTransferForm
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      searchTagData={data.searchTagData}
    />
  );
}
