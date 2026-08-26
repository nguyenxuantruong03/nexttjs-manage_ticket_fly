"use client";

import { ContinentService } from "@/services/location/country/continent/client";
import { useQuery } from "@tanstack/react-query";

export const useContinentUpdateFormData = (
  continentId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["continent-update-form-data", continentId],

    enabled: enabled && !!continentId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData = await ContinentService.getOne(continentId);

      return {
        initialData,
      };
    },
  });
};
