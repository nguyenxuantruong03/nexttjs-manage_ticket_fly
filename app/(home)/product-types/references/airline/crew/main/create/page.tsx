"use client";

import { useFlyCrewCreateFormData } from "@/hooks/product-types/references/airline/crew/useFlyCrewCreateFormData";

import FlyCrewForm from "../components/FlyCrewForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyCrewCreatePage = () => {
  const { data, isLoading, error } = useFlyCrewCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FlyCrewForm
      roleData={data.roles}
      dutyData={data.duties}
      airlineData={data.airlines}
      aircraftTypeData={data.aircraftTypeData}
    />
  );
};

export default FlyCrewCreatePage;
