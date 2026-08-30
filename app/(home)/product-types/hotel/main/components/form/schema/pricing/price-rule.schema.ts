import { z } from "zod";

import { WeekDay } from "@/types/common/enums";
import { HotelPriceAdjustmentType } from "@/types/product-types/hotel/enum/enums";

// ======================================================
// ENUM SCHEMAS
// ======================================================

export const HotelPriceAdjustmentTypeSchema = z.nativeEnum(
  HotelPriceAdjustmentType,
);

export const WeekDaySchema = z.nativeEnum(WeekDay);

// ======================================================
// HOTEL ROOM PRICE RULE - MANAGE
// ======================================================

export const HotelRoomPriceRuleSchema = z.object({
  // ====================================================
  // PRICE
  // ====================================================

  priceId: z.string().cuid(),

  // ====================================================
  // BASIC
  // ====================================================

  name: z.string().nullable().optional(),

  // ====================================================
  // PRICE RULE TYPE
  // ====================================================

  priceRuleTypeId: z.string(),

  // ====================================================
  // ADJUSTMENT
  // ====================================================

  adjustmentType: HotelPriceAdjustmentTypeSchema,

  value: z.number(),

  // ====================================================
  // NIGHT RESTRICTION
  // ====================================================

  minimumNights: z.number().int().nullable().optional(),

  maximumNights: z.number().int().nullable().optional(),

  // ====================================================
  // VALIDITY
  // ====================================================

  validFrom: z.coerce.date().nullable().optional(),

  validTo: z.coerce.date().nullable().optional(),

  // ====================================================
  // DAYS OF WEEK
  // ====================================================

  daysOfWeek: z.array(WeekDaySchema).default([]),

  // ====================================================
  // PRIORITY
  // ====================================================

  priority: z.number().int().default(0),

  // ====================================================
  // COMBINATION
  // ====================================================

  combinable: z.boolean().default(false),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),
});

export type HotelRoomPriceRuleInput = z.infer<typeof HotelRoomPriceRuleSchema>;
