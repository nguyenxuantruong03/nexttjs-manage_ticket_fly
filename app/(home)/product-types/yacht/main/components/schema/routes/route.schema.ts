// schema/routes/route.schema.ts

import { z } from "zod";

import { YachtRouteStopSchema } from "./route-stop.schema";
import { YachtTripSchema } from "../trips/trip.schema";

export const YachtRouteSchema = z.object({

  trip: z.array(YachtTripSchema).default([]),

  routeTypeId: z.string(),
  departureMarinaId: z.string(),

  destinationMarinaId: z.string(),

  destinationName: z.string(),

  distanceNm: z.number().nullable().optional(),

  durationMinutes: z.number().nullable().optional(),

  stops: z.array(YachtRouteStopSchema).default([]),

  active: z.boolean(),
});

export type YachtRouteFormValues = z.infer<typeof YachtRouteSchema>;
