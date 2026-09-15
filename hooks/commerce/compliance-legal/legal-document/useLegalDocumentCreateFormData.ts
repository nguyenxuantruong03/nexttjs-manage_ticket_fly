"use client";

import { useMemo } from "react";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useLegalDocumentCreateFormData = (_enabled = true) => {
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
