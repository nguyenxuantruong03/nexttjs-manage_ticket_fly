export const blacklistEntryFieldGroups = {
  basic: ["type", "value", "reasonCodeId"] as const,

  status: ["isActive"] as const,

  expiration: ["expiresAt"] as const,
};
