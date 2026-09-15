"use client";

import { useFlyAircraftUpdateFormData } from "@/hooks/product-types/references/airline/aircraft/useFlyAircraftUpdateFormData";

import { useParams } from "next/navigation";

import FlyAircraftForm from "../../components/FlyAircraftForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyAircraftEditPage() {
  const params = useParams();

  const aircraftId = params.aircraftId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyAircraftUpdateFormData(aircraftId);

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
      initialData={data.initialData}
      airlineData={data.airlineData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
