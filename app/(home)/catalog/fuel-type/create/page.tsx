"use client";

import FuelTypeForm from "../components/FuelTypeForm";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import { useFuelTypeCreateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeCreateFormData";

const FuelTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFuelTypeCreateFormData();

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

  return <FuelTypeForm bookingTypeData={data.bookingTypes.data} />;
};

export default FuelTypeCreatePage;
