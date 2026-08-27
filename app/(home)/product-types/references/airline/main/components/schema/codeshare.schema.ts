import { z } from "zod";

export const FlyCodeshareSchema = z.object({
  tripId: z.string(),
  marketingAirlineId: z.string(),

  marketingFlightNumber: z.string(),

  operatingAirlineId: z.string(),

  operatingFlightNumber: z.string(),
});

export type FlyCodeshareFormValues = z.infer<typeof FlyCodeshareSchema>;
