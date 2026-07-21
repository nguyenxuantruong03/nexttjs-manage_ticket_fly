import { z } from "zod";

import { CarRentalInsuranceBenefitSchema } from "./insurance-benefit.schema";
import { CarRentalInsuranceType } from "@/types/bookings/car_rental/enums";

export const CarRentalInsuranceSchema = z.object({
  rentalId: z.string(),

  type: z.nativeEnum(CarRentalInsuranceType),

  name: z.string().min(1),

  description: z.string().optional(),

  pricePerDay: z.number().optional(),

  fixedPrice: z.number().optional(),

  benefits: z.array(CarRentalInsuranceBenefitSchema).default([]),

  active: z.boolean().default(true),
});
