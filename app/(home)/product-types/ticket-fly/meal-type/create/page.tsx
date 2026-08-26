"use client";

import { useFlyMealTypeCreateFormData } from "@/hooks/product-types/ticket-fly/meal-type/useFlyMealTypeCreateFormData";

import FlyMealTypeForm from "../components/FlyMealTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyMealTypeCreatePage = () => {
  const { data, isLoading, error } = useFlyMealTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyMealTypeForm />;
};

export default FlyMealTypeCreatePage;
