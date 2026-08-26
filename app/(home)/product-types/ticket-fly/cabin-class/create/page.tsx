"use client";

import { useFlyCabinClassCreateFormData } from "@/hooks/product-types/ticket-fly/cabin-class/useFlyCabinClassCreateFormData";

import FlyCabinClassForm from "../components/FlyCabinClassForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyCabinClassCreatePage = () => {
  const { data, isLoading, error } = useFlyCabinClassCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCabinClassForm />;
};

export default FlyCabinClassCreatePage;
