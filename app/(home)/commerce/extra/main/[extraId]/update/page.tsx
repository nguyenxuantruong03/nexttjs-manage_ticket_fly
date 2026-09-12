"use client";

import { useParams } from "next/navigation";

import ExtraForm from "../../components/ExtraForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraUpdateFormData } from "@/hooks/commerce/extra/useExtraUpdateFormData";

export default function ExtraEditPage() {
  const params = useParams();

  const extraId = params.extraId as string;

  const { data, isLoading, isError, errors, refetch } =
    useExtraUpdateFormData(extraId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // Ưu tiên hiện message của extra trước vì đó là dữ liệu chính của
    // trang này, sau đó mới đến các dependency (bookingType/extraType/currency).
    return (
      <ErrorPage
        description={
          errors.extra?.message ??
          errors.bookingType?.message ??
          errors.extraType?.message ??
          errors.currency?.message ??
          "Không tải được dữ liệu extra, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ExtraForm
      initialData={data.extraData}
      bookingTypeData={data.bookingTypeData}
      extraTypeData={data.extraTypeData}
      currencyData={data.currencyData}
      mediaAssetData={data.mediaAssetData}
    />
  );
}
