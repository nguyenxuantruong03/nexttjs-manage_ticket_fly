import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Regulation category code is required"),

  name: z
    .string()
    .trim()
    .min(1, "Regulation category name is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  isActive: z.boolean(),
});

export type RegulationCategoryFormSchema = z.infer<typeof schema>;