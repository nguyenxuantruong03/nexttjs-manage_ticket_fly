"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import PromotionRuleForm from "../components/PromotionRuleForm";
import { usePromotionRuleCreateFormData } from "@/hooks/commerce/promotion-rule/usePromotionRuleCreateFormData";

export default function PromotionRuleCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    usePromotionRuleCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          errors.promotion?.message ??
          "Không tải được dữ liệu quy tắc khuyến mãi, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PromotionRuleForm
      promotionData={data.promotionData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
