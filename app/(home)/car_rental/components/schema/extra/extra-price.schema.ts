import { CarRentalExtraPricingType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalExtraPriceSchema = z.object({
  extraId: z.string(),

  pricingType: z.nativeEnum(CarRentalExtraPricingType),

  amount: z.number(),

  minimumQuantity: z.number().optional(),

  maximumQuantity: z.number().optional(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),
});
