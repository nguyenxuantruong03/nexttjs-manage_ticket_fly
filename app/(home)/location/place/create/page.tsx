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
      addresses={data.addresses.data}
      cities={data.cities.data}
      countries={data.countries.data}
      districts={data.districts.data}
      wards={data.wards.data}
      searchTagData={data.searchTag.data}
      placeTypeData={data.placeTypeData.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
};

export default PlaceCreatePage;
