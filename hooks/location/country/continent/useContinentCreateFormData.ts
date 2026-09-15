"use client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

import { useQuery } from "@tanstack/react-query";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useContinentCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["continent-create-form-data"],

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      return {};
    },
  });
};
