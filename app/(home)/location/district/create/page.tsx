"use client";

import { useDistrictCreateFormData } from "@/hooks/location/district/useDistrictCreateFormData";
import DistrictForm from "../components/DistrictForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DistrictCreatePage() {
  const { data, isLoading, isError, refetch } = useDistrictCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu quận/huyện, vui lòng thử lại."
        onRetry={refetch}
      />
    );
  }

  return (
    <DistrictForm
      cityData={data.cityData}
      countryData={data.countryData}
      bookingTypeData={data.bookingTypeData}
      searchTagData={data.searchTagData}
      timezones={data.timezones}
    />
  );
}
