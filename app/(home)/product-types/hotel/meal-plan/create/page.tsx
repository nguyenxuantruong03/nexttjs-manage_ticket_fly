"use client";

import { useHotelMealPlanCreateFormData } from "@/hooks/product-types/hotel/hotel-meal-plan/useHotelMealPlanCreateFormData";
import MealPlanForm from "../components/MealPlanForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MealPlanCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelMealPlanCreateFormData();

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

  return <MealPlanForm />;
};

export default MealPlanCreatePage;
