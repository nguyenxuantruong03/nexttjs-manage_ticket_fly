"use client";

import { useParams } from "next/navigation";

import { useHotelCheckInPolicyUpdateFormData } from "@/hooks/product-types/hotel/hotel-check-in-policy/useHotelCheckInPolicyUpdateFormData";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import HotelCheckInPolicyForm from "../../components/CheckInPolicyForm";

export default function HotelCheckInPolicyEditPage() {
  const params = useParams();

  const checkInPolicyId = params.checkInPolicyId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelCheckInPolicyUpdateFormData(checkInPolicyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.checkInPolicy?.message ??
          "Không tải được dữ liệu chính sách nhận phòng, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <HotelCheckInPolicyForm
      initialData={data.initialData}
      hotelData={data.hotels.data}
    />
  );
}
