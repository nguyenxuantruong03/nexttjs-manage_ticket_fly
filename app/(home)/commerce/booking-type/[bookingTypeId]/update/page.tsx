"use client";

import { useParams } from "next/navigation";

import BookingTypeForm from "../../components/BookingTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

import { useBookingType } from "@/hooks/commerce/booking-type";

export default function BookingTypeEditPage() {
  const params = useParams();

  const bookingTypeId = params.bookingTypeId as string;

  const { data, isLoading, isError, error, refetch } =
    useBookingType(bookingTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    // useBookingType là raw useQuery nên "error" đã có sẵn (không cần
    // bọc thành object "errors" như các hook *FormData tổng hợp nhiều
    // query). Dùng thẳng error.message cho description.
    return (
      <ErrorPage
        description={
          error?.message ??
          "Không tải được dữ liệu loại đặt chỗ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BookingTypeForm initialData={data} />;
}
