"use client";

import { useParams } from "next/navigation";
import DiningMealTypeForm from "../../components/DiningMealTypeForm";
import { useHotelDiningMealTypeUpdateFormData } from "@/hooks/hotel/hotel-dining-meal-type/useHotelDiningMealTypeUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function DiningMealTypeEditPage() {
  const params = useParams();

  const diningMealTypeId = params.diningMealTypeId as string;

  const { data, isLoading, error } =
    useHotelDiningMealTypeUpdateFormData(diningMealTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <DiningMealTypeForm initialData={data.initialData} />;
}
