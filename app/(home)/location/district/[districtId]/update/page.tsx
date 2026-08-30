"use client";

import { useParams } from "next/navigation";

import DistrictForm from "../../components/DistrictForm";
import { useDistrictUpdateFormData } from "@/hooks/location/district/useDistrictUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function DistrictEditPage() {
  const params = useParams();
  const districtId = params.districtId as string;

  const { data, isLoading, isError, errors, refetch } =
    useDistrictUpdateFormData(districtId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.district?.message ??
          "Không tải được dữ liệu quận/huyện, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <DistrictForm
      initialData={data.initialData}
      cityData={data.cityData}
      countryData={data.countryData}
      bookingTypeData={data.bookingTypeData}
      searchTagData={data.searchTagData}
      timezones={data.timezones}
    />
  );
}
