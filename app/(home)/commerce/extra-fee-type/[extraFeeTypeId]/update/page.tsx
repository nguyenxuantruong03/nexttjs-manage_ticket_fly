"use client";

import { useParams } from "next/navigation";

import ExtraFeeTypeForm from "../../components/ExtraFeeTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraFeeTypeUpdateFormData } from "@/hooks/commerce/extra-fee-type/useExtraFeeTypeUpdateFormData";

export default function ExtraFeeTypeEditPage() {
  const params = useParams();

  const extraFeeTypeId = params.extraFeeTypeId as string;

  const { data, isLoading, error } =
    useExtraFeeTypeUpdateFormData(extraFeeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ExtraFeeTypeForm
      initialData={data.extraFeeTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}
