"use client";

import { useFlyCrewCreateFormData } from "@/hooks/product-types/references/airline/crew/useFlyCrewCreateFormData";

import FlyCrewForm from "../components/FlyCrewForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyCrewCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyCrewCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.crew?.message ??
          "Không tải được dữ liệu tổ bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
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
