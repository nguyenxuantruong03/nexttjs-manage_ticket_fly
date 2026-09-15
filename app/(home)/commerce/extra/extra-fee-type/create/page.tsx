"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraFeeTypeCreateFormData } from "@/hooks/commerce/extra-fee-type/useExtraFeeTypeCreateFormData";
import ExtraFeeTypeForm from "../components/ExtraFeeTypeForm";

export default function ExtraFeeTypeCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useExtraFeeTypeCreateFormData();

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

  return <ExtraFeeTypeForm bookingTypeData={data.bookingTypes.data} />;
}
