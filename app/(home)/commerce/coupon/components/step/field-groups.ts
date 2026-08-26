export const couponFieldGroups = {
  basic: ["code", "name", "description"] as const,

  discount: [
    "discountType",
    "bookingTypeId",
    "value",
    "maxDiscount",
    "minimumAmount",
  ] as const,

  date: ["startDate", "endDate"] as const,

  usage: ["usageLimit"] as const,

  status: ["active"] as const,
};
