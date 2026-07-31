import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z
    .string()
    .trim()
    .length(3, "Currency code must be exactly 3 characters")
    .transform((v) => v.toUpperCase()),

  numericCode: z
    .string()
    .trim()
    .length(3, "Numeric code must be exactly 3 characters")
    .optional()
    .nullable()
    .or(z.literal("")),

  symbol: z.string().trim().nullable().optional(),

  symbolNative: z.string().trim().nullable().optional(),

  name: z.string().trim().min(1, "Currency name is required"),

  nativeName: z.string().trim().nullable().optional(),

  decimalDigits: z.coerce.number().int().min(0).max(6),

  rounding: z.coerce.number().min(0),

  // ======================================================
  // DISPLAY
  // ======================================================

  flagEmoji: z.string().trim().nullable().optional(),

  locale: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  isDefault: z.boolean(),
});

export type CurrencyFormSchema = z.infer<typeof schema>;
