"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import PromotionForm from "../components/PromotionRuleForm";
import { usePromotionRuleCreateFormData } from "@/hooks/commerce/promotion-rule/usePromotionRuleCreateFormData";

export default function PromotionCreatePage() {
  const { data, isLoading, error } = usePromotionRuleCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PromotionForm
      promotionData={data.promotionData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
