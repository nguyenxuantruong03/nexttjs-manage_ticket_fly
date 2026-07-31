"use client";

import { useQuery } from "@tanstack/react-query";

import { TimezoneService } from "@/services/location/timezone/client";

export const useTimezoneUpdateFormData = (
  timezoneId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["timezone-update-form-data", timezoneId],
    enabled: enabled && !!timezoneId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        TimezoneService.getOne(timezoneId),
      ]);

      return {
        initialData,
      };
    },
  });
};
