"use client";

import { useProviderBookingUpdateFormData } from "@/hooks/provider-booking/useProviderBookingUpdateFormData";
import { useParams } from "next/navigation";
import ProviderBookingForm from "../../components/ProviderBookingForm.tsx";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function ProviderBookingEditPage() {
  const params = useParams();

  const providerbookingId = params.providerbookingId as string;

  const { data, isLoading, isError, errors, refetch } =
    useProviderBookingUpdateFormData(providerbookingId);

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
      initialData={data.initialData}
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
