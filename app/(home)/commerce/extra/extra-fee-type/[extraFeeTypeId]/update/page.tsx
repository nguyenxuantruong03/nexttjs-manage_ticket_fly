"use client";

import { useParams } from "next/navigation";

import ExtraFeeTypeForm from "../../components/ExtraFeeTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraFeeTypeUpdateFormData } from "@/hooks/commerce/extra-fee-type/useExtraFeeTypeUpdateFormData";

export default function ExtraFeeTypeEditPage() {
  const params = useParams();

  const extraFeeTypeId = params.extraFeeTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useExtraFeeTypeUpdateFormData(extraFeeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.extraFeeType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại phí phụ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ExtraFeeTypeForm
      initialData={data.extraFeeTypeData}
      bookingTypeData={data.bookingTypes.data}
    />
  );
}
