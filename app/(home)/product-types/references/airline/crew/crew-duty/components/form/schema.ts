import { z } from "zod";

// ======================================================
// CREW DUTY
// ======================================================

export const FlyCrewDutySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),
});

export type FlyCrewDutyFormSchema = z.infer<typeof FlyCrewDutySchema>;
