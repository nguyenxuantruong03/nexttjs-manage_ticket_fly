"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useCarRentalInsuranceBenefitTypeUpdateFormData } from "@/hooks/product-types/car-rental/insurance-benefit-type/useInsuranceBenefitTypeUpdateFormData";
import CarRentalInsuranceBenefitTypeForm from "../../components/CarRentalInsuranceBenefitTypeTypeForm";

export default function CarRentalInsuranceBenefitTypeEditPage() {
  const params = useParams();

  const insuranceBenefitTypeId = params.insuranceBenefitTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCarRentalInsuranceBenefitTypeUpdateFormData(insuranceBenefitTypeId);

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

  return <CarRentalInsuranceBenefitTypeForm initialData={data.initialData} />;
}
