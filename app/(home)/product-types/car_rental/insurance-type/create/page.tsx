"use client";

import CarRentalInsuranceTypeForm from "../components/CarRentalInsuranceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-type/useInsuranceTypeCreateFormData";

const CarRentalInsuranceTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useCarRentalInsuranceTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.insuranceType?.message ??
          "Không tải được dữ liệu loại bảo hiểm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <CarRentalInsuranceTypeForm />;
};

export default CarRentalInsuranceTypeCreatePage;
