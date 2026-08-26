"use client";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import BookingItemTypeForm from "../components/BookingItemTypeForm";
import { useBookingItemTypeCreateFormData } from "@/hooks/commerce/booking-item-type/useBookingItemTypeCreateFormData";

export default function BookingItemTypeCreatePage() {
  const { data, isLoading, error } = useBookingItemTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BookingItemTypeForm bookingTypeData={data.bookingTypeData} />;
}
