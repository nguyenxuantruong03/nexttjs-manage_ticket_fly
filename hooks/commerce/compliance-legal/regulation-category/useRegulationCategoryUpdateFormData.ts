"use client";

import { useRegulationCategory } from "@/hooks/commerce/compliance-legal/regulation-category";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useRegulationCategoryUpdateFormData = (
  regulationCategoryId: string,
  enabled = true,
) => {
  const regulationCategoryQuery = useRegulationCategory(
    regulationCategoryId,
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
