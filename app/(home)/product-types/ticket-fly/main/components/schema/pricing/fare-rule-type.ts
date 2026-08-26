import { z } from "zod";

import { FlyFareRuleSchema } from "./rule.schema";

// ======================================================
// FARE RULE TYPE
// ======================================================

export const FlyFareRuleTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // RULES
  // ======================================================

  rules: z.array(FlyFareRuleSchema).optional(),
});

export type FlyFareRuleTypeFormValues = z.infer<typeof FlyFareRuleTypeSchema>;
