"use client";

import { useFlyAircraftTypeUpdateFormData } from "@/hooks/product-types/references/airline/aircraft/aircraft-type/useFlyAircraftTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyAircraftTypeForm from "../../components/FlyAircraftTypeForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyAircraftTypeEditPage() {
  const params = useParams();

  const aircraftTypeId = params.aircraftTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyAircraftTypeUpdateFormData(aircraftTypeId);

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

  return <FlyAircraftTypeForm initialData={data.initialData} />;
}
