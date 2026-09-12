export const featureFlagFieldGroups = {
  basic: ["key", "description"] as const,

  rollout: ["rolloutPercent", "targetRegions"] as const,

  status: ["isEnabled"] as const,
};
