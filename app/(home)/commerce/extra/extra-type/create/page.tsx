"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import ExtraTypeForm from "../components/ExtraTypeForm";
import { useExtraTypeCreateFormData } from "@/hooks/commerce/extra-type/useExtraTypeCreateFormData";

export default function ExtraTypeCreatePage() {
  const { data, isLoading, error } = useExtraTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ExtraTypeForm bookingTypeData={data.bookingTypeData} />;
}
