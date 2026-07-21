import { CarRentalPriceRuleType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalPriceRuleSchema = z.object({
  priceId: z.string(),

  type: z.nativeEnum(CarRentalPriceRuleType),

  percentage: z.number().optional(),

  amount: z.number().optional(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),
});
