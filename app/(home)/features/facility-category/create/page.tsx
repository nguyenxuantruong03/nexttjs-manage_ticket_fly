"use client";

import FacilityCategoryForm from "../components/FacilityCategoryForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFacilityCategoryCreateFormData } from "@/hooks/features/facility-category/useFacilityCategoryCreateFormData";

const FacilityCategoryCreatePage = () => {
  const { data, isLoading, error } = useFacilityCategoryCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FacilityCategoryForm bookingTypeData={data.bookingTypeData} />;
};

export default FacilityCategoryCreatePage;
