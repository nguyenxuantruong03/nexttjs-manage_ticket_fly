import { z } from "zod";

export const BrandSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  logo: z.string().trim().nullable().optional(),

  // ======================================================
  // SETTINGS
  // ======================================================

  active: z.boolean().default(true),
});

export type BrandFormSchema = z.infer<typeof BrandSchema>;
