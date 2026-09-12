export const whitelistEntryFieldGroups = {
  basic: ["type", "value", "note"] as const,

  status: ["isActive"] as const,

  expiration: ["expiresAt"] as const,
};