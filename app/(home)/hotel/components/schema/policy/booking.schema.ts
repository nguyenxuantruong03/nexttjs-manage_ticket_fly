import { z } from "zod";

export const HotelBookingPolicySchema = z.object({
  id: z.string().cuid(),

  policiesId: z.string().cuid(),

  instantConfirmation: z.boolean().default(false),

  refundable: z.boolean().default(false),

  payAtHotel: z.boolean().nullable().optional(),

  payLater: z.boolean().nullable().optional(),

  breakfastIncluded: z.boolean().nullable().optional(),

  mobileVoucher: z.boolean().nullable().optional(),

  onlineCheckIn: z.boolean().nullable().optional(),

  onlineCheckOut: z.boolean().nullable().optional(),

  requiresCreditCardGuarantee: z.boolean().nullable().optional(),

  requiresDeposit: z.boolean().nullable().optional(),

  requiresGovernmentId: z.boolean().nullable().optional(),

  allowsModification: z.boolean().nullable().optional(),
});

export type HotelBookingPolicyInput = z.infer<typeof HotelBookingPolicySchema>;
