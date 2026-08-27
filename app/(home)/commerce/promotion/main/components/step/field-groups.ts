export const promotionFieldGroups = {
  basic: ["name", "description", "code"] as const,

  status: ["status"] as const,

  bookingType: ["bookingTypeIds"] as const,

  date: ["startDate", "endDate"] as const,

  usage: ["usageLimit", "usedCount"] as const,
};