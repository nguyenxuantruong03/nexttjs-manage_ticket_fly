"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import PackageForm from "../components/PackageForm";

import { usePackageCreateFormData } from "@/hooks/commerce/package/usePackageCreateFormData";

export default function PackageCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    usePackageCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          errors.currency?.message ??
          "Không tải được dữ liệu gói dịch vụ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PackageForm
      bookingTypeData={data.bookingTypeData.data}
      currencyData={data.currencyData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
