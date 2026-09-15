"use client";

import { useTimezone } from "@/hooks/location/timezone";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useTimezoneUpdateFormData = (
  timezoneId: string,
  enabled = true,
) => {
  const timezoneQuery = useTimezone(timezoneId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: timezoneQuery.data
      ? {
          initialData: timezoneQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: timezoneQuery.isLoading,

    isFetching: timezoneQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: timezoneQuery.isError,

    errors: {
      timezone: timezoneQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: timezoneQuery.refetch,
  };
};
