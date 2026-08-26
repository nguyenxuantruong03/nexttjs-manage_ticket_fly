"use client";

import { useParams } from "next/navigation";

import VehicleTypeForm from "../../components/VehicleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useVehicleTypeUpdateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeUpdateFormData";

export default function VehicleTypeEditPage() {
  const params = useParams();

  const vehicleTypeId = params.vehicleTypeId as string;

  const { data, isLoading, error } =
    useVehicleTypeUpdateFormData(vehicleTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <VehicleTypeForm
      initialData={data.vehicleTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}
