"use client";

import { useHotelBedTypeCreateFormData } from "@/hooks/product-types/hotel/hotel-bed-type/useHotelBedTypeCreateFormData";
import BedTypeForm from "../components/BedTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const BedTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelBedTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BedTypeForm />;
};

export default BedTypeCreatePage;
