import { z } from "zod";

import { HotelRoomPriceBreakdownSchema } from "./price-breakdown.schema";

import { HotelRoomPriceRuleSchema } from "./price-rule.schema";

export const HotelRoomPriceSchema = z.object({
  ratePlanId: z.string().cuid(),

  originalPrice: z.number().nullable().optional(),

  averageNightlyPrice: z.number().nullable().optional(),

  taxesIncluded: z.boolean().default(false),

  payAtHotel: z.boolean().default(false),

  breakdown: HotelRoomPriceBreakdownSchema.nullable().optional(),

  rules: z.array(HotelRoomPriceRuleSchema).default([]),
});

export type HotelRoomPriceInput = z.infer<typeof HotelRoomPriceSchema>;
