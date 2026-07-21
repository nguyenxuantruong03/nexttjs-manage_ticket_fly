import { z } from "zod";

export const CarRentalDamagePolicySchema = z.object({
  policiesId: z.string(),

  insuranceIncluded: z.boolean().optional(),

  excessAmount: z.number().optional(),

  depositRequired: z.boolean().optional(),
});
