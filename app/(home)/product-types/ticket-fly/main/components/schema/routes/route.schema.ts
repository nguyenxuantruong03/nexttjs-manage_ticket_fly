import { z } from "zod";

import { FlyRouteSegmentSchema } from "./segment.schema";
import { FlyTripSchema } from "../trip/trip.schema";

// ======================================================
// ROUTE
// ======================================================

export const FlyRouteSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  departureAirportId: z.string(),

  arrivalAirportId: z.string(),

  routeTypeId: z.string(),

  trips: z.array(FlyTripSchema).optional(),

  // ======================================================
  // ROUTE
  // ======================================================

  distanceKm: z.number().optional(),

  estimatedDuration: z.number().optional(),

  directFlight: z.boolean(),

  // ======================================================
  // SEGMENTS
  // ======================================================

  segments: z.array(FlyRouteSegmentSchema).optional(),
});

export type FlyRouteFormValues = z.infer<typeof FlyRouteSchema>;