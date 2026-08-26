"use client";

import { useParams } from "next/navigation";

import CarRentalDocumentTypeForm from "../../components/CarRentalDocumentTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useCarRentalDocumentTypeUpdateFormData } from "@/hooks/product-types/car-rental/document-type/useDocumentTypeUpdateFormData";

export default function CarRentalDocumentTypeEditPage() {
  const params = useParams();

  const documentTypeId = params.documentTypeId as string;

  const { data, isLoading, error } =
    useCarRentalDocumentTypeUpdateFormData(documentTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <CarRentalDocumentTypeForm initialData={data.initialData} />
  );
}