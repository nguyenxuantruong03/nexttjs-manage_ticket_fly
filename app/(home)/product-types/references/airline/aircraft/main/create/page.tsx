"use client";

import { useFlyAircraftCreateFormData } from "@/hooks/product-types/references/airline/aircraft/useFlyAircraftCreateFormData";

import FlyAircraftForm from "../components/FlyAircraftForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyAircraftCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAircraftCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.aircraft?.message ??
          "Không tải được dữ liệu tàu bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FlyAircraftForm
      airlineData={data.airlineData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
};

export default FlyAircraftCreatePage;
