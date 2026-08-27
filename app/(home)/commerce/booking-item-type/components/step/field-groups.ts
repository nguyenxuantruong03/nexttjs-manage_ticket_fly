export const bookingItemTypeFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  bookingType: ["bookingTypeIds"] as const,

  status: ["sortOrder", "active"] as const,
};