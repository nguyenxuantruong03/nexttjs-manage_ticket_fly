"use client";

import { useQuery } from "@tanstack/react-query";

import { ContinentService } from "@/services/location/country/continent/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useContinentUpdateFormData = (
  continentId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["continent-update-form-data", continentId],

    enabled: enabled && Boolean(continentId),

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const initialData = await ContinentService.getOne(continentId);

      return {
        initialData,
      };
    },
  });
};
