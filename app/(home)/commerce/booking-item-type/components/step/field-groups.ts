export const bookingItemTypeFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  bookingType: ["bookingTypeId"] as const,

  status: ["sortOrder", "active"] as const,
};