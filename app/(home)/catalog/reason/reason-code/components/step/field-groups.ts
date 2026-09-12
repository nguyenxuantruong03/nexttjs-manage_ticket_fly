export const reasonCodeFieldGroups = {
  basic: ["code", "title", "description"] as const,

  context: ["contextId"] as const,

  status: ["severity", "isActive"] as const,
};
