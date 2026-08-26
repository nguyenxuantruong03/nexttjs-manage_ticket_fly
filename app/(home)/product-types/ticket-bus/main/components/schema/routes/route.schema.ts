import { z } from "zod";

import { BusBoardingPointSchema } from "./boarding-point.schema";
import { BusDropoffPointSchema } from "./dropoff-point.schema";
import { BusTripSchema } from "./trip.schema";

export const BusRouteSchema = z.object({
  // ======================================================
  // ROUTE TYPE
  // ======================================================

  routeTypeId: z.string(),

  // ======================================================
  // LOCATIONS
  // ======================================================

  departureAddressId: z.string(),

  arrivalAddressId: z.string(),

  // ======================================================
  // ROUTE INFORMATION
  // ======================================================

  distanceKm: z.number().nullable().optional(),

  estimatedDuration: z.number().nullable().optional(),

  code: z.string().nullable().optional(),

  trips: z.array(BusTripSchema),

  // ======================================================
  // POINTS
  // ======================================================

  boardingPoints: z.array(BusBoardingPointSchema),

  dropoffPoints: z.array(BusDropoffPointSchema),
});

export type BusRouteFormValues = z.infer<typeof BusRouteSchema>;
