"use client";

import { useFlySeatTypeCreateFormData } from "@/hooks/product-types/ticket-fly/seat-type/useFlySeatTypeCreateFormData";

import FlySeatTypeForm from "../components/FlySeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlySeatTypeCreatePage = () => {
  const { data, isLoading, error } = useFlySeatTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlySeatTypeForm />;
};

export default FlySeatTypeCreatePage;