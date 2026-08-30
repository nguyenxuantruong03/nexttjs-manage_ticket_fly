"use client";

import { HotelService } from "@/services/product-types/hotel/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelCheckInPolicyCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-check-in-policy-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [hotels] = await Promise.all([HotelService.getMany()]);

      return { hotels };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    // isError là field bool duy nhất dùng để check "có lỗi hay không"
    // ở component (if (isError || !data) ...). "errors" bên dưới chỉ
    // dùng khi cần hiển thị message/nguồn lỗi cụ thể, không thay thế
    // isError.
    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (hotels) nên chỉ có 1 key.
    errors: {
      hotel: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
