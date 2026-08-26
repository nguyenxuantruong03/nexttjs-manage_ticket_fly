"use client";

import { useFlyAircraftCreateFormData } from "@/hooks/product-types/references/airline/aircraft/useFlyAircraftCreateFormData";

import FlyAircraftForm from "../components/FlyAircraftForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyAircraftCreatePage = () => {
  const { data, isLoading, error } = useFlyAircraftCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAircraftForm />;
};

export default FlyAircraftCreatePage;
