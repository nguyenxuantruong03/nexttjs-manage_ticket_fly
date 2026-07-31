"use client";

import { useParams } from "next/navigation";

import CarRentalForm from "../../components/CarrentalForm";
import { useCarrentalUpdateFormData } from "@/hooks/car-rental/useCarrentalUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CarrentalEditPage() {
  const params = useParams();

  const carrentalId = params.carrentalId as string;

  const { data, isLoading, error } = useCarrentalUpdateFormData(carrentalId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CarRentalForm
      initialData={data.initialData}
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
