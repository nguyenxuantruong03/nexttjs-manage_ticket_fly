import { z } from "zod";

import { CarRentalInsuranceBenefitSchema } from "./insurance-benefit.schema";
import { InsuranceTypeSchema } from "../insurance-type";

export const CarRentalInsuranceSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  typeId: z.string().nullable(),

  name: z.string().min(1),

  description: z.string().nullable(),

  // ======================================================
  // PRICE
  // ======================================================

  pricePerDay: z.number().nullable(),

  fixedPrice: z.number().nullable(),

  // ======================================================
  // BENEFITS
  // ======================================================

  benefits: z.array(CarRentalInsuranceBenefitSchema),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type CarRentalInsuranceFormSchema = z.infer<
  typeof CarRentalInsuranceSchema
>;