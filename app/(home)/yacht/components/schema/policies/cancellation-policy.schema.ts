// schema/policies/cancellation-policy.schema.ts

import { z } from "zod";
import { YachtRefundType } from "@/types/bookings/yacht/enums";

export const YachtCancellationPolicySchema = z.object({
  refundable: z.boolean(),

  freeCancellation: z.boolean(),

  freeCancellationBeforeHours: z.number().nullable().optional(),

  cancellationType: z.nativeEnum(YachtRefundType),

  refundPercentage: z.number().nullable().optional(),

  cancellationFee: z.number().nullable().optional(),

  noShowFee: z.number().nullable().optional(),
});

export type YachtCancellationPolicyFormValues = z.infer<
  typeof YachtCancellationPolicySchema
>;
