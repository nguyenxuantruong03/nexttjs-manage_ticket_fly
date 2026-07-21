// schema/policies/luggage-policy.schema.ts

import { z } from "zod";

export const YachtLuggagePolicySchema = z.object({

  allowed: z.boolean(),

  maxWeightKg: z.number().nullable().optional(),

  maxPieces: z.number().nullable().optional(),

  oversizedAllowed: z.boolean().nullable().optional(),

  note: z.string().nullable().optional(),
});

export type YachtLuggagePolicyFormValues = z.infer<
  typeof YachtLuggagePolicySchema
>;
