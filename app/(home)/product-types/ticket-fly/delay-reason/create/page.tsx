"use client";

import { useFlyDelayReasonCreateFormData } from "@/hooks/product-types/ticket-fly/delay-reason/useFlyDelayReasonCreateFormData";

import FlyDelayReasonForm from "../components/FlyDelayReasonForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyDelayReasonCreatePage = () => {
  const { data, isLoading, error } = useFlyDelayReasonCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyDelayReasonForm />;
};

export default FlyDelayReasonCreatePage;
