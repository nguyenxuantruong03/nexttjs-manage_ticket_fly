"use client";

import { useHotelSustainabilityCreateFormData } from "@/hooks/product-types/hotel/hotel-sustainability/useHotelSustainabilityCreateFormData";
import SustainabilityForm from "../components/SustainabilityForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const SustainabilityCreatePage = () => {
  const { data, isLoading, error } = useHotelSustainabilityCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <SustainabilityForm />;
};

export default SustainabilityCreatePage;
