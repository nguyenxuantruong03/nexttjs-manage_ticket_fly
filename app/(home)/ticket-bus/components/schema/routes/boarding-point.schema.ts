import { z } from "zod";

export const BusBoardingPointSchema = z.object({
  addressId: z.string(),

  name: z.string().nullable().optional(),

  departureTime: z.string(),

  order: z.number(),
});

export type BusBoardingPointFormValues = z.infer<typeof BusBoardingPointSchema>;
