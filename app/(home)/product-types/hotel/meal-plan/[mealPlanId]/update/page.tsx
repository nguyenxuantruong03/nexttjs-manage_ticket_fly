"use client";

import { useParams } from "next/navigation";
import MealPlanForm from "../../components/MealPlanForm";
import { useHotelMealPlanUpdateFormData } from "@/hooks/product-types/hotel/hotel-meal-plan/useHotelMealPlanUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function MealPlanEditPage() {
  const params = useParams();

  const mealPlanId = params.mealPlanId as string;

  const { data, isLoading, error } = useHotelMealPlanUpdateFormData(mealPlanId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MealPlanForm initialData={data.initialData} />;
}
