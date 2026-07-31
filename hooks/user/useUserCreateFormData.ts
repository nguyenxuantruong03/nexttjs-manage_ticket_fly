"use client";

import { useQuery } from "@tanstack/react-query";

export const useUserCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["user-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [] = await Promise.all([]);

      return {};
    },
  });
};
