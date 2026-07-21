import { z } from "zod";

export const HotelCancellationPolicySchema = z.object({
  id: z.string().cuid(),

  policiesId: z.string().cuid(),

  freeCancellation: z.boolean().default(false),

  freeCancellationBeforeHours: z.number().int().nullable().optional(),

  cancellationFee: z.number().nullable().optional(),

  noShowFee: z.number().nullable().optional(),
});

export type HotelCancellationPolicyInput = z.infer<
  typeof HotelCancellationPolicySchema
>;
