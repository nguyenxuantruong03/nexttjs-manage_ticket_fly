"use client";

import { useReasonContexts } from "../reason-context";

export const useReasonCodeCreateFormData = (enabled = true) => {
  const reasonContextQuery = useReasonContexts(enabled);

  return {
    data: reasonContextQuery.data
      ? { reasonContexts: reasonContextQuery.data }
      : undefined,

    isLoading: reasonContextQuery.isLoading,

    isFetching: reasonContextQuery.isFetching,

    isError: reasonContextQuery.isError,

    errors: {
      reasonContext: reasonContextQuery.error as Error | null,
    },

    refetch: reasonContextQuery.refetch,
  };
};
