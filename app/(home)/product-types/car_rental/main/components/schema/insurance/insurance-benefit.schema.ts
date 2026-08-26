import { z } from "zod";

export const CarRentalInsuranceBenefitSchema = z.object({
  // =====================================================
  // BENEFIT TYPE
  // =====================================================

  typeId: z.string().nullable(),

  // =====================================================
  // BASIC INFORMATION
  // =====================================================

  title: z.string().min(1),

  description: z.string().nullable(),

  // =====================================================
  // COVERAGE
  // =====================================================

  coverageAmount: z.number().nullable(),

  excessAmount: z.number().nullable(),
});

export type CarRentalInsuranceBenefitFormSchema = z.infer<
  typeof CarRentalInsuranceBenefitSchema
>;