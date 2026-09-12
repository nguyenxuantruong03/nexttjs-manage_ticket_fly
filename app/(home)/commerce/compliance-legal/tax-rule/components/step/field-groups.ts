export const taxRuleFieldGroups = {
  country: ["countryId"] as const,

  bookingType: ["bookingTypeIds"] as const,

  tax: ["taxPercent"] as const,

  status: ["isActive"] as const,

  effectivePeriod: ["effectiveFrom", "effectiveTo"] as const,
};