"use client";

import FlyAirlineForm from "../components/FlyAirlineForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFlyAirlineCreateFormData } from "@/hooks/product-types/references/airline/useFlyAirlineCreateFormData";

const FlyAirlineCreatePage = () => {
  const { data, isLoading, error } = useFlyAirlineCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAirlineForm />;
};

export default FlyAirlineCreatePage;
