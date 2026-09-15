"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import PriceRuleTypeForm from "../components/PriceRuleTypeForm";

import { usePriceRuleTypeCreateFormData } from "@/hooks/commerce/price-rule-type/usePriceRuleTypeCreateFormData";

export default function PriceRuleTypeCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    usePriceRuleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu quy tắc giá, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <PriceRuleTypeForm bookingTypeData={data.bookingTypeData.data} />;
}
