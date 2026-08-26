"use client";

import { useQuery } from "@tanstack/react-query";

export const useContinentCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["continent-create-form-data"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      return {};
    },
  });
};
