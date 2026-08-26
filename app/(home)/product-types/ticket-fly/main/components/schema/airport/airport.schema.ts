import { z } from "zod";

import { FlyRouteSchema } from "../routes/route.schema";
import { FlyDiversionSchema } from "../operation/diversion.schema";
import { FlyMinimumConnectionTimeSchema } from "../alliance/minimum-connection.schema";

// ======================================================
// AIRPORT
// ======================================================

export const FlyAirportSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  code: z.string().min(1),

  iataCode: z.string().min(1),

  icaoCode: z.string().optional(),

  // ======================================================
  // CAPACITY
  // ======================================================

  terminalCount: z.number().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  lat: z.number().optional(),

  lng: z.number().optional(),

  addressId: z.string().optional(),

  // ======================================================
  // ROUTES
  // ======================================================

  departures: z.array(FlyRouteSchema).optional(),

  arrivals: z.array(FlyRouteSchema).optional(),

  // ======================================================
  // OPERATIONS
  // ======================================================

  diversions: z.array(FlyDiversionSchema).optional(),

  // ======================================================
  // CONNECTION
  // ======================================================

  minimumConnectionTime: z.array(FlyMinimumConnectionTimeSchema).optional(),
});

export type FlyAirportFormValues = z.infer<typeof FlyAirportSchema>;
