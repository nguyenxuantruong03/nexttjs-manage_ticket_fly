import { z } from "zod";

export const identifierTypeEnum = z.enum([
  "EMAIL",
  "PHONE",
  "DEVICE_ID",
  "CARD_HASH",
  "IP_ADDRESS",
]);

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  type: identifierTypeEnum,

  value: z
    .string()
    .trim()
    .min(1, "Identifier value is required"),

  note: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  isActive: z.boolean(),

  // ======================================================
  // CREATED BY
  // ======================================================

  createdBy: z
    .string()
    .trim()
    .nullable()
    .optional(),

  // ======================================================
  // EXPIRATION
  // ======================================================

  expiresAt: z.date().nullable().optional(),
});

export type WhitelistEntryFormSchema = z.infer<typeof schema>;