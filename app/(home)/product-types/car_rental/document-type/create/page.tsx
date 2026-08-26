"use client";

import CarRentalDocumentTypeForm from "../components/CarRentalDocumentTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useCarRentalDocumentTypeCreateFormData } from "@/hooks/product-types/car-rental/document-type/useDocumentTypeCreateFormData";

const CarRentalDocumentTypeCreatePage = () => {
  const { data, isLoading, error } =
    useCarRentalDocumentTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <CarRentalDocumentTypeForm />;
};

export default CarRentalDocumentTypeCreatePage;