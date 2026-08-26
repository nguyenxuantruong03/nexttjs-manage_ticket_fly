export const currencyFieldGroups = {
  basic: ["code", "numericCode", "symbol", "name"] as const,

  display: ["flagEmoji", "locale"] as const,
  media: [
    "thumbnail",
    "coverImage",
    "bannerImage",
    "video",
    "images.0",
  ] as const,
  status: ["active", "isDefault"] as const,
};
