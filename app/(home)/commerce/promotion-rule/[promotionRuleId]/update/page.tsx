"use client";

import { useParams } from "next/navigation";

import PromotionRuleForm from "../../components/PromotionRuleForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { usePromotionRuleUpdateFormData } from "@/hooks/commerce/promotion-rule/usePromotionRuleUpdateFormData";

export default function PromotionRuleEditPage() {
  const params = useParams();

  const promotionRuleId = params.promotionRuleId as string;

  const { data, isLoading, error } =
    usePromotionRuleUpdateFormData(promotionRuleId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PromotionRuleForm
      initialData={data.promotionRuleData}
      promotionData={data.promotionData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
