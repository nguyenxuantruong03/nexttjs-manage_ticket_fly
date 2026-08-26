"use client";

import { useFlyAircraftTypeCreateFormData } from "@/hooks/product-types/references/airline/aircraft/aircraft-type/useFlyAircraftTypeCreateFormData";

import FlyAircraftTypeForm from "../components/FlyAircraftTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyAircraftTypeCreatePage = () => {
  const { data, isLoading, error } =
    useFlyAircraftTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAircraftTypeForm />;
};

export default FlyAircraftTypeCreatePage;