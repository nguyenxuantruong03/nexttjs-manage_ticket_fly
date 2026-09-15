"use client";

import { useReasonContext } from ".";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useReasonContextUpdateFormData = (
  reasonContextId: string,
  enabled = true,
) => {
  const reasonContextQuery = useReasonContext(reasonContextId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: reasonContextQuery.data
      ? {
          reasonContextData: reasonContextQuery.data,
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

    refetch: async () => {
      await Promise.all([reasonContextQuery.refetch()]);
    },
  };
};
