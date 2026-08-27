export const policyFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  policyType: ["typeId"] as const,

  bookingType: ["bookingTypeIds"] as const,

  status: ["active", "sortOrder"] as const,
};
