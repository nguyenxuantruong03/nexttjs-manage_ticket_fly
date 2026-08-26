"use client";

import VehicleTypeForm from "../components/VehicleTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useVehicleTypeCreateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeCreateFormData";

const VehicleTypeCreatePage = () => {
  const { data, isLoading, error } = useVehicleTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <VehicleTypeForm bookingTypeData={data.bookingTypes} />;
};

export default VehicleTypeCreatePage;
