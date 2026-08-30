"use client";

import FuelTypeForm from "../components/FuelTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useFuelTypeCreateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeCreateFormData";

const FuelTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFuelTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Chỉ có 1 nguồn dữ liệu (bookingType) nên lấy thẳng message của nó.
    // Fallback về description mặc định của ErrorPage nếu error không có
    // message (vd lỗi network không phải instance Error chuẩn).
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

  return <FuelTypeForm bookingTypeData={data.bookingTypes} />;
};

export default FuelTypeCreatePage;
