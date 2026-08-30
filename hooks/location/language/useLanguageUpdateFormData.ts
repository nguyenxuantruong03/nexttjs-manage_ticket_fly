"use client";

import { useLanguage } from "@/hooks/location/language";

export const useLanguageUpdateFormData = (
  languageId: string,
  enabled = true,
) => {
  const languageQuery = useLanguage(languageId, enabled);

  return {
    data: languageQuery.data ? { initialData: languageQuery.data } : undefined,

    isLoading: languageQuery.isLoading,
    isFetching: languageQuery.isFetching,

    isError: languageQuery.isError,
    errors: {
      language: languageQuery.error as Error | null,
    },

    refetch: languageQuery.refetch,
  };
};
