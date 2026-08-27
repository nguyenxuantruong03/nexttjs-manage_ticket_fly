export const facilityFieldGroups = {
  basic: ["name", "description", "icon"] as const,

  category: ["categoryId", "bookingTypeIds"] as const,

  status: ["active", "sortOrder"] as const,
};