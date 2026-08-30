"use client";

import { useFlyMealTypeCreateFormData } from "@/hooks/product-types/ticket-fly/meal-type/useFlyMealTypeCreateFormData";

import FlyMealTypeForm from "../components/FlyMealTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyMealTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyMealTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.mealType?.message ??
          "Không tải được dữ liệu loại suất ăn, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyMealTypeForm />;
};

export default FlyMealTypeCreatePage;