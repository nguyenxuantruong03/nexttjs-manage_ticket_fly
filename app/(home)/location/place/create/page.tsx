"use client";

import { usePlaceCreateFormData } from "@/hooks/location/place/usePlaceCreateFormData";
import PlaceForm from "../components/PlaceForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const PlaceCreatePage = () => {
  const { data, isLoading, isError, refetch } = usePlaceCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu địa điểm, vui lòng thử lại."
        onRetry={refetch}
      />
    );
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
