export const couponFieldGroups = {
  basic: ["code", "name", "description"] as const,

  discount: [
    "discountType",
    "bookingTypeIds",
    "value",
    "maxDiscount",
    "minimumAmount",
  ] as const,

  date: ["startDate", "endDate"] as const,

  usage: ["usageLimit"] as const,

  status: ["active"] as const,
};
