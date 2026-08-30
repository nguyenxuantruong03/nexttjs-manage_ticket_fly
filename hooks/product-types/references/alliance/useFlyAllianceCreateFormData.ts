"use client";

import { useQuery } from "@tanstack/react-query";

export const useFlyAllianceCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-alliance-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
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
    // Hiện chưa fetch thêm dữ liệu nào khác nên chỉ có 1 key, đặt tên
    // "alliance" cho nhất quán với entity.
    errors: {
      alliance: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
