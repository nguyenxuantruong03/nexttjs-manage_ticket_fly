"use client";

import { useTimezone } from "@/hooks/location/timezone";

export const useTimezoneUpdateFormData = (
  timezoneId: string,
  enabled = true,
) => {
  const timezoneQuery = useTimezone(timezoneId, enabled);

  return {
    data: timezoneQuery.data ? { initialData: timezoneQuery.data } : undefined,

    isLoading: timezoneQuery.isLoading,
    isFetching: timezoneQuery.isFetching,

    isError: timezoneQuery.isError,
    errors: {
      timezone: timezoneQuery.error as Error | null,
    },

    refetch: timezoneQuery.refetch,
  };
};
