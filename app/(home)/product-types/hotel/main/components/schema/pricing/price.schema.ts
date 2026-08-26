import { z } from "zod";

import { HotelRoomPriceRuleSchema } from "./price-rule.schema";
import { hotelRoomPriceBreakdownSchema } from "./price-breakdown.schema";

// ======================================================
// HOTEL ROOM PRICE - MANAGE
// ======================================================

export const HotelRoomPriceSchema = z.object({
  // ====================================================
  // RATE PLAN
  // ====================================================

  ratePlanId: z.string().cuid(),

  // ====================================================
  // PRICE
  // ====================================================

  originalPrice: z.number().nullable().optional(),

  averageNightlyPrice: z.number().nullable().optional(),

  // ====================================================
  // PAYMENT
  // ====================================================

  taxesIncluded: z.boolean().default(false),

  payAtHotel: z.boolean().default(false),

  // ====================================================
  // BREAKDOWN
  // ====================================================

  breakdown: hotelRoomPriceBreakdownSchema.nullable().optional(),

  // ====================================================
  // RULES
  // ====================================================

  rules: z.array(HotelRoomPriceRuleSchema).default([]),
});

export type HotelRoomPriceInput = z.infer<typeof HotelRoomPriceSchema>;
