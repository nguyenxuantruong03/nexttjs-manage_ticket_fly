import { z } from "zod";

export const FlyBaggagePolicySchema = z.object({
  cabinIncludedKg: z.number().optional(),

  checkedIncludedKg: z.number().optional(),

  extraAllowed: z.boolean(),

  extraPricePerKg: z.number().optional(),
});

export type FlyBaggagePolicyFormValues = z.infer<typeof FlyBaggagePolicySchema>;
