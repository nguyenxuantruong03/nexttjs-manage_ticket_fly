"use client";

import { useBlacklistEntry } from ".";

export const useBlacklistEntryUpdateFormData = (
  blacklistEntryId: string,
  enabled = true,
) => {
  const blacklistEntryQuery = useBlacklistEntry(blacklistEntryId, enabled);

  return {
    data: blacklistEntryQuery.data
      ? {
          blacklistEntryData: blacklistEntryQuery.data,
        }
      : undefined,

    isLoading: blacklistEntryQuery.isLoading,

    isFetching: blacklistEntryQuery.isFetching,

    isError: blacklistEntryQuery.isError,

    errors: {
      blacklistEntry: blacklistEntryQuery.error as Error | null,
    },

    refetch: blacklistEntryQuery.refetch,
  };
};
