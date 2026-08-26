import { z } from "zod";

export const CarRentalDocumentTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: z.number().int().min(0),

  active: z.boolean(),
});

export type CarRentalDocumentTypeFormSchema = z.infer<
  typeof CarRentalDocumentTypeSchema
>;