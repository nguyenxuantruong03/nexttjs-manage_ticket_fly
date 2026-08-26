"use client";

import BusSeatTypeForm from "../components/BusSeatTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useBusSeatTypeCreateFormData } from "@/hooks/product-types/bus/seat-type/useSeatTypeCreateFormData";

const BusSeatTypeCreatePage = () => {
  const { data, isLoading, error } = useBusSeatTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BusSeatTypeForm />;
};

export default BusSeatTypeCreatePage;
