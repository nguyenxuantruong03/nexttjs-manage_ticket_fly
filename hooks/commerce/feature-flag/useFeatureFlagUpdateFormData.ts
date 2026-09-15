"use client";

import { useFeatureFlag } from "@/hooks/commerce/feature-flag";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useFeatureFlagUpdateFormData = (
  featureFlagId: string,
  enabled = true,
) => {
  const featureFlagQuery = useFeatureFlag(featureFlagId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: featureFlagQuery.data
      ? {
          featureFlagData: featureFlagQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: featureFlagQuery.isLoading,

    isFetching: featureFlagQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: featureFlagQuery.isError,

    errors: {
      featureFlag: featureFlagQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: featureFlagQuery.refetch,
  };
};
