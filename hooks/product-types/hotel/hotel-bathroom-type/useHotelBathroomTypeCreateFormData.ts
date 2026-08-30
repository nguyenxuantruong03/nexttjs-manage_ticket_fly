"use client";

import { useQuery } from "@tanstack/react-query";

export const useHotelBathroomTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["bathroom-type-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      await Promise.all([]);

      return {};
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
    // Trang create hiện chưa gọi service nào (Promise.all rỗng), giữ
    // key "bathroomType" để đồng bộ với update, phòng khi thêm nguồn
    // dữ liệu về sau.
    errors: {
      bathroomType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
