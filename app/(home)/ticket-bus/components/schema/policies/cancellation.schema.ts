import { BusRefundType } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusCancellationPolicySchema = z.object({

  refundable: z.boolean(),

  refundType: z.nativeEnum(BusRefundType),

  freeCancellation: z.boolean(),

  freeCancellationBeforeHours: z.number().optional(),

  cancellationFee: z.number().optional(),

  noShowFee: z.number().optional(),
});

export type BusCancellationPolicyFormValues = z.infer<
  typeof BusCancellationPolicySchema
>;
