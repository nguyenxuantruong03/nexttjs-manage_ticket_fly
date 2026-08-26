export const facilityFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  category: ["categoryId", "bookingTypeId"] as const,

  status: ["active", "sortOrder"] as const,
};