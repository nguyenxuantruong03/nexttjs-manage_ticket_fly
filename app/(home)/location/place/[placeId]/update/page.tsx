"use client";

import { useParams } from "next/navigation";

import PlaceForm from "../../components/PlaceForm";
import { usePlaceUpdateFormData } from "@/hooks/location/place/usePlaceUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function PlaceEditPage() {
  const params = useParams();

  const placeId = params.placeId as string;

  const { data, isLoading, error } = usePlaceUpdateFormData(placeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
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
    />
  );
}
