import { MealPriceUnit } from "@/types/bookings/hotel/enum/enums";
import { z } from "zod";

export const MealPriceUnitSchema = z.nativeEnum(MealPriceUnit);

export const HotelMealPriceSchema = z.object({
  id: z.string().cuid(),

  mealId: z.string().cuid(),

  price: z.number().min(0),

  unit: MealPriceUnitSchema,

  createdAt: z.coerce.date(),
});

export type HotelMealPriceInput = z.infer<typeof HotelMealPriceSchema>;
