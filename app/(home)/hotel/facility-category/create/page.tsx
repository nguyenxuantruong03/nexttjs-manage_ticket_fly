"use client";

import { useHotelFacilityCategoryCreateFormData } from "@/hooks/hotel/hotel-facility-category/useHotelFacilityCategoryCreateFormData";
import FacilityCategoryForm from "../components/FacilityCategoryForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FacilityCategoryCreatePage = () => {
  const { data, isLoading, error } = useHotelFacilityCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FacilityCategoryForm />;
};

export default FacilityCategoryCreatePage;
