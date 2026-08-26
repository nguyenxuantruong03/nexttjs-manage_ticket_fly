"use client";

import { useParams } from "next/navigation";

import BookingItemTypeForm from "../../components/BookingItemTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useBookingItemTypeUpdateFormData } from "@/hooks/commerce/booking-item-type/useBookingItemTypeUpdateFormData";

export default function BookingItemTypeEditPage() {
  const params = useParams();

  const bookingItemTypeId = params.bookingItemTypeId as string;

  const { data, isLoading, error } =
    useBookingItemTypeUpdateFormData(bookingItemTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <BookingItemTypeForm
      initialData={data.bookingItemTypeData}
      bookingTypeData={data.bookingTypeData}
    />
  );
}
