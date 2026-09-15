"use client";

import { useLanguage } from "@/hooks/location/language";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useLanguageUpdateFormData = (
  languageId: string,
  enabled = true,
) => {
  const languageQuery = useLanguage(languageId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: languageQuery.data
      ? {
          initialData: languageQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: languageQuery.isLoading,

    isFetching: languageQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: languageQuery.isError,

    errors: {
      language: languageQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: languageQuery.refetch,
  };
};
