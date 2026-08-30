"use client";

import { useParams } from "next/navigation";

import PlaceForm from "../../components/PlaceForm";
import { usePlaceUpdateFormData } from "@/hooks/location/place/usePlaceUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function PlaceEditPage() {
  const params = useParams();
  const placeId = params.placeId as string;

  const { data, isLoading, isError, errors, refetch } =
    usePlaceUpdateFormData(placeId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.place?.message ??
          "Không tải được dữ liệu địa điểm, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <PlaceForm
      initialData={data.initialData}
      addresses={data.addresses}
      cities={data.cities}
      countries={data.countries}
      districts={data.districts}
      wards={data.wards}
      searchTagData={data.searchTag}
      placeTypeData={data.placeTypeData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
