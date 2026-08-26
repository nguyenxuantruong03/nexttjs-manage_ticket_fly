"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceBenefitTypeUpdateFormData } from "@/hooks/product-types/car-rental/insurance-benefit-type/useInsuranceBenefitTypeUpdateFormData";
import CarRentalInsuranceBenefitTypeForm from "../../components/CarRentalInsuranceBenefitTypeTypeForm";

export default function CarRentalInsuranceBenefitTypeEditPage() {
  const params = useParams();

  const insuranceBenefitTypeId = params.insuranceBenefitTypeId as string;

  const { data, isLoading, error } =
    useCarRentalInsuranceBenefitTypeUpdateFormData(insuranceBenefitTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CarRentalInsuranceBenefitTypeForm initialData={data.initialData} />;
}
