"use client";

import { useFlyCrewDutyCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-duty/useFlyCrewDutyCreateFormData";

import FlyCrewDutyForm from "../components/FlyCrewDutyForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyCrewDutyCreatePage = () => {
  const { data, isLoading, error } = useFlyCrewDutyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCrewDutyForm />;
};

export default FlyCrewDutyCreatePage;
