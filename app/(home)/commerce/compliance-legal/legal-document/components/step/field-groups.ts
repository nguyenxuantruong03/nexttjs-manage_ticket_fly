export const legalDocumentFieldGroups = {
  basic: ["title", "fileUrl", "merchantId"] as const,

  status: ["status", "signedAt", "expiresAt"] as const,
};
