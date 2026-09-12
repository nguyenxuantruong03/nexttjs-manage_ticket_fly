import { FeatureFlagFormSchema } from "./schema";

export const featureFlagDefaultValues: FeatureFlagFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  key: "",

  description: null,

  // ======================================================
  // ROLLOUT
  // ======================================================

  rolloutPercent: 0,

  targetRegions: [],

  // ======================================================
  // STATUS
  // ======================================================

  isEnabled: false,
};
