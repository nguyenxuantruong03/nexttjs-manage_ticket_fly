"use client";

import { useFlyAllianceCreateFormData } from "@/hooks/product-types/references/alliance/useFlyAllianceCreateFormData";

import FlyAllianceForm from "../components/FlyAllianceForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAllianceCreatePage = () => {
  const { data, isLoading, error } = useFlyAllianceCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAllianceForm />;
};

export default FlyAllianceCreatePage;
