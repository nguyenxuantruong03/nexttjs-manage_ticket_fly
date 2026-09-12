"use client";

import { useReasonContext } from ".";

export const useReasonContextUpdateFormData = (
  reasonContextId: string,
  enabled = true,
) => {
  const reasonContextQuery = useReasonContext(reasonContextId, enabled);

  return {
    data: reasonContextQuery.data
      ? {
          reasonContextData: reasonContextQuery.data,
        }
      : undefined,

    isLoading: reasonContextQuery.isLoading,

    isFetching: reasonContextQuery.isFetching,

    isError: reasonContextQuery.isError,

    errors: {
      reasonContext: reasonContextQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([reasonContextQuery.refetch()]);
    },
  };
};
