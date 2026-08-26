"use client";

import { useParams } from "next/navigation";

import PromotionForm from "../../components/PromotionForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePromotionUpdateFormData } from "@/hooks/commerce/promotion/usePromotionUpdateFormData";

export default function PromotionEditPage() {
  const params = useParams();

  const promotionId = params.promotionId as string;

  const { data, isLoading, error } = usePromotionUpdateFormData(promotionId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PromotionForm
      initialData={data.promotionData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
