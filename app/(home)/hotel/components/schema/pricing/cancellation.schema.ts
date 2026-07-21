import { z } from "zod";

export const HotelRatePlanCancellationSchema = z.object({
  id: z.string().cuid(),

  ratePlanId: z.string().cuid(),

  freeCancellation: z.boolean().default(false),

  beforeHours: z.number().int().nullable().optional(),

  cancellationFee: z.number().nullable().optional(),
});

export type HotelRatePlanCancellationInput = z.infer<
  typeof HotelRatePlanCancellationSchema
>;
