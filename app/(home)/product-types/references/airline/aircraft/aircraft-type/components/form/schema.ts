import { z } from "zod";

export const FlyAircraftTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  code: z.string().trim().min(1, "Code is required"),

  description: z.string().trim().optional(),

  manufacturer: z.string().trim().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.coerce.number().int().min(0),
});

export type FlyAircraftTypeFormSchema = z.infer<
  typeof FlyAircraftTypeSchema
>;