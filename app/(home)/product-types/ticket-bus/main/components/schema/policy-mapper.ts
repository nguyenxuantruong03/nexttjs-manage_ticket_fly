import { z } from "zod";

export const BusPolicyMapperSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  policyId: z.string(),

  // ======================================================
  // POLICY VALUE
  // ======================================================

  valueBoolean: z.boolean().nullable(),

  valueNumber: z.number().nullable(),

  valueText: z.string().nullable(),

  valueJson: z.unknown().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type BusPolicyMapperFormValues = z.infer<typeof BusPolicyMapperSchema>;
