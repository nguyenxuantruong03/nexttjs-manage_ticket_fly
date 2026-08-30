import { z } from "zod";

export const BusBoardingPointSchema = z.object({
  // ======================================================
  // LOCATION
  // ======================================================

  addressId: z.string(),

  name: z.string().nullable().optional(),

  // ======================================================
  // DEPARTURE
  // ======================================================

  departureTime: z.string(),

  order: z.number(),
});

export type BusBoardingPointFormValues = z.infer<typeof BusBoardingPointSchema>;
