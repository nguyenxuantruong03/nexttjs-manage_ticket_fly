"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import BookingItemTypeForm from "../components/BookingItemTypeForm";
import { useBookingItemTypeCreateFormData } from "@/hooks/commerce/booking-item-type/useBookingItemTypeCreateFormData";

export default function BookingItemTypeCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useBookingItemTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.bookingType?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BookingItemTypeForm bookingTypeData={data.bookingTypeData.data} />;
}
