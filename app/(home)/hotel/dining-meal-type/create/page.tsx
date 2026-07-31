"use client";

import { useHotelDiningMealTypeCreateFormData } from "@/hooks/hotel/hotel-dining-meal-type/useHotelDiningMealTypeCreateFormData";
import DiningMealTypeForm from "../components/DiningMealTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningMealTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelDiningMealTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <DiningMealTypeForm />;
};

export default DiningMealTypeCreatePage;
