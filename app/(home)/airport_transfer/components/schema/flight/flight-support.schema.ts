import { z } from "zod";

export const AirportTransferFlightSupportSchema = z.object({
  flightNumberRequired: z.boolean().default(false),

  airlineRequired: z.boolean().default(false),

  terminalSupported: z.boolean().default(false),

  arrivalFlightOnly: z.boolean().optional(),

  departureFlightOnly: z.boolean().optional(),

  flightTracking: z.boolean().default(false),

  delayMonitoring: z.boolean().default(false),
});
