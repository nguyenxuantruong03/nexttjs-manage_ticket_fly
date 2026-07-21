import { z } from "zod";

import { BusBoardingPointSchema } from "./boarding-point.schema";
import { BusDropoffPointSchema } from "./dropoff-point.schema";
import { BusTripSchema } from "./trip.schema";

export const BusRouteSchema = z.object({
  departureAddressId: z.string(),

  arrivalAddressId: z.string(),

  distanceKm: z.number().nullable().optional(),

  estimatedDuration: z.number().nullable().optional(),

  boardingPoints: z.array(BusBoardingPointSchema).optional(),

  dropoffPoints: z.array(BusDropoffPointSchema).optional(),

  trips: z.array(BusTripSchema).optional(),

  code: z.string().nullable().optional(),
});

export type BusRouteFormValues = z.infer<typeof BusRouteSchema>;
