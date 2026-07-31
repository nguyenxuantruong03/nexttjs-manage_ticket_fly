"use client";

import { useHotelDiningServiceTypeCreateFormData } from "@/hooks/hotel/hotel-dining-service-type/useHotelDiningServiceTypeCreateFormData";
import DiningServiceTypeForm from "../components/DiningServiceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningServiceTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelDiningServiceTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <DiningServiceTypeForm />;
};

export default DiningServiceTypeCreatePage;
