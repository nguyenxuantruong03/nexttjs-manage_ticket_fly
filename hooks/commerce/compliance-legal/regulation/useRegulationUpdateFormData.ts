"use client";

import { useRegulation } from "@/hooks/commerce/compliance-legal/regulation";
import { useRegulationCategories } from "@/hooks/commerce/compliance-legal/regulation-category";

export const useRegulationUpdateFormData = (
  regulationId: string,
  enabled = true,
) => {
  const regulationQuery = useRegulation(regulationId, enabled);

  const regulationCategoryQuery = useRegulationCategories(enabled);

  return {
    data:
      regulationQuery.data && regulationCategoryQuery.data
        ? {
            regulationData: regulationQuery.data,
            regulationCategoryData: regulationCategoryQuery.data,
          }
        : undefined,

    isLoading: regulationQuery.isLoading || regulationCategoryQuery.isLoading,

    isFetching:
      regulationQuery.isFetching || regulationCategoryQuery.isFetching,

    isError: regulationQuery.isError || regulationCategoryQuery.isError,

    errors: {
      regulation: regulationQuery.error as Error | null,

      regulationCategory: regulationCategoryQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        regulationQuery.refetch(),
        regulationCategoryQuery.refetch(),
      ]);
    },
  };
};
