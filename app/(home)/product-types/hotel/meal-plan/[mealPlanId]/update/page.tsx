"use client";

import { useParams } from "next/navigation";
import MealPlanForm from "../../components/MealPlanForm";
import { useHotelMealPlanUpdateFormData } from "@/hooks/product-types/hotel/hotel-meal-plan/useHotelMealPlanUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function MealPlanEditPage() {
  const params = useParams();

  const mealPlanId = params.mealPlanId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelMealPlanUpdateFormData(mealPlanId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.mealPlan?.message ??
          "Không tải được dữ liệu gói bữa ăn, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <MealPlanForm initialData={data.initialData} />;
}
