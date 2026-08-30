"use client";

import { useWardCreateFormData } from "@/hooks/location/ward/useWardCreateFormData";
import WardForm from "../components/WardForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function WardCreatePage() {
  const { data, isLoading, isError, refetch } = useWardCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu phường/xã, vui lòng thử lại."
        onRetry={refetch}
      />
    );
  }

  return (
    <WardForm
      cityData={data.cityData}
      districtData={data.districtData}
      bookingTypeData={data.bookingTypeData}
      searchTagData={data.searchTagData}
    />
  );
}
