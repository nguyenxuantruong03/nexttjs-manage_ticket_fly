"use client";

import { useFlyMealTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/meal-type/useFlyMealTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyMealTypeForm from "../../components/FlyMealTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyMealTypeEditPage() {
  const params = useParams();

  const mealTypeId = params.mealTypeId as string;

  const { data, isLoading, error } = useFlyMealTypeUpdateFormData(mealTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyMealTypeForm initialData={data.initialData} />;
}
