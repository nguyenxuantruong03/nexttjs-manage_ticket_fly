import { z } from "zod";

export const PlaceTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Place type name is required"),

  nativeName: z.string().trim().nullable().optional(),

  code: z.string().trim().min(1, "Place type code is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // MEDIA
  // ======================================================

  icon: z.string().trim().nullable().optional(),

  thumbnail: z.string().trim().nullable().optional(),

  // ======================================================
  // DISPLAY
  // ======================================================

  sortOrder: z.coerce.number().int().default(0),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type PlaceTypeFormSchema = z.infer<typeof PlaceTypeSchema>;
