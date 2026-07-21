import { z } from "zod";

export const HotelPaymentPolicySchema = z.object({
  id: z.string().cuid(),

  policiesId: z.string().cuid(),

  paymentTypes: z.array(z.string()).default([]),

  acceptedCards: z.array(z.string()).default([]),

  cashAccepted: z.boolean().nullable().optional(),

  depositRequired: z.boolean().nullable().optional(),

  depositAmount: z.number().nullable().optional(),
});

export type HotelPaymentPolicyInput = z.infer<typeof HotelPaymentPolicySchema>;
