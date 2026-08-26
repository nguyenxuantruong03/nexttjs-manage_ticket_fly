"use client";

import { useFlyAddonTypeCreateFormData } from "@/hooks/product-types/references/airline/addon-type/useFlyAddonTypeCreateFormData";

import FlyAddonTypeForm from "../components/FlyAddonTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const FlyAddonTypeCreatePage = () => {
  const { data, isLoading, error } = useFlyAddonTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAddonTypeForm />;
};

export default FlyAddonTypeCreatePage;
