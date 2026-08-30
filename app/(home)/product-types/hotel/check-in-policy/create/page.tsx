"use client";

import { useHotelCheckInPolicyCreateFormData } from "@/hooks/product-types/hotel/hotel-check-in-policy/useHotelCheckInPolicyCreateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import HotelCheckInPolicyForm from "../components/CheckInPolicyForm";

const HotelCheckInPolicyCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useHotelCheckInPolicyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.hotel?.message ??
          "Không tải được dữ liệu khách sạn, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <HotelCheckInPolicyForm hotelData={data.hotels} />;
};

export default HotelCheckInPolicyCreatePage;
