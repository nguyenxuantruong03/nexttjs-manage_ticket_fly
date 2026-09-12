import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // COUNTRY
  // ======================================================

  countryId: z.array(z.string()).default([]),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // TAX
  // ======================================================

  taxPercent: z
    .number()
    .min(0, "Tax percent must be greater than or equal to 0")
    .max(100, "Tax percent cannot exceed 100"),

  // ======================================================
  // STATUS
  // ======================================================

  isActive: z.boolean(),

  // ======================================================
  // EFFECTIVE PERIOD
  // ======================================================

  effectiveFrom: z.date(),

  effectiveTo: z.date().nullable().optional(),
});

export type TaxRuleFormSchema = z.infer<typeof schema>;