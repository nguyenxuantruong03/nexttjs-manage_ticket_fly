"use client";

import { useParams } from "next/navigation";

import PriceRuleTypeForm from "../../components/PriceRuleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { usePriceRuleTypeUpdateFormData } from "@/hooks/commerce/price-rule-type/usePriceRuleTypeUpdateFormData";

export default function PriceRuleTypeEditPage() {
  const params = useParams();

  const priceRuleTypeId = params.priceRuleTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePriceRuleTypeUpdateFormData(priceRuleTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.priceRuleType?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu quy tắc giá, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PriceRuleTypeForm
      initialData={data.priceRuleTypeData}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
