export const currencyFieldGroups = {
  basic: ["code", "numericCode", "symbol", "name"] as const,

  display: ["flagEmoji", "locale"] as const,

  status: ["active", "isDefault"] as const,
};
