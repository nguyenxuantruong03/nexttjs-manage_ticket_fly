import { z } from "zod";


import { CarRentalPriceBreakdownSchema } from "./price-breakdown.schema";

import { CarRentalPriceRuleSchema } from "./price-rule.schema";
import { RentalDurationType } from "@/types/bookings/car_rental/enums";

export const CarRentalPriceSchema = z.object({
  vehicleId: z.string(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),

  pricingType: z.nativeEnum(RentalDurationType),

  pricePerHour: z.number().optional(),

  pricePerDay: z.number().optional(),

  pricePerWeek: z.number().optional(),

  pricePerMonth: z.number().optional(),

  originalPrice: z.number().optional(),

  minimumDays: z.number().optional(),

  maximumDays: z.number().optional(),

  breakdown: CarRentalPriceBreakdownSchema.optional(),

  priceRules: z.array(CarRentalPriceRuleSchema).default([]),
});
