import { z } from "zod";

export const FlyFareRuleTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().optional(),

  icon: z.string().trim().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: z.coerce.number().int().min(0),

  active: z.boolean(),
});

export type FlyFareRuleTypeFormSchema = z.infer<typeof FlyFareRuleTypeSchema>;
