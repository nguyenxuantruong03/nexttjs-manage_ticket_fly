"use client";

import { useHotelExtraTypeCreateFormData } from "@/hooks/hotel/hotel-extra-type/useHotelExtraTypeCreateFormData";
import ExtraTypeForm from "../components/ExtraTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const ExtraTypeCreatePage = () => {
  const { data, isLoading, error } = useHotelExtraTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <ExtraTypeForm />;
};

export default ExtraTypeCreatePage;
