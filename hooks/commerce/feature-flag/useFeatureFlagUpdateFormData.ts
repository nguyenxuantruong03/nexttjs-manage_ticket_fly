"use client";

import { useFeatureFlag } from ".";

export const useFeatureFlagUpdateFormData = (
  featureFlagId: string,
  enabled = true,
) => {
  const featureFlagQuery = useFeatureFlag(featureFlagId, enabled);

  return {
    data: featureFlagQuery.data
      ? { featureFlagData: featureFlagQuery.data }
      : undefined,

    isLoading: featureFlagQuery.isLoading,

    isFetching: featureFlagQuery.isFetching,

    isError: featureFlagQuery.isError,

    errors: {
      featureFlag: featureFlagQuery.error as Error | null,
    },

    refetch: featureFlagQuery.refetch,
  };
};
