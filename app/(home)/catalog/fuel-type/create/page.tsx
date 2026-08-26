"use client";

import FuelTypeForm from "../components/FuelTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useFuelTypeCreateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeCreateFormData";

const FuelTypeCreatePage = () => {
  const { data, isLoading, error } = useFuelTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FuelTypeForm bookingTypeData={data.bookingTypes} />;
};

export default FuelTypeCreatePage;
