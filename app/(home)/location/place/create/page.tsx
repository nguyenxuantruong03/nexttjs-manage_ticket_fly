"use client";

import { usePlaceCreateFormData } from "@/hooks/location/place/usePlaceCreateFormData";
import PlaceForm from "../components/PlaceForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PlaceCreatePage = () => {
  const { data, isLoading, error } = usePlaceCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <PlaceForm
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
};

export default PlaceCreatePage;
