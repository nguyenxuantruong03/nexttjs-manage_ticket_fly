export const regulationFieldGroups = {
  basic: ["code", "version", "title", "content"] as const,

  category: ["categoryId"] as const,

  effectivePeriod: ["effectiveFrom", "effectiveTo"] as const,

  status: ["isActive"] as const,
};
