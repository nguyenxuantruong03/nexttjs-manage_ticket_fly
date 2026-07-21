// schema/policies/flight-support.schema.ts

import { z } from "zod";

export const YachtFlightSupportSchema = z.object({

  airportPickup: z.boolean().nullable().optional(),

  flightNumberRequired: z.boolean().nullable().optional(),

  flightDelayMonitoring: z.boolean().nullable().optional(),
});

export type YachtFlightSupportFormValues = z.infer<
  typeof YachtFlightSupportSchema
>;
