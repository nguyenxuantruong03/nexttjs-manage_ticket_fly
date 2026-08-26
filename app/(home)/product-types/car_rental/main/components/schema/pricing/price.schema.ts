import { z } from "zod";


import { CarRentalPriceBreakdownSchema } from "./price-breakdown.schema";

import { CarRentalPriceRuleSchema } from "./price-rule.schema";
import { RentalDurationType } from "@/types/product-types/car_rental/enums";

export const CarRentalPriceSchema = z.object({
  // ======================================================
  // VEHICLE
  // ======================================================

  vehicleId: z.string().min(1),

  // ======================================================
  // VALID TIME
  // ======================================================

  startDate: z.string().nullable(),

  endDate: z.string().nullable(),

  // ======================================================
  // PRICE TYPE
  // ======================================================

  pricingType: z.nativeEnum(RentalDurationType),

  // ======================================================
  // PRICE
  // ======================================================

  pricePerHour: z.number().nullable(),

  pricePerDay: z.number().nullable(),

  pricePerWeek: z.number().nullable(),

  pricePerMonth: z.number().nullable(),

  originalPrice: z.number().nullable(),

  // ======================================================
  // RULE
  // ======================================================

  minimumDays: z.number().nullable(),

  maximumDays: z.number().nullable(),

  // ======================================================
  // BREAKDOWN
  // ======================================================

  breakdown: CarRentalPriceBreakdownSchema.nullable(),

  // ======================================================
  // PRICE RULES
  // ======================================================

  priceRules: z.array(CarRentalPriceRuleSchema).default([]),
});

export type CarRentalPriceFormSchema = z.infer<typeof CarRentalPriceSchema>;
