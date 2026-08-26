export const promotionFieldGroups = {
  basic: ["name", "description", "code"] as const,

  status: ["status"] as const,

  bookingType: ["bookingTypeId"] as const,

  date: ["startDate", "endDate"] as const,

  usage: ["usageLimit", "usedCount"] as const,
};