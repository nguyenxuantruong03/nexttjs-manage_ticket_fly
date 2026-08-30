import { z } from "zod";

export const FlyPolicyMapperSchema = z.object({
  policyId: z.string(),

  // ======================================================
  // VALUE
  // ======================================================

  valueBoolean: z.boolean().optional(),

  valueNumber: z.number().optional(),

  valueText: z.string().optional(),

  valueJson: z.unknown().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyPolicyMapperFormValues = z.infer<typeof FlyPolicyMapperSchema>;
