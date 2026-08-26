"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import PriceRuleTypeForm from "../components/PriceRuleTypeForm";

import { usePriceRuleTypeCreateFormData } from "@/hooks/commerce/price-rule-type/usePriceRuleTypeCreateFormData";

export default function PriceRuleTypeCreatePage() {
  const { data, isLoading, error } =
    usePriceRuleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PriceRuleTypeForm
      bookingTypeData={data.bookingTypes}
    />
  );
}