"use client";

import { useHotelBrandCreateFormData } from "@/hooks/hotel/hotel-brand/useHotelBrandCreateFormData";
import HotelBrandForm from "../components/BrandForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const HotelBrandCreatePage = () => {
  const { data, isLoading, error } = useHotelBrandCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <HotelBrandForm />;
};

export default HotelBrandCreatePage;
