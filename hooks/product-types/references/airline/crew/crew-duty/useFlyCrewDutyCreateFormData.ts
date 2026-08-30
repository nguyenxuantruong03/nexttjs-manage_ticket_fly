"use client";

import { useQuery } from "@tanstack/react-query";

export const useFlyCrewDutyCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-duty-create-form-data"],
    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [] = await Promise.all([]);

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
    // "crewDuty" cho nhất quán với entity.
    errors: {
      crewDuty: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
