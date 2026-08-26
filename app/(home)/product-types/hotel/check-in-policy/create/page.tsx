"use client";

import { useHotelCheckInPolicyCreateFormData } from "@/hooks/product-types/hotel/hotel-check-in-policy/useHotelCheckInPolicyCreateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import HotelCheckInPolicyForm from "../components/CheckInPolicyForm";

const HotelCheckInPolicyCreatePage = () => {
  const { data, isLoading, error } = useHotelCheckInPolicyCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <HotelCheckInPolicyForm hotelData={data.hotels} />;
};

export default HotelCheckInPolicyCreatePage;
