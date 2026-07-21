import { z } from "zod";

import { HotelBookingPolicySchema } from "./booking.schema";

import { HotelCancellationPolicySchema } from "./cancellation.schema";

import { HotelCheckInPolicySchema } from "./check-in.schema";

import { HotelGuestPolicySchema } from "./guest.schema";

import { HotelHouseRulesSchema } from "./house-rule.schema";

import { HotelPaymentPolicySchema } from "./payment.schema";

export const HotelPoliciesSchema = z.object({
  id: z.string().cuid(),

  ratePlanId: z.string().cuid(),

  checkIn: HotelCheckInPolicySchema.nullable().optional(),

  guest: HotelGuestPolicySchema.nullable().optional(),

  payment: HotelPaymentPolicySchema.nullable().optional(),

  cancellation: HotelCancellationPolicySchema.nullable().optional(),

  booking: HotelBookingPolicySchema.nullable().optional(),

  houseRules: HotelHouseRulesSchema.nullable().optional(),
});

export type HotelPoliciesInput = z.infer<typeof HotelPoliciesSchema>;
