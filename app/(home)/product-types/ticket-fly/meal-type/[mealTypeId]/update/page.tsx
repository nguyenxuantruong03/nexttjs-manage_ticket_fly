"use client";

import { useFlyMealTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/meal-type/useFlyMealTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyMealTypeForm from "../../components/FlyMealTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyMealTypeEditPage() {
  const params = useParams();

  const mealTypeId = params.mealTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyMealTypeUpdateFormData(mealTypeId);

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

  return <FlyMealTypeForm initialData={data.initialData} />;
}