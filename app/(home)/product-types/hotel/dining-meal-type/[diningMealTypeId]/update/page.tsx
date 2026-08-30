"use client";

import { useParams } from "next/navigation";
import DiningMealTypeForm from "../../components/DiningMealTypeForm";
import { useHotelDiningMealTypeUpdateFormData } from "@/hooks/product-types/hotel/hotel-dining-meal-type/useHotelDiningMealTypeUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function DiningMealTypeEditPage() {
  const params = useParams();

  const diningMealTypeId = params.diningMealTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelDiningMealTypeUpdateFormData(diningMealTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.diningMealType?.message ??
          "Không tải được dữ liệu loại bữa ăn, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <DiningMealTypeForm initialData={data.initialData} />;
}
