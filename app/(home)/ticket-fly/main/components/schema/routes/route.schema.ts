import { z } from "zod";

import { FlyRouteType } from "@/types/bookings/ticket-fly/enums";

import { FlyRouteSegmentSchema } from "./segment.schema";

export const FlyRouteSchema = z.object({
  departureAirportId: z.string(),

  departureAirport: z.any().optional(),

  arrivalAirportId: z.string(),

  arrivalAirport: z.any().optional(),

  distanceKm: z.number().optional(),

  estimatedDuration: z.number().optional(),

  directFlight: z.boolean(),

  routeType: z.nativeEnum(FlyRouteType),

  segments: z.array(FlyRouteSegmentSchema).optional(),
});

export type FlyRouteFormValues = z.infer<typeof FlyRouteSchema>;
