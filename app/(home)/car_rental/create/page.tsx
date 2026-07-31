"use client";

import { useCarrentalCreateFormData } from "@/hooks/car-rental/useCarrentalCreateFormData";
import CarrentalForm from "../components/CarrentalForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CarrentalCreatePage() {
  const { data, isLoading, error } = useCarrentalCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CarrentalForm
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
