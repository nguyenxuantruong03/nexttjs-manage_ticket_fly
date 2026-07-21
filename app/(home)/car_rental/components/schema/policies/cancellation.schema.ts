import { z } from "zod";

export const CarRentalCancellationPolicySchema = z.object({
  policiesId: z.string(),

  refundable: z.boolean().default(false),

  freeCancellation: z.boolean().default(false),

  freeCancellationBeforeHours: z.number().optional(),

  partialRefund: z.boolean().optional(),

  cancellationFee: z.number().optional(),

  noShowFee: z.number().default(0),
});
