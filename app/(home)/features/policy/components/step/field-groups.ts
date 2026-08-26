export const policyFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  policyType: ["typeId"] as const,

  bookingType: ["bookingTypeId"] as const,

  status: ["active", "sortOrder"] as const,
};
