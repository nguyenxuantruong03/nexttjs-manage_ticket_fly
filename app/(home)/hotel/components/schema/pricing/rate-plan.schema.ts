import { z } from "zod";

import { HotelRoomPriceSchema } from "./price.schema";

import { HotelRatePlanCancellationSchema } from "./cancellation.schema";
import { HotelRatePlanType, MealPlan } from "@/types/bookings/hotel/enum/enums";

export const HotelRatePlanTypeSchema = z.nativeEnum(HotelRatePlanType);

export const MealPlanSchema = z.nativeEnum(MealPlan);

export const HotelRatePlanSchema = z.object({
  id: z.string().cuid(),

  inventoryId: z.string().cuid(),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  type: HotelRatePlanTypeSchema,

  code: z.string().nullable().optional(),

  mealPlan: MealPlanSchema.nullable().optional(),

  policies: z.any().nullable().optional(),

  refundable: z.boolean().default(false),

  cancellationPolicy: HotelRatePlanCancellationSchema.nullable().optional(),

  price: HotelRoomPriceSchema.nullable().optional(),

  active: z.boolean().default(true),

  createdAt: z.coerce.date(),

  updatedAt: z.coerce.date(),

  locks: z.array(z.any()).default([]),
});

export type HotelRatePlanInput = z.infer<typeof HotelRatePlanSchema>;
