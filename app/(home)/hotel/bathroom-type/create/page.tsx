"use client";

import { useHotelBathroomTypeCreateFormData } from "@/hooks/hotel/hotel-bathroom-type/useHotelBathroomTypeCreateFormData";
import BathroomTypeForm from "../components/BathroomTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const BathroomTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelBathroomTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BathroomTypeForm />;
};

export default BathroomTypeCreatePage;
