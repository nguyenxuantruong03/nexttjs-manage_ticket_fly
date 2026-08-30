"use client";

import { useParams } from "next/navigation";

import CarRentalDocumentTypeForm from "../../components/CarRentalDocumentTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useCarRentalDocumentTypeUpdateFormData } from "@/hooks/product-types/car-rental/document-type/useDocumentTypeUpdateFormData";

export default function CarRentalDocumentTypeEditPage() {
  const params = useParams();

  const documentTypeId = params.documentTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useCarRentalDocumentTypeUpdateFormData(documentTypeId);

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

  return <CarRentalDocumentTypeForm initialData={data.initialData} />;
}
