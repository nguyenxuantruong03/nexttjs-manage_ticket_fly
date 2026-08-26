"use client";

import { useParams } from "next/navigation";

import { useHotelCheckInPolicyUpdateFormData } from "@/hooks/product-types/hotel/hotel-check-in-policy/useHotelCheckInPolicyUpdateFormData";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import HotelCheckInPolicyForm from "../../components/CheckInPolicyForm";

export default function HotelCheckInPolicyEditPage() {
  const params = useParams();

  const checkInPolicyId = params.checkInPolicyId as string;

  const { data, isLoading, error } =
    useHotelCheckInPolicyUpdateFormData(checkInPolicyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <HotelCheckInPolicyForm
      initialData={data.initialData}
      hotelData={data.hotels}
    />
  );
}
