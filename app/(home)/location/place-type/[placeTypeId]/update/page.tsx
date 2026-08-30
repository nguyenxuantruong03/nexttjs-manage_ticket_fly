"use client";

import { useParams } from "next/navigation";

import PlaceTypeForm from "../../components/PlaceTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { usePlaceTypeUpdateFormData } from "@/hooks/location/place/place-type/usePlaceUpdateFormData";

export default function PlaceTypeEditPage() {
  const params = useParams();

  const placeTypeId = params.placeTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePlaceTypeUpdateFormData(placeTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.placeType?.message ??
          "Không tải được dữ liệu loại địa điểm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <PlaceTypeForm initialData={data.initialData} />;
}
