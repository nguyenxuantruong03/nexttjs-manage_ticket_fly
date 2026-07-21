// schema/policies/booking-policy.schema.ts

import { z } from "zod";

export const YachtBookingPolicySchema = z.object({
  instantConfirmation: z.boolean(),

  advanceBookingHours: z.number().nullable().optional(),

  minimumBookingDuration: z.number().nullable().optional(),

  modificationAllowed: z.boolean().nullable().optional(),
});

export type YachtBookingPolicyFormValues = z.infer<
  typeof YachtBookingPolicySchema
>;
