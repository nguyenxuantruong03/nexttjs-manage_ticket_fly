"use client";

import { useRegulationCategories } from "@/hooks/commerce/compliance-legal/regulation-category";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useRegulationCreateFormData = (enabled = true) => {
  const regulationCategoryQuery = useRegulationCategories(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: regulationCategoryQuery.data
      ? {
          regulationCategoryData: regulationCategoryQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: regulationCategoryQuery.isLoading,

    isFetching: regulationCategoryQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: regulationCategoryQuery.isError,

    errors: {
      regulationCategory: regulationCategoryQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: regulationCategoryQuery.refetch,
  };
};
