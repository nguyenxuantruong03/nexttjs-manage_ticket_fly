"use client";

import VehicleTypeForm from "../components/VehicleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useVehicleTypeCreateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeCreateFormData";

const VehicleTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useVehicleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <VehicleTypeForm bookingTypeData={data.bookingTypes} />;
};

export default VehicleTypeCreatePage;
