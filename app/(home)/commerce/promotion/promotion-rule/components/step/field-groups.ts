export const promotionRuleFieldGroups = {
  promotion: ["promotionId"] as const,

  bookingType: ["bookingTypeIds"] as const,

  discount: [
    "discountType",
    "value",
    "maxDiscount",
  ] as const,

  amount: [
    "minimumAmount",
    "maximumAmount",
  ] as const,
};