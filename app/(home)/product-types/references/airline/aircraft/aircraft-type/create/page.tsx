"use client";

import { useFlyAircraftTypeCreateFormData } from "@/hooks/product-types/references/airline/aircraft/aircraft-type/useFlyAircraftTypeCreateFormData";

import FlyAircraftTypeForm from "../components/FlyAircraftTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyAircraftTypeCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAircraftTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.aircraftType?.message ??
          "Không tải được dữ liệu loại tàu bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyAircraftTypeForm />;
};

export default FlyAircraftTypeCreatePage;
