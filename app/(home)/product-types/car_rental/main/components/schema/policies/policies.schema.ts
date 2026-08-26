import { z } from "zod";

export const CarRentalPolicyMapperSchema = z.object({
  // ======================================================
  // POLICY
  // ======================================================

  policyId: z.string(),

  // ======================================================
  // VALUE
  // ======================================================

  valueBoolean: z.boolean().nullable(),

  valueNumber: z.number().nullable(),

  valueText: z.string().nullable(),

  valueJson: z.unknown().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type CarRentalPolicyMapperFormSchema = z.infer<
  typeof CarRentalPolicyMapperSchema
>;