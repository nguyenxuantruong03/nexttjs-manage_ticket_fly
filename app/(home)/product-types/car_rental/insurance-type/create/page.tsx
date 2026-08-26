"use client";

import CarRentalInsuranceTypeForm from "../components/CarRentalInsuranceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-type/useInsuranceTypeCreateFormData";

const CarRentalInsuranceTypeCreatePage = () => {
  const { data, isLoading, error } =
    useCarRentalInsuranceTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CarRentalInsuranceTypeForm />;
};

export default CarRentalInsuranceTypeCreatePage;