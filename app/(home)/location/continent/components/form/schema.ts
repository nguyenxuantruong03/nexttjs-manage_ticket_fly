import { z } from "zod";

export const ContinentSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Continent name is required"),

  nativeName: z.string().trim().nullable().optional(),

  code: z.string().trim().min(1, "Continent code is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail: z.string().trim().nullable().optional(),

  coverImage: z.string().trim().nullable().optional(),

  // ======================================================
  // DISPLAY
  // ======================================================

  sortOrder: z.coerce.number().int().default(0),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type ContinentFormSchema = z.infer<typeof ContinentSchema>;
