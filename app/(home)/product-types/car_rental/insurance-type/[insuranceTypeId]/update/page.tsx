"use client";

import { useParams } from "next/navigation";

import CarRentalInsuranceTypeForm from "../../components/CarRentalInsuranceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceTypeUpdateFormData } from "@/hooks/product-types/car-rental/insurance-type/useInsuranceTypeUpdateFormData";

export default function CarRentalInsuranceTypeEditPage() {
  const params = useParams();

  const insuranceTypeId = params.insuranceTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCarRentalInsuranceTypeUpdateFormData(insuranceTypeId);

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

  return <CarRentalInsuranceTypeForm initialData={data.initialData} />;
}
