"use client";

import { useParams } from "next/navigation";

import PackageForm from "../../components/PackageForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { usePackageUpdateFormData } from "@/hooks/commerce/package/usePackageUpdateFormData";

export default function PackageEditPage() {
  const params = useParams();

  const packageId = params.packageId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePackageUpdateFormData(packageId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.package?.message ??
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
      initialData={data.packageData}
      bookingTypeData={data.bookingTypeData}
      currencyData={data.currencyData}
      mediaAssetData={data.mediaAssetData}
    />
  );
}
