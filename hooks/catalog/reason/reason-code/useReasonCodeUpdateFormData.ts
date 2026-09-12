"use client";

import { useReasonCode } from ".";
import { useReasonContexts } from "../reason-context";

export const useReasonCodeUpdateFormData = (
  reasonCodeId: string,
  enabled = true,
) => {
  const reasonCodeQuery = useReasonCode(reasonCodeId, enabled);

  const reasonContextQuery = useReasonContexts(enabled);

  return {
    data:
      reasonCodeQuery.data && reasonContextQuery.data
        ? {
            reasonCodeData: reasonCodeQuery.data,
            reasonContexts: reasonContextQuery.data,
          }
        : undefined,

    isLoading: reasonCodeQuery.isLoading || reasonContextQuery.isLoading,

    isFetching: reasonCodeQuery.isFetching || reasonContextQuery.isFetching,

    isError: reasonCodeQuery.isError || reasonContextQuery.isError,

    errors: {
      reasonCode: reasonCodeQuery.error as Error | null,
      reasonContext: reasonContextQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        reasonCodeQuery.refetch(),
        reasonContextQuery.refetch(),
      ]);
    },
  };
};
