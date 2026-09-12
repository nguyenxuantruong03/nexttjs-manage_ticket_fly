"use client";

import { useMemo } from "react";

export const useRegulationCategoryCreateFormData = (_enabled = true) => {
  return useMemo(
    () => ({
      data: {} as Record<string, never>,

      isLoading: false,

      isFetching: false,

      isError: false,

      errors: { message: "" } as Record<string, unknown>,

      refetch: async () => {},
    }),
    [],
  );
};
