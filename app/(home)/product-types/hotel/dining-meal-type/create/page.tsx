"use client";

import { useHotelDiningMealTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-dining-meal-type/useHotelDiningMealTypeCreateFormData";
import DiningMealTypeForm from "../components/DiningMealTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningMealTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelDiningMealTypeCreateFormData();

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

  return <DiningMealTypeForm />;
};

export default DiningMealTypeCreatePage;
