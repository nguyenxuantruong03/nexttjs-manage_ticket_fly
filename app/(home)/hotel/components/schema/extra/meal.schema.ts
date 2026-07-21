import { z } from "zod";


import { HotelMealPriceSchema } from "./meal-price.schema";
import { HotelMealType } from "@/types/bookings/hotel/enum/enums";

export const HotelMealTypeSchema = z.nativeEnum(HotelMealType);

export const HotelMealOptionSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  type: HotelMealTypeSchema,

  prices: z.array(HotelMealPriceSchema).default([]),

  bookingMeals: z.array(z.any()).default([]),

  active: z.boolean().default(true),

  createdAt: z.coerce.date(),
});

export type HotelMealOptionInput = z.infer<typeof HotelMealOptionSchema>;
