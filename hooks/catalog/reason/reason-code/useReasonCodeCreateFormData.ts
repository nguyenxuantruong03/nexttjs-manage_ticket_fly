"use client";

import { useReasonContexts } from "../reason-context";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useReasonCodeCreateFormData = (enabled = true) => {
  const reasonContextQuery = useReasonContexts(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: reasonContextQuery.data
      ? {
          reasonContexts: reasonContextQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: reasonContextQuery.isLoading,

    isFetching: reasonContextQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: reasonContextQuery.isError,

    errors: {
      reasonContext: reasonContextQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: reasonContextQuery.refetch,
  };
};
