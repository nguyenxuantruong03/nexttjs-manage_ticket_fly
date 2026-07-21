import { FlyRefundType } from "@/types/bookings/ticket-fly/enums";
import { z } from "zod";

export const FlyCancellationPolicySchema = z.object({
  refundable: z.boolean(),

  refundType: z.nativeEnum(FlyRefundType),

  cancellationFee: z.number().optional(),

  noShowFee: z.number().optional(),

  freeCancellationBeforeHours: z.number().optional(),
});

export type FlyCancellationPolicyFormValues = z.infer<
  typeof FlyCancellationPolicySchema
>;
