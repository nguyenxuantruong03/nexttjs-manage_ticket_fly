export const serviceTypeFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  bookingType: ["bookingTypeIds"] as const,

  status: ["active", "sortOrder"] as const,
};