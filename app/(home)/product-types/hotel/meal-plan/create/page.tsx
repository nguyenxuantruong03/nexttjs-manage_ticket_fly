"use client";

import { useHotelMealPlanCreateFormData } from "@/hooks/product-types/hotel/hotel-meal-plan/useHotelMealPlanCreateFormData";
import MealPlanForm from "../components/MealPlanForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const MealPlanCreatePage = () => {
  const { data, isLoading, error } = useHotelMealPlanCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <MealPlanForm />;
};

export default MealPlanCreatePage;
