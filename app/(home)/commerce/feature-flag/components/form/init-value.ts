import { FeatureFlagFormSchema } from "./schema";

import { featureFlagDefaultValues } from "./default-values";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";

export function initFeatureFlagFormValues(
  featureFlag?: FeatureFlag,
): FeatureFlagFormSchema {
  if (!featureFlag) {
    return structuredClone(featureFlagDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    key: featureFlag.key ?? "",

    description: featureFlag.description ?? null,

    // ======================================================
    // ROLLOUT
    // ======================================================

    rolloutPercent: featureFlag.rolloutPercent ?? 0,

    targetRegions: featureFlag.targetRegions ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    isEnabled: featureFlag.isEnabled ?? false,
  };
}
