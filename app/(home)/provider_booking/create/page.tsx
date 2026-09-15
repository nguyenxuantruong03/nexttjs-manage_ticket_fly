"use client";

import { useProviderBookingCreateFormData } from "@/hooks/provider-booking/useProviderBookingCreateFormData";
import ProviderBookingForm from "../components/ProviderBookingForm.tsx";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function ProviderBookingsCreate() {
  const { data, isLoading, isError, errors, refetch } =
    useProviderBookingCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.providerBooking?.message ??
          "Không tải được dữ liệu đặt chỗ nhà cung cấp, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <ProviderBookingForm
      userDatas={data.userDatas.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      bookingTypeData={data.bookingTypeData.data}
    />
  );
}
