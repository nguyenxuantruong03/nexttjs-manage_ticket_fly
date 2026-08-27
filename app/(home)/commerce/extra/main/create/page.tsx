"use client";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useExtraCreateFormData } from "@/hooks/commerce/extra/useExtraCreateFormData";
import ExtraForm from "../components/ExtraForm";

export default function ExtraCreatePage() {
  const { data, isLoading, error } = useExtraCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <ExtraForm
      bookingTypeData={data.bookingTypeData}
      extraTypeData={data.extraTypeData}
      currencyData={data.currencyData}
    />
  );
}
