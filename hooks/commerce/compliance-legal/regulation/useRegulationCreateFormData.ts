"use client";

import { useRegulationCategories } from "@/hooks/commerce/compliance-legal/regulation-category";

export const useRegulationCreateFormData = (enabled = true) => {
  const regulationCategoryQuery = useRegulationCategories(enabled);

  return {
    data: regulationCategoryQuery.data
      ? { regulationCategoryData: regulationCategoryQuery.data }
      : undefined,

    isLoading: regulationCategoryQuery.isLoading,

    isFetching: regulationCategoryQuery.isFetching,

    isError: regulationCategoryQuery.isError,

    errors: {
      regulationCategory: regulationCategoryQuery.error as Error | null,
    },

    refetch: regulationCategoryQuery.refetch,
  };
};
