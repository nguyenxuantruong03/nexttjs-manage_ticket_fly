"use client";

import CarRentalDocumentTypeForm from "../components/CarRentalDocumentTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useCarRentalDocumentTypeCreateFormData } from "@/hooks/product-types/car-rental/document-type/useDocumentTypeCreateFormData";

const CarRentalDocumentTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useCarRentalDocumentTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.documentType?.message ??
          "Không tải được dữ liệu loại giấy tờ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <CarRentalDocumentTypeForm />;
};

export default CarRentalDocumentTypeCreatePage;
