// schema.ts

import { z } from "zod";

export const LanguageSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Code is required"),

  iso3: z.string().trim().nullable().optional(),

  locale: z.string().trim().min(1, "Locale is required"),

  name: z.string().trim().min(1, "Language name is required"),

  nativeName: z.string().trim().min(1, "Native name is required"),

  flagEmoji: z.string().trim().nullable().optional(),

  rtl: z.boolean().default(false),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),

  default: z.boolean().default(false),
});

export type LanguageFormSchema = z.infer<typeof LanguageSchema>;
