"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import ExtraTypeForm from "../components/ExtraTypeForm";
import { useExtraTypeCreateFormData } from "@/hooks/commerce/extra-type/useExtraTypeCreateFormData";

export default function ExtraTypeCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useExtraTypeCreateFormData();

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

  return <ExtraTypeForm bookingTypeData={data.bookingTypeData} />;
}