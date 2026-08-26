import { z } from "zod";

export const FlyAircraftSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  manufacturer: z.string().trim().nullable().optional(),

  model: z.string().trim().nullable().optional(),

  code: z.string().trim().nullable().optional(),

  registrationNumber: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyAircraftFormSchema = z.infer<typeof FlyAircraftSchema>;
