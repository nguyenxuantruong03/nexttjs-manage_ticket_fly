"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAircraftCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-create-form-data"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [airlineData] = await Promise.all([FlyAirlineService.getMany()]);

      return {
        airlineData,
      };
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
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung) nên chỉ có 1 key.
    errors: {
      aircraft: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
