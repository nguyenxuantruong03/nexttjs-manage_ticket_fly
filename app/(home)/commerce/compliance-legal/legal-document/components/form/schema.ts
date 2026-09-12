import { z } from "zod";

// ======================================================
// STATUS ENUM
// ======================================================

export const legalDocumentStatusEnum = z.enum([
  "DRAFT",
  "PENDING_SIGNATURE",
  "SIGNED",
  "EXPIRED",
  "TERMINATED",
]);

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  merchantId: z.string().trim().min(1, "Merchant is required"),

  title: z.string().trim().min(1, "Title is required"),

  fileUrl: z.string().trim().min(1, "File URL is required"),

  // ======================================================
  // STATUS
  // ======================================================

  signedAt: z.date().nullable().optional(),

  expiresAt: z.date().nullable().optional(),

  status: legalDocumentStatusEnum,
});

export type LegalDocumentFormSchema = z.infer<typeof schema>;
