"use client";

import { useParams } from "next/navigation";

import PriceRuleTypeForm from "../../components/PriceRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { usePriceRuleTypeUpdateFormData } from "@/hooks/commerce/price-rule-type/usePriceRuleTypeUpdateFormData";

export default function PriceRuleTypeEditPage() {
  const params = useParams();

  const priceRuleTypeId = params.priceRuleTypeId as string;

  const { data, isLoading, error } =
    usePriceRuleTypeUpdateFormData(priceRuleTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PriceRuleTypeForm
      initialData={data.priceRuleTypeData}
      bookingTypeData={data.bookingTypes}
    />
  );
}