export const mediaAssetFieldGroups = {
  storage: ["path"] as const,

  fileInfo: [
    "type",
    "size",
    "width",
    "height",
    "duration"
  ] as const,

  content: ["alt", "caption"] as const,

  bookingType: ["bookingTypeIds"] as const,
};