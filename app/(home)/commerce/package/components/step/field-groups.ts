export const packageFieldGroups = {
  bookingType: ["bookingTypeIds"] as const,

  basic: ["name", "description"] as const,

  duration: ["duration", "durationType"] as const,

  capacity: ["maxGuests"] as const,

  basePrice: ["price", "currencyId"] as const,

  content: ["includedItems"] as const,

  status: ["active", "sortOrder"] as const,
};
