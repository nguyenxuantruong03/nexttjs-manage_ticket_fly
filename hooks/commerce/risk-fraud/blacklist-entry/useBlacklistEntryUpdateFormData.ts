"use client";

import { useBlacklistEntry } from "@/hooks/commerce/risk-fraud/blacklist-entry";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useBlacklistEntryUpdateFormData = (
  blacklistEntryId: string,
  enabled = true,
) => {
  const blacklistEntryQuery = useBlacklistEntry(blacklistEntryId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: blacklistEntryQuery.data
      ? {
          blacklistEntryData: blacklistEntryQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: blacklistEntryQuery.isLoading,

    isFetching: blacklistEntryQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: blacklistEntryQuery.isError,

    errors: {
      blacklistEntry: blacklistEntryQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: blacklistEntryQuery.refetch,
  };
};
