"use client";

import { useParams } from "next/navigation";

import FuelTypeForm from "../../components/FuelTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useFuelTypeUpdateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeUpdateFormData";

export default function FuelTypeEditPage() {
  const params = useParams();

  const fuelTypeId = params.fuelTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFuelTypeUpdateFormData(fuelTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Có 2 nguồn lỗi khả dĩ (fuelType, bookingType) - ưu tiên hiện
    // message của fuelType trước vì đó là dữ liệu chính của trang này.
    return (
      <ErrorPage
        description={
          errors.fuelType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại nhiên liệu, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FuelTypeForm
      initialData={data.fuelTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}
