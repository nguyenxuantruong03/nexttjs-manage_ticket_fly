import { CarRentalInsuranceBenefitType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalInsuranceBenefitSchema = z.object({
  insuranceId: z.string(),

  type: z.nativeEnum(CarRentalInsuranceBenefitType),

  title: z.string(),

  description: z.string().optional(),

  coverageAmount: z.number().optional(),

  excessAmount: z.number().optional(),
});
