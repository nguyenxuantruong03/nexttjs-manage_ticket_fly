"use client";

import { useWhitelistEntry } from "@/hooks/commerce/risk-fraud/whitelist-entry";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useWhitelistEntryUpdateFormData = (
  whitelistEntryId: string,
  enabled = true,
) => {
  const whitelistEntryQuery = useWhitelistEntry(whitelistEntryId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: whitelistEntryQuery.data
      ? {
          whitelistEntryData: whitelistEntryQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: whitelistEntryQuery.isLoading,

    isFetching: whitelistEntryQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: whitelistEntryQuery.isError,

    errors: {
      whitelistEntry: whitelistEntryQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: whitelistEntryQuery.refetch,
  };
};
