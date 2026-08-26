"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceBenefitTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-benefit-type/useInsuranceBenefitTypeCreateFormData";
import CarRentalInsuranceBenefitTypeForm from "../components/CarRentalInsuranceBenefitTypeTypeForm";

const CarRentalInsuranceBenefitTypeCreatePage = () => {
  const { data, isLoading, error } =
    useCarRentalInsuranceBenefitTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CarRentalInsuranceBenefitTypeForm />;
};

export default CarRentalInsuranceBenefitTypeCreatePage;