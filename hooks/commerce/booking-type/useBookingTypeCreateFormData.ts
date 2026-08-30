"use client";

import { useMemo } from "react";

// Form create của booking-type không phụ thuộc dữ liệu nào khác nên
// KHÔNG cần bọc trong useQuery. useMemo giữ object/hàm refetch không
// bị tạo mới mỗi lần render. Shape giống các hook *FormData khác để
// component dùng chung logic (isLoading/isError/data/...).

export const useBookingTypeCreateFormData = (_enabled = true) => {
  return useMemo(
    () => ({
      data: {} as Record<string, never>,
      isLoading: false,
      isFetching: false,
      isError: false,
      errors: {} as Record<string, unknown>,
      refetch: async () => {},
    }),
    [],
  );
};
