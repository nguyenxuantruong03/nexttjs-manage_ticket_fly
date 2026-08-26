"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import PromotionForm from "../components/PromotionForm";
import { usePromotionCreateFormData } from "@/hooks/commerce/promotion/usePromotionCreateFormData";

export default function PromotionCreatePage() {
  const { data, isLoading, error } = usePromotionCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <PromotionForm bookingTypeData={data.bookingTypeData} />;
}
