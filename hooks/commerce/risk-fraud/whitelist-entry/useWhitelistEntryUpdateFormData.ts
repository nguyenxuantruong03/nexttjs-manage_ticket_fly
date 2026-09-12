"use client";

import { useWhitelistEntry } from ".";

export const useWhitelistEntryUpdateFormData = (
  whitelistEntryId: string,
  enabled = true,
) => {
  const whitelistEntryQuery = useWhitelistEntry(whitelistEntryId, enabled);

  return {
    data: whitelistEntryQuery.data
      ? {
          whitelistEntryData: whitelistEntryQuery.data,
        }
      : undefined,

    isLoading: whitelistEntryQuery.isLoading,

    isFetching: whitelistEntryQuery.isFetching,

    isError: whitelistEntryQuery.isError,

    errors: {
      whitelistEntry: whitelistEntryQuery.error as Error | null,
    },

    refetch: whitelistEntryQuery.refetch,
  };
};
