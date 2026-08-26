"use client";

import { useHotelRatePlanTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-rate-plan-type/useHotelRatePlanTypeCreateFormData";
import RatePlanTypeForm from "../components/RatePlanTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const RatePlanTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelRatePlanTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <RatePlanTypeForm />;
};

export default RatePlanTypeCreatePage;
