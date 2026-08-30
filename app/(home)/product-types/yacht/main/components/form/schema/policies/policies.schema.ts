import { z } from "zod";

export const YachtPolicyMapperSchema = z.object({
  policyId: z.string(),

  valueBoolean: z.boolean().nullable().optional(),

  valueNumber: z.number().nullable().optional(),

  valueText: z.string().nullable().optional(),

  valueJson: z.unknown().nullable().optional(),

  active: z.boolean(),
});

export type YachtPolicyMapperFormValues = z.infer<
  typeof YachtPolicyMapperSchema
>;
