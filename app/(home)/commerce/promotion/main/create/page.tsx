"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import PromotionForm from "../components/PromotionForm";
import { usePromotionCreateFormData } from "@/hooks/commerce/promotion/usePromotionCreateFormData";

export default function PromotionCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    usePromotionCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu khuyến mãi, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <PromotionForm bookingTypeData={data.bookingTypeData.data} />;
}
