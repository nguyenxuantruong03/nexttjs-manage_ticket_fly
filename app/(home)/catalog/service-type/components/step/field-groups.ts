export const serviceTypeFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  bookingType: ["bookingTypeId"] as const,

  status: ["active", "sortOrder"] as const,
};