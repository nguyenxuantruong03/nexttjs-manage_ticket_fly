"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraFeeTypeCreateFormData } from "@/hooks/commerce/extra-fee-type/useExtraFeeTypeCreateFormData";
import ExtraFeeTypeForm from "../components/ExtraFeeTypeForm";

export default function ExtraFeeTypeCreatePage() {
  const { data, isLoading, error } = useExtraFeeTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ExtraFeeTypeForm bookingTypeData={data.bookingTypes} />;
}
