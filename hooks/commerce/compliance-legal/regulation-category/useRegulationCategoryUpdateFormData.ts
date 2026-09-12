"use client";

import { useRegulationCategory } from ".";

export const useRegulationCategoryUpdateFormData = (
  regulationCategoryId: string,
  enabled = true,
) => {
  const regulationCategoryQuery = useRegulationCategory(
    regulationCategoryId,
    enabled,
  );

  return {
    data: regulationCategoryQuery.data
      ? { regulationCategoryData: regulationCategoryQuery.data }
      : undefined,

    isLoading: regulationCategoryQuery.isLoading,

    isFetching: regulationCategoryQuery.isFetching,

    isError: regulationCategoryQuery.isError,

    errors: {
      regulationCategory:
        regulationCategoryQuery.error as Error | null,
    },

    refetch: regulationCategoryQuery.refetch,
  };
};