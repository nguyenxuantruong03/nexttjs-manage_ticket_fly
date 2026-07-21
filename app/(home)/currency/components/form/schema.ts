import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Currency code is required"),

  numericCode: z.string().trim().optional(),

  symbol: z.string().trim().optional(),

  symbolNative: z.string().trim().optional(),

  name: z.string().trim().min(1, "Currency name is required"),

  nativeName: z.string().trim().optional(),

  decimalDigits: z.coerce.number().int().min(0).default(2),

  rounding: z.coerce.number().min(0).default(0),

  // ======================================================
  // DISPLAY
  // ======================================================

  flagEmoji: z.string().trim().optional(),

  locale: z.string().trim().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),

  isDefault: z.boolean().default(false),
});

export type CurrencyFormSchema = z.infer<typeof schema>;
