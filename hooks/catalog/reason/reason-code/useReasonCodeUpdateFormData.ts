"use client";

import { useReasonCode } from ".";

import { useReasonContexts } from "../reason-context";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useReasonCodeUpdateFormData = (
  reasonCodeId: string,
  enabled = true,
) => {
  const reasonCodeQuery = useReasonCode(reasonCodeId, enabled);

  const reasonContextQuery = useReasonContexts(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      reasonCodeQuery.data && reasonContextQuery.data
        ? {
            reasonCodeData: reasonCodeQuery.data,
            reasonContexts: reasonContextQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: reasonCodeQuery.isLoading || reasonContextQuery.isLoading,

    isFetching: reasonCodeQuery.isFetching || reasonContextQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: reasonCodeQuery.isError || reasonContextQuery.isError,

    errors: {
      reasonCode: reasonCodeQuery.error as Error | null,

      reasonContext: reasonContextQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        reasonCodeQuery.refetch(),
        reasonContextQuery.refetch(),
      ]);
    },
  };
};
