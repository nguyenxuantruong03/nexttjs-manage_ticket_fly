"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useFuelTypeCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data: bookingTypeQuery.data
      ? { bookingTypes: bookingTypeQuery.data }
      : undefined,

    isLoading: bookingTypeQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching,

    // isError là field bool duy nhất dùng để check "có lỗi hay không"
    // ở component (if (isError || !data) ...). "errors" bên dưới chỉ
    // dùng khi cần hiển thị message/nguồn lỗi cụ thể, không thay thế
    // isError.
    isError: bookingTypeQuery.isError,
    // Type rõ ràng (Error | null) thay vì để TS suy ra unknown -
    // component gọi errors.bookingType?.message không bị báo lỗi type.
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: bookingTypeQuery.refetch,
  };
};
