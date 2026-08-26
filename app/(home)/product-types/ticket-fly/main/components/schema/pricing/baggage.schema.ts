import { z } from "zod";

export const FlyFareBaggageSchema = z.object({
  cabinWeightKg: z.number().optional(),

  checkedWeightKg: z.number().optional(),

  extraBaggageAllowed: z.boolean(),

  extraBaggagePrice: z.number().optional(),
});

export type FlyFareBaggageFormValues = z.infer<typeof FlyFareBaggageSchema>;
