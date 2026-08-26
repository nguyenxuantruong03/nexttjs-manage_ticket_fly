import { z } from "zod";

import { CarRentalInsuranceBenefitSchema } from "./insurance/insurance-benefit.schema";
import { CarRentalInsuranceSchema } from "./insurance/insurance.schema";

// ======================================================
// INSURANCE TYPE
// ======================================================

export const InsuranceTypeSchema = z.object({
  id: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  slug: z.string(),

  description: z.string().nullable(),

  icon: z.string().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number(),

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: z.coerce.date(),

  updatedAt: z.coerce.date(),
});

// ======================================================
// INSURANCE BENEFIT TYPE
// ======================================================

export const InsuranceBenefitTypeSchema = z.object({
  id: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  slug: z.string(),

  description: z.string().nullable(),

  icon: z.string().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number(),

  // ======================================================
  // RELATIONS
  // ======================================================

  carRentalBenefits: z.array(z.lazy(() => CarRentalInsuranceBenefitSchema)),
});

// ======================================================
// TYPES
// ======================================================

export type InsuranceTypeSchemaType = z.infer<typeof InsuranceTypeSchema>;

export type InsuranceBenefitTypeSchemaType = z.infer<
  typeof InsuranceBenefitTypeSchema
>;
