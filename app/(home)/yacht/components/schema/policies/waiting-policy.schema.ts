// schema/policies/waiting-policy.schema.ts

import { z } from "zod";

export const YachtWaitingPolicySchema = z.object({

  freeWaitingMinutes: z.number().nullable().optional(),

  extraWaitingFeePerHour: z.number().nullable().optional(),

  maximumWaitingHours: z.number().nullable().optional(),
});

export type YachtWaitingPolicyFormValues = z.infer<
  typeof YachtWaitingPolicySchema
>;