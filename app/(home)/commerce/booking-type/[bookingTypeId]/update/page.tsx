"use client";

import { useParams } from "next/navigation";

import BookingTypeForm from "../../components/BookingTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useBookingType } from "@/hooks/commerce/booking-type";

export default function BookingTypeEditPage() {
  const params = useParams();

  const bookingTypeId = params.bookingTypeId as string;

  const { data, isLoading, error } = useBookingType(bookingTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BookingTypeForm initialData={data} />;
}
