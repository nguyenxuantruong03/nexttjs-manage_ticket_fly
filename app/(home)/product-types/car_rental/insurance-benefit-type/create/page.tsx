"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceBenefitTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-benefit-type/useInsuranceBenefitTypeCreateFormData";
import CarRentalInsuranceBenefitTypeForm from "../components/CarRentalInsuranceBenefitTypeTypeForm";

const CarRentalInsuranceBenefitTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useCarRentalInsuranceBenefitTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.insuranceBenefitType?.message ??
          "Không tải được dữ liệu loại quyền lợi bảo hiểm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <CarRentalInsuranceBenefitTypeForm />;
};

export default CarRentalInsuranceBenefitTypeCreatePage;
