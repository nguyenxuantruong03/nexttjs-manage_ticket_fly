"use client";

import { useParams } from "next/navigation";

import PromotionRuleForm from "../../components/PromotionRuleForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePromotionRuleUpdateFormData } from "@/hooks/commerce/promotion-rule/usePromotionRuleUpdateFormData";

export default function PromotionRuleEditPage() {
  const params = useParams();
  const promotionRuleId = params.promotionRuleId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePromotionRuleUpdateFormData(promotionRuleId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.promotionRule?.message ??
          errors.promotion?.message ??
          errors.bookingType?.message ??
          "Không tải được dữ liệu quy tắc khuyến mãi, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PromotionRuleForm
      initialData={data.promotionRuleData}
      promotionData={data.promotionData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
