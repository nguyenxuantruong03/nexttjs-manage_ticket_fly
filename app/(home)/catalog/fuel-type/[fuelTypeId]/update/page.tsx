"use client";

import { useParams } from "next/navigation";

import FuelTypeForm from "../../components/FuelTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useFuelTypeUpdateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeUpdateFormData";

export default function FuelTypeEditPage() {
  const params = useParams();

  const fuelTypeId = params.fuelTypeId as string;

  const { data, isLoading, error } =
    useFuelTypeUpdateFormData(fuelTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FuelTypeForm
      initialData={data.fuelTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}