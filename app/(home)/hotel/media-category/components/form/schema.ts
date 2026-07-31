import { z } from "zod";

export const MediaCategorySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  // ======================================================
  // SETTINGS
  // ======================================================

  sortOrder: z.coerce.number().int().min(0).default(0),

  active: z.boolean().default(true),
});

export type MediaCategoryFormSchema = z.infer<
  typeof MediaCategorySchema
>;