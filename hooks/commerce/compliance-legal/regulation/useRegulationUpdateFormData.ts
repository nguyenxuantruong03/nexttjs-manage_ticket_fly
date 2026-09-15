"use client";

import { useRegulation } from "@/hooks/commerce/compliance-legal/regulation";

import { useRegulationCategories } from "@/hooks/commerce/compliance-legal/regulation-category";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useRegulationUpdateFormData = (
  regulationId: string,
  enabled = true,
) => {
  const regulationQuery = useRegulation(regulationId, enabled);

  const regulationCategoryQuery = useRegulationCategories(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      regulationQuery.data && regulationCategoryQuery.data
        ? {
            regulationData: regulationQuery.data,
            regulationCategoryData: regulationCategoryQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: regulationQuery.isLoading || regulationCategoryQuery.isLoading,

    isFetching:
      regulationQuery.isFetching || regulationCategoryQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: regulationQuery.isError || regulationCategoryQuery.isError,

    errors: {
      regulation: regulationQuery.error as Error | null,

      regulationCategory: regulationCategoryQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        regulationQuery.refetch(),
        regulationCategoryQuery.refetch(),
      ]);
    },
  };
};
