import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Regulation code is required"),

  version: z
    .number()
    .int()
    .min(1, "Version must be greater than or equal to 1"),

  title: z.string().trim().min(1, "Regulation title is required"),

  content: z.string().trim().min(1, "Regulation content is required"),

  // ======================================================
  // CATEGORY
  // ======================================================

  categoryId: z.string().trim().min(1, "Regulation category is required"),

  // ======================================================
  // EFFECTIVE PERIOD
  // ======================================================

  effectiveFrom: z.date(),

  effectiveTo: z.date().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  isActive: z.boolean(),
});

export type RegulationFormSchema = z.infer<typeof schema>;
