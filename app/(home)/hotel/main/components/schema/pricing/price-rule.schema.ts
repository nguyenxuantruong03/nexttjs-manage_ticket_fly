import { z } from "zod";

import { WeekDay } from "@/types/common/enums";
import {
  HotelPriceAdjustmentType,
  HotelPriceRuleType,
} from "@/types/bookings/hotel/enum/enums";

export const HotelPriceRuleTypeSchema = z.nativeEnum(HotelPriceRuleType);

export const HotelPriceAdjustmentTypeSchema = z.nativeEnum(
  HotelPriceAdjustmentType,
);

export const WeekDaySchema = z.nativeEnum(WeekDay);

export const HotelRoomPriceRuleSchema = z.object({
  priceId: z.string().cuid(),

  name: z.string().nullable().optional(),

  type: HotelPriceRuleTypeSchema,

  adjustmentType: HotelPriceAdjustmentTypeSchema,

  value: z.number(),

  minimumNights: z.number().int().nullable().optional(),

  maximumNights: z.number().int().nullable().optional(),

  validFrom: z.coerce.date().nullable().optional(),

  validTo: z.coerce.date().nullable().optional(),

  daysOfWeek: z.array(WeekDaySchema).default([]),

  priority: z.number().int().default(0),

  combinable: z.boolean().default(false),

  active: z.boolean().default(true),
});

export type HotelRoomPriceRuleInput = z.infer<typeof HotelRoomPriceRuleSchema>;
