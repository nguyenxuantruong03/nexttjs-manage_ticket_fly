"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraCreateFormData } from "@/hooks/commerce/extra/useExtraCreateFormData";
import ExtraForm from "../components/ExtraForm";

export default function ExtraCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useExtraCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          errors.extraType?.message ??
          errors.currency?.message ??
          "Không tải được dữ liệu, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ExtraForm
      bookingTypeData={data.bookingTypeData.data}
      extraTypeData={data.extraTypeData.data}
      currencyData={data.currencyData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
