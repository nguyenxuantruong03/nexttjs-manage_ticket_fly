"use client";

import { useParams } from "next/navigation";

import VehicleTypeForm from "../../components/VehicleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useVehicleTypeUpdateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeUpdateFormData";

export default function VehicleTypeEditPage() {
  const params = useParams();

  const vehicleTypeId = params.vehicleTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useVehicleTypeUpdateFormData(vehicleTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.vehicleType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại xe, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <VehicleTypeForm
      initialData={data.vehicleTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}
